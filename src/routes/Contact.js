import Form from '../components/Form'
import Fotter from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Navbar from '../components/Navbar'
import React from 'react'

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <Heroimg2 heading="CONTACT." text="Lets have a chat"/>
        <Form/>
      <Fotter/>
    </div>
  )
}

export default Contact