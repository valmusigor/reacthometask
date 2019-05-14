import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthOk from '../../components/Content/AuthOk';
import MenuContainer from '../../components/Content/Menu/MenuContainer';
import Rent from '../../components/Content/Rent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PrivateRoute from '../routes/PrivateRoute';
import Container from '../style';


const App = () => (
  <BrowserRouter>
    <Container>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => ((typeof (localStorage.getItem('auth')) === 'undefined')
            ? <MenuContainer />
            : (localStorage.getItem('auth') === 'false')
              ? <MenuContainer />
              : <AuthOk />)}
        />
        <Route
          exact
          path="/login"
          render={() => (localStorage.getItem('auth') === 'false'
            ? <MenuContainer />
            : <AuthOk />)}
        />
        <PrivateRoute exact path="/auth" component={AuthOk} />
        <Route exact path="/rent" render={() => <Rent />} />
      </Switch>
      <Footer />
    </Container>
  </BrowserRouter>
);

export default App;
