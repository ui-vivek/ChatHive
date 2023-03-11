import React from 'react'

export default function Chat() {
  return (
    <div  className='chat'>
      <div className="chatInfo">
        <span>Hola</span>
        <div className="chatIcon">
          <span><i class='bx bxs-video bx-sm' style={{color:'#e1eedd'}}  ></i></span>
          <span><i class='bx bxs-user-plus bx-sm' style={{color:'#e1eedd'}}  ></i></span>
          <span><i class='bx bx-dots-horizontal-rounded bx-sm' style={{color:'#e1eedd'}}  ></i></span>
        </div>
      </div>
    </div>
  )
}
