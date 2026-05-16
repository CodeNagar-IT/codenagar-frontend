import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe2, Smartphone, Brain, School, ShoppingCart, Cloud } from "lucide-react";

const services = [
  { icon: Globe2, title: "Custom Websites", desc: "Responsive, SEO-friendly, animated websites", color: "from-blue-500 to-cyan-500", price: "$499+" },
  { icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android with React Native/Flutter", color: "from-green-500 to-emerald-500", price: "$999+" },
  { icon: Brain, title: "ML Integration", desc: "AI solutions, chatbots, recommendations", color: "from-purple-500 to-pink-500", price: "$1499+" },
  { icon: School, title: "School Management", desc: "Complete portal with fees, results, attendance", color: "from-orange-500 to-red-500", price: "$1999+" },
  { icon: ShoppingCart, title: "E-commerce Solutions", desc: "Online stores with payment integration", color: "from-pink-500 to-rose-500", price: "$799+" },
  { icon: Cloud, title: "Cloud Solutions", desc: "AWS, Azure, Google Cloud integration", color: "from-cyan-500 to-blue-500", price: "$1299+" },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">{service.price}</span>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-white opacity-0 group-hover:opacity-100 transition"
                  >
                    Learn More →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;