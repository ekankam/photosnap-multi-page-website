import React from 'react'

const Banner = ({ title, text, className }) => {
  return (
    <header className="banner">
      <div className="banner__content-box">
        <div className="inner-context">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
      <div className={`banner__image-box ${`banner__${className}`}`}></div>
    </header>
  )
}

export default Banner
