import React, { Component } from 'react'
import CommentService from './CommentService';



export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",     
    };
    this.service = new CommentService();
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    // , lang, country, description, genre,year
    const {message} = this.state
    console.log(this.props.plan)
    const id = this.props.plan.id;

    // , lang, country, description, genre,year
    this.service.createNewComment(message,id)
    .then( () => {
      console.log(message)
        this.setState({
          message: "",
          redirect: true,
        });
    })
    .catch( error => console.log(error) )
  }

  handleChange = event => {
    const { name, value } = event.target;
 
    this.setState({ ...this.state.user, [name]: value } );
    
  };

  render() {
    console.log(this.props)
    return (
      <div>
        <p> aqui va el chat a los comentarios</p>
        <form onSubmit={this.handleFormSubmit} className="form">
          <label>Comment:</label>
          <input type="text" name="message" value={this.state.message} onChange={ e => this.handleChange(e)}/>
          <br></br>
          <input type="submit" value="Send comment" />
        </form>
      </div>
    )
  }
}
