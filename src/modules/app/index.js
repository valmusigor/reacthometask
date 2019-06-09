import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cabinet from '../../components/Content/Cabinet';
import MenuContainer from '../../components/Content/Menu/MenuContainer';
import Rent from '../../components/Content/Rent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PrivateRoute from '../routes/PrivateRoute';
import Container from '../style';
import Friends from '../../components/Friends';

const App = () => (
  <BrowserRouter>
    <Container>
      <Header />
      <Switch>
        <PrivateRoute exact path="/auth" component={Cabinet} />
        <Route path="/friends" /*render={() => <Rent />} */ component ={Friends}/>
        <Route path="/rent/:id?" /*render={() => <Rent />} */ component ={Rent}/>
        <Route
          path="/login"
          render={() => (localStorage.getItem('auth') === 'false'
            ? <MenuContainer />
            : <Cabinet />)}
        />
        <Route
          path="/"
          render={() => ((typeof (localStorage.getItem('auth')) === 'undefined')
            ? <MenuContainer />
            : (localStorage.getItem('auth') === 'false')
              ? <MenuContainer />
              : <Cabinet />)}
        />
      </Switch>
      <Footer />
    </Container>
  </BrowserRouter>
);

export default App;
