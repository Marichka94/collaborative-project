import React, { Component } from 'react'
import Footer from "../Footer/Footer"
import NavbarUser from "../NavbarUser/NavbarUser"
import Sidebar from "../Sidebar/Sidebar"
import Overview from "../Overview/Overview"
import Roadmap from "../Roadmap/Roadmap"
import GoalsList from "../GoalsList/GoalsList"
import Education from "../Education/Education"
import './Userpage.css'

class Userpage extends Component {
  state = {
    currentState : <Overview />
  }

  isClicked() {
    
  }

  render() {
    return(
      <div>
        <NavbarUser />
        <div className='d-flex'>
          <Sidebar clicked={this.state.currentState}/>
          <div className='content text-center'>
            {this.state.currentState}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Userpage
