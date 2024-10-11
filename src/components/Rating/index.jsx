import React from 'react'
import '../../style/components/Rating/style.scss'

function Rating({ rating }) {
  const starsRange = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {starsRange.map((stars) =>
        rating >= stars ? (
          <span>
            <i class="fa-solid fa-star filled"></i>
          </span>
        ) : (
          <span>
            <i class="fa-solid fa-star star"></i>
          </span>
        ),
      )}
    </div>
  )
}

export default Rating
