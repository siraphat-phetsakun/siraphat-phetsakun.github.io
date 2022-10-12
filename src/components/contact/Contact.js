import React from 'react'
import './Contact.css'

const Contact = () => {

  return (
    <section id='contact' className='contact'>
            <div className="contact-container">
                <div className="contact-card">
                    <i className="fas fa-mobile-alt"></i>
                    <a href='tel:0820290145' className='map'>082-029-0145</a>
                </div>

                <div className="contact-card">
                    <i className="fas fa-envelope"></i>
                        <a href='mailto:siraphat.phetsakun@gmail.com' className='map'>siraphat.phetsakun@gmail.com</a>
                </div>

                <div className="contact-card">
                    <i className="fas fa-map-marker-alt"></i>
                        <a href='https://goo.gl/maps/pBNLQfZD47ZLKzVy8' className='map'>Bangkok, Thailand</a>
                </div>
            </div>
    </section>
  )
}

export default Contact;