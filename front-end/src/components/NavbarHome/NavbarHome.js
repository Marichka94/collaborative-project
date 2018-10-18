import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarHome.css'

const NavbarHome = () => {
  return (
    <div>
      <nav className="p-2 d-flex justify-content-between align-items-center">
        <h1 className='brand pl-3'>Atruity</h1>
        <NavLink className="pr-3 link" to='/'>Log In</NavLink>
      </nav>
      <div className="text-center crop">
        <img className="image" src="https://files.slack.com/files-pri/TDGDKH7T7-FDGLWDYE9/desk-3139127_640.jpg" alt='banner'/>
      </div>
      <nav className="p-2 d-flex justify-content-center align-items-center">
        <a className="p-2 mr-5 link"  href="#about">About</a>
        <a className="p-2 link" href="#product">Product</a>
        <a className="p-2 ml-5 link" href="#reviews">Reviews</a>
      </nav>
    </div>
  )
}

export default NavbarHome
