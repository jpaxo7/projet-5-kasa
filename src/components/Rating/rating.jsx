import React from 'react'
import '../../style/components/Rating/rating.scss'

function Rating({ rating }) {
  const starsRange = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {starsRange.map((stars) =>
        rating >= stars ? (
          <span key={stars}>
            <i className="fa-solid fa-star filled"></i>
          </span>
        ) : (
          <span key={stars}>
            <i className="fa-solid fa-star star"></i>
          </span>
        ),
      )}
    </div>
  )
}

export default Rating
