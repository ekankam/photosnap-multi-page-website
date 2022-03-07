import React from 'react'
import {
  ArrowRight,
  BoostExposure,
  CustomDomain,
  DragDrop,
  EmbedIcon,
  NoLimitIcon,
  ResponsiveIcon,
} from '../assets/features/desktop'
import Banner from '../components/Banner'
import Servicecard from '../components/Servicecard'

const Features = () => {
  return (
    <section className="features">
      <Banner
        title="features"
        text="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        className="feature-hero"
      />

      <div className="features__grid-container">
        <Servicecard
          icon={<ResponsiveIcon />}
          subTitle="100% Responsive"
          text="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
        />
        <Servicecard
          icon={<NoLimitIcon />}
          subTitle="No photo upload limit"
          text="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
        />
        <Servicecard
          icon={<EmbedIcon />}
          subTitle="Available to Embed"
          text="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
        />
        <Servicecard
          icon={<CustomDomain />}
          subTitle="Custom Domain"
          text="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding! "
        />
        <Servicecard
          icon={<BoostExposure />}
          subTitle="Boost Your Exposure"
          text="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list. "
        />
        <Servicecard
          icon={<DragDrop />}
          subTitle="Drag & Drop Image"
          text="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
        />
      </div>

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
    </section>
  )
}

export default Features
