import AboutContent from '../components/AboutContent'
import Fotter from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Navbar from '../components/Navbar'
import React from 'react'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT." text="Im a friendly Javascript Developer." />
      <AboutContent/>
      <Fotter/>
    </div>
  )
}

export default About