import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from "./AuthService";




class EditProfile extends Component {
  constructor(props){
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
        redirect: false
    }
  }
    this.service = new AuthService()
  }


  componentDidMount(){
    this.service.loggedin(this.props.match.params._id)
    .then(user=>{
      console.log(user, "did")
      this.setState({
        ...this.state,
        user: user,
        redirect: false,
        
      })
    })
  }

  handleFormSubmit = (event) => {
    console.log(this.state.username)
    event.preventDefault();
      const {lang, country, description, genre,year} = this.state.movie
      const id = this.props.match.params._id
  
      this.api.editProfile(lang, country, description, genre,year, id)
      .then( () => {
        // this.props.getData();
        this.setState({
        redirect: true,
        lang: "",
        country: "",
        description:"",
        genre: "",
        year: "",
        });
    })
    
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    const newUser={...this.state.movie}
    newUser[name]=value
    this.setState({
      ...this.state, 
      user:newUser});
}


  render(){
    if (this.props.loggedInUser) {
      return <Redirect to='/profile' />
    }
    console.log(this.state.user,"editar")
    return (this.state.user && 
      <div>
        lang: "",
        country: "",
        description:"",
        genre: "",
        year: "",
        <hr />
        <form onSubmit={this.handleFormSubmit}>
        
        <label for="lang">Languaje:</label>
        <br />
        <input type="text" name="lang" value={this.state.user.lang} onChange={ e => this.handleChange(e)}/>
        <br /><br />
        <label for="country">Country:</label>
        <br />
        <input type="text" name="country" value={this.state.user.country} onChange={ e => this.handleChange(e)}/>
        <br /><br />
        <label for="description">Description:</label>
        <br/>
        <input type="number" name="description" value={this.state.user.description} onChange={ e => this.handleChange(e)}/>
        <br /><br />
        <label for="genre">Genre:</label>
        <br/>
        <input type="text" name="genre" value={this.state.user.genre} onChange={ e => this.handleChange(e)}/>
        <br /><br />
        <label for="year">Year:</label>
        <br/>
        <input type="number" name="year" value={this.state.user.year} onChange={ e => this.handleChange(e)}/>
        <br /><br />
        
        <input type="submit" value="EDIT" />
        
      </form>
      </div>
    )
  }

  }


export default EditProfile;