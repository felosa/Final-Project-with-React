import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import PlanService from './PlanService';




export default class newPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: "",
        city: "",
        date: "",
        type:"",
        description: "",
        imageUrl: "",
        lang: "",
        genre: "",
        hour:"",
        maxYear: "",
        place: "",
        redirect: false,     
    };

    this.service = new PlanService();
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    // , lang, country, description, genre,year
    const {name, city ,date_date, type, description, lang, genre, hour, maxYear, place, imageUrl} = this.state
    console.log(name)
    const id = this.props.travel.id;

    // , lang, country, description, genre,year
    this.service.createNewPlan(name, city ,date_date, type, description, lang, genre, hour, maxYear, place, imageUrl,id)
    .then( () => {
      console.log(name)
        this.setState({
          name: "",
          city: "",
          date_date: "",
          type:"",
          description: "",
          lang: "",
          genre: "",
          hour:"",
          maxYear: "",
          place: "",
          imageUrl: "",
          redirect: true,
        });
        // this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }

  handleChangeAsDate = event => {
    const { name, value } = event.target;

    this.setState({
      ...this.state,
      [name]: value,
      [name + "_date"]: new Date(value)
    });
  };

  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);
    this.service.handleUpload(uploadData)
    .then(response => {
      // console.log('response is: ', response);
      // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
        this.setState({ imageUrl: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
}

 
  handleChange = event => {
    const { name, value } = event.target;
 
    this.setState({ ...this.state.user, [name]: value } );
    
  };



  render() {
    if (this.state.redirect) {
      return <Redirect to={`/travel/${this.props.travel.id}`} />
    }
    return (
        <div className="container">
        <form onSubmit={this.handleFormSubmit} className="form">
          <label>Plan Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>City:</label>
          <input type="text" name="city" value={this.state.city} onChange={ e => this.handleChange(e)} />
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
          <label>Place:</label>
          <input type="text" name="place" value={this.state.place} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <label>Date:</label>
          <input type="date" name="date" value={this.state.date} onChange={ e => this.handleChangeAsDate(e)} />
          <br></br>
          <input 
            type="file" 
            onChange={(e) => this.handleFileUpload(e)} />
          <br></br>
          
          <input type="submit" value="Crear plan" />
        </form>
  
      
      </div>
    )
  }
}