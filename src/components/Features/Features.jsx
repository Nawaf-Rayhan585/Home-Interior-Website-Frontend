import React from 'react'
import { LuCalendarCheck } from "react-icons/lu";
import { PiHandCoins } from "react-icons/pi";
import { BsBox2Heart } from "react-icons/bs";
import './Features.css'

const Features = () => {
  return (
    <div className="card-container">
      <div className='features-card-container'>
        <div className="card-item">
          <div className="icon-card-container">
            <LuCalendarCheck className='icon-card'/>
          </div>
          <h3 className="header-card-3">Save Time</h3>
          <p className="p-card">Realistic 3D model & top professional help to take the guesswork out of the designing process.</p>
        </div>

        <div className="card-item">
          <div className="icon-card-container">
            <PiHandCoins className='icon-card'/>
          </div>
          <h3 className="header-card-3">Save Money</h3>
          <p className="p-card">Top talent for up to 80% less than traditional interior design & trade discounts of 5% to 45% at the top vendors.</p>
        </div>

        <div className="card-item">
          <div className="icon-card-container">
            <BsBox2Heart className='icon-card'/>
          </div>
          <h3 className="header-card-3">Convenient & Stress Free</h3>
          <p className="p-card">A fun and easy white-glove service including everything from design to convenient ordering.</p>
        </div>
    </div>
    </div>
  )
}

export default Features
