import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GoalsList.css";
import Goal from '../Goal/Goal'
import TasksList from '../TasksList/TasksList'

class GoalsList extends Component {

  render() {
    return (
      <div>
        <Link to="/add_goal" >Add Goal</Link>
        {this.props.goals.map(goal => (
          <div>
          <Goal key={goal.name} goal={goal} />
          <TasksList key={goal.tasks} tasks={goal.tasks}/>
          </div>
        ))}
      </div>
    )
  }
}

export default GoalsList;
