// 9. src/components/Footer.jsx
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              CodeNagar
            </h3>
            <p className="text-gray-400 text-sm">
              Transforming ideas into digital reality with cutting-edge software solutions.
            </p>
            <div className="flex gap-4 mt-4">
              {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3 }}
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {["Home", "Services", "Courses", "Hardware", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`/${item === "Home" ? "" : "#" + item.toLowerCase()}`} className="hover:text-purple-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400">Web Development</a></li>
              <li><a href="#" className="hover:text-purple-400">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-purple-400">ML Integration</a></li>
              <li><a href="#" className="hover:text-purple-400">School Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +92 300 1234567</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@codenagar.com</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 CodeNagar. All rights reserved. | Designed with ❤️ for innovation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;