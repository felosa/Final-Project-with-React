import React, { Component } from 'react'
import Presentation from '../Others/Presentation';
import Signup from '../authApi/Signup';
import "./GSignup.css";


export default class GSignup extends Component {
  render() {
    return (
      <div className="plane">
      <br></br>
      <h2 className="textCenter whiteLetter sizePresentation">
          Welcome to TravelShare 
        </h2>
        <br></br>
        <p className="textCenter whiteLetter sizePresentation">The new and safe online platform dedicated to bringing together fellow travelers.</p>
      <div className="doFlex">
        <Presentation></Presentation>
        <Signup className="margincenterL"></Signup>
      </div>
      </div>
    )
  }
}
