import React from 'react'

import '../assets/css/FooterComp.css'

const FooterComp = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Maternity Care</h3>
          <ul>
            <li>Pregnancy Tracker</li>
            <li>Health Records</li>
            <li>Nutrition Guide</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>Community</li>
            <li>FAQ</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: HaiHa@gmail.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Baby Care St</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Baby Care. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default FooterComp