import { motion } from "framer-motion";
import { Computer, Headphones, Smartphone } from "lucide-react";

const Hardware = () => {
  return (
    <section id="hardware" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Hardware Sales
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Computer, title: "Computer Accessories", items: "Keyboards, Mice, Monitors" },
            { icon: Smartphone, title: "Mobile Accessories", items: "Cases, Chargers, Power Banks" },
            { icon: Headphones, title: "Audio Devices", items: "Headphones, Speakers, Mics" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl text-center"
            >
              <item.icon className="w-16 h-16 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hardware;