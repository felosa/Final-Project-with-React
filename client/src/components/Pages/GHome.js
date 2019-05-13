import React, { Component } from 'react'
import Profile from '../authApi/Profile';
import Travels from '../TravelApi/Travels';
import Presentation from '../Others/Presentation';

export default class GHome extends Component {
  render() {
    return (
      <div>
        <Presentation></Presentation>        
        <Profile></Profile>
      </div>
    )
  }
}
