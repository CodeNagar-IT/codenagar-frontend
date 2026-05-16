import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            CodeNagar
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Software House | IT Training | Hardware Sales
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="px-8 py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition">
            Get Started
          </a>
          <a href="#services" className="px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-gray-800 transition">
            Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;