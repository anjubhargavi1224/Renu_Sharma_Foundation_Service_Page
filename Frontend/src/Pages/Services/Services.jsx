import React, { useState } from "react";
import Features from "../../components/Features";
import Achievements from "../../components/Achievements";
import Reachus from "../../components/Reachus";
import Banner from "../../components/Banner";
import Domains from "../../components/Domains";
import Feedback from "../../components/Feedback";
import Carousel from "../../components/Carousel";
import NgoBanner from "../../components/NgoBanner";

function Services() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-blue-950">
        <Banner/>
        <Features />
        <Domains/>
        <NgoBanner/>
        <Carousel/>
      <Achievements />
      <Feedback onOpen={() => setShowModal(true)} />
{/*      <Footer onOpen={() => setShowModal(true)} />*/}
      {showModal && <Reachus onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Services;
