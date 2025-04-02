import React, { useState, useEffect } from 'react';
import "./HuffyComponent.css";
import UIF1 from "../assets/UIF1.jpeg";
import SMB2 from "../assets/SMB2.jpeg";
import AF1 from "../assets/AF1.jpeg";

// Slide data
const slides = [
  {
    title: "Huffy",
    capital: "$3.5M+",
    description:
      "Crafted for your comfort, to enhance the beauty of your present lifestyle but also paves the way for a more aesthetically pleasing and harmonious future for both you and your cherished family.",
    intro: "A vision for liveable, sustainable & affordable.",
    buttonText: "Start Exploring",
    image: UIF1,
  },
  {
    title: "Visionary Homes",
    capital: "$4M+",
    description:
      "We bring forward a new era of elegant living spaces that combine modern designs with sustainable construction practices.",
    intro: "A vision for a greener, more harmonious future.",
    buttonText: "Discover More",
    image: SMB2,
  },
  {
    title: "Future Dwellings",
    capital: "$5M+",
    description:
      "Pioneering innovative homes that blend technology with comfort to redefine the living experience for families around the world.",
    intro: "A vision for futuristic and smart homes.",
    buttonText: "Join Us Today",
    image: AF1,
  },
];

const HuffyComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("forward"); // Track direction for transition
  const [resetKey, setResetKey] = useState(0); // Key to reset the animation on slide change

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("forward");
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setResetKey((prevKey) => prevKey + 1); // Trigger a reset for the animation
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setDirection("backward");
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    setResetKey((prevKey) => prevKey + 1); // Trigger a reset for the animation
  };

  const handleNext = () => {
    setDirection("forward");
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    setResetKey((prevKey) => prevKey + 1); // Trigger a reset for the animation
  };

  return (
    <div className="bg-[#001f3f] text-white p-8 rounded-lg">
      {/* Tagline */}
      <div className="text-center">
        <h1 className="text-4xl mb-10 font-bold">We craft the future dwelling.</h1>
      </div>

      {/* Main Content */}
      <div className="flex mt-8">
        {/* Left Section (Text with Fade-in-Right Animation) */}
        <div className="w-1/2 p-8 bg-gray-800 rounded-lg">
          <div
            key={resetKey} // Reset the animation on every slide change
            className={`transition-transform duration-700 transform ${
              direction === "forward" ? "animate-fade-right" : "animate-fade-left"
            }`} // Apply fade-in-right when moving forward, fade-in-left when going backward
          >
            <div className="text-lg font-bold">Capital raised</div>
            <div className="text-2xl font-bold">{slides[currentSlide].capital}</div>
            <p className="mt-2">{slides[currentSlide].description}</p>
            <h2 className="text-lg font-bold mt-6">Introduction</h2>
            <p className="mt-2 text-sm">{slides[currentSlide].intro}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              {slides[currentSlide].buttonText}
            </button>
          </div>
        </div>

        {/* Right Section (Image with Fade-in-Left Animation) */}
        <div className="w-1/2 flex justify-center">
          <div
            key={resetKey} // Reset the animation on every slide change
            className={`transition-transform duration-700 transform ${
              direction === "forward" ? "animate-fade-left" : "animate-fade-right"
            }`}
          >
            <img
              src={slides[currentSlide].image}
              alt="Building"
              className="rounded-lg w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HuffyComponent;
