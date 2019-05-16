import React, { Component } from 'react'
import ProfileIntro from '../authApi/ProfileIntro';
import Travels from '../TravelApi/Travels';
import Presentation from '../Others/Presentation';

export default class GHome extends Component {
  render() {
    return (
      <div className="doFlex">
        <Presentation></Presentation>        
        <ProfileIntro className="margincenterL"></ProfileIntro>
      </div>
    )
  }
}
