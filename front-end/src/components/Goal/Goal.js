import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Goal.css";

class Goal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGoal: this.props.goal.name
    }
  }

  render() {
    console.log(this.state.currentGoal)
    return(
      <div>
        <h1><Link to={"/show/" + this.props.goal.name} > {this.props.goal.name}</Link> {this.props.goal.dueDate}</h1>
      </div>
    )
  }
}

export default Goal