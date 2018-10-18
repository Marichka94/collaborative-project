import React from 'react'
import './Form.css'

const Info = () => {
  return (
    <div className='shape'>
      <form>
        <input type='text' placeholder='Name'/>
        <input type='text' placeholder='Email'/>
        <input type='text' placeholder='Password'/>
        <div>
          <button>Back</button>
          <button>Next</button>
        </div>
      </form>
    </div>
  )
}

export default Info
