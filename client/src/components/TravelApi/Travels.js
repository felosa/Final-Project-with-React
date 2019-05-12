import React, { Component } from 'react'
import TravelService from "./TravelService";


export default class Travels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
    this.service = new TravelService()
  }
  
  componentDidMount(){
    
    this.service.loggedin().then (user=> this.setState({loggedInUser: user}))

  }
  
  
  render() {
    console.log(this.state.loggedInUser)

    return this.state.loggedInUser && (
      <div>
        {this.state.loggedInUser.travels.map((travel,idx) => {
          return (
            <div key={idx} className="boxTravel">
            <div>
            <img alt="" src={travel.imgPath}></img>
            </div>
            <div>
            <span>{travel.name}</span>
            <span>{travel.city}</span>
            <span>{travel.country}</span>
            <span>{travel.date}</span>
            <span>{travel.description}</span>
            {/* plans */}
            </div>
            </div>
          )
        })
        }
      </div>
    )
  }
}
