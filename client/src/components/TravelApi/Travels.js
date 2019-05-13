import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import TravelService from './TravelService';






export default class Travels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      travel: {
        name: "",
        city: "",
        country: "",
        description:"",
        imgPath: "",
        author: "",
        plans: "",
        redirect: false,
      },      
    };

    this.service = new TravelService();
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    // , lang, country, description, genre,year
    const {name, city ,country, description, imgPath, author, plans} = this.state.travel
    console.log(name)


    // , lang, country, description, genre,year
    this.service.signup(name, city ,country, description, imgPath, author, plans)
    .then( () => {
      console.log(name)
        this.setState({
          name: "",
          city: "",
          country: "",
          description:"",
          imgPath: "",
          author: "",
          plans: "",
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



  render() {
    console.log(this.props, this.props.loggedInUser)
    return this.props.loggedInUser && (
      <div>
        <p>Lista de travels</p>
        <Link to="/newtravel"><button>New Travel</button></Link>

      </div>
    )
  }
}
