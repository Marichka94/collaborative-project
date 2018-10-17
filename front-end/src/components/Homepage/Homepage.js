import React, { Component } from 'react'
import NavbarHome from '../NavbarHome/NavbarHome'
import About from '../About/About'
import Product from '../Product/Product'

class Homepage extends Component {
  render() {
    return (
      <div>
        <NavbarHome />
        <About />
        <Product />
      </div>
    )
  }
}

export default Homepage
