import React from 'react'
import { NavLink } from 'react-router-dom'
import '../NavbarHome/NavbarHome.css'

const NavbarUser = () => {
  return (
    <nav className="p-2 d-flex justify-content-between align-items-center">
      <NavLink to="/" className='brand pl-3'>Atruity</NavLink>

      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <div className="d-flex align-items-center">
        <p className="text-light mr-3 mt-3">+ Company Info</p>
        <a className="btn btn-light rounded-circle m-2 w-5 h-5">A</a>
      </div>
      </nav>
  )
}

export default NavbarUser
