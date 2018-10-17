import React, { Component } from 'react'
import ItemOne from './ItemOne'
import ItemTwo from './ItemTwo'
import ItemThree from './ItemThree'
import ItemFour from './ItemFour'
import './Product.css'
import imageOne from './image/item-one.png'
import imageTwo from './image/item-two.png'
import imageThree from './image/item-three.png'
import imageFour from './image/item-four.png'

const placeholder = [
  {
    "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.",
    "image" : {imageOne}
  },
  {
    "text" : "Ex magna labore enim incididunt, dolor cohaerescant excepteur velit ingeniis, irure iis sed culpa quamquam ad eram quamquam quo sint multos. Ingeniis ita noster expetendis ut ad multos concursionibus.",
    "image" : {imageTwo}
  },
  {
    "text" : "Nisi singulis et excepteur id et velit transferrem sed consequat in veniam, quae probant ita ipsum quis.",
    "image" : {imageThree}
  },
  {
    "text" : "Dolore iis eiusmod ne aute. Ubi dolore consectetur, dolor probant exercitation. Aliquip domesticarum ut expetendis se aute nostrud ut domesticarum. Quamquam tamen labore occaecat malis hic quo legam excepteur ullamco ne quo nisi occaecat.",
    "image" : {imageFour}
  }
]

class Product extends Component {
  state = {
    text: null,
    image: null
  }

  render() {
    return (
      <div className="product">
        <h1>Why Atruity?</h1>
        <div className="d-flex justify-content-around align-items-top items">
          <ItemOne />
          <ItemTwo />
          <ItemThree />
          <ItemFour />
        </div>
      </div>

    )
  }
}

export default Product
