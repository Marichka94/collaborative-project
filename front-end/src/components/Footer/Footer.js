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
          <a className="text-light m-3" href="http://atruity.com"><span className='copyright'>&#169;</span> atruity.com</a>
          <div>
            <a href="https://twitter.com" className="image-size"><img src={twitter} alt="twitter-logo"/></a>
            <a href="https://www.facebook.com/" className="image-size"><img src={facebook} alt="facebook-logo"/></a>
            <a href="https://www.linkedin.com" className="image-size"><img src={linkedin} alt="linkedin-logo"/></a>
            <a href="https://www.instagram.com" className="image-size"><img src={instagram} alt="instagram-logo"/></a>
            <a href="https://www.pinterest.com/" className="image-size"><img src={pinterest} alt="pinterest-logo"/></a>
          </div>
        </nav>
      </div>
    )
  }

export default Footer
