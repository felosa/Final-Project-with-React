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

  render() {
    console.log(this.state.plan);
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

        <Link
          to={`/profile`}
        >
          <button>Apuntate a este viaje</button>
        </Link>
      </div>
    );
  }
}
