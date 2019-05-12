import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import GProfile from '../Pages/GProfile';
import GSignup from '../Pages/GSignup';
import GTravel from '../Pages/GTravel';
import GPlan from '../Pages/GPlan';

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
