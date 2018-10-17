import React, { Component } from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <nav className="navbar fixed-bottom d-flex justify-content-between">
        <a className="text-light m-3"><span className='copyright'>&#169;</span> atruity.com</a>
        <div>
          <img src="../../../public/icons/png/001-twitter-logo-silhouette.png" alt="twitter-logo"/>
          <img src="../../../public/icons/png/002-facebook-logo.png" alt="facebook-logo"/>
          <img src="../../../public/icons/png/003-linkedin-logo.png" alt="linkedin-logo"/>
          <img src="../../../public/icons/png/004-instagram-logo.png" alt="instagram-logo"/>
          <img src="../../../public/icons/png/005-pinterest.png" alt="pinterest-logo"/>
        </div>
      </nav>
    </div>
  )
}

export default Footer
