import React from 'react'
import Navbar from './Navbar/Navbar'
import Leftbar from "./Mainpage/Leftbar"
import "./Home.css"

export default function Home() {
  return (
    <div className='home'>
          <Navbar/>
          <div>
            <Leftbar/>
          </div>
    </div>
  )
}