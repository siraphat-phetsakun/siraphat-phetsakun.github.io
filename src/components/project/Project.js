import React from 'react'
import './Project.css'

const Project = () => {

  return (
    <section id='project' className='project'>
        <div className='project-container'>

            <div className='project-card'>
                <div className='project-circle'>
                    <h2>
                        <i className="fab fa-github"></i>
                    </h2>
                </div>
                <div className='project-content'>
                    <p>face recognition website with machine learning</p>
                    <a href='https://github.com/siraphat-phetsakun/eKYC-python-fastapi'>View Source code</a>
                </div>
            </div>

            <div className='project-card'>
                <div className='project-circle'>
                    <h2>
                        <i className="fab fa-github"></i>
                    </h2>
                </div>
                <div className='project-content'>
                    <p>portfolio restfulAPI using React.Js and Laravel</p>
                    <a href='https://github.com/siraphat-phetsakun/portfolio'>View Source code</a>
                </div>
            </div>

            <div className='project-card'>
                <div className='project-circle'>
                    <h2>
                        <i className="fab fa-github"></i>
                    </h2>
                </div>
                <div className='project-content'>
                    <p>firebase authentication (email, google, facebook) using React Native</p>
                    <a href='https://github.com/SiraphatPhetsakun/react-native-firebase-auth'>View Source code</a>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Project;