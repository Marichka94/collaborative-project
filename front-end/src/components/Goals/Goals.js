import React, { Component } from 'react'
import './Goals.css'

class Goals extends Component {


  render() {
    return (
      <div>
        <h1>
          {this.state.goals}
        </h1>
      </div>
    )
  }
}

export default Goals
