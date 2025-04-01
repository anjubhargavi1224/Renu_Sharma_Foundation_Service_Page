import { motion } from "framer-motion";

const stats = [
  {
    value: "3 million",
    description: "rated freelancers, covering 8,766 skills",
  },
  {
    value: "$150 million",
    description: "earned by freelancers, with top freelancers earning over $7,000/m",
  },
  {
    value: "10 minutes",
    description: "to task a freelancer, with 90% of projects completed in 7 days",
  },
];

const Impact = () => {
  return (
    <section className="bg-sky-200 py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between text-center md:text-left">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex-1 px-4 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-3xl font-bold text-orange-700">{stat.value}</h3>
            <p className="text-gray-600 mt-2">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
