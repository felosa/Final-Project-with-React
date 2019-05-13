import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthService from "../authApi/AuthService";
import Login from "../authApi/Login";



export default class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", error: "", loggedInUser: null};
    this.service = new AuthService();
  }

  
  // handleFormSubmit(event) {
  //   event.preventDefault();
  //   const username = this.state.username;
  //   const password = this.state.password;
  //   this.service.login(username, password).then(user => {
  //     if (user) {
  //       console.log(user, "saca usuario")
  //       this.setState({ username: "", password: "", loggedInUser:true}, () =>
  //       this.props.setUser(user)
  //       );
  //     } else {
  //       this.setState({
  //         username: "",
  //         password: ""
  //       });
  //     }
  //   });
  //    .catch(error => {
  //       console.log(error)
  //       this.setState({ error: error.response.data.message});
  //   })
  // }

  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  //   this.state.error = ''
  // };

  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.setUser(null); 
      console.log("quita usuario") 
    })
  }

  render() {
    console.log(this.props.loggedInUser)
    if (this.props.loggedInUser) {
      return (
        <div>
        <p>Estas logueado</p>
        <Link to='/'>
                <button onClick={() => this.logoutUser()}>Logout</button>
        </Link>
        </div>
      )
    }
    else {
    return (
      <div>
        <Login loggedInUser={this.props.loggedInUser} setUser={this.props.setUser}></Login>
        {/* <div>
        <Link to='/profile'>
                <span>Mi perfil</span>
        </Link>
        
        </div>
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Login" />

        
          <Link to='/'>
                <button onClick={() => this.logoutUser()}>Logout</button>
          </Link>
        </form> */}
      </div>
    )
      }
      
  }
}
