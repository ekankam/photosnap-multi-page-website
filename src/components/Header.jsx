import React from 'react'
import { Link } from 'react-router-dom'
import { MenuAlt4Icon, XIcon } from '@heroicons/react/outline'
import { LogoDark } from '../assets/features/desktop'

const Header = ({ toggleMenu, setToggleMenu }) => {
  return (
    <header id="header">
      <nav className="navbar">
        <Link
          to="/"
          onClick={(e) => setToggleMenu(false)}
          className="navbar__logo-box"
        >
          <LogoDark />
        </Link>
        {/* nav links */}
        <ul className="navbar__nav-items">
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
        {/* button */}
        <button className="navbar__invite-btn" type="button">
          Get an invite
        </button>
        {/* menu icon */}
        {toggleMenu ? (
          <XIcon
            className="navbar__toggle-menu"
            onClick={(e) => setToggleMenu(false)}
          />
        ) : (
          <MenuAlt4Icon
            className="navbar__toggle-menu"
            onClick={(e) => setToggleMenu(true)}
          />
        )}
      </nav>
    </header>
  )
}

export default Header
