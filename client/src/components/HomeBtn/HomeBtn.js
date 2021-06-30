import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './HomeBtn.css'

function HomeBtn() {
  return (
    <div className="homeBtn">
      <Link to="/" className="nav-link">
        <FontAwesomeIcon icon={faHome} />
      </Link>
    </div>
  )
}

export default HomeBtn
