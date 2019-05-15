import React, { Component } from "react";
import PlanService from "./PlanService";
import { Link } from "react-router-dom";

export default class Plans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minDate: "",
      maxDate: "",
      plansAll: null,
      plansSelected: null
    };
    this.service = new PlanService();
  }

  // componentDidMount(){
  //   this.service.getAllPlans()
  //   .then(getPlans=>{
  //     console.log(getPlans)
  //     this.setState({
  //       ...this.state,
  //       plans: getPlans
  //     })
  //   })
  // }

  // componentDidMount(){
  //   this.service.getAllPlansWithInDates(this.state.minDate,this.state.maxDate)
  //   .then(getPlans=>{
  //     console.log(getPlans)
  //     this.setState({
  //       ...this.state,
  //       plans: getPlans
  //     })
  //   })
  // }

  componentDidMount() {
    Promise.all([
      this.service.getAllPlans(),
      this.service.getAllPlansWithInDates(
        this.state.minDate,
        this.state.maxDate
      )
    ]).then(([res1, res2]) => {
      this.setState({
        ...this.setState,
        minDate: "2000-05-16T00:00:00.000Z",
        maxDate: "2000-05-16T00:00:00.000Z",
        plansAll: res1,
        plansSelected: res2
      });
    });
  }

  handleChangeAsDate = event => {
    const { name, value } = event.target;

    this.setState({
      ...this.state,
      [name]: value,
      [name + "_date"]: new Date(value)
    });
  };

  render() {
    console.log(this.state.plansAll,this.state.plansSelected);
    return (
      this.state.plansAll && (
        <div>
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

          {this.state.plansAll.map((plan, idx) => {
            return (
              <div key={idx} className="boxMovie">
                <div>
                  <img alt="" src={plan.image_url} />
                </div>
                <div>
                  <p>
                    <Link actualplan={plan} to={`/plan/${plan._id}`}>
                      <p>{plan.name}</p>
                    </Link>
                  </p>
                  {/* <Link className="" to={`/${plan._id}`}>{plan.name}</Link> */}
                </div>
              </div>
            );
          })}




     


        </div>
      )
    );
  }
}
