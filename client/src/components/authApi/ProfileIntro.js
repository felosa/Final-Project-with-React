import React, { Component } from "react";
import AuthService from "./AuthService";
import { Link, Redirect } from "react-router-dom";
import "./ProfileIntro.css";


 

class ProfileIntro extends Component {
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
      <div className="container centerview">
      <br></br>
      <br></br>
      <br></br>

         <div className="">
            <h2>
              <span>Welcome again, {this.state.loggedInUser.username}</span>
            </h2>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div>
            <img className="imgProfileIntro" alt="" src={this.state.loggedInUser.imageUrl}></img>
            </div>
            
            
          </div>
          
       
      </div>
    );
  }
}

export default ProfileIntro;
