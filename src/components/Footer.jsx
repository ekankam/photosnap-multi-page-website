import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, LogoWhite } from '../assets/features/desktop'
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
} from '../assets/shared/desktop'

const Footer = () => {
  const year = new Date().getFullYear().toString()
  return (
    <footer id="footer">
      <div className="footer-wrapper">
        <div className="footer-wrapper__left">
          <LogoWhite />
          <div className="social-box">
            <a
              href="https://www.facebook.com/"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon className="icon icon-1" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <YoutubeIcon className="icon icon-2" />
            </a>
            <a
              href="https://www.twitter.com/"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon className="icon icon-3" />
            </a>
            <a
              href="https://www.pinterest.com/"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <PinterestIcon className="icon icon-4" />
            </a>
            <a
              href="https://www.instagram.com/"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className="icon icon-5" />
            </a>
          </div>
        </div>

        <ul className="footer-wrapper__nav-items">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/stories" className="nav-link">
              stories
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/features" className="nav-link">
              features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-link">
              pricing
            </Link>
          </li>
        </ul>

        <div className="footer-wrapper__right">
          <div className="link-box">
            <a href="#!" className="link">
              Get an invite
            </a>

            <ArrowRight className="arrow-right" />
          </div>
          <p>{`Copyright ${year}. All Rights Reserved`}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
