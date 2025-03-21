import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import "../../assets/css/mobileMenu.css";
import logo from '../../assets/images/logo.png'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

return (
    <div className="menu-container">
        {/* Menu Button */}
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Overlay */}
        {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>}

        {/* Menu Drawer */}
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? 0 : "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="menu-drawer"
        >

            {/* Close Button */}
            <button className="close-button" onClick={() => setIsOpen(false)}>
                <X size={24} />
            </button>

            {/* Logo */}
            <div className="menu-logo">
                <center><img width='80px' src={logo} alt="Logo" className="logo-img" /></center>
            </div>
            {/* Navigation Links */}
            <nav className="menu-nav">
                <NavLink to="/" className="menu-link">Home</NavLink>
                <NavLink to="/about" className="menu-link">About</NavLink>
                <NavLink to="/services" className="menu-link">Services</NavLink>
                <NavLink to="/testimonials" className="menu-link">Testimonials</NavLink>
                <NavLink to="/contact" className="menu-link">Contact</NavLink>
            </nav>
<br />
            {/* Bottom Section */}
            <div className="menu-bottom">
                <div className="social-icons">
                    <NavLink to="#" className="social-link"><FontAwesomeIcon icon={faFacebook} /></NavLink>
                    <NavLink to="#" className="social-link"><FontAwesomeIcon icon={faXTwitter} /></NavLink>
                    <NavLink to="#" className="social-link"><FontAwesomeIcon icon={faInstagram} /></NavLink>
                </div>
                <button className="cta-button">Get Started</button>
            </div>
        </motion.div>
    </div>
);
};

export default MobileMenu;