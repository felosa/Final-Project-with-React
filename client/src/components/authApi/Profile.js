import React, { Component } from "react";
import AuthService from "./AuthService";
import { Link, Redirect } from "react-router-dom";
import "./Profile.css";


 

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
    this.service = new AuthService()
  }
  componentDidMount(){
    
    this.service.loggedin()
    .then (user=> this.setState({loggedInUser: user}))

  }

  render() {
    console.log(this.state.loggedInUser)
    return this.state.loggedInUser && (
      <div className="container textCenter">
         <div className="">
            <h2 className="paddingTop">
              <span className="titles"><b>Hello, this is your profile {this.state.loggedInUser.username}</b></span>
            </h2>
            <div className="paddingTop">
            <img className="imgProfileIntro" alt="" src={this.state.loggedInUser.imageUrl}></img>
            </div>
            <br></br>
            <span>Languages spoken: {this.state.loggedInUser.lang}</span>
            <br></br>
            <span>Country: {this.state.loggedInUser.country}</span>
            <br></br>
            <span>This is your description: {this.state.loggedInUser.description}</span>
            <br></br>
          </div>
          
       
      </div>
    );
  }
}

export default Profile;
