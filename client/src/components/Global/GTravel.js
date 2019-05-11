import React, { Component } from 'react'
import OneTravel from '../TravelApi/OneTravel';
import Plans from '../planApi/Plans';

export default class GTravel extends Component {
  render() {
    return (
      <div>
        <OneTravel></OneTravel>
        <Plans></Plans>
      </div>
    )
  }
}
