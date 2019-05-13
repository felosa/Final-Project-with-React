import React, { Component } from 'react'
import Profile from '../authApi/Profile';
import Travels from '../TravelApi/Travels';

export default class GHome extends Component {
  render() {
    return (
      <div>
        <p>Presentation</p>        
        <Profile></Profile>
      </div>
    )
  }
}
