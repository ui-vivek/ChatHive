import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>Logo</span>
      <div className='user'>
          <img src='https://files.codingninjas.com/profile236766498c77d6f39b7da1c4e0c22ffee73e0cf.png' alt='img'/>
          <span>Hola</span>
          <button>Logout</button>
      </div>
    </div>
  )
}
