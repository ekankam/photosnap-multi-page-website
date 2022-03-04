import React from 'react'
import { ArrowRight } from '../assets/features/desktop/index'
import topImg from '../assets/home/desktop/create-and-share.jpg'
import middleRowImg from '../assets/home/desktop/beautiful-stories.jpg'
import lastRowImg from '../assets/home/desktop/designed-for-everyone.jpg'
import GalleryCard from '../components/GalleryCard'

const Stories = () => {
  return (
    <section className="stories">
      <div className="stories__row-top">
        <div className="stories__row-top-left">
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
        <div className="stories__row-top-right">
          <img src={topImg} alt="create and share" />
        </div>
      </div>
      <div className="stories__row-middle">
        <div className="stories__row-middle-left">
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
        <div className="stories__row-middle-right">
          <img src={middleRowImg} alt="create and share" />
        </div>
      </div>
      <div className="stories__row-last">
        <div className="stories__row-last-left">
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
        <div className="stories__row-last-right">
          <img src={lastRowImg} alt="designed for everyone" />
        </div>
      </div>

      <div className="stories__gallery-grid-container">
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
    </section>
  )
}

export default Stories
