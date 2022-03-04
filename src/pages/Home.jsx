import React from 'react'
import {
  ArrowRight,
  EmbedIcon,
  NoLimitIcon,
  ResponsiveIcon,
} from '../assets/features/desktop/index'
import topImg from '../assets/home/desktop/create-and-share.jpg'
import middleRowImg from '../assets/home/desktop/beautiful-stories.jpg'
import lastRowImg from '../assets/home/desktop/designed-for-everyone.jpg'
import GalleryCard from '../components/GalleryCard'
import Servicecard from '../components/Servicecard'

const Home = () => {
  return (
    <section className="home">
      <div className="home__row-top">
        <div className="home__row-top-left">
          <div className="content-wrapper">
            <h1 className="title">Create and share your photo stories. </h1>
            <p className="desc">
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <div className="link-box">
              <a href="#!" className="link">
                Get an invite
              </a>

              <ArrowRight className="arrow-right" />
            </div>
          </div>
        </div>
        <div className="home__row-top-right">
          <img src={topImg} alt="create and share" />
        </div>
      </div>
      <div className="home__row-middle">
        <div className="home__row-middle-left">
          <div className="content-wrapper">
            <h1 className="title"> Beautiful stories every time</h1>
            <p className="desc">
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </p>
            <div className="link-box">
              <a href="#!" className="link">
                view the stories
              </a>

              <ArrowRight className="arrow-right" />
            </div>
          </div>
        </div>
        <div className="home__row-middle-right">
          <img src={middleRowImg} alt="create and share" />
        </div>
      </div>
      <div className="home__row-last">
        <div className="home__row-last-left">
          <div className="content-wrapper">
            <h1 className="title"> Designed for everyone</h1>
            <p className="desc">
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </p>
            <div className="link-box">
              <a href="#!" className="link">
                view the stories
              </a>

              <ArrowRight className="arrow-right" />
            </div>
          </div>
        </div>
        <div className="home__row-last-right">
          <img src={lastRowImg} alt="designed for everyone" />
        </div>
      </div>

      <div className="home__gallery-grid-container">
        <GalleryCard
          className="gallery-1"
          title="The Mountains"
          author="John Appleseed"
          text="Read story"
        />
        <GalleryCard
          className="gallery-2"
          title="Sunset Cityscapes"
          author="Benjamin Cruz"
          text="Read story"
        />
        <GalleryCard
          className="gallery-3"
          title="18 Days Voyage"
          author="Alexei Borodin"
          text="Read story"
        />
        <GalleryCard
          className="gallery-4"
          title="Architecturals"
          author="Samantha Brooke"
          text="Read story"
        />
      </div>

      <div className="home__services-grid-container">
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
      </div>
    </section>
  )
}

export default Home
