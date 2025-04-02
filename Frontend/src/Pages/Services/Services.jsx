import React, { useState } from "react";
import Reachus from "../../components/Reachus";
import HuffyComponent from "../../components/HuffyComponent";
import TestimonialsSection from "../../components/TestimonialsSection";
import Hero from "../../components/Hero";
import Service from "../../components/Service";
import Home from "../../components/Home";
import HeroSection from "../../components/Herosection";
import HomeSection from "../../components/HomeSection";


function Services() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#001f3f]">
      <HeroSection/>
        <Home/>
        <HomeSection/>
        <Hero/>
        <Service/>
        <HuffyComponent/>
        <TestimonialsSection onOpen={() => setShowModal(true)} />
      {showModal && <Reachus onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Services;
