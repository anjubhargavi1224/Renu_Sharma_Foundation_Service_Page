import { motion } from "framer-motion";
import Content from "../assets/Content.jpg";
import Graphic from "../assets/Graphic.jpg";
import Logo from "../assets/Logo.jpg";
import SEO from "../assets/SEO.jpg";
import WEB from "../assets/WEB.jpg";

const services = [
  { title: "Content Writing", subtitle: "Engage your community", image: Content },
  { title: "SEO", subtitle: "Boost your traffic", image: SEO },
  { title: "Website Development", subtitle: "Build your site", image: WEB },
  { title: "Logo Design", subtitle: "Elevate your brand", image: Logo },
  { title: "Graphic Design", subtitle: "Tell your story", image: Graphic },
];

const Services = () => {
  return (
    <section className="px-8 py-16 bg-[#001f3f]">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl text-white font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }} // Ensures effect repeats
      >
        Most Popular Categories
      </motion.h2>

      {/* Services List */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative w-72 h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }} // Ensures effect repeats
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <p className="text-sm text-gray-300">{service.subtitle}</p>
              <h3 className="text-white text-xl font-bold">{service.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
