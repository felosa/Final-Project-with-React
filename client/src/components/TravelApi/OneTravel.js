import React, { Component } from "react";
import { Link } from "react-router-dom";

export const formatDate =(date)=>{
  const converseDate = new Date(date);
  return `${converseDate.getDate()}-${converseDate.getMonth()}-${converseDate.getFullYear()}`
}

export default class OneTravel extends Component {
  componentDidMount(){
    console.log("didmount de travel")
  }
  render() {
    console.log(this.props.travel, "travelllllllll");
    
    const arrivalDate = formatDate(this.props.travel.minDate)
    const departureDate = formatDate(this.props.travel.maxDate)

    return (
      <div className="container">
        <p>
          Viaje actual donde se muestran los planes de ese viaje, buscando y
          anadiendo planes
        </p>
        {this.props.travel && this.props.travel.plans && (
          <div>
            <img alt="" src={this.props.travel.imageUrl} />
            <h2>Travel name: {this.props.travel.name}</h2>
            <h3>Country: {this.props.travel.country}</h3>
            <h3>City: {this.props.travel.city}</h3>
            <h3>Arrive day: {arrivalDate}</h3>
            <h3>Leave day: {departureDate}</h3>
            <h3>Description: {this.props.travel.description}</h3>
            <br />
            <br />

            <h3>Planes en los que estas apuntado en este viaje:</h3>
            <div>
              {this.props.travel.plans.map(plan => {
                return (
                  <div className="Flex">
                    <div>
                    <img className="imgPlan" alt="" src={plan.imageUrl} />
                    </div>
                    <div>
                    <Link actualplan={plan} to={`/plan/${plan._id}`}>
                      <p>{plan.name}</p>
                    </Link>
                      <p>Date: {formatDate(plan.date)}</p>
                      <p>Hour: {plan.hour}</p>
                      <p>Place: {plan.place}</p>

                    </div>
                    {/* <Link actualtravel={travel} to={`/travel/${travel._id}`}>
                      <p>{travel.name}</p>
                    </Link> */}
                  </div>
                );
              })}
            </div>
          </div>
        ) }

        <Link
          travel={this.props.travel.id}
          to={`/newplan/${this.props.travel._id}`}
        >
          <button>New Plan</button>
        </Link>
      </div>
    );
  }
}
