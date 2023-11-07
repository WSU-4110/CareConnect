import React from 'react'
import Navbar from './Navbar/Navbar'
import Leftbar from "./Mainpage/Leftbar"
import Mainpost from "./Mainpage/Mainpost"
import Rightbar from './Mainpage/Rightbar'
import "./Home.css"

export default function Home() {
  return (
    <div className='home'>
          <Navbar/>
          <div className='ComponentContainer'>
              <Leftbar/>
              <Mainpost/>
              <Rightbar/>
            
          </div>
    </div>
  )
}