import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Features from "../../components/Features";
import Achievements from "../../components/Achievements";
import Impact from "../../components/Impact";
import Footer from "../../components/Footer";
import Reachus from "../../components/Reachus";

function Services() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-blue-950">
      <Navbar />
      <HeroSection onOpen={() => setShowModal(true)} />
      <Features />
      <Achievements />
      <Impact />
      <Footer onOpen={() => setShowModal(true)} />
      {showModal && <Reachus onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Services;
