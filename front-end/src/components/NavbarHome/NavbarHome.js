import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarHome.css'

const NavbarHome = () => {
  return (
    <nav className="p-2 d-flex justify-content-between align-items-center">
      <h1 className='brand pl-3'>Atruity</h1>
      <NavLink className="text-light pr-3" to='/'>Log In</NavLink>
    </nav>
  )
}

export default NavbarHome
