import React, { Component } from 'react'
import OneTravel from '../TravelApi/OneTravel';
import Plans from '../planApi/Plans';

export default class GTravel extends Component {
  render() {
    console.log(this.props.travel)
    return (
      <div className="doFlex">
        <OneTravel className="container" travel={this.props.match.params}></OneTravel>
        <Plans className="container margincenterL"></Plans>
      </div>
    )
  }
}