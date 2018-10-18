import React, { Component } from 'react'
import image from './image/item-four.png'
import './Product.css'

class ItemFour extends Component {

  handleChange = () => {
    console.log('Item four clicked!')
  }

  render() {
    return (
      <div className='d-flex flex-wrap align-items-center box'>
        <img className="pic" src={image} alt='item-two'/>
        <p className="paragraph text-left">Dolore iis eiusmod ne aute. Ubi dolore consectetur, dolor probant exercitation. Aliquip domesticarum ut expetendis se aute nostrud ut domesticarum. Quamquam tamen labore occaecat malis hic quo legam excepteur ullamco ne quo nisi occaecat.</p>
      </div>
    )
  }
}

export default ItemFour
