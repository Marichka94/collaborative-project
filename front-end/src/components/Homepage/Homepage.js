import React, { Component } from 'react'
import NavbarHome from '../NavbarHome/NavbarHome'
import About from '../About/About'
import Product from '../Product/Product'
import Reviews from '../Reviews/Reviews'
import Footer from "../Footer/Footer";

class Homepage extends Component {
  render() {
    return (
      <div>
        <NavbarHome />
        <div id="about"><About /></div>
        <div id="product"><Product /></div>
        <div id="reviews"><Reviews /></div>
        <Footer />
      </div>
    )
  }
}

export default Homepage
