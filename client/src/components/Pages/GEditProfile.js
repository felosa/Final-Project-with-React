import React, { Component } from 'react'
import EditProfile from '../authApi/editProfile';
import Travels from '../TravelApi/Travels';

export default class GEditProfile extends Component {
  render() {
    return (
      <div>
        <EditProfile></EditProfile>
        <Travels></Travels>
      </div>
    )
  }
}
