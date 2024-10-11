import React, { useState } from 'react'
import '../../style/components/Collapse/style.scss'

function Collapse({ index, title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
    setHasInteracted(true)
  }

  return (
    <article className="collapse">
      <div className="collapse-header">
        <h2 className="collapse-title">{title}</h2>
        <button className="toggle-button" onClick={toggleCollapse}>
          <i
            className={`fa-solid fa-chevron-up chevron ${isOpen ? 'rotate' : ''}`}
          ></i>
        </button>
      </div>
      {hasInteracted && (
        <div
          className={`collapse-content ${isOpen ? 'slide-down' : 'slide-up'}`}
        >
          <p>{content}</p>
        </div>
      )}
    </article>
  )
}

export default Collapse
