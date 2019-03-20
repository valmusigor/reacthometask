import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import Friends from '../Friends';

class Content extends Component{ 
  constructor(props){
    super(props);
    this.state={auth:localStorage.getItem('auth')};
  }
  //==componentDidMount(){
   //this.setState({auth:localStorage.getItem('auth')});
   //console.log(this.setState.auth);
 // }
  render(){ 
    console.log(this.state.auth);
    return(
  <BrowserRouter>
    <Switch>
     <Route exact path="/" render={() => ((this.state.auth=='no')? <Menu /> :<Friends />)} />)}
      <Route exact path="/friends" render={() => (<Friends />)}/>
    </Switch>
  </BrowserRouter>
);
}
}
export default Content;
