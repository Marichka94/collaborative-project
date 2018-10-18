import React from 'react'
import girlOne from './images/girl-one.jpg'
import girlTwo from './images/girl-two.jpg'
import man from './images/man.jpg'
import './Reviews.css'

const Reviews = () => {
  return(
    <div className='reviews'>
      <h2 id="reviews">What do our clients think?</h2>
      <div className='d-flex'>
        <div>
          <img className='review-image' src={girlOne} alt='girl'/>
          <p>"Atruity is awesome! My team uses it everyday to stay on top of tasks and reach goals."</p>
        </div>
        <div>
          <img className='review-image' src={girlTwo} alt='girl'/>
          <p>"Just WOW! Can't get over how easy it is to use and how much my team loves it."</p>
        </div>
        <div>
          <img className='review-image' src={man} alt='man'/>
          <p>"Atruity keeps me organized and on track every single day!"</p>
        </div>
      </div>
    </div>
  )
}

export default Reviews
