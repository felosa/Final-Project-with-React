import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
// Components
import Signup from "./components/authApi/Signup";
import Profile from "./components/authApi/Profile";
import Login from "./components/authApi/Login";
import authService from "./components/authApi/AuthService";
import Navigator from "./components/Navigator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new authService();
  }

  fetchUser = () => {
    this.service
      .loggedin()
      .then(response => {
        console.log(response);
        this.setState({ loggedInUser: response });
      })
      .catch(x => this.setState({ loggedInUser: false }));
  };

  setTheUser = userObj => {
    this.setState({ loggedInUser: userObj });
  };

  render() {
    const { loggedInUser } = this.state;

    if (loggedInUser) {
      return (
        <div>
          <Navigator />
          <p>estas logueado</p>
          <Switch>
            <Route user={this.state.loggedInUser} exact path="/profile" component={Profile} />
            {/* <ProtectedRoutes user={this.state.loggedInUser} exact path='/profile' component={Profile} checkIfLogged={this.fetchUser}/> */}
          </Switch>
        </div>
      );
    } else {
      return (
        <div>
          <Navigator />
          <p>no estas logueado</p>
          <Switch>
            <Route exact path="/signup" render={() => (
                <Signup setUser={this.setTheUser} userInSession={this.state.loggedInUser}/>
              )}/>
            <Route exact path="/login" render={() => (
                <Login setUser={this.setTheUser} userInSession={this.state.loggedInUser}/>
              )}/>
          </Switch>
        </div>
      );
    }
  }
}

export default App;
