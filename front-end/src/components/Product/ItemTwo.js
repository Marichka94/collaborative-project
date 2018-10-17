import React, { Component } from 'react'
import image from './image/item-two-logo.png'
import './Product.css'

class ItemTwo extends Component {

  handleChange = () => {
    console.log('Item two clicked!')
  }

  render() {
    return (
      <div className='product-image' onClick={this.handleChange}>
        <img src={image}/>
        <p className="description">Create a roadmap to track your goals</p>
      </div>
    )
  }
}

export default ItemTwo
