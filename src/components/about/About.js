import React from 'react'
import './About.css'

import ProfileIMG from '../../images/profile.jpg'

const About = () => {

  return (
    <section id='about' className='about'>
        <div className='about-content'>
            <img src={ProfileIMG} />
            <div className='about-text'>
                <h1>About Me</h1>
                <h5>Developer & Engineer</h5>
                <p>I am a software engineer. I study in thammasat university. I can provide clean code and perfect design. I also make the website more & more interactive with web application. A responsive design makes me website accessible to all users, regardless of their device.</p>
            </div>
        </div>
    </section>
  )
}

export default About;