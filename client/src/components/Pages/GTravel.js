import React, { Component } from 'react'
import OneTravel from '../TravelApi/OneTravel';
import Plans from '../planApi/Plans';

export default class GTravel extends Component {
  render() {
    return (
      <div className="bigbox">
        <OneTravel actualtravel={this.props.travel}></OneTravel>
        <Plans></Plans>
      </div>
    )
  }
}
