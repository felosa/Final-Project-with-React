import React, { Component } from 'react'
import OneTravel from '../TravelApi/OneTravel';
import Plans from '../planApi/Plans';

export default class GTravel extends Component {
  render() {
    console.log(this.props.travel)
    return (
      <div className="bigbox">
        <OneTravel travel={this.props.match.params}></OneTravel>
        <Plans></Plans>
      </div>
    )
  }
}