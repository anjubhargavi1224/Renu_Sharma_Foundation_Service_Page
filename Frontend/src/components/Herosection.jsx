import { useState } from "react";
import { motion } from "framer-motion";
import Hs1 from "../assets/Hs1.png";
import Hs2 from "../assets/Hs2.png";
import Hs3 from "../assets/Hs3.png";
import Hs4 from "../assets/Hs4.png";

const HeroSection = () => {
  const [selectedHiringTime, setSelectedHiringTime] = useState("No rush");

  return (
    <section className="relative w-full h-screen flex items-center justify-between bg-[#001f3f] overflow-hidden px-10">
      {/* Left Side Content */}
      <div className="relative z-10 text-white text-left max-w-lg">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold"
        >
          Connecting clients in need to freelancers who deliver.
        </motion.h1>

        {/* Interactive Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
          className="mt-8 bg-gray-900/90 opacity-40 p-6 md:p-8 rounded-2xl backdrop-blur-lg shadow-lg flex flex-col items-center max-w-lg"
        >
          {/* Toggle Buttons */}
          <div className="w-full flex gap-2 bg-gray-800 p-1 rounded-full">
            <button className="flex-1 px-6 py-3 text-white font-semibold rounded-full bg-gray-800 hover:bg-gray-700">
              Find talent
            </button>
            <button className="flex-1 px-6 py-3 text-white font-semibold rounded-full hover:bg-gray-700">
              Browse jobs
            </button>
          </div>

          {/* Hiring Time Question */}
          <p className="mt-6 text-sm text-gray-300">How soon are you hiring?</p>

          {/* Selection Buttons */}
          <div className="mt-3 flex gap-2">
            {["Now", "In 1-2 weeks", "No rush"].map((option) => (
              <button
                key={option}
                onClick={() => setSelectedHiringTime(option)}
                className={`px-6 py-3 rounded-full border border-gray-500 text-white font-medium ${
                  selectedHiringTime === option
                    ? "border-yellow-400 text-yellow-400"
                    : "hover:bg-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Brand Logos */}
          <div className="mt-6 flex justify-center gap-6 opacity-60">
            <img src="/microsoft-logo.png" alt="Microsoft" className="h-6" />
            <img src="/airbnb-logo.png" alt="Airbnb" className="h-6" />
            <img src="/bissell-logo.png" alt="Bissell" className="h-6" />
            <img src="/glassdoor-logo.png" alt="Glassdoor" className="h-6" />
          </div>
        </motion.div>
      </div>

      {/* Right Side - 2×2 Image Grid with Reduced Size */}
      <motion.div
        className="relative w-[40%] h-[80%] grid grid-cols-2 grid-rows-2 gap-3 p-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {[Hs1, Hs2, Hs3, Hs4].map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-md"
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2, // Staggered animation
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
