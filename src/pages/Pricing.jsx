import React, { useState } from 'react'
import { ArrowRight } from '../assets/features/desktop'
import Banner from '../components/Banner'
import MobileTable from '../components/MobileTable'
import PriceCard from '../components/PriceCard'
import Table from '../components/Table'

const Pricing = () => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <section className="pricing">
      <Banner
        title="pricing"
        text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        className="pricing-hero"
      />
      <div className="pricing__plan-box">
        <div className="pricing__subscription-box">
          <h3 className={`${!isClicked && 'active'}`}>Monthly</h3>
          <div className={`circle ${isClicked && 'roll'}`}>
            <span
              className={`inner-circle ${isClicked && 'roll'}`}
              onClick={(e) => setIsClicked(!isClicked)}
            ></span>
          </div>
          <h3 className={`${isClicked && 'active'}`}>Yearly</h3>
        </div>

        <div className="pricing__grid-box">
          <PriceCard
            planTitle="Basic"
            text="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            price={isClicked ? '190.00' : '19.00'}
            subText="per month"
            className="reg-card"
          />
          <PriceCard
            planTitle="Pro"
            text="More advanced features available. Recommended for photography veterans and professionals."
            price={isClicked ? '390.00' : '39.00'}
            subText="per month"
            isPro={true}
          />
          <PriceCard
            planTitle="Business"
            text="Additional features available such as more detailed metrics. Recommended for business owners."
            price={isClicked ? '990.00' : '99.00'}
            subText="per month"
            className="reg-card"
          />
        </div>

        <Table />
        <MobileTable />

        <div className="features__invite-container">
          <h1>
            We’re in beta. <br /> Get your invite <br /> today!
          </h1>
          <div className="link-box">
            <a href="#!" className="link">
              Get an invite
            </a>

            <ArrowRight className="arrow-right" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
