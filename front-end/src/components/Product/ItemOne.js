import React from 'react'
import image from './image/item-one.png'
import './Product.css'

const ItemOne = () => {
  return (
    <div className='d-flex flex-wrap align-items-center box'>
      <p className="paragraph text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.</p>
      <img className="pic" src={image} alt='item-one'/>
    </div>
  )
}

export default ItemOne
