import React, { Component } from "react";
import AuthService from "./AuthService";
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';



class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: "",
        lang: "",
        country: "",
        description:"",
        genre: "",
        year: "",
        redirect: false,
      },      
    };

    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    // , lang, country, description, genre,year
    const {username, password,lang, country, description, genre,year} = this.state.user
    console.log(username, password)


    // , lang, country, description, genre,year
    this.service.signup(username, password, lang, country, description, genre,year)
    .then( () => {
      console.log(username)
        this.setState({
            username: "", 
            password: "",
            lang: "",
            country: "",
            description: "",
            genre: "",
            year: "",
            redirect: true
        });
        // this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }

 
  handleChange = event => {
    const { name, value } = event.target;
 
    this.setState({ user:{ ...this.state.user, [name]: value } });
    
  };

  render(){
    if (this.state.redirect) {
      return <Redirect to='/login'/>
    }
    
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />

          <label>Languaje:</label>
          <input type="text" name="lang" value={this.state.lang} onChange={ e => this.handleChange(e)}/>

          <label>Description:</label>
          <input type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e)}/>
          
          <label>Country:</label>
          <input type="text" name="country" value={this.state.country} onChange={ e => this.handleChange(e)} />
         
          <label>Genre:</label>
          <input type="text" name="genre" value={this.state.genre} onChange={ e => this.handleChange(e)}/>
          
          <label>Year:</label>
          <input type="number" name="year" value={this.state.year} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Signup" />
        </form>
  
        <p>Already have account? 
            <Link to={"/login"}> Login</Link>
        </p>
  
      </div>
    )
  }
}

export default Signup;