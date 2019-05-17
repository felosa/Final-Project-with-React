import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import AuthService from "../authApi/AuthService";
import Login from "../authApi/Login";
import "./Navigator.css";




export default class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", error: "", loggedInUser: null};
    this.service = new AuthService();
  }


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
        <div className="backNav Flex">
        <div className="textCenter marginNav">
        <p>Welcome again, {this.props.loggedInUser.username}</p>

        
        <Link className="textCenter" to="/profile"><span>My profile</span></Link>
        </div>
        <div className="navbar-end">
        <div className="imgProfNav">
          <img className="imgProfNav" alt="" src={this.props.loggedInUser.imageUrl}></img>
        </div>
        <Link to='/'>
                <button className="myButton" onClick={() => this.logoutUser()}>Logout</button>
        </Link>
        </div>
        </div>
      )
    }
    else {
    return (
 <div className=" container navbar-end">
      <div className="navbar-item">
      <Login loggedInUser={this.props.loggedInUser} setUser={this.props.setUser}></Login>
    
  </div>
</div>
    )
      }
      
  }
}


