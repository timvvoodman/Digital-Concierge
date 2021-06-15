import React from 'react'
import './Home.css'
import Category from '../Category/Category'

function Home() {
  return (
    <div className="home">
      <div className="header">
        <h1>Thank you for visiting!</h1>
        <p>
          Select from the categories below for information about the area and
          some local favorites!
        </p>
      </div>
      <div className="category-container">
        <Category
          title="Beach"
          bg="https://images.unsplash.com/photo-1520942702018-0862200e6873?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        />
        <Category
          title="Food"
          bg="https://images.unsplash.com/photo-1603103750903-518e8bf57bf0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        />
        <Category
          title="Entertainment"
          bg="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <Category
          title="Kids"
          bg="https://images.unsplash.com/photo-1504512692576-b902854572c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
        />
      </div>
    </div>
  )
}

export default Home
