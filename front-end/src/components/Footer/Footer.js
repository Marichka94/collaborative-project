import React from "react";
import './Footer.css'
import twitter from './png/twitter.png'
import facebook from './png/facebook.png'
import linkedin from './png/linkedin.png'
import instagram from './png/instagram.png'
import pinterest from './png/pinterest.png'

const Footer = () => {
    return (
      <div className="footer">
        <nav className="navbar bottom d-flex justify-content-between">
          <a className="text-light m-3"><span className='copyright'>&#169;</span> atruity.com</a>
          <div className="image-size">
            <img src={twitter} alt="twitter-logo"/>
            <img src={facebook} alt="facebook-logo"/>
            <img src={linkedin} alt="linkedin-logo"/>
            <img src={instagram} alt="instagram-logo"/>
            <img src={pinterest} alt="pinterest-logo"/>
          </div>
        </nav>
      </div>
    )
  }

export default Footer
