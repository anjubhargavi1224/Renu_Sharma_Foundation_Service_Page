import React from "react";
import { motion } from "framer-motion";
import AF1 from "../assets/AF1.jpeg";
import SMB2 from "../assets/SMB2.jpeg";
import PDF1 from "../assets/PDF1.jpeg";

const featuresData = [
  { imgSrc: AF1, altText: "DataOps", title: "DataOps" },
  { imgSrc: SMB2, altText: "Smart Analytics", title: "Smart Analytics" },
  { imgSrc: PDF1, altText: "Governance & Strategy", title: "Governance & Strategy" },
  { imgSrc: SMB2, altText: "Blockchain Solutions", title: "Blockchain Solutions" },
  { imgSrc: PDF1, altText: "Big Data Analytics", title: "Big Data Analytics" },
  { imgSrc: AF1, altText: "IoT Solutions", title: "IoT Solutions" },
];

const Home = () => {
  return (
    <section className="bg-[#001f3f] text-center py-16">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6"
      >
        <h2 className="text-white text-2xl font-semibold">
          Our <span className="text-indigo-400">Services</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            className=" p-4 rounded-lg shadow-lg text-white flex flex-col items-center transition duration-300 ease-in-out"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img src={feature.imgSrc} alt={feature.altText} className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Home;
