import React from 'react'
import '../assets/css/HeaderComp.css'
import logo from '../assets/img/MaternityCare.png';

const HeaderComp = () => {
  return (
    <div className='header_container'>
      <div className='header_content'>
        <div className='header_logo'>
          <img src={logo} className='logo' />
          <span className="brand-name">Maternity Care</span>
        </div>
        <div>

        </div>
        <div className='nav-container'>
          <nav className='main-nav'>
            <ul className='nav-list'>
              <li>Community</li>
              <li>Pregnancy Development</li>
              <li>View Package</li>
              <li>Booking</li>
            </ul>
          </nav>

          <div className="header-actions">
            <div className="search-box">
              <input type="text" placeholder="Search..." />
              <button className="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
            <button className="notification-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </button>
            <button className="profile-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>

          </div>
        </div>
      </div>
    </div>

  )
}

export default HeaderComp