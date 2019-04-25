import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthOk from '../../components/Content/AuthOk';
import Menu from '../../components/Content/Menu';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PrivateRoute from '../routes/PrivateRoute';
import Container from '../style';


const App = props => (
  <BrowserRouter>
    <Container>
      <Header itemsHeader={props.appState.itemsHeader} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => ((typeof (localStorage.getItem('auth')) === 'undefined')
            ? <Menu stateSign={props.appState.signIn} formWorker={props.formWorker} />
            : (localStorage.getItem('auth') === 'false')
              ? <Menu stateSign={props.appState.signIn} formWorker={props.formWorker} />
              : <AuthOk />)}
        />
        <Route
          exact
          path="/login"
          render={() => (localStorage.getItem('auth') === 'false'
            ? <Menu stateSign={props.appState.signIn} formWorker={props.formWorker} />
            : <AuthOk />)}
        />
        <PrivateRoute exact path="/auth" component={AuthOk} />
      </Switch>
      <Footer />
    </Container>
  </BrowserRouter>
);

export default App;
