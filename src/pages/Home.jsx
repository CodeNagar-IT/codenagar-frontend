// frontend/src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, ShoppingBag, Briefcase, Users, Server, Globe, Sparkles, Rocket, Zap } from "lucide-react";
import { Smartphone, Brain } from "lucide-react";

// Import your logo - adjust the path based on where you put your logo file
import Logo from "../assets/logo.png"; // or logo.svg, or use a URL

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-blue-600/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            {/* Logo with Animation */}
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <img 
                  src={Logo} 
                  alt="CodeNagar Logo" 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover relative z-10 border-4 border-purple-500/30 shadow-2xl"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ delay: 0.3 }} 
              className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></span>
              <span className="text-purple-300 text-sm">Pakistan's Leading Tech Hub</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                CodeNagar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              Where Ideas Become Reality
              <Rocket className="w-6 h-6 text-purple-400" />
            </p>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Software Development | IT Training | Hardware Store — Your Complete Technology Partner
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/services" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2 group">
                Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/courses" className="px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-white/10 transition-all">
                Browse Courses
              </Link>
              <Link to="/store" className="px-8 py-3 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all">
                Shop Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-4 py-1 mb-4">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive software solutions for modern businesses</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Web Development", desc: "Modern responsive websites with cutting-edge tech", link: "/services/web-development", color: "from-blue-500 to-cyan-500" },
              { icon: Smartphone, title: "App Development", desc: "Native iOS & Android cross-platform apps", link: "/services/app-development", color: "from-green-500 to-emerald-500" },
              { icon: Brain, title: "ML Integration", desc: "AI-powered solutions & intelligent systems", link: "/services/ml-integration", color: "from-purple-500 to-pink-500" },
              { icon: Server, title: "Cloud Solutions", desc: "Scalable AWS, Azure, GCP infrastructure", link: "/services/cloud-solutions", color: "from-orange-500 to-red-500" },
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: idx * 0.1 }} 
                whileHover={{ y: -8, scale: 1.02 }} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{service.desc}</p>
                <Link to={service.link} className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-all hover:gap-3">
              View All 12+ Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Impact</span> in Numbers
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Trusted by businesses and students across Pakistan</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Code, value: "50+", label: "Projects Delivered", suffix: "" },
              { icon: Users, value: "200+", label: "Students Trained", suffix: "" },
              { icon: Briefcase, value: "100+", label: "Happy Clients", suffix: "" },
              { icon: ShoppingBag, value: "500+", label: "Products Sold", suffix: "" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.5 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/30 rounded-2xl p-6 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-3 text-purple-400" />
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl p-12 border border-purple-500/20 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how CodeNagar can help you achieve your business goals with cutting-edge technology solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2 group"
              >
                Get Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/careers" 
                className="px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-white/10 transition-all flex items-center gap-2 group"
              >
                Join Our Team <Rocket className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;