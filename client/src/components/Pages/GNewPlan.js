import React, { Component } from 'react'
import OneTravel from '../TravelApi/OneTravel';
import NewPlan from '../planApi/NewPlan';


export default class GNewTravel extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="bigbox">
        <OneTravel loggedInUser={this.props.loggedInUser}></OneTravel>
        <NewPlan></NewPlan>
      </div>
    )
  }
}
