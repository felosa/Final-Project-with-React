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
      <div className="container toRight">
        <p className="sizeTravel">
          <b>Description of my current trip:</b>
        </p>
        <br></br>
        {this.props.travel && this.props.travel.plans && (
          <div>
            <img className="imgPlan" alt="" src={this.props.travel.imageUrl} />
            <h2><b>Travel name:</b> {this.props.travel.name}</h2>
            <h3><b>Country:</b> {this.props.travel.country}</h3>
            <h3><b>City: </b>{this.props.travel.city}</h3>
            <h3><b>Arrival date:</b> {arrivalDate}</h3>
            <h3><b>Leaving date: </b>{departureDate}</h3>
            <h3><b>Description:</b> {this.props.travel.description}</h3>
            <br />
            <br />
            <h3 className="sizeTravel"><b>Current travel plans:</b></h3>
            <br></br>
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
                      <p><b>Date:</b> {formatDate(plan.date)}</p>
                      <p><b>Time:</b> {plan.hour}</p>
                      <p><b>Place:</b> {plan.place}</p>
                    </div>
                    
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
