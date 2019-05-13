import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";


export default class OneTravel extends Component {
  render() {
    return (
      <div>
        <p>Viaje actual donde se muestran los planes de ese viaje, buscando y anadiendo planes</p>
        <Link to="/newplan"><button>New Plan</button></Link>
      </div>
    )
  }
}
