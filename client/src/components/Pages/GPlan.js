import React, { Component } from 'react'
import OnePlan from '../planApi/OnePlan';
import Chat from '../CommentApi/Chat';
import "./GPlan.css";


export default class GPlan extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="bigbox">
        <div className="center">
          <OnePlan loggedInUser={this.props.loggedInUser} plan={this.props.match.params}></OnePlan>
        </div>
        <div className="center">
          <Chat loggedInUser={this.props.loggedInUser} plan={this.props.match.params}></Chat>
        </div>
      </div>
    )
  }
}
