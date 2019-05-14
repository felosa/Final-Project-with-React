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
      <div>
        <p>Lista de travels de <span>{this.props.loggedInUser.username}</span></p>
        
{
 this.props.loggedInUser.travels ?
 <div>{this.props.loggedInUser.travels.map((travel)=>{
   return (
   <div>
     <Link actualtravel={travel} to={`/travel/${travel._id}`}><p>{travel.name}</p></Link>
    <p>{travel.description}</p> 
    </div>
   )
 })}</div> 

 :
<span>No hay viajes</span>
}
        <Link to="/newtravel"><button>New Travel</button></Link>
      </div>
    )
  }
}
