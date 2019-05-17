import React, { Component } from "react";
import OnePlan from "../planApi/OnePlan";
import Chat from "../CommentApi/Chat";
import "./GPlan.css";

export default class GPlan extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="doFlex background">
        <OnePlan
          loggedInUser={this.props.loggedInUser}
          plan={this.props.match.params}
        />

        <Chat className="margincenterL"
          loggedInUser={this.props.loggedInUser}
          plan={this.props.match.params}
        />
      </div>
    );
  }
}
