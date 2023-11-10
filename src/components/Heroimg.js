import "./HeroimgStyles.css";

import IntroImg from "../assets/intro-bg.jpg"
import {Link} from "react-router-dom"
import React from 'react'

const Heroimg = () => {
  return (
    <div className="hero">
    <div className="mask">
      <img className="Intro-img" src= {IntroImg} alt = "IntroImg"/>

    </div>
     <div className="content">
       <p>HI, I'M RISHAV.</p>
       <h1>Javascript Developer.</h1>
       <div> 
        <Link to="/project" className="btn">Projects</Link> 
        <Link to="/contact" className="btn-light">CONTACT</Link> 
       </div>
     </div>
    </div>
  )
}

export default Heroimg;