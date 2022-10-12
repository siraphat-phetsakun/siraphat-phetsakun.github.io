import React from 'react'

import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import About from './components/about/About'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {

  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
