import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";
const feedbackData = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "The Renu Shamra Foundation has truly made a difference in my community. Their efforts in education and healthcare are remarkable.",
    image: user1,
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback:
      "Volunteering with the foundation has been an incredibly rewarding experience. I've seen firsthand the impact of their initiatives.",
    image: user2,
  },
  {
    id: 3,
    name: "Michael Lee",
    feedback:
      "Supporting the foundation has given me the opportunity to contribute to meaningful change. Their work is truly inspiring!",
    image: user3,
  },
];

const Feedback = ({ onOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 md:px-16 bg-[#001f3f]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">What Our Supporters Say</h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={feedbackData[currentIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={feedbackData[currentIndex].image}
                alt={feedbackData[currentIndex].name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600">{feedbackData[currentIndex].feedback}</p>
              <h4 className="mt-4 text-lg font-semibold text-gray-800">{feedbackData[currentIndex].name}</h4>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="  p-3 rounded-lg text-gray-900">
          <h3 className="text-lg text-white p-2 mt-6 font-bold">
          Connect with Us – Together, We Make a Difference! 🚀</h3>
          <button className="mt-4 bg-blue-600 text-white font-semibold px-2 py-2 rounded-md hover:bg-blue-400 transition" onClick={ onOpen }>
            Reach Us ↗
          </button>
        </div>
    </section>
  );
};

export default Feedback;
