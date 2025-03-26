import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NGO8 from "../assets/NGO8.jpg";
import NGO9 from "../assets/NGO9.jpg";

const achievementsData = [
  {
    id: 1,
    title: "We are Driven by Volunteering & Transformation",
    subtitle: "Volunteer. Lead. Inspire",
    description:
      "At Renu Sharma Foundation, our unwavering optimism fuels our pursuit of meaningful change. Through the power of volunteering, we are building a society where every individual can reshape the conversation with their voices and stories, creating a brighter future for all.",
    img1: NGO9,
    img2: NGO8,
    bgColor: "bg-[#001f3f]",
  },
  {
    id: 2,
    title: "Empowering Lives Through Education",
    subtitle: "Knowledge is Power",
    description:
      "By providing quality education to underprivileged children, we are ensuring a future filled with opportunities, hope, and success for all.",
    img1: NGO8,
    img2: NGO9,
    bgColor: "bg-[#001f3f]",
  },
  {
    id: 3,
    title: "Spreading Smiles with Healthcare",
    subtitle: "Wellness for All",
    description:
      "Through medical camps, free health check-ups, and awareness programs, we are striving to make healthcare accessible for everyone.",
    img1: NGO9,
    img2: NGO8,
    bgColor: "bg-[#001f3f]",
  },
];

const AchievementsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % achievementsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${achievementsData[currentIndex].bgColor} py-16 px-6 md:px-16 transition-colors duration-700`}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={achievementsData[currentIndex].id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="bg-blue-500 text-white text-sm font-semibold px-4 py-1 rounded-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {achievementsData[currentIndex].subtitle}
            </motion.span>
            <h2 className="text-4xl font-bold text-white mt-4">
              {achievementsData[currentIndex].title}
            </h2>
            <p className="text-white mt-4">{achievementsData[currentIndex].description}</p>
            <motion.button
              className="bg-green-600 text-white font-semibold mt-6 px-6 py-3 rounded-md hover:bg-green-700 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Join The Movement
            </motion.button>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${achievementsData[currentIndex].id}`}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="relative z-10" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <img src={achievementsData[currentIndex].img1} alt="Volunteers" className="w-60 rounded-lg shadow-lg" />
            </motion.div>
            <motion.div
              className="absolute top-0 right-0 transform translate-x-6 -translate-y-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={achievementsData[currentIndex].img2}
                alt="Kids Learning"
                className="w-60 rounded-lg border-4 border-white shadow-lg"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AchievementsCarousel;
