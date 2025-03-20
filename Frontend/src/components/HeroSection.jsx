import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import NGO11 from "../assets/NGO11.jpg";
import NGO12 from "../assets/NGO12.jpg";
import NGO4 from "../assets/NGO4.jpg";


const images = [NGO11, NGO12, NGO4];


const HeroSection = ({ onOpen }) => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="absolute w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="absolute inset-0">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fixed Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Renu Sharma Foundation
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
         Empowering Lives, Inspiring Change.
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-900 opacity-25 text-white text-lg rounded-lg hover:bg-blue-600 transition" onClick={ onOpen }
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Reach Us
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
