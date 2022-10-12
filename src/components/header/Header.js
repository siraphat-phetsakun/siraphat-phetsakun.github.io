import React from 'react'
import './Header.css'
import Resume from '../../resume/Resume.pdf'


const Header = () => {

    return (
        <section id="home">
            <div class="inner-width">
                <div class="content">
                    <h1></h1>
                    <div class="sm">                     
                        <a href="https://github.com/siraphat-phetsakun" class="fab fa-github"></a>
                        <a href="https://www.linkedin.com/in/siraphat-phetsakun-84bb12230/" class="fab fa-linkedin-in"></a>
                    </div>
                    <div class="buttons">
                        <a href="#about">About Me</a>
                        <a href={Resume} download>Download Resume</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;