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

  
  

// render(){
//   return(
//     <div>
//     <nav className="navbar" role="navigation" aria-label="main navigation">

//   <div id="navbarBasicExample" className="navbar-menu">
//     <div className="navbar-start">
//       <a className="navbar-item">
//         Home
//       </a>

//       <div className="navbar-item has-dropdown is-hoverable">
//         <a className="navbar-link">
//           More
//         </a>

//         <div className="navbar-dropdown">
//           <a className="navbar-item">
//             About
//           </a>
//           <a className="navbar-item">
//             Jobs
//           </a>
//           <a className="navbar-item">
//             Contact
//           </a>
//           <hr className="navbar-divider"/>
//           <a className="navbar-item">
//             Report an issue
//           </a>
//         </div>
//       </div>
//     </div>

//     <div className="navbar-end">
//       <div className="navbar-item">
//           <Login loggedInUser={this.props.loggedInUser} setUser={this.props.setUser}></Login>
        
//       </div>
//     </div>
//   </div>
// </nav>
// </div>
  
// )
// }



render() {
    console.log(this.props.loggedInUser)
    if (this.props.loggedInUser) {
      return (
        <div className="container">
        
        <p>Welcome again, {this.props.loggedInUser.username}</p>
        
        <Link to="/profile"><span>Mi perfil</span></Link>
        <div className="navbar-end">
        <div className="imgProf">
          <img alt="" src={this.props.loggedInUser.imageUrl}></img>
        </div>
        <Link to='/'>
                <button className="button is-primary" onClick={() => this.logoutUser()}>Logout</button>
        </Link>
        </div>
        </div>
      )
    }
    else {
    return (
 <div className="navbar-end">
      <div className="navbar-item">
      <Login loggedInUser={this.props.loggedInUser} setUser={this.props.setUser}></Login>
    
  </div>
</div>
    )
      }
      
  }
}


