import React, { Component } from 'react'
import './ShowGoal.css';

class ShowGoal extends Component {

  render () {
    // let showGoal = this.props.goals.filter(goal =>
    //   goal.name === this.props.match.params.name)[0]

    return (
      <div>
        <h1>{this.props.goal.name}</h1>
        <p>{this.props.goal.dueDate}</p>
        <p>{this.props.goal.tasks}</p>
      </div>
    )
  }
}

export default ShowGoal