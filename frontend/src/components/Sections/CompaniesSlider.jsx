import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/css/companySlider.css";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function CompaniesSlider() {
    const sliderRef = useRef(null);

    const animateCards = () => {
        const cards = gsap.utils.toArray(".company-card");
        gsap.set(cards, { y: 100, opacity: 0 });

        const isMobile = window.innerWidth <= 668;
        gsap.to(cards, {
            y: (index) => isMobile ? -index * 350 : -index * 200,
            opacity: 1,
            stagger: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sliderRef.current,
                start: "top",
                end: isMobile ? "100%" : "130%", // Adjust end based on screen size
                pin: true,
                scrub: 2,
                markers: true
            },
        });
    };

    React.useLayoutEffect(() => {
        animateCards();
        window.addEventListener("resize", animateCards);

        return () => {
            window.removeEventListener("resize", animateCards);
        };
    }, []);

    return (
        <section className="company-slider-area" ref={sliderRef} >
            <div className="company-introduction">
                <h2 className="section-title">About Companies</h2>
                <p className="section-description">We are a group of companies where</p>
            </div>
            <div className="slider" >
                {[...Array(4)].map((_, index) => (
                    <div className="company-card cards" key={index}>
                        <div className="company-logo"></div>
                        <div className="company-details">
                            <h3 className="company-name">Vision Well</h3>
                            <p className="company-description">This Company Is Managing Finances</p>
                            <button className="view-company">
                                <NavLink to='/company' className='company-link'>View Company &#8594;</NavLink>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CompaniesSlider;
