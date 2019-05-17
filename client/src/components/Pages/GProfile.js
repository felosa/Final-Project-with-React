import React, { Component } from 'react'
import Profile from '../authApi/Profile';
import Travels from '../TravelApi/Travels';
import AuthService from '../authApi/AuthService';
import "./GEditProfile.css";




export default class GProfile extends Component {
  constructor(props) {
    super(props);
    this.service = new AuthService();  }
  
  componentDidMount(){
    this.service.loggedin()
    .then(User=>{
      this.props.setUser(User)
    })
  }

  render() {
    // debugger
    return (
      <div className="doFlex background">
        <Profile></Profile>
        <Travels className="margincenterL" loggedInUser={this.props.loggedInUser}></Travels>
      </div>
    )
  }
}
