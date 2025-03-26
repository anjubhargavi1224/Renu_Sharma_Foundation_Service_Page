import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import WD2 from "../assets/WD2.jpg";
import UIB1 from "../assets/UIB1.jpeg";
import DA1 from "../assets/DA1.jpg";
import GD1 from "../assets/GD1.jpeg";
import SMB2 from "../assets/SMB2.jpeg";
import AFB1 from "../assets/AFB1.jpeg";
import VE1 from "../assets/VE1.jpeg";

const roles = [
  "Web Designer",
  "UI/UX",
  "Data Analyst",
  "Graphic Designer",
  "Social Media Marketing",
  "Animators",
  "Video Editors",
];

const backgrounds = [WD2, UIB1, DA1, GD1, SMB2, AFB1, VE1];

const Banner = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

  return (
    <section className="relative text-white flex flex-col md:flex-row items-center justify-between p-10 min-h-screen">
      {/* Background Image Carousel */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgrounds[roleIndex]})`,
          filter: "brightness(100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        key={roleIndex}
      />

      {/* Content */}
      <div className="relative z-10 max-w-lg">
        <span className="px-3 py-1 bg-purple-600 rounded-lg text-sm">
          Welcome to Renu Shamra Foundation
        </span>
        <h1 className="text-5xl font-bold mt-4">
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
        <p className="mt-4">Empowering Communities for a Brighter Future</p>
      </div>
    </section>
  );
};

export default Banner;
