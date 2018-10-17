import React, { Component } from 'react'
import image from './image/item-one-logo.png'
import './Product.css'

class ItemOne extends Component {
  
  handleChange = () => {
    console.log('Item one clicked!')
  }

  render() {
    return (
      <div className='product-image' onClick={this.handleChange}>
        <img src={image}/>
        <p className="description">Track your progress compared to the rest of the company</p>
      </div>
    )
  }
}

export default ItemOne
