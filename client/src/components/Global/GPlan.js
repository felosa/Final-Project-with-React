import React, { Component } from 'react'
import OnePlan from '../planApi/OnePlan';
import Chat from '../planApi/Chat';
import "./GPlan.css";


export default class GPlan extends Component {
  render() {
    return (
      <div class="bigbox">
        <div>
          <OnePlan></OnePlan>
        </div>
        <div>
          <Chat></Chat>
        </div>
      </div>
    )
  }
}
