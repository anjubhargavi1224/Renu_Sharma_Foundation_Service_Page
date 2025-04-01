import React from "react";

const Reachus = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-sky-200 bg-opacity-50 z-50">
      <div className="bg-gray-800  p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-lg text-white font-bold text-center mb-4">Contact Us</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Enter your number"
            className="p-2 border rounded-md"
          />
          <textarea
            placeholder="Your message..."
            className="p-2 border rounded-md h-24"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
        <button
          className="mt-4 text-red-500 hover:text-red-700 w-full text-center"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Reachus;
