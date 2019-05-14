import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import PlanService from './PlanService';




export default class newPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plan: {
        name: "",
        city: "",
        date: "",
        type:"",
        description: "",
        lang: "",
        genre: "",
        hour:"",
        maxYear: "",
        place: "",
        comments: "",
        redirect: false,
      },      
    };

    this.service = new PlanService();
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    // , lang, country, description, genre,year
    const {name, city ,date, type, description, lang, genre, hour, maxYear, place, comments} = this.state.plan
    console.log(name)


    // , lang, country, description, genre,year
    this.service.createNewPlan(name, city ,date, type, description, lang, genre, hour, maxYear, place, comments)
    .then( () => {
      console.log(name)
        this.setState({
          name: "",
          city: "",
          date: "",
          type:"",
          description: "",
          lang: "",
          genre: "",
          hour:"",
          maxYear: "",
          place: "",
          comments: "",
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
      return <Redirect to='/travel' />
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
          <label>Date:</label>
          <input type="text" name="date" value={this.state.date} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>Type:</label>
          <input type="text" name="type" value={this.state.type} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>Description:</label>
          <input type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          <br></br>
          <label>Languaje:</label>
          <input type="text" name="lang" value={this.state.lang} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>Genre:</label>
          <input type="text" name="genre" value={this.state.genre} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>hour:</label>
          <input type="text" name="hour" value={this.state.hour} onChange={ e => this.handleChange(e)} />
          <br></br>
          <label>MaxYear:</label>
          <input type="text" name="maxYear" value={this.state.maxYear} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>Place:</label>
          <input type="text" name="place" value={this.state.place} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>comments:</label>
          <input type="text" name="comments" value={this.state.comments} onChange={ e => this.handleChange(e)} />
          <br></br>
          
          <input type="submit" value="Crear plan" />
        </form>
  
      
      </div>
    )
  }
}