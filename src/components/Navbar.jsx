import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'><i className='bx bxl-snapchat bx-sm' style={{color:'#ffffff'}}  ></i></span>
      <div className='user'>
          <img src='https://files.codingninjas.com/profile236766498c77d6f39b7da1c4e0c22ffee73e0cf.png' alt='img'/>
          <span>Hola</span>
          <button><span>Logout</span> <i className='bx bx-log-out bx-sm bx-rotate-180'  ></i></button>
      </div>
    </div>
  )
}
