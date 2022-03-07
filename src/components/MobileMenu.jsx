import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = ({ toggleMenu, setToggleMenu }) => {
  return (
    <aside className={`mobile-menu ${toggleMenu && 'open'}`}>
      <nav className="navbar">
        <div className="navbar__inner-content">
          <ul className="navbar__nav-items">
            <li className="nav-item" onClick={(e) => setToggleMenu(false)}>
              <Link to="/stories" className="nav-link">
                stories
              </Link>
            </li>
            <li className="nav-item" onClick={(e) => setToggleMenu(false)}>
              <Link to="/features" className="nav-link">
                features
              </Link>
            </li>
            <li className="nav-item" onClick={(e) => setToggleMenu(false)}>
              <Link to="/pricing" className="nav-link">
                pricing
              </Link>
            </li>
          </ul>
          <span className="navbar__line"></span>
          <button className="navbar__invite-btn" type="button">
            Get an invite
          </button>
        </div>
      </nav>
    </aside>
  )
}

export default MobileMenu
