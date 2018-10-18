import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "../Homepage/Homepage";
import Footer from "../Footer/Footer";
import GoalsList from "../GoalsList/GoalsList";
import AddGoal from "../AddGoal/AddGoal";

import Goals from "../Goals/Goals";
import Userpage from "../Userpage/Userpage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [{
        name: '',
        dueDate: '',
        tasks:[]
      }]
    }
  }

  componentDidMount() {
    this.getGoals();
  }

  getGoals = () => {
    fetch("http://localhost:3001/api/goals")
      .then(response => response.json())
      .then(goals =>
        this.setState({
          goals: goals,
          tasks: goals.tasks
        })
      );
  };

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route
              path="/goals"
              render={props => {
                return <GoalsList goals={this.state.goals} {...props} />;
              }}
            />
            <Route
              path="/add_goal"
              render={props => {
                return <AddGoal {...props} />
              }}
            />
            <Route path="/userpage" component={Userpage}/>
            <Route exact path="/" component={Homepage}/>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
