import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GoalsList.css";
import Goal from '../Goal/Goal'
import TasksList from '../TasksList/TasksList'

class GoalsList extends Component {

  render() {
    let list = this.props.goals.map(goal => {
      return (
        <div key={goal.name}>
        <Goal goal={goal} />
        <TasksList key={goal.tasks} tasks={goal.tasks}/>
        </div>
      )
    })
    return (
      <div>
        <Link to="/add_goal" >Add Goal</Link>
        {list}
      </div>
    )
  }
}

export default GoalsList;

