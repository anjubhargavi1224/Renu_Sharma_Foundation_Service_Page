import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import WD2 from "../assets/WD2.jpg";
import UIB1 from "../assets/UIB1.jpeg";
import DA1 from "../assets/DA1.jpg";
import GD1 from "../assets/GD1.jpeg";
import SMB2 from "../assets/SMB2.jpeg";
import AFB1 from "../assets/AFB1.jpeg";

const roles = [
  "Web Designer",
  "UI/UX",
  "Data Analyst",
  "Graphic Designer",
  "Social Media Marketing",
  "Animators",
  "Video Editors",
];

const images = [
  [WD2, UIB1],
  [DA1, GD1],
  [SMB2, AFB1]
];

const Banner = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 150);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 100);
    } else {
      setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (isDeleting) {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white flex flex-col md:flex-row items-center justify-between p-10 min-h-screen bg-sky-200">
      <div className="relative z-10 max-w-lg">
        <span className="px-3 py-1 bg-purple-600 rounded-lg text-sm">
          Welcome to Renu Shamra Foundation
        </span>
        <h1 className="text-5xl font-bold mt-4 text-gray-800">
          Hire the best freelancers for <br />
          <motion.span
            className="inline-block text-purple-400"
            style={{
              borderRight: "2px solid white",
              paddingRight: "5px",
            }}
          >
            {text}
          </motion.span>
        </h1>
        <p className="mt-4 text-gray-700">Empowering Communities for a Brighter Future</p>
      </div>

      {/* Image Carousel */}
      <div className="relative w-1/2 flex justify-center items-center overflow-hidden">
        <motion.div
          key={imageIndex}
          className="flex gap-4"
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: -100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {images[imageIndex].map((image, idx) => (
            <motion.img
              key={idx}
              src={image}
              alt="Showcase"
              className="w-1/2 rounded-lg shadow-lg"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
