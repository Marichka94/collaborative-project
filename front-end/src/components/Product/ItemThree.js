import React, { Component } from 'react'
import image from './image/item-three-logo.png'
import './Product.css'

class ItemThree extends Component {

  handleChange = () => {
    console.log('Item three clicked!')
  }

  render() {
    return (
      <div className='product-image' onClick={this.handleChange}>
        <img src={image} alt='item-three-logo'/>
        <p className="description">Work closely with your colleagues</p>
      </div>
    )
  }
}

export default ItemThree
