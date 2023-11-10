import "./FooterStyles.css"

import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

import React from 'react'

const Footer = () => {
  return (
    <div className="fotter">
       <div className="fotter-container">
        <div className="left">
          <div className="location">
            <FaHome size ={20} style={{color:"#fff", marginRight: "2rem"}}/>

            <div>
                <p>Bengaluru, Karnataka.</p>
                <p> India.</p>
            </div>
          </div> 

           <div className="phone">
           <h4><FaPhone size ={20} style={{color:"#fff", marginRight: "2rem"}}/>
           +917717708370 </h4>
           </div> 
              
           <div className="email">
           <h4><FaMailBulk size ={20} style={{color:"#fff", marginRight: "2rem"}}/>
            rishavkr379@gmail.com </h4>
           </div> 


        </div>
        <div className="right">
           <h4>About me</h4>
           <p>Hi i am Rishav Kumar a Passionate JavaScript developer who enjoys discussing new 
            projects and challenges while crafting elegant, efficient code.
           </p>
           <div className="social">
  <a href="https://github.com/iamrishavgupta" target="_blank" rel="noopener noreferrer">
    <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
  </a>
  <a href="https://www.linkedin.com/in/rishav-gupta-a0676a1a0/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
  </a>
  <a href="https://twitter.com/iamrishavgupta" target="_blank" rel="noopener noreferrer">
    <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
  </a>
</div>

        </div>
       </div> 
    </div>
  )
}

export default Footer