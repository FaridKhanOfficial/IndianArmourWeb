import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import "../../assets/css/serviceSection.css";

const ServicesSection = () => {
  const serviceRefs = useRef([]);

  useEffect(() => {
    gsap.to(serviceRefs.current, {
      y: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.5,
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="services-area">
      <div className="service-section-intro">
        <div className="details">
          <h2 className="title">Services</h2>
          <p className="description">We provide a wide range of services</p>
        </div>
        <NavLink to="/services" className="services-link">
          <button className="view-services">View All</button>
        </NavLink>
      </div>
      <div className="services">
        {["House Keeping", "Security Services", "Facility Management"].map(
          (service, index) => (
            <a
              href=""
              key={index}
              className="service-box"
              ref={(el) => (serviceRefs.current[index] = el)}
            >
              <img
                src="https://www.sunrisesecurity.in/images/resource/housekeeping.jpg"
                alt={service}
                className="service-img"
              />
              <div className="service-details">
                <h2 className="service-title">{service}</h2>
                <p className="service-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </a>
          )
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
