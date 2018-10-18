import React, { Component } from "react";
import "./TasksList.css";
import Task from '../Task/Task'

class TasksList extends Component {

  render() {
    return (
      <div>
        {this.props.tasks.map(task => (
          <div>
          <Task key={task.name} task={task} />
          </div>
        ))}
      </div>
    )
  }
}

export default TasksList;
