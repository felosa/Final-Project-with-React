import React, { Component } from 'react'
import TravelService from './TravelService';
import { Redirect } from "react-router-dom";



export default class newTravel extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: "",
        city: "",
        country: "",
        description:"",
        imageUrl: "",
        author: "",
        plans: "",
        redirect: false,    
    };

    this.service = new TravelService();
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    // , lang, country, description, genre,year
    const {name, city ,country, description, imageUrl, author, plans} = this.state
    console.log(name)


    // , lang, country, description, genre,year
    this.service.createNewTravel(name, city ,country, description, imageUrl, author, plans)
    .then( (result) => {
      debugger
        this.setState({
          name: "",
          city: "",
          country: "",
          description:"",
          imageUrl: "",
          author: "",
          plans: "",
          redirect: true,
        });
        // this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }


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
 
    this.setState({...this.state, [name]: value });
    
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
          <br></br>
          <input 
            type="file" 
            onChange={(e) => this.handleFileUpload(e)} />
          <br></br>
          
          <input type="submit" value="Crear" />
        </form>
  
      
      </div>
    )
  }
}
