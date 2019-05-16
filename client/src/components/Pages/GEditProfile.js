import React, { Component } from 'react'
import EditProfile from '../authApi/editProfile';
import Travels from '../TravelApi/Travels';
import "./GEditProfile.css";


export default class GEditProfile extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <EditProfile className="container" loggedInUser={this.props.loggedInUser}></EditProfile>
        <Travels className="container" loggedInUser={this.props.loggedInUser}></Travels>
      </div>
    )
  }
}
