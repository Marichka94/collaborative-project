import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "../Homepage/Homepage";
import Footer from "../Footer/Footer";
import GoalsList from "../GoalsList/GoalsList";
import AddGoal from "../AddGoal/AddGoal";
import Userpage from "../Userpage/Userpage";
import ShowGoal from "../ShowGoal/ShowGoal";
import axios from 'axios'
import Overview from "../Overview/Overview"
import Roadmap from "../Roadmap/Roadmap"
import Education from "../Education/Education"

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
    axios.get("http://localhost:3001/api/goals")
    .then(response => {
      const goals = response.data
      this.setState({
        goals: goals
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route
              path="/goals"
              render={props => {
                return <GoalsList {...props} goals={this.state.goals} />;
              }}
            />
            <Route
              path="/add_goal"
              render={props => {
                return <AddGoal {...props} goals={this.state.goals} />
              }}
            />
             <Route
              path="/show/:name"
              render={props => {
                return <ShowGoal {...props} goals={this.state.goals} />
              }}
            />
            <Route path="/overview" component={Overview}/>
            <Route path="/roadmap" component={Roadmap}/>
            <Route path="/goalslist" component={GoalsList}/>
            <Route path="/education" component={Education}/>
            <Route path="/userpage" component={Userpage}/>
            <Route exact path="/" component={Homepage}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
