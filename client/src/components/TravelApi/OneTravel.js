import React, { Component } from "react";
import { Link } from "react-router-dom";
import TravelService from "./TravelService";

export default class OneTravel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travel: null,
      redirect: false
    };
    this.service = new TravelService();
  }

  componentDidMount() {
    const id = this.props.travel.id;
    console.log(this.props.travel.id);
    this.service.getOneTravel(id).then(travel => {
      console.log(travel.name);
      this.setState({
        ...this.state,
        travel: travel
      });
    });
  }

  render() {
    console.log(this.state.travel);
    return (
      <div>
        <p>
          Viaje actual donde se muestran los planes de ese viaje, buscando y
          anadiendo planes
        </p>
        {this.state.travel ? (
          <div>
            <h2>{this.state.travel.name}</h2>
            <h3>{this.state.travel.description}</h3>
            <h3>Planes en los que estas apuntado en este viaje:</h3>
            <div>
              {this.state.travel.plans.map(plan => {
                return (
                  <div>
                    <Link actualplan={plan} to={`/plan/${plan._id}`}><p>{plan.name}</p></Link>
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
          travel={this.props.travel.id}
          to={`/newplan/${this.props.travel.id}`}
        >
          <button>New Plan</button>
        </Link>
      </div>
    );
  }
}
