import React, { Component } from 'react'
import image from './image/item-one-logo.png'
import './Product.css'

class ItemOne extends Component {

  state = {
    clicked: false
  }

  handleChange = () => {
    if (this.state.clicked === false) {
    this.setState({
      clicked: true
    })
  } else {
    this.setState({
      clicked: false
    })
  }
    console.log(this.state.clicked)
  }

  render() {
    return (
      <div className='product-image' onClick={this.handleChange}>
        <img src={image} alt='item-one-logo'/>
        <p className="description">Track your progress compared to the rest of the company</p>
      </div>
    )
  }
}

export default ItemOne
