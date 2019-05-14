import React, { Component } from 'react'
import { Link } from "react-router-dom";
import TravelService from './TravelService';



export default class OneTravel extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
        travel: null,
        redirect: false,
    };
    this.service = new TravelService();
  }


  componentDidMount(){
    console.log(this.props.match.params._id)
    this.api.getOneTravel(this.props.match.params.id)
    .then(travel=>{
      console.log(travel)
      this.setState({
        ...this.state,
        travel: travel
        
      })
    })
  }

  render() {
    return (
      <div>
        <p>Viaje actual donde se muestran los planes de ese viaje, buscando y anadiendo planes</p>
        <p>{this.state.travel}</p>
        <Link to="/newplan"><button>New Plan</button></Link>
      </div>
    )
  }
}
