import React from "react";
import HeroSection from "../components/Sections/HeroSection";
import CompaniesSlider from "../components/Sections/CompaniesSlider";
import ServicesSection from "../components/Sections/ServicesSection";

function Home() {
  return (

    <div>
      <HeroSection/>
      <CompaniesSlider/>
      <ServicesSection/>
    </div>

  )
}

export default Home;
