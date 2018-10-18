import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar d-flex flex-column text-center'>
      <a><h3 className='sidebar-item font-weight-light p-3'>Overview</h3></a>
      <a><h3 className='sidebar-item font-weight-light p-3'>Goals</h3></a>
      <a><h3 className='sidebar-item font-weight-light p-3'>Roadmap</h3></a>
      <a><h3 className='sidebar-item font-weight-light p-3'>Education</h3></a>
      <div className='sidebar-item pt-4'>
        <img className='sidebar-item w-75' src='https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2015/03/youtube-logo2.jpg' />
        <p className=" p-4">How to Write a Vision Statement</p>
      </div>
      <div className='sidebar-item pt-4'>
        <img className='w-75' src='https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2015/03/youtube-logo2.jpg' />
        <p className="">How to Write a Mission Statement</p>
      </div>
      <div className='sidebar-item pt-4'>
        <img className='w-75' src='https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2015/03/youtube-logo2.jpg' />
        <p className="">How to Track Your Progress</p>
      </div>
    </div>
  )
}

export default Sidebar
