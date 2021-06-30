import React, { useEffect, useState } from 'react'
import API from '../../utils/axios'
import './Food.css'
import Business from '../Business/Business'
import HomeBtn from '../HomeBtn/HomeBtn'

function Food() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    loadRestaurants()
  }, [])

  //Get Restaurants within 10 miles
  function loadRestaurants() {
    API.getRestaurants()
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err))
  }
  console.log(restaurants)

  return (
    <div className="food">
      <HomeBtn />
      <div className="header">
        <h1>Checkout some nearby Restaurants!</h1>
      </div>
      <div className="restaurants-container">
        {restaurants?.map((restaurant) => (
          <Business key={restaurant.id} business={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Food
