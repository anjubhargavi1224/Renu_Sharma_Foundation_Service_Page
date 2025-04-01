import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AF1 from "../assets/AF1.jpeg";
import UIF1 from "../assets/UIF1.jpeg";
import SMB2 from "../assets/SMB2.jpeg";
import PDF1 from "../assets/PDF1.jpeg";
import AFB1 from "../assets/AFB1.jpeg";


const images = [
  AF1,
  UIF1,
  SMB2,
  PDF1,
  AFB1,
  AF1,
  PDF1,
];

const duplicatedImages = [...images, ...images]; // Duplicating the images for an infinite loop

const Carousel = () => {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 2));

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="overflow-hidden p-6 flex flex-col bg-sky-200 justify-center items-center w-screen h-[350px]">
      <h1 className="text-3xl text-white font-bold mb-4">What We Do!</h1>
      <motion.div
        ref={carouselRef}
        className="cursor-grab overflow-hidden w-full max-w-[90vw] h-full flex items-center"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex gap-6 justify-center"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          animate={{ x: [0, -width] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          {duplicatedImages.map((src, index) => {
            let scaleClass = "scale-100"; // Default size

            if (index % images.length === 0 || index % images.length === images.length - 1) {
              scaleClass = "scale-105"; // First and last images (largest)
            } else if (index % images.length === activeIndex) {
              scaleClass = "scale-90"; // Center image (smallest)
            } else if (
              index % images.length === activeIndex - 1 ||
              index % images.length === activeIndex + 1
            ) {
              scaleClass = "scale-95"; // Left & right of center (medium)
            }

            return (
              <motion.div
                key={index}
                className={`w-[150px] h-[150px] bg-transparent rounded-3xl border-4 border-gray-300 shadow-lg flex items-center justify-center transition-transform duration-300 ${scaleClass}`}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-contain rounded-3xl"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
