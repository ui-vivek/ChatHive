import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import './style/home.scss'

export default function Home() {
  return (
    <div className='home'>
      <div className='contnair'>
         <Sidebar/>
         <Chat/>
      </div>
    </div>
  )
}
