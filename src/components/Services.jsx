import { motion } from "framer-motion";
import { Code, Database, Globe, Layout } from "lucide-react";

const services = [
  { icon: Globe, title: "Websites", desc: "Modern, responsive websites with animations" },
  { icon: Code, title: "Mobile Apps", desc: "iOS & Android apps with React Native" },
  { icon: Database, title: "ML Integration", desc: "AI & Machine Learning solutions" },
  { icon: Layout, title: "School Management", desc: "Complete portal systems" },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Software Services
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl text-center hover:shadow-xl transition"
            >
              <service.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;