import React from 'react'
import './Footer.css'
import Resume from '../../resume/Resume.pdf'

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="row">
          <div className="footer-col">
            <h4>Page</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Download</h4>
            <ul>
              <li><a href={ Resume } download>Resume</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:0820290145">0820290145</a></li>
              <li><a href="mailto:siraphat.phetsakun@gmail.com">siraphat.phetsakun@gmail.com</a></li>
              <li><a href="https://goo.gl/maps/pBNLQfZD47ZLKzVy8">Bangkok, Thailand</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>hire me</h4>
            <div className="social-links">
              <a href="https://github.com/siraphat-phetsakun"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/siraphat-phetsakun-84bb12230/"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;