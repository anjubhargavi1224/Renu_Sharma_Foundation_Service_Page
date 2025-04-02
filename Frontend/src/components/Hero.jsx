import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SMB2 from "../assets/SMB2.jpeg";
import UIF1 from "../assets/UIF1.jpeg";
import AF1 from "../assets/AF1.jpeg";

const slides = [
  {
    title: "We craft the future dwellin.",
    image: SMB2,
    capital: "$3.5M+",
    intro: "A vision for liveable, sustainable & affordable.",
    description: "Crafted for your comfort, to enhance the beauty of your present lifestyle but also paves the way for a more aesthetically pleasing and harmonious future for both you and your cherished family.",
  },
  {
    title: "Building Tomorrow, Today.",
    image: UIF1,
    capital: "$5.2M+",
    intro: "Revolutionizing urban spaces with modern design.",
    description: "Redefining modern architecture to bring sustainability, elegance, and futuristic designs, creating spaces where luxury and functionality blend seamlessly.",
  },
  {
    title: "Your Dream, Our Vision.",
    image: AF1,
    capital: "$7.1M+",
    intro: "Creating homes that blend luxury with sustainability.",
    description: "Transforming dreams into reality by crafting homes that embody your desires while ensuring eco-friendly living, making every space not just a house, but a home.",
  },
];

const Hero = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const leftInView = useInView(leftRef, { triggerOnce: false, margin: "-100px" });
  const rightInView = useInView(rightRef, { triggerOnce: false, margin: "-100px" });
  const imageInView = useInView(imageRef, { triggerOnce: false, margin: "-100px" });
  const headingInView = useInView(headingRef, { triggerOnce: false, margin: "-100px" });
0
  // Auto-change slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative bg-[#001f3f] text-white p-10 rounded-[40px] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
      
      {/* Left Section - Description (Fades In) */}
      <motion.div 
        ref={leftRef}
        initial={{ opacity: 0, x: -50 }} 
        animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white text-black p-6 rounded-[30px] shadow-lg w-[350px] sm:w-[400px] lg:w-[380px] relative top-10"
      >
        <h2 className="text-sm font-semibold text-gray-700">Description</h2>
        <motion.p
          key={currentSlide.description}
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mt-4 text-lg font-medium"
        >
          {currentSlide.description}
        </motion.p>
      </motion.div>

      {/* Center Section - Heading and Image */}
      <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
        <motion.h1 
          ref={headingRef}
          key="We craft the future dwellin." // Fixed heading text
          initial={{ opacity: 0, y: -30 }} 
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-5xl lg:text-6xl font-bold leading-tight"
        >
          Trendy Domains
        </motion.h1>

        {/* Image Transition */}
        <motion.img 
          ref={imageRef}
          key={currentSlide.image} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          src={currentSlide.image} 
          alt="Modern Building"
          className="mt-6 rounded-[30px] w-full max-w-[600px] lg:max-w-[550px] shadow-lg"
        />
      </div>

      {/* Right Section - Introduction (Fades In) */}
      <motion.div 
        ref={rightRef}
        initial={{ opacity: 0, x: 50 }} 
        animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        className="bg-white text-black p-6 rounded-[30px] shadow-lg w-[320px] sm:w-[380px] lg:w-[350px] relative bottom-[-10px]"
      >
        <h2 className="text-sm font-semibold text-gray-700">Introduction</h2>
        <motion.p
          key={currentSlide.intro}
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="mt-4 text-lg font-medium"
        >
          {currentSlide.intro}
        </motion.p>
        <button className="mt-6 bg-[#0A0E1A] text-white px-6 py-3 rounded-lg hover:bg-[#1A2333] transition-all">
          Start Exploring
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
