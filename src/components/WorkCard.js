import "./WorkCardStyles.css";

import { NavLink } from 'react-router-dom';
import React from 'react';
import pro1 from '../assets/hotel.jpg'; // Change the image source for the first project
import pro2 from '../assets/crypto.png'; // Add the image source for the second project
import pro3 from '../assets/doctor.jpg'; // Add the image source for the third project

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="img" />
          <h2 className='project-title'>Hotel Booking Website</h2>
          <div className='pro-details'>
            <p>"Discover your perfect getaway with our user-friendly hotel booking website, crafted with HTML, CSS, and JavaScript. Find the ideal accommodations and book your dream vacation effortlessly. Your next adventure awaits!"</p>
             <div className="pro-btns">
                <NavLink to="https://653bcfd639875c060b880ec9--remarkable-capybara-d7e6b2.netlify.app/#reservation" className="btn">View</NavLink>
                <NavLink to="https://github.com/iamrishavgupta/Hotel-booking-website" className="btn">Source</NavLink>
             </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro2} alt="img" />
          <h2 className='project-title'>Real time cryptocurrency tracker app</h2>
          <div className='pro-details'>
            <p>The CryptoCurrency Tracker Website is a web application built using React.js that provides real-time information and
data about various cryptocurrencies. This website leverages cryptocurrency APIs to fetch, display, and analyze data
related to cryptocurrencies, enabling users to stay updated on the ever-evolving world of digital assets.</p>
             <div className="pro-btns">
                <NavLink to="https://cryptotrackerlive.netlify.app/" className="btn">View</NavLink>
                <NavLink to="https://github.com/iamrishavgupta/crypto-app" className="btn">Source</NavLink>
             </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro3} alt="img" />
          <h2 className='project-title'> Doctor consultant </h2>
          <div className='pro-details'>
            <p>Developed a robust web application with ReactJS frontend and Django backend, using SQLite3 and RestAPI. Challenges included deploying ASGI on Apache and creating a real-time chat feature with Django Channels and Redis. The app is vital for healthcare service appointment bookings by citizens.</p>
             <div className="pro-btns">
                <NavLink to="https://homosaviour.co.in" className="btn">View</NavLink>
                <NavLink to="https://drive.google.com/drive/folders/1C6Ys4jDXZKqPEFtmIW16OMSYUq3spgB7?usp=drive_link" className="btn">Source</NavLink>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
