import React from 'react'
import { ArrowRight } from '../assets/features/desktop'
import StoryCard from '../components/StoryCard'

const Stories = () => {
  return (
    <section className="stories">
      <header className="stories__banner">
        <div className="stories__banner-content-box">
          <h4>LAST MONTH’S FEATURED STORY</h4>
          <h1>
            HAZY FULL <br /> MOON OF <br /> APPALACHIA
          </h1>
          <p className="sub-text">March 2nd 2020 by John Appleseed </p>
          <p>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <div className="link-box">
            <a href="#!" className="link">
              Get an invite
            </a>

            <ArrowRight className="arrow-right" />
          </div>
        </div>
      </header>
      <div className="stories__grid-container">
        <StoryCard
          className="card-1"
          date="April 16th 2020"
          title="The Mountains"
          author="John Appleseed"
          text="Read Story"
        />
        <StoryCard
          className="card-2"
          date="April 14th 2020"
          title="Sunset Cityscapes"
          author="Benjamin Cruz"
          text="Read Story"
        />
        <StoryCard
          className="card-3"
          date="April 11th 2020"
          title="18 Days Voyage"
          author="Alexei Borodin"
          text="Read Story"
        />
        <StoryCard
          className="card-4"
          date="April 9th 2020"
          title="Architecturals"
          author="Samantha Brooke"
          text="Read Story"
        />
        <StoryCard
          className="card-5"
          date="April 7th 2020"
          title="World Tour 2019"
          author="Timothy Wagner"
          text="Read Story"
        />
        <StoryCard
          className="card-6"
          date="April 3rd 2020"
          title="Unforeseen Corners"
          author="William Malcolm"
          text="Read Story"
        />
        <StoryCard
          className="card-7"
          date="March 29th 2020"
          title="King on Africa: Part ||"
          author="Tim Hillenburg"
          text="Read Story"
        />
        <StoryCard
          className="card-8"
          date="March 21st 2020"
          title="The Trip to Nowhere"
          author="Felicia Rourke"
          text="Read Story"
        />
        <StoryCard
          className="card-9"
          date="March 19th 2020"
          title="Rage of The Sea"
          author="Mohammed Abdul"
          text="Read Story"
        />
        <StoryCard
          className="card-10"
          date="March 16th 2020"
          title="Running Free"
          author="Michelle"
          text="Read Story"
        />
        <StoryCard
          className="card-11"
          date="March 11th 2020"
          title="Behind The Waves"
          author="Lamar Wilson"
          text="Read Story"
        />
        <StoryCard
          className="card-12"
          date="March 9th 2020"
          title="Calm Waters"
          author="Samantha Brooke"
          text="Read Story"
        />
        <StoryCard
          className="card-13"
          date="March 5th 2020"
          title="The Milky Way"
          author="Benjamin Cruz"
          text="Read Story"
        />
        <StoryCard
          className="card-14"
          date="March 4th 2020"
          title="Night at The Dark Forest"
          author="Mohammed Abdul"
          text="Read Story"
        />
        <StoryCard
          className="card-15"
          date="March 1st 2020"
          title="Somwarpet's Beauty"
          author="Michelle"
          text="Read Story"
        />
        <StoryCard
          className="card-16"
          date="Feburary 25th 2020"
          title="Land of Dreams"
          author="William Malcolm"
          text="Read Story"
        />
      </div>
    </section>
  )
}

export default Stories
