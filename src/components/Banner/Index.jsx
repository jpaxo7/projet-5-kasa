import React from 'react'
import '../../style/components/Banner/style.scss'

function Banner({ backgroundImage, title }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>
      <h1>{title}</h1>
    </div>
  )
}

export default Banner
