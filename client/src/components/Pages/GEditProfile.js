import React, { Component } from 'react'
import EditProfile from '../authApi/editProfile';
import Travels from '../TravelApi/Travels';

export default class GEditProfile extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <EditProfile loggedInUser={this.props.loggedInUser}></EditProfile>
        <Travels loggedInUser={this.props.loggedInUser}></Travels>
      </div>
    )
  }
}
