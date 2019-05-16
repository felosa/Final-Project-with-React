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
    console.log(this.props.plan.id);
    this.servicePlan.getOnePlan(id).then(getPlan => {
      console.log(getPlan);
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
      .then(() => {
        console.log(message);
        this.setState({
          message: "",
          redirect: true
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
      <div>
        <p> aqui va el chat a los comentarios</p>
        {this.state.plan ? 
          <div>
            {this.state.plan.comments.map((plan, idx) => {
              return (
                <div>
                  <img alt="" src={plan.authorPhoto}></img>
                  <p>{plan.author}</p>
                  <p>{plan.message}</p>
                </div>
              );
            })}
          </div>
         : 
          <div>
            <p>no hay comentarios</p>
          </div>
        }
        <form onSubmit={this.handleFormSubmit} className="form">
          <label>Comment:</label>
          <input
            type="text"
            name="message"
            value={this.state.message}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input type="submit" value="Send comment" />
        </form>
      </div>
    );
  }
}
