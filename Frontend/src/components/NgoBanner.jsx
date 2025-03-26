import React from "react";
import NGOB1 from "../assets/NGOB1.jpeg"; // Replace with your actual image path
import NGOB3 from "../assets/NGOB3.jpeg"; // Replace with your second image path

const NgoBanner = () => {
  return (
    <div className="w-full flex bg-[#001f3f] flex-col md:flex-row gap-6 px-8 py-12">
      {/* Left Section */}
      <div className="relative w-full md:w-1/2 h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${NGOB1})` }}>
        <div className="absolute inset-0  bg-black/50"></div>
        <div className="relative z-10 p-6 text-white">
          <h2 className="text-xl font-semibold">
            </h2>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/2 h-[400px] flex flex-col items-center justify-center bg-cover bg-center p-6" style={{ backgroundImage: `url(${NGOB3})` }}>
        <div className="absolute inset-0 bg-black/50 "></div>
        <div className="relative z-10 text-black text-center">
          <h2 className="text-xl font-semibold"></h2>
          <p className="mt-2"></p>
        </div>
      </div>
    </div>
  );
};

export default NgoBanner;
