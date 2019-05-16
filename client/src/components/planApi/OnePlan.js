import React, { Component } from 'react'
import PlanService from './PlanService';
import TravelService from '../TravelApi/TravelService';
import { Link } from "react-router-dom";


export default class OnePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: null,
      redirect: false
    };
    this.service = new PlanService();
    this.travelService = new TravelService();

  }

  componentDidMount() {
    const id = this.props.plan.id;
    this.service.getOnePlan(id).then(plan => {
      console.log(plan, "el de ahora");
      this.setState({
        ...this.state,
        plan: plan
      });
    });
  }

  addPlan = (travelId) => {
    const planId= this.props.plan.id;
    this.travelService.editTravel(planId, travelId)
}



  render() {
    if(this.props.loggedInUser) {
    return (
      <div className="container">
        <p>
          Plan actual donde se muestran los detalles
        </p>
        {this.state.plan && (
          <div>
            <h2>{this.state.plan.name}</h2>
            <h2>{this.state.plan.date}</h2>
            <h3>{this.state.plan.description}</h3>
            <h2>Creador del plan</h2>
            <h3>{this.state.plan.author.username}</h3>
            <h3>Personas que estan apuntadas a esta actividad:</h3>
            <div>
              {this.state.plan.participants.map(person => {
                return (
                  <div>
                    <p>{person.username}</p>
                    {/* <Link actualtravel={travel} to={`/travel/${travel._id}`}>
                      <p>{travel.name}</p>
                    </Link> */}
                  </div>
                );
              })}
            </div>
          </div>
        ) }
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <p>Te coincide con este/estos viajes/falta filtrar</p>
        {this.props.loggedInUser.travels && this.state.plan && this.props.loggedInUser.travels
        .filter(travel=> travel.city.toLowerCase() === this.state.plan.city.toLowerCase() && (this.state.plan.date >= travel.minDate && this.state.plan.date <= travel.maxDate ))
        .map(travel => {
                return (
                  <div>
                     <Link
          to={`/profile`}
        >
        <button onClick={() => this.addPlan(travel._id)}>Apuntate cuando estes en tu viaje: <span>{travel.name}</span></button>
        </Link>
                  </div>
                );
              })
              
            }
       
      </div>
    )};
  }
}
