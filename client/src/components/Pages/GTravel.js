import React, { Component } from 'react'
import OneTravel from '../TravelApi/OneTravel';
import Plans from '../planApi/Plans';
import TravelService from '../TravelApi/TravelService';

export default class GTravel extends Component {
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
    return this.state.travel && (
      <div className="doFlex background">
        <OneTravel className="container" travel={this.state.travel}></OneTravel>
        <Plans city={this.state.travel.city} className="container margincenterL"></Plans>
      </div>
    )
  }
}