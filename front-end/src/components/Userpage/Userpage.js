import React, { Component } from 'react'
import Footer from "../Footer/Footer"
import NavbarUser from "../NavbarUser/NavbarUser"
import Sidebar from "../Sidebar/Sidebar"
import Overview from "../Overview/Overview"
import './Userpage.css'

class Userpage extends Component {
  render() {
    return(
      <div>
        <NavbarUser />
        <div className='d-flex'>
          <Sidebar />
          <div className='content text-center'>
            <Overview />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Userpage
