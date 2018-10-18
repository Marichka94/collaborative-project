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
      <div className="product shadow pt-5 pb-5">
        <h1 id="product">Why Atruity?</h1>
        <div className="d-flex flex-wrap justify-content-around align-items-top items">
          <div onMouseOver={this.handleClick} className='product-image hover'>
            <img id='item-one' src={imageOne} alt='item-one-logo'/>
            <p id='item-one' className="description">Track your progress compared to the rest of the company</p>
          </div>
          <div onMouseOver={this.handleClick} className='product-image hover'>
            <img id='item-two' src={imageTwo} alt='item-two-logo'/>
            <p id='item-two' className="description">Create a roadmap to track your goals</p>
          </div>
          <div onMouseOver={this.handleClick} className='product-image hover'>
            <img id='item-three' src={imageThree} alt='item-three-logo'/>
            <p id='item-three' className="description">Work closely with your colleagues</p>
          </div>
          <div onMouseOver={this.handleClick} className='product-image hover big-one'>
            <img id='item-four' src={imageFour} alt='item-four-logo'/>
            <p id='item-four' className="description">Ensure you're always meeting your goals</p>
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
