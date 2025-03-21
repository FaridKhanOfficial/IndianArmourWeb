import React from "react";
import '../../assets/css/heroSection.css'
import hero from '../../assets/hero.mp4'
import {NavLink} from 'react-router-dom'

const HeroSection = () => {
    return (
      <section className="hero">
        {/* Background Video */}
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={hero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        {/* Overlay */}
        <div className="hero-overlay"></div>
  
        {/* Content */}
        <div className="hero-content">
          <h4 className="hero-subtitle">WELCOME TO INDIAN ARMOUR</h4>
          <h1 className="hero-title">Safety everywhere, book effortlessly today!</h1>
          <p className="hero-text">
            We provide men whom can insure your safety and hygiene in indian armour we are very careful to insure your safety
          </p><br /><br />
          <div className="hero-buttons">
            <NavLink to="/about" className="btn-primary">Learn More</NavLink>
            <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              ▶ Play Video
            </a>
          </div>
        </div>
      </section>
    );
  };
  

export default HeroSection;
