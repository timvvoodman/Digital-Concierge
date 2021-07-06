import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Category from '../Category/Category'

function Home() {
  return (
    <div className="home">
      <Link to="/login" className="host-link">
        {' '}
        <FontAwesomeIcon icon={faUser} className="host-icon" />
        Host Login
      </Link>

      <div className="header">
        <h1>Thank you for visiting!</h1>

        <p>
          Select from the categories below for information about the area and
          some local favorites!
        </p>
      </div>
      <div className="category-container">
        <Link to="/beach" style={{ textDecoration: 'none' }}>
          <Category
            title="Beach"
            bg="https://images.unsplash.com/photo-1520942702018-0862200e6873?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
        </Link>

        <Link to="/food" style={{ textDecoration: 'none' }}>
          <Category
            title="Food"
            bg="https://images.unsplash.com/photo-1603103750903-518e8bf57bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
        </Link>
        <Link to="/activities" style={{ textDecoration: 'none' }}>
          <Category
            title="Activities"
            bg="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </Link>
      </div>
    </div>
  )
}

export default Home
