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
        redirect: false,
      },      
    };

    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.user.username;
    const password = this.state.user.password;

    this.service.signup(username, password)
    .then( () => {
      console.log()
        this.setState({
            username: "", 
            password: "",
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

  render(){
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
    
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
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