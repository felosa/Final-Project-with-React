import React, { Component } from "react";
import PlanService from "./PlanService";
import { Link } from "react-router-dom";
import { formatDate } from "../TravelApi/OneTravel";


export default class Plans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minDate_date: null,
      maxDate_date: null,
      plansAll: null,
      plansSelected: null
    };
    this.service = new PlanService();
  }

  componentDidMount() {
    this.service.getAllPlans().then(response => {
      const responseWithCity = response.filter(plan=> plan.city.toLowerCase() === this.props.city.toLowerCase())
      this.setState({
        ...this.state,
        plansAll: responseWithCity
      });
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.minDate_date, this.state.maxDate_date);
    this.service
      .getAllPlansWithInDates(this.state.minDate_date, this.state.maxDate_date)
      .then(response => {
        const responseWithCity = response.filter(plan=> plan.city.toLowerCase() === this.props.city.toLowerCase())
        this.setState({         
          redirect: true,
          plansAll: responseWithCity
        });
      })
      .catch(error => console.log(error));
  };

  handleChangeAsDate = event => {
    const { name, value } = event.target;

    this.setState({
      ...this.state,
      [name]: value,
      [name + "_date"]: new Date(value)
    });
  };

  render() {
    return (
      this.state.plansAll && (
        <div className="container">
          <h2>Lista de planes</h2>

          <form onSubmit={this.handleFormSubmit} className="form">
            <label>Arrive Date:</label>
            <input
              type="date"
              name="minDate"
              value={this.state.minDate}
              onChange={e => this.handleChangeAsDate(e)}
            />
            <label>Leave Date:</label>
            <input
              type="date"
              name="maxDate"
              value={this.state.maxDate}
              onChange={e => this.handleChangeAsDate(e)}
            />
            <br />
            <br />

            <input type="submit" value="Search" />
          </form>
          <div className="doitFlex doList">
            {this.state.plansAll.map((plan, idx) => {
              return (
                <div className="width200">
                  <div className="card-image">
                    <img className="imgPlan" src={plan.imageUrl} alt="" />
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left" />
                      <div className="media-content">
                        <p className="title is-4">
                          {" "}
                          <Link actualplan={plan} to={`/plan/${plan._id}`}>
                            {" "}
                            <p>{plan.name}</p>
                          </Link>
                        </p>
                        <p className="subtitle is-6">
                          <h3>Date: {formatDate(plan.date)}</h3>
                        </p>
                        <p className="subtitle is-6">
                          <h3>City: {plan.city}</h3>                          
                        </p>
                        <p className="subtitle is-6">
                          <h3>Hour: {plan.hour}</h3>
                          
                        </p>
                      </div>
                    </div>

                    <div className="content">
                      Description: {plan.description}
                      <br />
                    </div>
                  </div>
                </div>

                // <div>
                //   <div key={idx} className="boxMovie">
                //     <div className="lista">
                //         <h3>
                //           <img alt="" src={plan.imageUrl}/>
                //           <Link actualplan={plan} to={`/plan/${plan._id}`}>
                //             <p>{plan.name}</p>
                //           </Link>
                //           <h3>Date:</h3>
                //           <p>{plan.date}</p>
                //           <h3>City:</h3>
                //           <p>{plan.city}</p>
                //           <h3>Hour:</h3>
                //           <p>{plan.hour}</p>
                //         </h3>
                //     </div>
                //   </div>
                // </div>
              );
            })}
          </div>
        </div>
      )
    );
  }
}

// {this.state.plansAll.map((plan, idx) => {
//   return (
//     <div>
//     {this.state.minDate <= plan.date >= this.state ?
//     <div key={idx} className="boxMovie">
//       <div>
//         <p>
//           <Link actualplan={plan} to={`/plan/${plan._id}`}>
//             <p>{plan.name}</p>
//           </Link>
//         </p>
//         {/* <Link className="" to={`/${plan._id}`}>{plan.name}</Link> */}
//       </div>
//     </div>
//       :
//       <div></div>

//     }
//     </div>
//   );
// })}

// {this.state.plansAll.map((plan, idx) => {
//   return (
//     <div>
//       <div key={idx} className="boxMovie">
//         <div>
//           <p>
//             <Link actualplan={plan} to={`/plan/${plan._id}`}>
//               <p>{plan.name}</p>
//             </Link>
//           </p>
//           {/* <Link className="" to={`/${plan._id}`}>{plan.name}</Link> */}
//         </div>
//       </div>
//     </div>
//   );
// })}
