import React, { Component } from 'react'
import PlanService from './PlanService';
import { Link } from "react-router-dom";


export default class OnePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: null,
      redirect: false
    };
    this.service = new PlanService();
  }

  componentDidMount() {
    const id = this.props.plan.id;
    console.log(this.props.plan.id);
    this.service.getOnePlan(id).then(plan => {
      console.log(plan.name);
      this.setState({
        ...this.state,
        plan: plan
      });
    });
  }

  addPlan = () => {
  const id = this.props.plan.id;
  console.log(id)
  this.service.editPlan(this.props.plan.id)
  .then(plan => {
    this.setState({
      ...this.state,
      plan: plan
    });
  });
}


  render() {
    if(this.props.loggedInUser.travels) 
    console.log(this.props.loggedInUser.travels[0]);
    return (
      <div>
        <p>
          Plan actual donde se muestran los detalles
        </p>
        {this.state.plan ? (
          <div>
            <h2>{this.state.plan.name}</h2>
            <h2>{this.state.plan.date}</h2>
            <h3>{this.state.plan.description}</h3>
            <h2>Creador del plan</h2>
            <h3>{this.state.plan.author}</h3>
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
        ) : (
          ""
        )}
        
        <p>Mis viajes actuales</p>
        {this.props.loggedInUser.travels?
        this.props.loggedInUser.travels.map(travel => {
                return (
                  <div>
                    <p>{travel.name}</p>
                  </div>
                );
              })
              :
              null

            }
        <Link
          to={`/profile`}
        >
        <button onClick={() => this.addPlan()}>Apuntate a este plan</button>
        </Link>
      </div>
    );
  }
}
