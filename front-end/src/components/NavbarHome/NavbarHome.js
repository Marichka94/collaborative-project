import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarHome.css";
import Signup from "../SignupForm/Signup";
import Info from "../SignupForm/Info";
import image from "./image/desk.jpg";

const NavbarHome = () => {
  return (
    <div>
      <nav className="p-2 d-flex justify-content-between align-items-center">
        <NavLink to="/" className="brand pl-3">
          Atruity
        </NavLink>
        <NavLink className="pr-3 link" to="/userpage">
          Log In
        </NavLink>
      </nav>
      <div className="text-center crop">
        <img className="image" src={image} alt="banner" />
      </div>
      <nav className="p-2 d-flex justify-content-center align-items-center">
        <a className="p-2 mr-5 link" href="#about">
          About
        </a>
        <a className="p-2 link" href="#product">
          Product
        </a>
        <a className="p-2 ml-5 link" href="#reviews">
          Reviews
        </a>
      </nav>
    </div>
  );
};

export default NavbarHome;
