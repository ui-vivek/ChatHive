import React from 'react'

export default function Input() {
  return (
    <div className='input'>
      <input type='text' placeholder='enter something'/>
      <div className="send">
      <input type='file' id='file' style={{display:'none'}}/>
      <span><label htmlFor='file'> <i className='bx bx-paperclip bx-sm'></i></label></span>
      <span><i className='bx bxs-send bx-sm' style={{color:'#183a1d'}}  ></i></span>
      </div>
    </div>
  )
}
