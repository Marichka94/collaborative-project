import React, { Component } from "react";
import "./Task.css";

class Task extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h1>
        {this.props.task.name2} 
        {this.props.task.dept} 
        {this.props.task.teamLead}
        {this.props.task.progress}
        {this.props.task.dueDate}
        {this.props.task.priority}
        </h1>
      </div>
    )
  }
}

export default Task