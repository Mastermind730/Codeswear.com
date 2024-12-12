import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaTrophy, FaMedal } from "react-icons/fa";

const awardData = [
  {
    id: 1,
    title: "Best Innovation Award",
    description: "Recognized for groundbreaking technological advancement in AI solutions",
    image: "https://images.unsplash.com/photo-1624519756218-49e1b2f35762",
    icon: <FaAward className="text-4xl text-blue-600" />,
    year: "2023"
  },
  {
    id: 2,
    title: "Excellence in Design",
    description: "Awarded for exceptional user interface design and user experience",
    image: "https://images.unsplash.com/photo-1607893378714-007fd47c8719",
    icon: <FaTrophy className="text-4xl text-yellow-600" />,
    year: "2023"
  },
  {
    id: 3,
    title: "Customer Satisfaction",
    description: "Highest rated platform for customer satisfaction and support",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad",
    icon: <FaMedal className="text-4xl text-green-600" />,
    year: "2022"
  },
  {
    id: 4,
    title: "Industry Leader Award",
    description: "Recognized as the leading company in software development",
    image: "https://images.unsplash.com/photo-1590402494610-2c378a9114c6",
    icon: <FaAward className="text-4xl text-purple-600" />,
    year: "2022"
  },
  {
    id: 5,
    title: "Sustainability Champion",
    description: "Awarded for commitment to environmental sustainability practices",
    image: "https://images.unsplash.com/photo-1546706887-a24528987a75",
    icon: <FaTrophy className="text-4xl text-emerald-600" />,
    year: "2021"
  },
  {
    id: 6,
    title: "Global Recognition",
    description: "International award for outstanding contribution to technology",
    image: "https://images.unsplash.com/photo-1589486022941-4680fd06e73c",
    icon: <FaMedal className="text-4xl text-red-600" />,
    year: "2021"
  }
];

const AwardCard = ({ award }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center backdrop-blur-sm border border-gray-100 relative overflow-hidden"
    >
      {/* Added decorative SVG background */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
      <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />

      <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden group">
        <img
          src={award.image}
          alt={award.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb";
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center"
          whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            {award.icon}
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 backdrop-blur-sm"
        >
          {award.year}
        </motion.div>
      </div>

      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-gray-800 mb-3 text-center relative"
      >
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {award.title}
        </span>
      </motion.h3>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 text-center leading-relaxed"
      >
        {award.description}
      </motion.p>

      {/* <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium transition-all duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10">Learn More</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button> */}
    </motion.div>
  );
};

const AwardSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Added animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-blue-100 rounded-full mix-blend-multiply blur-2xl opacity-70 animate-blob" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-purple-100 rounded-full mix-blend-multiply blur-2xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute inset-x-1/3 -top-1/4 w-1/3 h-1/3 bg-pink-100 rounded-full mix-blend-multiply blur-2xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-blue-50 rounded-full text-blue-600 font-semibold mb-4 shadow-lg shadow-blue-100"
          >
            Recognition & Awards
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold mb-6 relative inline-block"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Our Achievements
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Celebrating excellence and innovation through recognition from industry leaders
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {awardData.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardSection;
