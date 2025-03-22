import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/css/companySlider.css";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function CompaniesSlider() {
    const sliderRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const animateCards = () => {
                // Kill previous animations and ScrollTriggers
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
                gsap.killTweensOf(cardsRef.current);

                // Get screen size
                const isTablet = window.innerWidth >= 630;


                // Reset elements before animation
                gsap.set(cardsRef.current, { y: 100, opacity: 0 });

                gsap.to(cardsRef.current, {
                    y: (index) => (isTablet ? -index * 200 : -index * 350),
                    opacity: 1,
                    stagger: 0.3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sliderRef.current,
                        start: "top",
                        end: isTablet ? "100%" : "130%",
                        pin: true,
                        scrub: 1.5,
                        markers: false,
                    },
                });

                // Refresh ScrollTrigger after resizing
                ScrollTrigger.refresh();
            };

            // Run the animation
            animateCards();

            // Resize handling (debounced for performance)
            let resizeTimeout;
            const handleResize = () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(animateCards, 300);
            };
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        });

        return () => ctx.revert(); // Cleanup on component unmount
    }, []);

    return (
        <section className="company-slider-area" ref={sliderRef}>
            <div className="company-introduction">
                <h2 className="section-title">About Companies</h2>
                <p className="section-description">We are a group of companies where</p>
            </div>
            <div className="slider">
                {[...Array(4)].map((_, index) => (
                    <div
                        className="company-card cards"
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                    >
                        <div className="company-logo"></div>
                        <div className="company-details">
                            <h3 className="company-name">Vision Well</h3>
                            <p className="company-description">This Company Is Managing Finances</p>
                            <button className="view-company">
                                <NavLink to="/company" className="company-link">
                                    View Company &#8594;
                                </NavLink>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CompaniesSlider;
