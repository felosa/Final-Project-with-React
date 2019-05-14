import React, { Component } from 'react'
import TravelService from './TravelService';
import { Redirect } from "react-router-dom";



export default class newTravel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      travel: {
        name: "",
        city: "",
        country: "",
        description:"",
        imgPath: "",
        author: "",
        plans: "",
        redirect: false,
      },      
    };

    this.service = new TravelService();
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    // , lang, country, description, genre,year
    const {name, city ,country, description, imgPath, author, plans} = this.state.travel
    console.log(name)


    // , lang, country, description, genre,year
    this.service.createNewTravel(name, city ,country, description, imgPath, author, plans)
    .then( () => {
      console.log(name)
        this.setState({
          name: "",
          city: "",
          country: "",
          description:"",
          imgPath: "",
          author: "",
          plans: "",
          redirect: true,
        });
        // this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }

 
  handleChange = event => {
    const { name, value } = event.target;
 
    this.setState({ user:{ ...this.state.user, [name]: value } });
    
  };



  render() {
    if (this.state.redirect) {
      return <Redirect to='/profile' />
    }
    return (
      
        <div>
        <form onSubmit={this.handleFormSubmit} className="form">
          <label>Travel Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>City:</label>
          <input type="text" name="city" value={this.state.city} onChange={ e => this.handleChange(e)} />
          <br></br>
          <label>Country:</label>
          <input type="text" name="country" value={this.state.country} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>Description:</label>
          <input type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e)}/>
          <br></br>
          {/* <label>PHOTO:</label>
          <input type="text" name="country" value={this.state.country} onChange={ e => this.handleChange(e)} />
          <br></br> */}
          
          <input type="submit" value="Crear" />
        </form>
  
      
      </div>
    )
  }
}
