import React, { Component } from "react";
import AuthService from "./AuthService";
 

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
    this.service = new AuthService()
  }
  componentDidMount(){
    console.log("hola que tal")
    this.service.loggedin().then (user=> this.setState({loggedInUser: user}))

  }

  render() {
    return this.state.loggedInUser && (
      <div>
        <main>
          <header className="profile-header text-center p-3 pt-5">
            <div className="user-greeting pt-5">
              <h2>
                <span>Hello, this is your profile {this.state.loggedInUser.username}</span>
              </h2>
            </div>
          </header>
        </main>
      </div>
    );
  }
}

export default Profile;
