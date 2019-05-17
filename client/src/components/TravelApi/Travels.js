import React, { Component } from 'react'
import { Link } from "react-router-dom";
import TravelService from './TravelService';


export default class Travels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      travel: {
        name: "",
        city: "",
        country: "",
        description:"",
        imgPath: "",
        author: "",
        plans: "",
        redirect: false,
      },      
      travels:[]
    };

    this.service = new TravelService();
  }
  

  render() {
    return this.props.loggedInUser && (
      <div className="container textCenter">
        <p className="titles"><span><b>{this.props.loggedInUser.username}'s Trip List</b></span></p>
        <br></br>
        <Link to="/newtravel"><button>New Trip</button></Link>
{
 this.props.loggedInUser.travels ?
 <div>{this.props.loggedInUser.travels.map((travel)=>{
   return (
   <div>
     
     <img className="imgTravel" alt="" src={travel.imageUrl}/>
     <h2><b>Trip Name:</b></h2>
     <Link actualtravel={travel} to={`/travel/${travel._id}`}><p>{travel.name}</p></Link>
     <p><b>Country:</b></p> 
     <p>{travel.country}</p> 
     <p><b>City:</b></p> 
     <p>{travel.city}</p>
     <hr></hr> 
    </div>
   )
 })}</div> 

 :
<span>No trips</span>
}
       
      </div>
    )
  }
}
