import React from "react";
import './Overview.css'
import image1 from './image/image1.png'
import image2 from './image/image2.png'

const Overview = () => {
  return (
    <div>
      <div className="d-flex ov-box justify-content-center shadow mt-5">
        <div>
          <p className="text-size">My Progress</p>
          <img className="gauge" src={image1}/>
        </div>
        <div>
          <p className="text-size">Company's Progress</p>
          <img className="gauge" src={image2}/>
        </div>
      </div>
      <div className='ov-box shadow mt-5'>
        <p className="text-size">Stars earned this month</p>
        <div className="d-flex justify-content-center">
          <h1 className="text-muted number">8</h1>
          <img className="star" alt="star" src="https://d2t44wh9rnwl5y.cloudfront.net/gsc/Z1SI0X/e1/24/45/e1244536199e41f5881939e372bfe371/images/overview/u256.png?token=7262128796b4e7e3fe78c487e80cf3a3" />
        </div>
      </div>
      <div className='ov-box shadow mt-5'>
        <div className="d-flex justify-content-between align-items-start">
          <p className="text-size">Mission:</p>
          <p className="text-muted text-left pl-4">Ab deserunt eruditionem a an eram expetendis est ita anim constias, ne ipsum. Noster quibusdam hic fidelissimae, ex velit et anim ita illum arbitror sed dolor eram, anim ullamco illustriora.</p>
        </div>
        <div className="d-flex justify-content-between align-items-start">
          <p className="text-size">Vission:</p>
          <p className="text-muted text-left pl-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Ab deserunt eruditionem a an eram expetendis est ita anim constias, ne ipsum.</p>
        </div>
      </div>
    </div>
  )
}

export default Overview
