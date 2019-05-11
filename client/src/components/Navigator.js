import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigator extends Component {
  render() {
    return (
      <div>
        <p>Este es el navegador</p>
        <Link to={"/login"}> Login</Link>
        <Link to={"/signup"}> Signup</Link>
      </div>
    );
  }
}
