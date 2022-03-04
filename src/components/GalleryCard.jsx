import React from 'react'
import { ArrowRight } from '../assets/features/desktop'

const GalleryCard = ({ title, author, text, className }) => {
  return (
    <article className={`card ${className}`}>
      <div className="card__content">
        <h3>{title}</h3>
        <p className="card__author">{`by ${author}`}</p>
        <span className="card__line"></span>
        <div className="card__more-info">
          <p className="text">{text}</p>
          <ArrowRight className="arrow-right" />
        </div>
      </div>
    </article>
  )
}

export default GalleryCard
