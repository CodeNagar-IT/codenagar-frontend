// frontend/src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, X, Laptop, User, ShoppingBag, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
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

  const serviceLinks = [
    { name: "Web Development", path: "/services/web-development" },
    { name: "App Development", path: "/services/app-development" },
    { name: "ML Integration", path: "/services/ml-integration" },
    { name: "AI Solutions", path: "/services/ai-solutions" },
    { name: "Frontend Development", path: "/services/frontend-development" },
    { name: "Backend Development", path: "/services/backend-development" },
    { name: "Full Stack Development", path: "/services/full-stack-development" },
    { name: "Cloud Solutions", path: "/services/cloud-solutions" },
    { name: "DevOps", path: "/services/devops" },
    { name: "UI/UX Design", path: "/services/ui-ux-design" },
    { name: "E-commerce", path: "/services/ecommerce-development" },
  ];

  const courseLinks = [
    { name: "MS Office", path: "/courses/ms-office" },
    { name: "Web Development", path: "/courses/web-development" },
    { name: "App Development", path: "/courses/app-development" },
    { name: "Python Programming", path: "/courses/python" },
    { name: "Data Science & ML", path: "/courses/data-science" },
    { name: "UI/UX Design", path: "/courses/ui-ux" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-gray-900/95 backdrop-blur-xl border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <Laptop className="w-8 h-8 text-blue-400 group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                CodeNagar
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link to="/" className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition">
                Home
              </Link>
              
              <div className="relative group">
                <button className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition flex items-center gap-1">
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 w-72 bg-gray-900 rounded-xl shadow-xl border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2 max-h-96 overflow-y-auto">
                    {serviceLinks.map((link) => (
                      <Link key={link.path} to={link.path} className="block px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white transition">
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition flex items-center gap-1">
                  Courses <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 w-64 bg-gray-900 rounded-xl shadow-xl border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    {courseLinks.map((link) => (
                      <Link key={link.path} to={link.path} className="block px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white transition">
                        {link.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-800 my-2"></div>
                    <Link to="/courses" className="block px-4 py-2 text-blue-400 hover:bg-blue-600 hover:text-white transition">
                      View All Courses →
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/store" className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition flex items-center gap-1">
                <ShoppingBag className="w-4 h-4" /> Store
              </Link>
              <Link to="/events" className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition">Events</Link>
              <Link to="/careers" className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition">Careers</Link>
              <Link to="/about" className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition">About</Link>
              <Link to="/contact" className="px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition">Contact</Link>

              {user ? (
                <div className="relative group ml-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                    <User className="w-4 h-4" /> {user.name?.split(' ')[0] || 'User'}
                  </button>
                  <div className="absolute top-full right-0 w-48 bg-gray-900 rounded-xl shadow-xl border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      <Link to="/dashboard" className="block px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white transition">Dashboard</Link>
                      <Link to="/orders" className="block px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white transition">My Orders</Link>
                      <Link to="/profile" className="block px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white transition">Profile</Link>
                      <div className="border-t border-gray-800 my-2"></div>
                      <button onClick={logout} className="block w-full text-left px-4 py-2 text-red-400 hover:bg-red-600 hover:text-white transition">Logout</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2 ml-4">
                  <Link to="/login" className="px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-600 transition">Login</Link>
                  <Link to="/signup" className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">Sign Up</Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden relative z-[100] focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - No animations, pure CSS */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 z-[90] lg:hidden overflow-y-auto pt-20">
          <div className="px-4 py-4 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg px-4 transition">Home</Link>
            
            <div className="py-2">
              <div className="text-gray-400 px-4 py-2 text-sm font-semibold">SERVICES</div>
              {serviceLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block py-2 pl-8 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition">
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="py-2">
              <div className="text-gray-400 px-4 py-2 text-sm font-semibold">COURSES</div>
              {courseLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block py-2 pl-8 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition">
                  {link.name}
                </Link>
              ))}
              <Link to="/courses" onClick={() => setIsOpen(false)} className="block py-2 pl-8 text-blue-400 hover:text-white hover:bg-blue-600 rounded-lg transition">
                View All Courses →
              </Link>
            </div>

            <Link to="/store" onClick={() => setIsOpen(false)} className="block py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg px-4 transition">Store</Link>
            <Link to="/events" onClick={() => setIsOpen(false)} className="block py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg px-4 transition">Events</Link>
            <Link to="/careers" onClick={() => setIsOpen(false)} className="block py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg px-4 transition">Careers</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg px-4 transition">About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg px-4 transition">Contact</Link>

            {user ? (
              <>
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg px-4 transition">Dashboard</Link>
                <Link to="/orders" onClick={() => setIsOpen(false)} className="block py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg px-4 transition">My Orders</Link>
                <Link to="/profile" onClick={() => setIsOpen(false)} className="block py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg px-4 transition">Profile</Link>
                <button onClick={() => { logout(); setIsOpen(false); }} className="block w-full text-left py-3 text-red-400 hover:bg-red-600 hover:text-white rounded-lg px-4 transition">Logout</button>
              </>
            ) : (
              <div className="pt-4 space-y-2">
                <Link to="/login" onClick={() => setIsOpen(false)} className="block py-3 text-center border border-blue-600 rounded-lg hover:bg-blue-600 transition">Login</Link>
                <Link to="/signup" onClick={() => setIsOpen(false)} className="block py-3 text-center bg-blue-600 rounded-lg hover:bg-blue-700 transition">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;