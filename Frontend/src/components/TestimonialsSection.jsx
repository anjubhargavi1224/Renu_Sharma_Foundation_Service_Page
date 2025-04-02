import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";

const testimonials = [
  {
    quote: "We have built a network of trusted freelancers we can depend on when we need something done.",
    name: "Ana Rodriguez",
    company: "Santamaria Shirtmakers",
    img: user1, // Replace with actual image paths
  },
  {
    quote: "The ease of communication and security provided make the process of outsourcing effortless.",
    name: "Bronte Aurell",
    company: "ScandiKitchen",
    img: user2, // Replace with actual image paths
  },
  {
    quote: "Their platform has revolutionized the way we source talent across the globe.",
    name: "John Smith",
    company: "Global Marketing Inc.",
    img: user3, // Replace with actual image paths
  },
];

const TestimonialsSection = ({ onOpen }) => {
  // State to track if the component is in view
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle intersection observer
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Stop observing once the component is in view
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger the effect when 50% of the component is visible
    });

    const section = document.getElementById("testimonials-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      id="testimonials-section"
      className="flex flex-wrap justify-center p-8 bg-[#001f3f]"
    >
      {/* Heading */}
      <h1 className="text-3xl text-white font-semibold text-center w-full mb-6">
        What Our Clients Say
      </h1>

      {/* Testimonials */}
      {testimonials.map(({ quote, name, company, img }, index) => (
        <motion.div
          className="bg-gray-200 m-4 p-4 rounded-lg shadow-lg max-w-xs"
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 50, // Transition effect: move up when in view
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.3,
            ease: "easeInOut",
          }}
        >
          <img src={img} alt={name} className="w-12 h-12 rounded-full mb-2" />
          <p className="italic">{quote}</p>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </motion.div>
      ))}

      {/* Button to connect */}
      <div className="p-3 rounded-lg text-gray-900">
        <h3 className="text-lg text-white p-2 mt-6 font-bold">
          Connect with Us – Together, We Make a Difference! 🚀
        </h3>
        <button
          className="mt-4 bg-blue-600 text-white font-semibold px-2 py-2 rounded-md hover:bg-blue-400 transition"
          onClick={onOpen}
        >
          Reach Us ↗
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSection;
