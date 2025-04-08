// src/components/PreviousWork.jsx

import { motion } from 'framer-motion';
import { FaUserFriends } from 'react-icons/fa';
import AF1 from '../assets/AF1.jpeg';
import Hs1 from '../assets/Hs1.png';
import Hs2 from '../assets/Hs2.png';
import Hs3 from '../assets/Hs3.png';
import Hs4 from '../assets/Hs4.png';

const cards = [
  {
    title: 'Fortnite',
    category: 'Battle Royale',
    image: AF1,
    rating: 4.5,
    color: 'bg-[#7c3aed]',
    rotate: '-rotate-[8deg]',
    z: 10,
  },
  {
    title: 'Mario',
    category: 'Kingdom Battle',
    image: Hs1,
    rating: 4.4,
    color: 'bg-[#ef4444]',
    rotate: '-rotate-[4deg]',
    z: 20,
  },
  {
    title: 'Kirby',
    category: 'Star Allies',
    image: Hs2,
    rating: 4.7,
    color: 'bg-[#0ea5e9]',
    rotate: '',
    z: 30,
    scale: 'scale-110',
  },
  {
    title: 'Pokemon',
    category: 'Legends Arceus',
    image: Hs3,
    rating: 4.2,
    color: 'bg-[#10b981]',
    rotate: 'rotate-[4deg]',
    z: 20,
  },
  {
    title: 'Splatoon 3',
    category: 'Multiplayer',
    image: Hs4,
    rating: 3.9,
    color: 'bg-[#6366f1]',
    rotate: 'rotate-[8deg]',
    z: 10,
  },
];

const PreviousWork = () => {
  return (
    <div className="relative w-full overflow-hidden py-20 px-4 bg-[#0b0b0f] text-white">
      <h2 className="text-4xl font-bold text-center mb-14">Previous Works</h2>
      <div className="flex justify-center gap-[-60px] relative">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`w-[200px] md:w-[220px] xl:w-[240px] rounded-3xl p-4 text-white absolute shadow-lg ${card.color} ${card.rotate} ${card.scale || ''}`}
            style={{
              left: `calc(50% - 120px + ${(i - 2) * 160}px)`,
              zIndex: card.z,
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.1, y: -10 }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-20 h-20 object-contain mx-auto"
            />
            <h3 className="text-xl font-bold mt-4 text-center">{card.title}</h3>
            <p className="text-sm text-center opacity-80">{card.category}</p>
            <div className="flex items-center justify-center gap-1 mt-2 text-sm">
              <FaUserFriends className="text-white" />
              <span>{card.rating}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PreviousWork;
