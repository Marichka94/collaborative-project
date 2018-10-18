import React from 'react'
import image from './image/item-three.png'
import './Product.css'

const ItemThree = () => {
  return (
    <div className='d-flex flex-wrap align-items-center box'>
      <p className="paragraph text-left">Nisi singulis et excepteur id et velit transferrem sed consequat in veniam, quae probant ita ipsum quis. Aliquip domesticarum ut expetendis se aute nostrud ut domesticarum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <img className="pic" src={image} alt='item-three'/>
    </div>
  )
}


export default ItemThree
