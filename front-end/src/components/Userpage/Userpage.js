import React, { Component } from 'react'
import Footer from "../Footer/Footer"
import NavbarUser from "../NavbarUser/NavbarUser"
import Sidebar from "../Sidebar/Sidebar"
import './Userpage.css'

class Userpage extends Component {
  render() {
    return(
      <div>
        <NavbarUser />
        <div className='d-flex'>
          <Sidebar />
          <div className='content text-center'>
            <h1>Userpage</h1>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Userpage
