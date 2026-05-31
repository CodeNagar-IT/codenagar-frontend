// frontend/src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, GraduationCap, ShoppingBag, Briefcase, BookOpen, Code, Smartphone, Brain, Cloud, Shield, ArrowRight, Heart } from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, href: "https://facebook.com/share/1XkMtYKSPP/", color: "hover:bg-blue-600" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/company/codenagar", color: "hover:bg-blue-700" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/code_nagar", color: "hover:bg-pink-600" },
    { name: "GitHub", icon: FaGithub, href: "https://github.com/codenagar-tech", color: "hover:bg-gray-600" },
    ];

  const quickLinks = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "About Us", path: "/about", icon: "👥" },
    { name: "Services", path: "/services", icon: "⚙️" },
    { name: "Courses", path: "/courses", icon: "📚" },
    { name: "Hardware Store", path: "/store", icon: "🛒" },
    { name: "FYP Projects", path: "/fyp", icon: "🎓" },
    { name: "Portfolio", path: "/portfolio", icon: "💼" },
    { name: "Blog", path: "/blog", icon: "📝" },
    { name: "Events", path: "/events", icon: "📅" },
    { name: "Careers", path: "/careers", icon: "💼" },
    { name: "Contact", path: "/contact", icon: "📞" },
  ];

  const serviceLinks = [
    { name: "Web Development", path: "/services/web-development", icon: Code },
    { name: "App Development", path: "/services/app-development", icon: Smartphone },
    { name: "ML Integration", path: "/services/ml-integration", icon: Brain },
    { name: "AI Solutions", path: "/services/ai-solutions", icon: Brain },
    { name: "Cloud Solutions", path: "/services/cloud-solutions", icon: Cloud },
    { name: "Cybersecurity", path: "/services/cybersecurity", icon: Shield },
    { name: "UI/UX Design", path: "/services/ui-ux-design", icon: Code },
    { name: "DevOps", path: "/services/devops", icon: Cloud },
    { name: "E-commerce", path: "/services/ecommerce-development", icon: ShoppingBag },
    { name: "Database Management", path: "/services/database-management", icon: Cloud },
  ];

  const resourceLinks = [
    { name: "Blog", path: "/blog", icon: BookOpen },
    { name: "Case Studies", path: "/case-studies", icon: Briefcase },
    { name: "White Papers", path: "/whitepapers", icon: BookOpen },
    { name: "Documentation", path: "/docs", icon: BookOpen },
    { name: "Partners", path: "/partners", icon: Briefcase },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Refund Policy", path: "/refund-policy" },
    { name: "Cookie Policy", path: "/cookie-policy" },
  ];

  return (
    <footer className="bg-gray-900/95 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              CodeNagar
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Transforming ideas into digital reality with cutting-edge software solutions. Your complete technology partner for development, training, and hardware.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-2 mb-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-white mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 rounded-l-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700"
                />
                <button className="px-3 py-2 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition text-sm">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Get latest updates and offers</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-400" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.slice(0, 8).map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="text-xs">{link.icon}</span>
                    {link.name}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-400" />
              Our Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.slice(0, 8).map((service, i) => (
                <li key={i}>
                  <Link 
                    to={service.path} 
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <service.icon className="w-3 h-3" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <Link to="/services" className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1 group">
                View All Services <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition" />
              </Link>
            </div>
          </div>

          {/* Resources & Support */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-400" />
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((resource, i) => (
                <li key={i}>
                  <Link 
                    to={resource.path} 
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <resource.icon className="w-3 h-3" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Special Badge */}
            <div className="mt-4 p-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-500/30">
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap className="w-4 h-4 text-green-400" />
                <span className="text-xs font-semibold text-green-400">Student Special</span>
              </div>
              <p className="text-xs text-gray-400">40% OFF on FYP Projects for students! <Link to="/fyp" className="text-green-400 hover:underline">Learn more →</Link></p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition" />
                <div>
                  <p className="text-gray-400 text-sm">+92 307 5762192</p>
                  <p className="text-gray-500 text-xs">Support Line</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition" />
                <div>
                  <p className="text-gray-400 text-sm">info@codenagar.com</p>
                  <p className="text-gray-500 text-xs">24/7 Support</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition" />
                <div>
                  <p className="text-gray-400 text-sm">Sajjad Complex, Upper Adda</p>
                  <p className="text-gray-400 text-sm">Muzaffarabad, Azad Kashmir</p>
                  <p className="text-gray-500 text-xs">Visit our store</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition" />
                <div>
                  <p className="text-gray-400 text-sm">Mon-Sat: 10AM - 8PM</p>
                  <p className="text-gray-400 text-sm">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Section - Featured Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">For Students</h4>
              <ul className="space-y-1">
                <li><Link to="/fyp" className="text-gray-400 hover:text-green-400 text-sm transition">FYP Projects (40% OFF)</Link></li>
                <li><Link to="/courses" className="text-gray-400 hover:text-blue-400 text-sm transition">IT Courses</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-blue-400 text-sm transition">Internships</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">For Businesses</h4>
              <ul className="space-y-1">
                <li><Link to="/services" className="text-gray-400 hover:text-blue-400 text-sm transition">Custom Software</Link></li>
                <li><Link to="/portfolio" className="text-gray-400 hover:text-blue-400 text-sm transition">Our Work</Link></li>
                <li><Link to="/case-studies" className="text-gray-400 hover:text-blue-400 text-sm transition">Case Studies</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition">Get Quote</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Support</h4>
              <ul className="space-y-1">
                <li><Link to="/contact" className="text-gray-400 hover:text-blue-400 text-sm transition">Contact Us</Link></li>
                <li><Link to="/docs" className="text-gray-400 hover:text-blue-400 text-sm transition">Documentation</Link></li>
                <li><Link to="/refund-policy" className="text-gray-400 hover:text-blue-400 text-sm transition">Refund Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Store</h4>
              <ul className="space-y-1">
                <li><Link to="/store" className="text-gray-400 hover:text-blue-400 text-sm transition">Shop Now</Link></li>
                <li><Link to="/store?category=Computers" className="text-gray-400 hover:text-blue-400 text-sm transition">Computers</Link></li>
                <li><Link to="/store?category=Accessories" className="text-gray-400 hover:text-blue-400 text-sm transition">Accessories</Link></li>
                <li><Link to="/cart" className="text-gray-400 hover:text-blue-400 text-sm transition">My Cart</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} CodeNagar. All rights reserved. | Built with <Heart className="w-3 h-3 inline text-red-400" /> in Muzaffarabad
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              {legalLinks.map((link, i) => (
                <Link 
                  key={i} 
                  to={link.path} 
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;