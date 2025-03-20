import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 opacity-50 text-white fixed w-full top-0 shadow-lg z-50">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">MyWebsite</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <li key={index} className="hover:text-gray-400 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-6 py-10 shadow-lg">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <a key={index} className="text-xl cursor-pointer">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
