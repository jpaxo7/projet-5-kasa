import React, { useState } from 'react'
import '../../style/components/SlideShow/slide_show.scss'

function SlideShow({ pictures }) {
  const hasMultiplePictures = pictures.length > 1

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
        className={`carrousel-image ${hasMultiplePictures ? '' : 'single-photo'}`}
        style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
        alt={`Slide ${currentIndex + 1}`}
      >
        <div className="btns">
          <button className="prev" onClick={prevSlide}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div className="counter">
          {currentIndex + 1}/{pictures.length}
        </div>
      </div>
    </div>
  )
}

export default SlideShow
