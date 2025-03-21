import React, { useState } from "react";
import "../../assets/css/header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div className="navbar-area">
      <div className="top-bar">
        <span style={{color:'white'}}>Email: <a href="mailto:ex@es.com" style={{color:'blue', textDecoration:'none'}}> exmplaef@example.com</a></span>
        <div className="social-icons-top">
          <NavLink to="#" className="social-link">
            <FontAwesomeIcon icon={faFacebook} />
          </NavLink>
          <NavLink to="#" className="social-link">
            <FontAwesomeIcon icon={faXTwitter} />
          </NavLink>
          <NavLink to="#" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </NavLink>
        </div>
      </div>
      <header>
        <span className="logo">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
            alt=""
          />
        </span>
        <div className="navigation">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>
          <NavLink to="/testimonials" className="nav-link">
            Testimonials
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>
        <a href="tel:7624075274">
          <motion.button 
            className="cta" 
            animate={{ y: [4, -7, 4, 7] }}
            transition={{ repeat: Infinity, duration: 2}}
          >
            Call Now
          </motion.button>
        </a>
        <MobileMenu />
      </header>
    </div>
  );
};

export default Header;