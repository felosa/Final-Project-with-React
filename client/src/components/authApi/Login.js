import React, { Component } from "react";
import AuthService from "./AuthService";
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", loggedInUser: null};
    this.service = new AuthService();
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then(response => {
      // if (user) {
        console.log(response, "saca usuario")
        this.setState({ username: username, password: password, loggedInUser: true}, () =>
        this.props.setUser(response));
    })
      // } else {
    .catch (err =>{
      this.setState({
        username: "",
        password: ""
      });

    })
      // }
    
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // this.state.error = ''
  };

  render() {
    return (
      <div className="navbar-item">
          <form className="Flex" onSubmit={e => this.handleFormSubmit(e)}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />
          <br></br>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />

          <div>
           <input className="myButtonLog" type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
