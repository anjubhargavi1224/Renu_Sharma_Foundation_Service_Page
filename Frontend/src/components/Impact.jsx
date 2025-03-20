import React from "react";
import { motion } from "framer-motion";
import { BiWorld } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";
import NGORS6 from "../assets/NGORS6.jpeg";
const Impact = () => {
  return (
    <section className="bg-[#001f3f] py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white">
            Global Focus Enables <br />
            <span className="text-orange-500">Individual Potential</span>
          </h2>
          <p className="text-white mt-4">
            If you are still wondering, we would like to be judged by the work we do and not just the words we say.
          </p>
          <div className="mt-6 space-y-6">
            <motion.div
              className="flex items-start space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-green-500 p-3 rounded-lg">
                <BiWorld  className="w-8 h-8"/>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-fuchsia-100">Our Community</h3>
                <p className="text-white">
                  At Renu Sharma Foundation, we strive for meaningful change. Through volunteering, we aim to build a society that empowers every individual to reshape the conversation with their voices and stories.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-start space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-orange-500 p-3 rounded-lg">
              <TbTargetArrow className="w-8 h-8" /> 
              </div>
              <div>
                <h3 className="text-xl font-semibold text-fuchsia-100">Our Impact</h3>
                <p className="text-white">
                  We have engaged 90,000+ volunteers in various causes aligned to the sustainable development goals of the UN.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={NGORS6}
            alt="Community Group"
            className="w-full rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
