import React, { Component } from 'react'
import image from './image/item-two.png'
import './Product.css'

class ItemTwo extends Component {

  render() {
    return (
      <div className='d-flex flex-wrap align-items-center box'>
        <img className="pic" src={image} alt='item-two'/>
        <p className="paragraph text-left">Ex magna labore enim incididunt, dolor cohaerescant excepteur velit ingeniis, irure iis sed culpa quamquam ad eram quamquam quo sint multos. Ingeniis ita noster expetendis ut ad multos concursionibus.</p>
      </div>
    )
  }
}

export default ItemTwo
