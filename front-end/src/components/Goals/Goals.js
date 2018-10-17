import React, { Component } from 'react'
import './Goals.css'

class Goals extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.goals.goal}</h1>
        <h1>{this.props.goals.dueDate}</h1>
        <h1>{this.props.goals.tasks[0]}</h1>
        <h1>{this.props.goals.tasks[1]}</h1>
      </div>
    )
  }
}

// Goals.defaultProps = {
//   goals:   {
//     goal: "this is the asdfasdf test goal",
//     dueDate: "asdfasdf 31, 2018",
//     tasks: ["test task asdfasf", "test task adsfs"]
//   }
// }

export default Goals
