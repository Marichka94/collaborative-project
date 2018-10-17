import React, { Component } from 'react'
import image from './image/item-four-logo.png'
import './Product.css'

class ItemFour extends Component {

  handleChange = () => {
    console.log('Item four clicked!')
  }

  render() {
    return (
      <div className='product-image' onClick={this.handleChange}>
        <img src={image} alt='item-four-logo'/>
        <p className="description">Ensure you're always meeting your goals</p>
      </div>
    )
  }
}

export default ItemFour
