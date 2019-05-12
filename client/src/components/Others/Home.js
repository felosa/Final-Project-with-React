import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import GProfile from '../Global/GProfile';
import GSignup from '../Global/GSignup';
import GTravel from '../Global/GTravel';
import GPlan from '../Global/GPlan';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => (
            <GSignup />)}/>
          <Route exact path="/profile" render={() => (
            <GProfile />)}/>
          <Route exact path="/travel" render={() => (
            <GTravel />)}/>
          <Route exact path="/plan" render={() => (
            <GPlan />)}/>
        </Switch>
      </div>
    )
  }
}
