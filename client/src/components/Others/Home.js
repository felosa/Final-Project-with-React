import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import GProfile from '../Pages/GProfile';
import GSignup from '../Pages/GSignup';
import GTravel from '../Pages/GTravel';
import GPlan from '../Pages/GPlan';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props.loggedInUser)
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => (
            <GSignup />)}/>
          <Route exact path="/profile" render={() => (
            <GProfile loggedInUser={this.props.loggedInUser}/>)}/>
            
          <Route exact path="/travel" render={() => (
            <GTravel loggedInUser={this.props.loggedInUser}/>)}/>
          <Route exact path="/plan" render={() => (
            <GPlan loggedInUser={this.props.loggedInUser}/>)}/>
        </Switch>
      </div>
    )
  }
}
