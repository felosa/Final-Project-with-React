import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
// Components
import authService from "./components/authApi/AuthService";
import Home from "./components/Others/Home";
import Navigator from "./components/Others/Navigator";
import Signup from "./components/authApi/Signup";

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
    // if (loggedInUser) {
      return (
        <div>
          
          <Navigator />
          <Home></Home>
         
        </div>
      );
    }
  // }
}


export default App;
