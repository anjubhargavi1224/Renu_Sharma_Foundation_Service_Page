import React, { useState } from "react";
import Reachus from "../../components/Reachus";
import Banner from "../../components/Banner";
import Carousel from "../../components/Carousel";
import HuffyComponent from "../../components/HuffyComponent";
import TestimonialsSection from "../../components/TestimonialsSection";
import Hero from "../../components/Hero";
import Service from "../../components/Service";
import Impact from "../../components/Impact";


function Services() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-sky-200">
        <Banner/>
        <Impact/>
        <Hero/>
        <Service/>
        <HuffyComponent/>
        <Carousel/>
        <TestimonialsSection onOpen={() => setShowModal(true)} />
      {showModal && <Reachus onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Services;
