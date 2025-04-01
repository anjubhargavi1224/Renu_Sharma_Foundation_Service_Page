// src/components/TestimonialsSection.jsx
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "We have built a network of trusted freelancers we can depend on when we need something done.",
    name: "Ana Rodriguez",
    company: "Santamaria Shirtmakers",
    img: "path/to/image-a", // Replace with actual image paths
  },
  {
    quote: "The ease of communication and security provided make the process of outsourcing effortless.",
    name: "Bronte Aurell",
    company: "ScandiKitchen",
    img: "path/to/image-b", // Replace with actual image paths
  },
  {
    quote: "Their platform has revolutionized the way we source talent across the globe.",
    name: "John Smith",
    company: "Global Marketing Inc.",
    img: "path/to/image-c", // Replace with actual image paths
  },
];

const TestimonialsSection = ({ onOpen }) => {
  return (
    <div className="flex flex-wrap justify-center p-8 bg-sky-200">
      {testimonials.map(({ quote, name, company, img }, index) => (
        <motion.div
          className="bg-gray-200 m-4 p-4 rounded-lg shadow-lg max-w-xs"
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          <img src={img} alt={name} className="w-12 h-12 rounded-full mb-2" />
          <p className="italic">{quote}</p>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </motion.div>
      ))}
      <div className="  p-3 rounded-lg text-gray-900">
          <h3 className="text-lg text-white p-2 mt-6 font-bold">
          Connect with Us – Together, We Make a Difference! 🚀</h3>
          <button className="mt-4 bg-blue-600 text-white font-semibold px-2 py-2 rounded-md hover:bg-blue-400 transition" onClick={ onOpen }>
            Reach Us ↗
          </button>
        </div>
    </div>
  );
};

export default TestimonialsSection;