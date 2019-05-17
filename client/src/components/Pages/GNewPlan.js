import React, { Component } from 'react'
import OneTravel from '../TravelApi/OneTravel';
import NewPlan from '../planApi/NewPlan';
import TravelService from '../TravelApi/TravelService';


export default class GNewTravel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travel: null,
      redirect: false
    };
    this.service = new TravelService();
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.service.getOneTravel(id).then(travel => {
      this.setState({
        ...this.state,
        travel: travel
      });
    });
  }
  render() {
    console.log(this.props.match.params)
    return this.state.travel && (
      <div className="doFlex background">
        <OneTravel travel={this.state.travel}></OneTravel>
        <NewPlan className="margincenterL" travel={this.props.match.params}></NewPlan>
      </div>
    )
  }
}
