import Fotter from '../components/Footer'
import HeroImg from '../components/Heroimg'
import Navbar from '../components/Navbar'
import React from 'react'
import WorkCard from '../components/WorkCard'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <WorkCard/>
      <Fotter/>
    </div>
  )
}

export default Home