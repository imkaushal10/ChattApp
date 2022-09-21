import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Live Chat</span>
      <div className='user'>
        <img src="https://cdn.pixabay.com/photo/2016/06/11/12/15/females-1450050_960_720.jpg" alt="" />
        <span>Jack</span>
        <button>logout</button>  
      </div>  
    </div>
  )
}

export default Navbar