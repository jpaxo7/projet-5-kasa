import React, { useState } from 'react'
import '../../style/components/Carrousel/style.scss'

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1,
    )
  }

  return (
    <div className="carrousel">
      <div
        className="carrousel-image"
        style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
        alt={`Slide ${currentIndex + 1}`}
      >
        <div className="btns">
          <button className="prev" onClick={prevSlide}>
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div className="counter">
          {currentIndex + 1}/{pictures.length}
        </div>
      </div>
    </div>
  )
}

export default Carrousel
