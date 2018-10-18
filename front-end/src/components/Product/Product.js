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

  // handleChange = () => {
  //   if (this.state.ItemOne === false) {
  //   this.setState({
  //     clicked: true
  //   })
  // } else {
  //   this.setState({
  //     clicked: false
  //   })
  // }
  //   console.log(this.state.clicked)
  // }

  render() {
    return (
      <div className="product">
        <h1 id="product">Why Atruity?</h1>
        <div className="d-flex justify-content-around align-items-top items">
          
          {/* <div className='product-image' onClick={this.handleChange}>
            <img src="https://dxlfb468n8ekd.cloudfront.net/gsc/Z1SI0X/25/99/6c/25996c162c5f4e5784beb9136c322464/images/home/u8.png?token=016fa69c138e916c272eb7fb995b8ab4" alt='item-one-logo'/>
            <p className="description">Track your progress compared to the rest of the company</p>
          </div> */}

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
