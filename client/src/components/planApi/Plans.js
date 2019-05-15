import React, { Component } from 'react'
import PlanService from './PlanService';


export default class Plans extends Component {
  constructor(props) {
    super(props);
    this.state = {
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




  render() {
    console.log(this.state.plans)
    return (this.state.plans && 
      <div>
        <h2>Lista de planes</h2>
        {this.state.plans.map((plan,idx) => {
          return (
            <div key={idx} className="boxMovie">
          <div>
            <img alt="" src={plan.image_url}></img>
            </div>
            <div>
              <p>
                {plan.name}
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
