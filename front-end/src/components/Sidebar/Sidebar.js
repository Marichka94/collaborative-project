import React, { Component } from 'react'
import './Sidebar.css'
import Overview from "../Overview/Overview"
import Roadmap from "../Roadmap/Roadmap"
import Goals from "../Goals/Goals"
import Education from "../Education/Education"

class Sidebar extends Component {

state = {
  currentState: this.props.clicked
}

  handleClick= (e) => {
    if (e.target.id === 'overview') {
      console.log(this.state.currentState)
      this.setState({
        currentState: <Overview />
      })
    } else if (e.target.id === 'goals') {
      console.log(this.state.currentState)
      this.setState({
        currentState: <Goals />
      })
    } else if (e.target.id === 'roadmap') {
      console.log(this.state.currentState)
      this.setState({
        currentState: <Roadmap />
      })
    } else if (e.target.id === 'education') {
      console.log(this.state.currentState)
      this.setState({
        currentState: <Education />
      })
    }
  }
  render() {
  return (
    <div className='sidebar d-flex flex-column text-center'>
      <div onClick={this.handleClick}><h3 id='overview' className='sidebar-item font-weight-light p-3'>Overview</h3></div>
      <div onClick={this.handleClick}><h3 id='goals' className='sidebar-item font-weight-light p-3'>Goals</h3></div>
      <div onClick={this.handleClick}><h3 id='roadmap' className='sidebar-item font-weight-light p-3'>Roadmap</h3></div>
      <div onClick={this.handleClick}><h3 id='education' className='sidebar-item font-weight-light p-3'>Education</h3></div>
      <div className='sidebar-item pt-4'>
        <img className='sidebar-item w-75' src='https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2015/03/youtube-logo2.jpg' />
        <p className=" p-4">How to Write a Vision Statement</p>
      </div>
      <div className='sidebar-item pt-4'>
        <img className='w-75' src='https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2015/03/youtube-logo2.jpg' />
        <p className="">How to Write a Mission Statement</p>
      </div>
      <div className='sidebar-item pt-4'>
        <img className='w-75' src='https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2015/03/youtube-logo2.jpg' />
        <p className="">How to Track Your Progress</p>
      </div>
    </div>
  )
  }
}

export default Sidebar
