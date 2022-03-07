import React from 'react'

const PriceCard = ({ planTitle, text, price, subText, className, isPro }) => {
  return (
    <article
      className={`price-card ${isPro === true ? 'pro-card' : 'price-card'}`}
    >
      <div className="price-card__content">
        <div className="left">
          <h2 className={className}>{planTitle}</h2>
          <p>{text}</p>
        </div>
        <div className="right">
          <h1>&#36;{price}</h1>
          <p>{subText}</p>
        </div>
      </div>
      <button
        className={`price-card__btn ${
          isPro === true ? 'pro-card__btn' : 'price-card__btn'
        }`}
        type="button"
      >
        Pick Plan
      </button>
    </article>
  )
}

export default PriceCard
