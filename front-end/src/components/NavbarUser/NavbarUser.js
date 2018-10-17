import React from 'react'
import { NavLink } from 'react-router-dom'
import '../NavbarHome/NavbarHome.css'

const NavbarUser = () => {
  return (
    <nav className="p-2 d-flex justify-content-between align-items-center">
      <h1 className='brand pl-3'>Atruity</h1>

      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <div className="d-flex align-items-center">
        <h5 className="text-light mr-3">+ Company Info</h5>
        <NavLink to="/" className="btn btn-light rounded-circle m-2 w-5 h-5">Dog</NavLink>
      </div>
      </nav>
  )
}

export default NavbarUser
