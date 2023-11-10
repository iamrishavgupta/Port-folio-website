import Fotter from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Navbar from '../components/Navbar'
import PricingCard from '../components/pricingCard';
import React from 'react'
import WorkCard from '../components/WorkCard';

const project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works"/>
      <WorkCard/>
      <PricingCard />
      <Fotter/>
    </div>
  )
}

export default project