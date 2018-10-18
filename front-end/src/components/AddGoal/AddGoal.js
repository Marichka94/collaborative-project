import React, { Component } from 'react'
import axios from 'axios'

class AddGoal extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      dueDate: '',
      tasks:[]
    }
  }

  onChangeText = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addGoal = e => {
    e.preventDefault()
    axios.post('http://localhost:3001/api/goals', this.state)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.props.history('/goals')
  }


  render() {
    return (
      <div>
        <form>
          <label>Goal</label>
          <input
            type="text"
            name="name"
            onChange={this.onChangeText}
            value={this.state.name}
          />
          <label>Due Date</label>
          <input
            type="text"
            name="dueDate"
            onChange={this.onChangeText}
            value={this.state.dueDate}
          />
          <button onClick={this.addGoal}>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddGoal
