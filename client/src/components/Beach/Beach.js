import React from 'react'
import './Beach.css'
import HomeBtn from '../HomeBtn/HomeBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWater, faSun } from '@fortawesome/free-solid-svg-icons'

function Beach() {
  return (
    <div className="beach">
      <HomeBtn />
      <div className="header">
        <h1>Conditions at the Beach</h1>
      </div>
      <div className="beach-container">
        <div className="beach-link">
          <h2>Water Conditions & Tides</h2>
          <a
            href="https://www.surfline.com/surf-report/the-wall-north-/5a1c910b0f87fe001a0c70d8"
            className="tides"
          >
            <FontAwesomeIcon icon={faWater} className="icon" />
          </a>
        </div>
        <div className="beach-link">
          <h2>Weather Forcast</h2>
          <a
            href="https://www.wunderground.com/weather/us/nh/hampton"
            className="weather"
          >
            <FontAwesomeIcon icon={faSun} className="icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Beach
