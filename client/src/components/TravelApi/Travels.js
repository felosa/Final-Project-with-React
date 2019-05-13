import React, { Component } from 'react'
import AuthService from '../authApi/AuthService';
import { Link, Redirect } from "react-router-dom";




export default class Travels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
   
  render() {
    console.log(this.props, this.props.loggedInUser)
    return this.props.loggedInUser && (
      <div>
        {/* {this.props.loggedInUser.travels.map((travel,idx) => {
          return (
            <div key={idx} className="boxTravel">
            <div>
            <img alt="" src={travel.imgPath}></img>
            </div>
            <div>
            <span>Travel name{travel.name}</span>
            <span>{travel.city}</span>
            <span>{travel.country}</span>
            <span>{travel.date}</span>
            <span>{travel.description}</span>
            </div>
            </div>
          )
        })
        } */}
        <Link><button>New Travel</button></Link>

      </div>
    )
  }
}
