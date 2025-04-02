import { motion } from "framer-motion";
import { FaSearch, FaStar, FaUser } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const HomeSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="bg-[#001f3f] min-h-screen flex items-center justify-center p-10"
    >
      <motion.div
        key={inView} // Forces re-render when visibility changes
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl font-bold text-white"
          >
            FREELANCE
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-5"
          >
            <input
              type="text"
              placeholder="Search for any services..."
              className="w-full p-3 pl-5 pr-10 rounded-lg shadow-md"
            />
            <FaSearch className="absolute right-4 top-4 text-gray-500" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex gap-3 mt-4"
          >
            {["Web Design", "UI/UX Design", "Databases", "Business Cards"].map(
              (skill, index) => (
                <span key={index} className="px-3 py-1 bg-white rounded-full shadow-md text-sm">
                  {skill}
                </span>
              )
            )}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-gray-700"
          >
            A freelance service web portal connects businesses with freelancers,
            facilitating project collaboration and hiring.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 bg-white p-4 rounded-lg shadow-md flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/40?img=${i + 1}`}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border border-white"
                />
              ))}
            </div>
            <div>
              <p className="font-bold">Trusted Freelancers</p>
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-500">200+ Satisfied Customers</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://via.placeholder.com/400"
            alt="Freelancer"
            className="rounded-lg shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-6 right-6 bg-white p-4 rounded-lg shadow-md flex items-center gap-4"
          >
            <FaUser className="text-gray-500 text-xl" />
            <div>
              <p className="font-bold">@jenny</p>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
              <p className="text-sm text-gray-700">80+ projects completed</p>
              <p className="text-sm text-gray-700">$30 per hour</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
