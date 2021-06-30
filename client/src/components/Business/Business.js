import React from 'react'
import './Business.css'
import PlaceHolder from '../../utils/Image-Not-Available.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Business({ business }) {
  return (
    <div className="business-container">
      <img
        src={business.image_url ? business.image_url : PlaceHolder}
        alt={business.name}
      ></img>
      <div className="biz-info">
        <div className="biz-details">
          <p>
            <FontAwesomeIcon icon={faStar} className="star" />
            {business.rating} ({business.review_count})
          </p>
          <a className="phone-link" href={`tel:${business.phone}`}>
            {business.display_phone}
          </a>
        </div>
        <h3>{business.name}</h3>
      </div>
    </div>
  )
}

export default Business
