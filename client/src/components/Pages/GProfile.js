import React, { Component } from 'react'
import Profile from '../authApi/Profile';
import Travels from '../TravelApi/Travels';


export default class GProfile extends Component {
  render() {
    return (
      <div className="bigbox">
        <Profile></Profile>
        <Travels></Travels>
      </div>
    )
  }
}
