import React, { Component } from "react";
import "./Goals.css";

class Goals extends Component {
  render() {
    let list = this.props.goals.map(item => {
      return (
        <div key={item.name}>
        <h1>{item.goal}</h1>
        <h1>{item.dueDate}</h1>
        <h1>{item.tasks}</h1>
        </div>
      )
    })
    return (
      this.props.goals.length > 0 ? 
      <div>
        {list}
      </div> : null
    )
}
}

export default Goals;
