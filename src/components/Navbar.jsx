// frontend/src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Code, Smartphone, Brain, Cloud, User, Layout, Server, Layers, ShoppingBag, Apple, Monitor, Globe, Eye, MessageSquare, GitBranch, Shield, Database, Zap } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { user, logout } = useAuth();
  const location = useLocation();
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleDropdownEnter = (name) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const services = {
    web: [
      { name: "Web Development", path: "/services/web-development", icon: Code },
      { name: "Frontend Development", path: "/services/frontend-development", icon: Layout },
      { name: "Backend Development", path: "/services/backend-development", icon: Server },
      { name: "Full Stack Development", path: "/services/full-stack-development", icon: Layers },
      { name: "E-commerce", path: "/services/ecommerce-development", icon: ShoppingBag },
    ],
    mobile: [
      { name: "App Development", path: "/services/app-development", icon: Smartphone },
      { name: "iOS Development", path: "/services/ios-development", icon: Apple },
      { name: "Android Development", path: "/services/android-development", icon: Monitor },
      { name: "Cross-Platform", path: "/services/cross-platform", icon: Globe },
    ],
    ai: [
      { name: "ML Integration", path: "/services/ml-integration", icon: Brain },
      { name: "AI Solutions", path: "/services/ai-solutions", icon: Zap },
      { name: "Computer Vision", path: "/services/computer-vision", icon: Eye },
      { name: "NLP", path: "/services/nlp", icon: MessageSquare },
    ],
    cloud: [
      { name: "Cloud Solutions", path: "/services/cloud-solutions", icon: Cloud },
      { name: "DevOps", path: "/services/devops", icon: GitBranch },
      { name: "Cybersecurity", path: "/services/cybersecurity", icon: Shield },
      { name: "Database Management", path: "/services/database-management", icon: Database },
    ],
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", dropdown: "services", megaMenu: true },
    { name: "Courses", path: "/courses", dropdown: "courses" },
    { name: "Store", path: "/store" },
    { name: "About", path: "/about", dropdown: "about" },
    { name: "Resources", path: "/resources", dropdown: "resources" },
  ];

  const aboutDropdown = [
    { name: "Our Story", path: "/about" },
    { name: "Leadership", path: "/leadership" },
    { name: "Careers", path: "/careers" },
    { name: "Partners", path: "/partners" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const coursesDropdown = [
    { name: "Web Development", path: "/courses/web-development" },
    { name: "App Development", path: "/courses/app-development" },
    { name: "Data Science", path: "/courses/data-science" },
    { name: "UI/UX Design", path: "/courses/ui-ux" },
    { name: "All Courses", path: "/courses" },
  ];

  const resourcesDropdown = [
    { name: "Blog", path: "/blog" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "White Papers", path: "/whitepapers" },
    { name: "Webinars", path: "/webinars" },
  
    { name: "Documentation", path: "/docs" },
    { name: "Events", path: "/events" },
  ];

  const renderDropdownContent = () => {
    if (activeDropdown === "about") {
      return (
        <div className="w-48">
          {aboutDropdown.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setActiveDropdown(null)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      );
    }
    
    if (activeDropdown === "services") {
      return (
        <div className="w-[800px] p-6">
          <div className="grid grid-cols-4 gap-6">
            <div>
              <h4 className="text-cyan-400 text-sm font-semibold mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" /> Web Development
              </h4>
              <ul className="space-y-2">
                {services.web.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <item.icon className="w-3.5 h-3.5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-cyan-400 text-sm font-semibold mb-3 flex items-center gap-2">
                <Smartphone className="w-4 h-4" /> Mobile Development
              </h4>
              <ul className="space-y-2">
                {services.mobile.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <item.icon className="w-3.5 h-3.5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-cyan-400 text-sm font-semibold mb-3 flex items-center gap-2">
                <Brain className="w-4 h-4" /> AI & ML
              </h4>
              <ul className="space-y-2">
                {services.ai.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <item.icon className="w-3.5 h-3.5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-cyan-400 text-sm font-semibold mb-3 flex items-center gap-2">
                <Cloud className="w-4 h-4" /> Cloud & DevOps
              </h4>
              <ul className="space-y-2">
                {services.cloud.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <item.icon className="w-3.5 h-3.5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10">
            <Link
              to="/services"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1"
              onClick={() => setActiveDropdown(null)}
            >
              View All Services <ChevronDown className="w-4 h-4 rotate-270" />
            </Link>
          </div>
        </div>
      );
    }
    
    if (activeDropdown === "courses") {
      return (
        <div className="w-56">
          {coursesDropdown.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setActiveDropdown(null)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      );
    }
    
    if (activeDropdown === "resources") {
      return (
        <div className="w-48">
          {resourcesDropdown.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setActiveDropdown(null)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      );
    }
    
    return null;
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "glass border-b border-white/10 shadow-xl" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                              <img 
                                src={Logo} 
                                alt="CodeNagar Logo" 
                                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover relative z-10 border-2 border-blue-500/30 shadow-2xl"
                              />
                            </div>
              <span className="text-xl font-display font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                CodeNagar
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => link.dropdown && handleDropdownEnter(link.dropdown)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {link.dropdown ? (
                      <>
                        <button
                          className={`px-4 py-2 rounded-lg flex items-center gap-1 transition-all duration-200 ${
                            activeDropdown === link.dropdown
                              ? "text-cyan-400 bg-white/5"
                              : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {link.name}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === link.dropdown ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        
                        {/* Dropdown Menu */}
                        {activeDropdown === link.dropdown && (
                          <div className="absolute top-full left-0 mt-2 animate-slide-down">
                            <div className="glass-card shadow-2xl border-white/10 overflow-hidden">
                              {renderDropdownContent()}
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                          location.pathname === link.path
                            ? "text-cyan-400 bg-white/5"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

           {/* Right Section */}
<div className="hidden lg:flex items-center gap-4">
  {user ? (
    <div className="relative group">
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition">
        <User className="w-4 h-4" />
        {user.name?.split(' ')[0] || 'User'}
        <ChevronDown className="w-4 h-4" />
      </button>
      <div className="absolute top-full right-0 mt-2 w-48 glass-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <Link to="/dashboard" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5">Dashboard</Link>
        <Link to="/orders" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5">My Orders</Link>
        <Link to="/profile" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5">Profile</Link>
        <button onClick={logout} className="block w-full text-left px-4 py-2 text-red-400 hover:bg-white/5">Logout</button>
      </div>
    </div>
  ) : (
    <>
      <Link to="/login" className="text-gray-300 hover:text-white transition">
        Log in
      </Link>
      <Link to="/signup" className="btn-primary">
        Sign up
      </Link>
    </>
  )}
  <Link to="/contact" className="btn-outline">
    Contact Us
  </Link>
</div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-dark-300 shadow-2xl transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full overflow-y-auto scrollbar-thin">
            <div className="p-6 pt-20 space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg px-4 transition"
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="text-cyan-400 px-4 py-2 text-sm font-semibold">ABOUT</div>
                {aboutDropdown.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 pl-8 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-cyan-400 px-4 py-2 text-sm font-semibold">SERVICES</div>
                {[...services.web, ...services.mobile, ...services.ai, ...services.cloud].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 py-2 pl-8 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 pl-8 text-cyan-400 hover:text-white hover:bg-cyan-500/20 rounded-lg transition"
                >
                  View All Services →
                </Link>
              </div>

              <div className="space-y-2">
                <div className="text-cyan-400 px-4 py-2 text-sm font-semibold">COURSES</div>
                {coursesDropdown.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 pl-8 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
<Link
  to="/store"
  onClick={() => setIsOpen(false)}
  className="block py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg px-4 transition"
>
  Store
</Link>
              <Link
                to="/portfolio"
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg px-4 transition"
              >
                Portfolio
              </Link>

              <div className="space-y-2">
                <div className="text-cyan-400 px-4 py-2 text-sm font-semibold">RESOURCES</div>
                {resourcesDropdown.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 pl-8 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 space-y-3">
                <Link
                  to="/careers"
                  onClick={() => setIsOpen(false)}
                  className="block text-center py-3 border border-white/20 rounded-lg text-gray-300 hover:text-white hover:border-cyan-400/50 transition"
                >
                  Join Team
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center py-3 bg-gradient-primary rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/25 transition"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;