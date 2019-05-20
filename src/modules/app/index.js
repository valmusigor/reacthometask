import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cabinet from '../../components/Content/Cabinet';
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
              : <Cabinet />)}
        />
        <Route
          exact
          path="/login"
          render={() => (localStorage.getItem('auth') === 'false'
            ? <MenuContainer />
            : <Cabinet />)}
        />
        <PrivateRoute exact path="/auth" component={Cabinet} />
        <Route exact path="/rent" render={() => <Rent />} />
      </Switch>
      <Footer />
    </Container>
  </BrowserRouter>
);

export default App;
