import React, { Component } from 'react'
import Presentation from '../Others/Presentation';
import Signup from '../authApi/Signup';

export default class GSignup extends Component {
  render() {
    return (
      <div className="doFlex">
        <Presentation></Presentation>
        <Signup></Signup>
      </div>
    )
  }
}
