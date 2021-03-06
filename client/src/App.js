import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

// Components
import authService from "./components/authApi/AuthService";
import Navigator from "./components/Others/Navigator";
import GSignup from "./components/Pages/GSignup";
import GProfile from "./components/Pages/GProfile";
import GPlan from "./components/Pages/GPlan";
import GTravel from "./components/Pages/GTravel";
import GHome from "./components/Pages/GHome";
import GNewTravel from "./components/Pages/GNewTravel";
import GNewPlan from "./components/Pages/GNewPlan";
import GEditProfile from "./components/Pages/GEditProfile";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: "null" };
    this.service = new authService();
    
  }

  componentDidMount(){this.fetchUser()}
  fetchUser = () => {
    this.service
      .loggedin()
      .then(response => {
        console.log(response);
        this.setState({ loggedInUser: response });
      })
      .catch(x => this.setState({ loggedInUser: false }));
  };


  setTheUser = (userObj) => {
    console.log("entra")
    this.setState({ loggedInUser: userObj });
  };

  render() {
    console.log(this.state.loggedInUser)
    if (this.state.loggedInUser) {
      return (
        <div className="marginApp background">  
          <Navigator loggedInUser={this.state.loggedInUser} setUser={this.setTheUser}/>
          <Switch>
          
            <Route exact path="/" render={() => (
              <GHome loggedInUser={this.state.loggedInUser}/>)}/>

            <Route exact path="/profile" render={() => (
              <GProfile loggedInUser={this.state.loggedInUser} setUser={this.setTheUser}/>)}/>

            <Route exact path="/editprofile" render={() => (
              <GEditProfile loggedInUser={this.state.loggedInUser}/>)}/>    

            <Route exact path="/newtravel" render={() => (
              <GNewTravel loggedInUser={this.state.loggedInUser}/>)}/>

              <Route exact path="/newplan/:id" render={(matchProps) => (
              <GNewPlan {...matchProps} {...this.props} loggedInUser={this.state.loggedInUser}/>)}/>
              
            <Route exact path="/travel/:id" render={(matchProps) => (
              <GTravel {...matchProps} {...this.props} loggedInUser={this.state.loggedInUser}/>)}/>

            <Route exact path="/plan/:id" render={(matchProps) => (
              <GPlan {...matchProps} {...this.props} loggedInUser={this.state.loggedInUser}/>)}/>
        </Switch>
         
        </div>
      );
    }
    else {
      return(
        <div>
            <Navigator loggedInUser={this.state.loggedInUser} setUser={this.setTheUser}/>
            <Switch>
            <Route exact path="/" render={() => (
            <GSignup />)}/>
            </Switch>

        </div>
      )
    }
   }
}


export default App;
