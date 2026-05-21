// frontend/src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              CodeNagar
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ideas into digital reality with cutting-edge software solutions.
            </p>
            <div className="flex gap-3 mt-4">
              {[
                { icon: FaFacebook, href: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
                { icon: FaTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-sky-500" },
                { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-700" },
                { icon: FaGithub, href: "https://github.com", label: "GitHub", color: "hover:bg-gray-600" },
                { icon: FaInstagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-indigo-600" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Courses</Link></li>
              <li><Link to="/store" className="hover:text-blue-400 transition-colors">Hardware Store</Link></li>
              <li><Link to="/events" className="hover:text-blue-400 transition-colors">Events</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/services/web-development" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link to="/services/app-development" className="hover:text-blue-400 transition-colors">App Development</Link></li>
              <li><Link to="/services/ml-integration" className="hover:text-blue-400 transition-colors">ML Integration</Link></li>
              <li><Link to="/services/ai-solutions" className="hover:text-blue-400 transition-colors">AI Solutions</Link></li>
              <li><Link to="/services/cloud-solutions" className="hover:text-blue-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services/ui-ux-design" className="hover:text-blue-400 transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services/devops" className="hover:text-blue-400 transition-colors">DevOps</Link></li>
              <li><Link to="/services/ecommerce-development" className="hover:text-blue-400 transition-colors">E-commerce</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>+92 307 5762192</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>info@codenagar.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Sajjad Complex, Upper Adda, Muzaffarabad, Azad Kashmir</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} CodeNagar. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2 text-xs">
            <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
            <Link to="/refund-policy" className="hover:text-blue-400 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;