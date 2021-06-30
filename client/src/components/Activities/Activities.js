import React, { useEffect, useState } from 'react'
import API from '../../utils/axios'
import './Activities.css'
import Business from '../Business/Business'
import HomeBtn from '../HomeBtn/HomeBtn'

function Activities() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    loadActivities()
  }, [])

  //Get Restaurants within 10 miles
  function loadActivities() {
    API.getActivities()
      .then((res) => setActivities(res.data))
      .catch((err) => console.log(err))
  }
  console.log(activities)

  return (
    <div className="entertainment">
      <HomeBtn />
      <div className="header">
        <h1>Activities</h1>
      </div>
      <div className="activities-container">
        {activities?.map((activity) => (
          <a key={activity.id} href={activity.url}>
            <Business business={activity} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Activities
