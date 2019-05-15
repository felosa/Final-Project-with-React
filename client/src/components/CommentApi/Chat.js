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

  render() {
    return (
      <div>
        <p> aqui va el chat a los comentarios</p>
      </div>
    )
  }
}
