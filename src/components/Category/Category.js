import React from 'react'
import './Category.css'

function Category({ title, color, bg }) {
  //inline styles for category tiles
  const background = {
    background: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  }

  return (
    <div className="category">
      <div className="category-item" style={{ ...background }}>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Category
