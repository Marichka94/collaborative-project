import React, { Component } from 'react'
import NavbarHome from '../NavbarHome/NavbarHome'
import About from '../About/About'

class Homepage extends Component {
  render() {
    return (
      <div>
        <NavbarHome />
        <About />
      </div>
    )
  }
}

export default Homepage
