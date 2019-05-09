import React, { Component } from 'react'


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: null
        }
        // this.service = new ProfileService();
    }

   

    render() {
    
      return (
        <div>
        <main>
          <header className = "profile-header text-center p-3 pt-5">
            <div className = "user-greeting pt-5" >
              <h2><span>Hello, this is your profile</span>
               
               </h2>
            </div>
          </header>
        </main>
        </div>
      )
    }
  }


export default Profile;