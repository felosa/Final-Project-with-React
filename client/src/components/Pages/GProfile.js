import React, { Component } from 'react'
import Profile from '../authApi/Profile';
import Travels from '../TravelApi/Travels';


export default class GProfile extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log(typeof this.props.loggedInUser.travels)
    // debugger
    return (
      <div className="bigbox">
        <Profile></Profile>
        <Travels loggedInUser={this.props.loggedInUser}></Travels>
      </div>
    )
  }
}
