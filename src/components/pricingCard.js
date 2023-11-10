import "./PricingCardStyles.css"

import { Link } from "react-router-dom"
import React from 'react'

const pricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
            <h3>- Skills -</h3>
            <span className="bar"></span>
            <p className="btc">Frontend</p>
            <p> HTML </p>
            <p> CSS </p>
            <p> Javascript</p>
            <p> Tailwind </p>
            <p> Typescript</p>
            <p> React js </p>
            <p> Next js 13 </p>
            <Link to="/contact" className="btg">Contact me</Link>
        </div>

        <div className="card">
            <h3>- Skills -</h3>
            <span className="bar"></span>
            <p className="btc">Backend</p>
            <p> Node js </p>
            <p> Express js </p>
            <p>Next Auth </p>
            <p> Python </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <Link to="/contact" className="btg">contact me</Link>
        </div>

        <div className="card">
            <h3>-Skills-</h3>
            <span className="bar"></span>
            <p className="btc">Database & Devops</p>
            <p> Git </p>
            <p> AWS </p>
            <p> MySql </p>
            <p> MongoDB </p>
            <br></br>
            
            <Link to="/contact" className="btg">contact me</Link>
        </div>

      </div>  
    </div>
  )
}

export default pricingCard