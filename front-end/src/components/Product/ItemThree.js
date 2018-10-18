import React, { Component } from 'react'
import image from './image/item-three.png'
import './Product.css'

class ItemThree extends Component {

  render() {
    return (
      <div className='d-flex flex-wrap align-items-center box'>
        <p className="paragraph text-left">Nisi singulis et excepteur id et velit transferrem sed consequat in veniam, quae probant ita ipsum quis.</p>
        <img className="pic" src={image} alt='item-three'/>
      </div>
    )
  }
}

export default ItemThree
