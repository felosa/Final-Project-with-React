import React, { Component } from 'react';
import AuthService from "./AuthService";
import { Link, Redirect } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', logged: false, error: '',redirect: false };
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.service.login(username, password)
             .then(() => {            
                 this.setState({ redirect:true, 
                  username: "", password: "", logged: true },
                   );
             })
            //  .catch(error => {
            //     console.log(error)
            //     this.setState({ error: error.response.data.message});
            // })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        // this.state.error = ''
    }

    render(){
      if(this.state.redirect){ return <Redirect to='/profile'/>}
      return(
        
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>Username:</label>
            <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>

            <label>Password:</label>
            <textarea name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
            
            <input type="submit" value="Login" />
          </form>
          <p>Don't have account? 
              <Link to={"/signup"}> Signup</Link>
          </p>
        </div>
      )
    }
}
export default Login;