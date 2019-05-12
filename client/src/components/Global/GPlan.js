import React, { Component } from 'react'
import OnePlan from '../planApi/OnePlan';
import Chat from '../planApi/Chat';
import "./GPlan.css";


export default class GPlan extends Component {
  render() {
    return (
      <div className="bigbox">
        <div className="center">
          <OnePlan></OnePlan>
        </div>
        <div className="center">
          <Chat></Chat>
        </div>
      </div>
    )
  }
}
