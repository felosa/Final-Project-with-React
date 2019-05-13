import React, { Component } from 'react'
import NewTravel from '../TravelApi/NewTravel';
import Profile from '../authApi/Profile';



export default class GNewTravel extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="bigbox">
        <Profile></Profile>
        <NewTravel loggedInUser={this.props.loggedInUser}></NewTravel>
      </div>
    )
  }
}
