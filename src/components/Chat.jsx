import React from 'react'
import Messages from './Messages'
import Input from './Input'

export default function Chat() {
  return (
    <div  className='chat'>
      <div className="chatInfo">
        <span>Hola</span>
        <div className="chatIcon">
          <span><i className='bx bxs-video bx-sm' style={{color:'#e1eedd'}}  ></i></span>
          <span><i className='bx bxs-user-plus bx-sm' style={{color:'#e1eedd'}}  ></i></span>
          <span><i className='bx bx-dots-horizontal-rounded bx-sm' style={{color:'#e1eedd'}}  ></i></span>
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}
