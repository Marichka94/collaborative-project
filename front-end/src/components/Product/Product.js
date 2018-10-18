import React, { Component } from 'react'
import ItemOne from './ItemOne'
import ItemTwo from './ItemTwo'
import ItemThree from './ItemThree'
import ItemFour from './ItemFour'
import './Product.css'
import imageOne from './image/item-one-logo.png'
import imageTwo from './image/item-two-logo.png'
import imageThree from './image/item-three-logo.png'
import imageFour from './image/item-four-logo.png'


class Product extends Component {

state = {
  currentScreen : <ItemOne />
}

handleClick = (e) => {
  e.preventDefault()
  if (e.target.id === 'item-one') {
    this.setState({
      currentScreen : <ItemOne />
    })
  } else if (e.target.id === 'item-two') {
    this.setState({
      currentScreen : <ItemTwo />
    })
  } else if (e.target.id === 'item-three') {
    this.setState({
      currentScreen : <ItemThree />
    })
  } else if (e.target.id === 'item-four') {
    this.setState({
      currentScreen : <ItemFour />
    })
  }
}

  render() {
    return (
      <div className="product">
        <h1 id="product">Why Atruity?</h1>
        <div className="d-flex flex-wrap justify-content-around align-items-top items">
          <div onClick={this.handleClick} className='product-image'>
            <img id='item-one' src={imageOne} alt='item-one-logo'/>
            <p className="description">Track your progress compared to the rest of the company</p>
          </div>
          <div onClick={this.handleClick} className='product-image'>
            <img id='item-two' src={imageTwo} alt='item-two-logo'/>
            <p className="description">Create a roadmap to track your goals</p>
          </div>
          <div onClick={this.handleClick} className='product-image'>
            <img id='item-three' src={imageThree} alt='item-three-logo'/>
            <p className="description">Work closely with your colleagues</p>
          </div>
          <div onClick={this.handleClick} className='product-image'>
            <img id='item-four' src={imageFour} alt='item-four-logo'/>
            <p className="description">Ensure you're always meeting your goals</p>
          </div>
        </div>
        <div className="m-5">
          {this.state.currentScreen}
        </div>
      </div>

    )
  }
}

export default Product
