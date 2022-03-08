import React from 'react'
import { ReactComponent as CheckIcon } from '../assets/pricing/desktop/check.svg'

const Row = ({ title, isChecked, basicPlan, proPlan, businessPlan }) => {
  return (
    <div className="mobile-table__row">
      <h4>{title}</h4>
      <div className="plan-box">
        <div className="inner-plan-box">
          <p className="plan">basic</p>
          {isChecked && basicPlan === 'basic' && <CheckIcon className="icon" />}
        </div>
        <div className="inner-plan-box">
          <p className="plan">pro</p>
          {isChecked && proPlan === 'pro' && <CheckIcon className="icon" />}
        </div>
        <div className="inner-plan-box">
          <p className="plan">business</p>
          {isChecked && businessPlan === 'business' && (
            <CheckIcon className="icon" />
          )}
        </div>
      </div>
    </div>
  )
}

export default Row
