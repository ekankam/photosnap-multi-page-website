import React from 'react'
import Row from './Row'

const MobileTable = () => {
  return (
    <div className="mobile-table">
      <div className="mobile-table__header">
        <h4>the features</h4>
      </div>
      <Row
        title="UNLIMITED STORY POSTING"
        isChecked={true}
        basicPlan="basic"
        proPlan="pro"
        businessPlan="business"
      />
      <Row
        title="UNLIMITED PHOTO UPLOAD"
        isChecked={true}
        basicPlan="basic"
        proPlan="pro"
        businessPlan="business"
      />
      <Row
        title="EMBEDDING CUSTOM CONTENT"
        isChecked={true}
        proPlan="pro"
        businessPlan="business"
      />
      <Row
        title="CUSTOMIZE METADATA"
        isChecked={true}
        proPlan="pro"
        businessPlan="business"
      />
      <Row title="ADVANCED METRICS" isChecked={true} businessPlan="business" />
      <Row title="PHOTO DOWNLOADS" isChecked={true} businessPlan="business" />
      <Row
        title="SEARCH ENGINE INDEXING"
        isChecked={true}
        businessPlan="business"
      />
      <Row title="CUSTOM ANALYTICS" isChecked={true} businessPlan="business" />
    </div>
  )
}

export default MobileTable
