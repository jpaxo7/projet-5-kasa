import React, { useState } from 'react'
import '../../style/components/Carrousel/style.scss'

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('')

  const nextSlide = () => {
    setDirection('next')
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const prevSlide = () => {
    setDirection('prev')
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1,
    )
  }

  return (
    <div className="carrousel">
      <div className="carrousel-container">
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`carrousel-image ${direction}`}
        />
      </div>
      <button className="prev" onClick={prevSlide}>
        {'<'}
      </button>
      <button className="next" onClick={nextSlide}>
        {'>'}
      </button>

      <div className="counter">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  )
}

export default Carrousel
