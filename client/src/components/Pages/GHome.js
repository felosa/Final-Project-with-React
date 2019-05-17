import React, { Component } from 'react'
import ProfileIntro from '../authApi/ProfileIntro';
import Travels from '../TravelApi/Travels';
import Presentation from '../Others/Presentation';

export default class GHome extends Component {
  render() {
    return (
      <div className="plane">
        <h2 className="textCenter paddingTop whiteLetter sizePresentation">
          Welcome!
        </h2>
        <br></br>
        <h2 className="textCenter whiteLetter sizePresentation">
          Now you are ready to start organising your own trips
        </h2>
      </div>
    )
  }
}
