import React, { Component } from "react";
import "./Goal.css";

class Goal extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.goal.name} {this.props.goal.dueDate}</h1>
      </div>
    )
  }
}

export default Goal