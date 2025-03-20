import React from "react";
import { FaYoutube, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import RenuSharmalogo from "../assets/RenuSharmalogo.png";

const Footer = ({ onOpen }) => {
  return (
    <footer className="bg-[#11001C] text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <img src={RenuSharmalogo} alt="RenuSharma Logo" className="w-32 mb-4" />
          <p className="text-gray-300 text-sm">
            Renu Sharma Foundation is a top Indian NGO, dedicated to promote education, community welfare, and environmental conservation with financial transparency.
          </p>
          <button className="mt-4 bg-green-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-700 transition">
            Contact Us Now ↗
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Volunteer</li>
            <li>CSR</li>
            <li>Careers</li>
            <li>Intern</li>
            <li>Partner</li>
            <li>Events</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Mission Vision</li>
            <li>Our Values</li>
            <li>Our Programs</li>
            <li>Impact Stories</li>
            <li>Legal</li>
          </ul>
        </div>

        <div className="bg-white opacity-50 p-3 rounded-lg text-gray-900">
          <h3 className="text-lg font-bold">Ready To Bring The Change? Let's Get To Work Now!</h3>
          <button className="mt-4 bg-green-600 text-white font-semibold px-2 py-2 rounded-md hover:bg-green-700 transition w-full" onClick={ onOpen }>
            Reach Us ↗
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-wrap justify-between text-gray-400 text-sm">
        <div>
          <h4 className="text-white font-semibold">Address</h4>
          <p>Bimla Devi H No 66, Baspadamka, Pataudi, Gurgaon, Pataudi, Haryana, India, 122503</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Call Us</h4>
          <p>1234567890</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Email Us</h4>
          <p>contact@renusharmafoundation.ngo</p>
        </div>
        <div className="flex space-x-4 text-xl">
          <FaYoutube className="cursor-pointer hover:text-white" />
          <FaInstagram className="cursor-pointer hover:text-white" />
          <FaFacebookF className="cursor-pointer hover:text-white" />
          <FaLinkedinIn className="cursor-pointer hover:text-white" />
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        Renu Sharma Foundation | Copyrights (c) All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
