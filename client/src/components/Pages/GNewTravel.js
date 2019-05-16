import React, { Component } from 'react'
import NewTravel from '../TravelApi/NewTravel';
import Profile from '../authApi/Profile';



export default class GNewTravel extends Component {
  // constructor(props) {
  //   super(props);
  // }


  render() {
    return (
      <div className="doFlex">
        <Profile></Profile>
        <NewTravel className="margincenterL" loggedInUser={this.props.loggedInUser}></NewTravel>
      </div>
    )
  }
}
