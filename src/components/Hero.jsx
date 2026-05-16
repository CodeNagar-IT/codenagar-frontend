import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const words = ["Websites", "Mobile Apps", "ML Integration", "School Systems"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-blue-600/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></span>
              <span className="text-purple-300 text-sm">Welcome to CodeNagar</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Transform Ideas
              </span>
              <br />
              Into Digital Reality
            </h1>

            <div className="text-2xl md:text-3xl text-gray-300 mb-6">
              We Build{" "}
              <span className="text-purple-400 font-semibold inline-block min-w-[180px]">
                {words[textIndex]}
              </span>
            </div>

            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Software House | IT Training | Hardware Solutions — All under one roof.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Explore Services
              </motion.a>
            </div>

            <div className="flex gap-8 mt-12">
              {[
                { icon: Code, text: "50+ Projects" },
                { icon: GraduationCap, text: "200+ Students" },
                { icon: Cpu, text: "100+ Clients" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <stat.icon className="w-8 h-8 text-purple-400" />
                  <div>
                    <div className="text-xl font-bold">{stat.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
                <div className="space-y-4">
                  {[
                    { lang: "React", x: 20, y: 30 },
                    { lang: "Node.js", x: 150, y: 80 },
                    { lang: "Python", x: 40, y: 120 },
                    { lang: "MongoDB", x: 180, y: 170 },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      animate={{ x: [0, item.x, 0], y: [0, item.y, 0] }}
                      transition={{ duration: 10, repeat: Infinity, delay: i }}
                      className="absolute bg-gray-800 px-4 py-2 rounded-lg border border-purple-500/30 text-sm"
                      style={{ left: item.x, top: item.y }}
                    >
                      {item.lang}
                    </motion.div>
                  ))}
                  <div className="text-center py-20">
                    <Code className="w-32 h-32 mx-auto text-purple-400 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;