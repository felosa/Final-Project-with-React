import React, { Component } from 'react'
import PlanService from './PlanService';
import { Link } from "react-router-dom";



export default class Plans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minDate: "",
      maxDate: "",
     plans: null
    }
    this.service = new PlanService()
  }

  componentDidMount(){
    this.service.getAllPlans()
    .then(getPlans=>{
      console.log(getPlans)
      this.setState({
        ...this.state,
        plans: getPlans
        
      })
    })
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
    console.log(this.state.plans)
    return (this.state.plans && 
      <div>
        <h2>Lista de planes</h2>

        <form onSubmit={this.handleFormSubmit} className="form">
          <label>Arrive Date:</label>
          <input type="date" name="minDate" value={this.state.minDate} onChange={ e => this.handleChangeAsDate(e)} />
          <label>Leave Date:</label>
          <input type="date" name="maxDate" value={this.state.maxDate} onChange={ e => this.handleChangeAsDate(e)} />
         <br></br>
         <br></br>

          <input type="submit" value="Search" />
        </form>
  
        

        {this.state.plans.map((plan,idx) => {
          return (
            <div key={idx} className="boxMovie">
          <div>
            <img alt="" src={plan.image_url}></img>
            </div>
            <div>
              <p>
              <Link actualplan={plan} to={`/plan/${plan._id}`}><p>{plan.name}</p></Link>
              </p>
            {/* <Link className="" to={`/${plan._id}`}>{plan.name}</Link> */}
            </div>
            </div>
          )
        })
        }
      </div>
    )
    
  }


}
