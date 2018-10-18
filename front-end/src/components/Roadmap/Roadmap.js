import React from 'react'
import image from './image/roadmap.png'
import './Roadmap.css'

const Roadmap = () => {
  return (
    <div>
      <img className='roadmap shadow' src={image} alt='roadmap'/>
    </div>
  )
}

export default Roadmap
