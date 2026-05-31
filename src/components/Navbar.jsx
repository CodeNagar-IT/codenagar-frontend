// frontend/src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Code, Smartphone, Brain, Cloud, User, Layout, Server, Layers, ShoppingBag, Apple, Monitor, Globe, Eye, MessageSquare, GitBranch, Shield, Database, Zap, GraduationCap, BookOpen, Award, ChevronRight, Home, Briefcase, FileText, Calendar, Users, Handshake, HelpCircle, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
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
    setMobileOpenDropdown(null);
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

  const toggleMobileDropdown = (name) => {
    setMobileOpenDropdown(mobileOpenDropdown === name ? null : name);
  };

  const services = {
    web: [
      { name: "Web Development", path: "/services/web-development", icon: Code, description: "Modern responsive websites" },
      { name: "Frontend Development", path: "/services/frontend-development", icon: Layout, description: "React, Vue, Angular" },
      { name: "Backend Development", path: "/services/backend-development", icon: Server, description: "Node.js, Python, PHP" },
      { name: "Full Stack Development", path: "/services/full-stack-development", icon: Layers, description: "End-to-end solutions" },
      { name: "E-commerce", path: "/services/ecommerce-development", icon: ShoppingBag, description: "Online stores" },
    ],
    mobile: [
      { name: "App Development", path: "/services/app-development", icon: Smartphone, description: "iOS & Android" },
      { name: "iOS Development", path: "/services/ios-development", icon: Apple, description: "Swift, SwiftUI" },
      { name: "Android Development", path: "/services/android-development", icon: Monitor, description: "Kotlin, Java" },
      { name: "Cross-Platform", path: "/services/cross-platform", icon: Globe, description: "React Native, Flutter" },
    ],
    ai: [
      { name: "ML Integration", path: "/services/ml-integration", icon: Brain, description: "Machine Learning" },
      { name: "AI Solutions", path: "/services/ai-solutions", icon: Zap, description: "Custom AI" },
      { name: "Computer Vision", path: "/services/computer-vision", icon: Eye, description: "Image recognition" },
      { name: "NLP", path: "/services/nlp", icon: MessageSquare, description: "Text processing" },
    ],
    cloud: [
      { name: "Cloud Solutions", path: "/services/cloud-solutions", icon: Cloud, description: "AWS, Azure, GCP" },
      { name: "DevOps", path: "/services/devops", icon: GitBranch, description: "CI/CD, Automation" },
      { name: "Cybersecurity", path: "/services/cybersecurity", icon: Shield, description: "Security solutions" },
      { name: "Database Management", path: "/services/database-management", icon: Database, description: "SQL, NoSQL" },
    ],
    fyp: [
      { name: "FYP Projects", path: "/fyp", icon: GraduationCap, badge: "40% OFF", description: "Ready-made projects" },
      { name: "Thesis Writing", path: "/fyp?type=Thesis", icon: BookOpen, badge: "Student Discount", description: "Research help" },
      { name: "Technical Reports", path: "/fyp?type=Report", icon: Award, badge: "University", description: "Documentation" },
    ],
  };

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/services", dropdown: "services", megaMenu: true, icon: Code },
    { name: "Courses", path: "/courses", dropdown: "courses", icon: BookOpen },
    { name: "Store", path: "/store", icon: ShoppingBag },
    { name: "About", path: "/about", dropdown: "about", icon: Briefcase },
    { name: "Resources", path: "/resources", dropdown: "resources", icon: FileText },
  ];

  const aboutDropdown = [
    { name: "Our Story", path: "/about", icon: Home },
    { name: "Leadership", path: "/leadership", icon: Users },
    { name: "Careers", path: "/careers", icon: Briefcase },
    { name: "Partners", path: "/partners", icon: Handshake },
    { name: "Portfolio", path: "/portfolio", icon: Briefcase },
    { name: "Contact", path: "/contact", icon: MessageSquare },
  ];

  const coursesDropdown = [
    { name: "Web Development", path: "/courses/web-development", icon: Code },
    { name: "App Development", path: "/courses/app-development", icon: Smartphone },
    { name: "Data Science", path: "/courses/data-science", icon: Database },
    { name: "UI/UX Design", path: "/courses/ui-ux", icon: Layout },
    { name: "All Courses", path: "/courses", icon: BookOpen },
  ];

  const resourcesDropdown = [
    { name: "Blog", path: "/blog", icon: FileText },
    { name: "Case Studies", path: "/case-studies", icon: Briefcase },
    { name: "White Papers", path: "/whitepapers", icon: FileText },
    { name: "Documentation", path: "/docs", icon: HelpCircle },
    { name: "Events", path: "/events", icon: Calendar },
  ];

  // User menu items
  const userMenuItems = [
    { name: "Dashboard", path: "/dashboard", icon: Layout },
    { name: "My Reservations", path: "/my-reservations", icon: ShoppingBag },
    { name: "Profile", path: "/profile", icon: User },
  ];

  const renderDropdownContent = () => {
    if (activeDropdown === "about") {
      return (
        <div className="w-56">
          {aboutDropdown.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-2 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setActiveDropdown(null)}
            >
              <item.icon className="w-4 h-4 text-cyan-400" />
              {item.name}
            </Link>
          ))}
        </div>
      );
    }
    
    if (activeDropdown === "services") {
      return (
        <div className="w-screen max-w-[95vw] lg:w-[1000px] p-4 md:p-6">
          <div className="grid grid-cols-5 gap-6">
            {/* Web Development Column */}
            <div>
              <h4 className="text-cyan-400 text-sm font-semibold mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" /> Web Development
              </h4>
              <ul className="space-y-2">
                {services.web.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="block group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                        <item.icon className="w-3.5 h-3.5" />
                        {item.name}
                      </div>
                      <p className="text-xs text-gray-600 group-hover:text-gray-500">{item.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Mobile Development Column */}
            <div>
              <h4 className="text-cyan-400 text-sm font-semibold mb-3 flex items-center gap-2">
                <Smartphone className="w-4 h-4" /> Mobile Development
              </h4>
              <ul className="space-y-2">
                {services.mobile.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="block group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                        <item.icon className="w-3.5 h-3.5" />
                        {item.name}
                      </div>
                      <p className="text-xs text-gray-600 group-hover:text-gray-500">{item.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* AI & ML Column */}
            <div>
              <h4 className="text-cyan-400 text-sm font-semibold mb-3 flex items-center gap-2">
                <Brain className="w-4 h-4" /> AI & ML
              </h4>
              <ul className="space-y-2">
                {services.ai.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="block group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                        <item.icon className="w-3.5 h-3.5" />
                        {item.name}
                      </div>
                      <p className="text-xs text-gray-600 group-hover:text-gray-500">{item.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Cloud & DevOps Column */}
            <div>
              <h4 className="text-cyan-400 text-sm font-semibold mb-3 flex items-center gap-2">
                <Cloud className="w-4 h-4" /> Cloud & DevOps
              </h4>
              <ul className="space-y-2">
                {services.cloud.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="block group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                        <item.icon className="w-3.5 h-3.5" />
                        {item.name}
                      </div>
                      <p className="text-xs text-gray-600 group-hover:text-gray-500">{item.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* FYP for Students Column */}
            <div className="relative">
              <div className="absolute -top-2 -right-2">
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                  Popular
                </span>
              </div>
              <h4 className="text-green-400 text-sm font-semibold mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> For Students
              </h4>
              <ul className="space-y-2">
                {services.fyp.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="block group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex items-center gap-2 text-gray-400 group-hover:text-white text-sm transition-colors">
                          <item.icon className="w-3.5 h-3.5 text-green-400" />
                          {item.name}
                        </span>
                        {item.badge && (
                          <span className="text-xs bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 group-hover:text-gray-500 mt-1">{item.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-3 border-t border-green-500/20">
                <Link
                  to="/fyp"
                  className="flex items-center gap-2 text-xs text-green-400 hover:text-green-300 transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  <GraduationCap className="w-3 h-3" />
                  Exclusive for University Students →
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10">
            <Link
              to="/services"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1"
              onClick={() => setActiveDropdown(null)}
            >
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      );
    }
    
    if (activeDropdown === "courses") {
      return (
        <div className="w-64">
          {coursesDropdown.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-2 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setActiveDropdown(null)}
            >
              <item.icon className="w-4 h-4 text-cyan-400" />
              {item.name}
            </Link>
          ))}
        </div>
      );
    }
    
    if (activeDropdown === "resources") {
      return (
        <div className="w-56">
          {resourcesDropdown.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-2 px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setActiveDropdown(null)}
            >
              <item.icon className="w-4 h-4 text-cyan-400" />
              {item.name}
            </Link>
          ))}
        </div>
      );
    }
    
    return null;
  };

  // Mobile render function for dropdowns
  const renderMobileDropdown = (dropdownName, items, isServices = false) => {
    if (mobileOpenDropdown !== dropdownName) return null;
    
    if (isServices) {
      return (
        <div className="pl-4 mt-2 space-y-3">
          {Object.keys(services).map((category) => (
            <div key={category} className="space-y-2">
              <h4 className="text-cyan-400 text-sm font-semibold">
                {category === "web" && "Web Development"}
                {category === "mobile" && "Mobile Development"}
                {category === "ai" && "AI & ML"}
                {category === "cloud" && "Cloud & DevOps"}
                {category === "fyp" && "For Students"}
              </h4>
              {services[category].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-2 pl-4 text-gray-400 hover:text-white text-sm"
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </span>
                  {item.badge && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          ))}
        </div>
      );
    }
    
    return (
      <div className="pl-4 mt-2 space-y-2">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 py-2 pl-4 text-gray-400 hover:text-white text-sm"
          >
            {item.icon && <item.icon className="w-4 h-4 text-cyan-400" />}
            {item.name}
          </Link>
        ))}
      </div>
    );
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

            {/* Right Section - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              {user ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition">
                    <User className="w-4 h-4" />
                    {user.name?.split(' ')[0] || 'User'}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full right-0 mt-2 w-56 glass-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {userMenuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <item.icon className="w-4 h-4 text-cyan-400" />
                        {item.name}
                      </Link>
                    ))}
                    <div className="border-t border-white/10 my-1"></div>
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 w-full text-left px-4 py-2 text-red-400 hover:bg-white/5 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
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

      {/* Mobile Menu Drawer - Enhanced */}
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
            <div className="p-6 pt-20">
              {/* User Profile Section - Mobile */}
              {user ? (
                <div className="mb-6 p-4 bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 rounded-xl border border-cyan-500/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center text-xl font-bold">
                      {user.name?.charAt(0) || "U"}
                    </div>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {userMenuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 py-2 px-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
                      >
                        <item.icon className="w-4 h-4 text-cyan-400" />
                        {item.name}
                      </Link>
                    ))}
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-2 w-full py-2 px-3 text-red-400 hover:bg-white/5 rounded-lg transition"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mb-6 flex gap-3">
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 text-center py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 text-center py-2 border border-white/20 rounded-lg hover:bg-white/5 transition"
                  >
                    Sign up
                  </Link>
                </div>
              )}

              {/* Navigation Links with Nested Dropdowns */}
              <div className="space-y-1">
                {/* Home Link */}
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 py-3 px-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
                >
                  <Home className="w-5 h-5 text-cyan-400" />
                  Home
                </Link>

                {/* Services Dropdown */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown("services")}
                    className="flex items-center justify-between w-full py-3 px-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
                  >
                    <div className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-cyan-400" />
                      Services
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenDropdown === "services" ? "rotate-180" : ""}`} />
                  </button>
                  {renderMobileDropdown("services", null, true)}
                </div>

                {/* Courses Dropdown */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown("courses")}
                    className="flex items-center justify-between w-full py-3 px-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-cyan-400" />
                      Courses
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenDropdown === "courses" ? "rotate-180" : ""}`} />
                  </button>
                  {renderMobileDropdown("courses", coursesDropdown)}
                </div>

                {/* Store Link */}
                <Link
                  to="/store"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 py-3 px-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
                >
                  <ShoppingBag className="w-5 h-5 text-cyan-400" />
                  Store
                </Link>

                {/* About Dropdown */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown("about")}
                    className="flex items-center justify-between w-full py-3 px-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
                  >
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-cyan-400" />
                      About
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenDropdown === "about" ? "rotate-180" : ""}`} />
                  </button>
                  {renderMobileDropdown("about", aboutDropdown)}
                </div>

                {/* Resources Dropdown */}
                <div>
                  <button
                    onClick={() => toggleMobileDropdown("resources")}
                    className="flex items-center justify-between w-full py-3 px-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-cyan-400" />
                      Resources
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenDropdown === "resources" ? "rotate-180" : ""}`} />
                  </button>
                  {renderMobileDropdown("resources", resourcesDropdown)}
                </div>

                {/* Portfolio Link */}
                <Link
                  to="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 py-3 px-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
                >
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  Portfolio
                </Link>

                {/* Contact Link */}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 py-3 px-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition"
                >
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  Contact
                </Link>
              </div>

              {/* Footer Links */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  to="/careers"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 py-2 px-3 text-gray-400 hover:text-white transition"
                >
                  Careers
                </Link>
                <Link
                  to="/partners"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 py-2 px-3 text-gray-400 hover:text-white transition"
                >
                  Become a Partner
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