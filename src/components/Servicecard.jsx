import React from 'react'

const Servicecard = ({ icon, subTitle, text }) => {
  return (
    <div className="service-card">
      <div className="service-card__icon-box">{icon}</div>
      <div className="service-card__contents">
        <h3>{subTitle}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Servicecard
