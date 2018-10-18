import React, { Component } from 'react'
import Footer from "../Footer/Footer";
import NavbarUser from "../NavbarUser/NavbarUser";

class Userpage extends Component {
  render() {
    return(
      <div>
        <NavbarUser />
        <h1>Userpage</h1>
        <Footer />
      </div>
    )
  }
}

export default Userpage
