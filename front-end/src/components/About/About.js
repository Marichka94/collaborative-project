import React from "react";
import './About.css'
import image from './image/about.jpg'

const About = () => {
  return (
    <div className="about">
      <h1 className="mt-5" id="about">About Us</h1>
      <p className="">After noticing a gap in the market for small business strategy, the founders of Atruity created an online product that serves as a tool kit for small businesses.</p>
      <img src={image} alt="random_pic" />
    </div>
  )
}

export default About
