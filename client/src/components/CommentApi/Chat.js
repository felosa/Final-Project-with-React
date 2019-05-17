import React, { Component } from "react";
import CommentService from "./CommentService";
import PlanService from "../planApi/PlanService";

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      plan: ""
    };
    this.service = new CommentService();
    this.servicePlan = new PlanService();
  }

  componentDidMount() {
    const id = this.props.plan.id;
    this.servicePlan.getOnePlan(id).then(getPlan => {
      this.setState({
        ...this.state,
        plan: getPlan
      });
    });
  }

 
  handleFormSubmit = event => {
    event.preventDefault();
    // , lang, country, description, genre,year
    const { message } = this.state;
    console.log(this.props.plan);
    const id = this.props.plan.id;

    // , lang, country, description, genre,year
    this.service
      .createNewComment(message, id)
      .then((plan) => {
        this.setState({
          message: "",
          plan

        });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ ...this.state, [name]: value
     });
  };
  //traer un plan solo con get/one plan con la id, para sacar los comentarios. IMPORTANTE
  render() {
    console.log(this.state.plan.comments);
    return (
      <div className="container">
        <p><b>Plan Chat</b></p>
        <br></br>
        <br></br>
        <form onSubmit={this.handleFormSubmit} className="form">
          <label>Write something:</label>
          <input
            type="text"
            name="message"
            value={this.state.message}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input type="submit" value="Send comment" />
        </form>
        <br></br>
        <br></br>
        {this.state.plan ? 
          <div>
            {this.state.plan.comments.map((plan, idx) => {
              return (
                <div>
                  <div className="Flex">
                  <img className="chatImg" alt="" src={plan.authorPhoto}></img>
                  <p><b>{plan.author}</b></p>
                  </div>
                  <p className="comments">{plan.message}</p>
                </div>
              );
            })}
          </div>
         : 
          <div>
            <p>no hay comentarios</p>
          </div>
        }
        
      </div>
    );
  }
}
