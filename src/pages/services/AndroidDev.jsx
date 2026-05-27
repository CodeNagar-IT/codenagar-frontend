// frontend/src/pages/services/AndroidDev.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle, Smartphone, Code, Cloud, 
  Sparkles, ArrowRight, Clock, Award, Users,  
  Rocket, DollarSign, Heart, Layers, Layout, Eye, Database, 
  MapPin, ShoppingCart, Globe, BarChart3, MessageCircle, 
  CreditCard, Fingerprint, Briefcase, Star, Wifi, Lock
} from "lucide-react";
import axios from "axios";

export default function AndroidDev() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);

  // Pricing configuration (1 USD = 280 PKR)
  const prices = {
    starter: { usd: 1599, pkr: 447000 },
    professional: { usd: 3199, pkr: 895000 },
    enterprise: { usd: "Custom", pkr: "Custom" }
  };

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/portfolio`);
        // Filter for Android/App Development related projects
        const androidProjects = response.data.filter(item => 
          item.category === "App Development" || 
          (item.title && (item.title.toLowerCase().includes("android") || item.title.toLowerCase().includes("mobile")))
        );
        setPortfolioItems(androidProjects.slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch portfolio", error);
      } finally {
        setLoadingPortfolio(false);
      }
    };
    
    fetchPortfolioItems();
  }, []);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm">Native Android Development</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Android <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build powerful, scalable Android applications that reach billions of users worldwide on phones, tablets, and Wear OS.
          </p>
        </motion.div>

        {/* Why Choose Us & Technologies */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-3 py-1 mb-4">
              <Award className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-xs">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Android Development?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We build high-quality, performant Android applications using Kotlin and Jetpack Compose. Our apps are optimized for the entire Android ecosystem, from phones to tablets and Wear OS.
            </p>
            <div className="space-y-3">
              {[
                "Kotlin & Java expertise",
                "Jetpack Compose & XML layouts",
                "Material Design guidelines",
                "Room database & DataStore",
                "Google Play Store optimization",
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-green-300 transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">30+</div>
                <div className="text-xs text-gray-400">Android Apps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">5M+</div>
                <div className="text-xs text-gray-400">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">4.7★</div>
                <div className="text-xs text-gray-400">Play Store Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-green-400" />
              Android Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Code, name: "Kotlin", color: "from-purple-500 to-pink-500", desc: "Primary Language" },
                { icon: Code, name: "Java", color: "from-orange-500 to-red-500", desc: "Legacy Support" },
                { icon: Layout, name: "Jetpack Compose", color: "from-green-500 to-emerald-500", desc: "Modern UI" },
                { icon: Layers, name: "XML Layouts", color: "from-cyan-500 to-blue-500", desc: "Traditional UI" },
                { icon: Database, name: "Room DB", color: "from-yellow-500 to-orange-500", desc: "Local Storage" },
                { icon: Cloud, name: "Firebase", color: "from-amber-500 to-yellow-500", desc: "Backend Services" },
              ].map((tech, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`flex flex-col p-3 bg-gradient-to-r ${tech.color} rounded-lg shadow-lg`}
                >
                  <div className="flex items-center gap-2">
                    <tech.icon className="w-4 h-4 text-white" />
                    <span className="text-white font-medium text-sm">{tech.name}</span>
                  </div>
                  <span className="text-white/70 text-xs mt-1">{tech.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Android-Specific Features */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-3 py-1 mb-4">
              <Smartphone className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-xs">Android Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Android Exclusive Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Leverage Google's powerful Android capabilities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Fingerprint, title: "Biometric Authentication", desc: "Fingerprint & face unlock", color: "from-green-500 to-emerald-500" },
              { icon: CreditCard, title: "Google Pay", desc: "Seamless payment integration", color: "from-cyan-500 to-blue-500" },
              { icon: MessageCircle, title: "Firebase Cloud Messaging", desc: "Push notifications", color: "from-orange-500 to-red-500" },
              { icon: MapPin, title: "Google Maps API", desc: "Location & navigation", color: "from-purple-500 to-pink-500" },
              { icon: Wifi, title: "Nearby Connections", desc: "Peer-to-peer connectivity", color: "from-cyan-500 to-blue-500" },
              { icon: Lock, title: "Work Profile", desc: "Enterprise security", color: "from-red-500 to-rose-500" },
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-dark-400/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* App Types We Build */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-3 py-1 mb-4">
              <Layers className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-xs">Our Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Android Apps We Build</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Specialized Android solutions for every industry</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShoppingCart, title: "E-commerce Apps", desc: "Online shopping with Google Pay", color: "from-green-500 to-emerald-500" },
              { icon: BarChart3, title: "Enterprise Apps", desc: "Business productivity tools", color: "from-cyan-500 to-blue-500" },
              { icon: Heart, title: "Health & Fitness", desc: "Google Fit integration", color: "from-red-500 to-rose-500" },
              { icon: Globe, title: "Social Media", desc: "Engaging social platforms", color: "from-orange-500 to-yellow-500" },
              { icon: Wifi, title: "IoT & Connectivity", desc: "Bluetooth & sensor apps", color: "from-purple-500 to-pink-500" },
              { icon: MapPin, title: "Travel & Navigation", desc: "Location-based services", color: "from-cyan-500 to-blue-500" },
            ].map((type, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-dark-400/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">{type.title}</h3>
                <p className="text-gray-400 text-sm">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Process */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-3 py-1 mb-4">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-xs">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Android Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From concept to Play Store publication</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Requirements & wireframing", icon: Users },
              { step: "02", title: "Design", desc: "Material Design guidelines", icon: Layout },
              { step: "03", title: "Development", desc: "Kotlin/Jetpack coding", icon: Code },
              { step: "04", title: "Launch", desc: "Play Store submission", icon: Rocket },
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 mx-auto mb-2 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits of Android */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl p-8 border border-green-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-2">Why Choose Android for Your Business?</h3>
                <p className="text-gray-300 mb-4">Android dominates the global mobile market:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 70%+ global market share</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Reach billions of users</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Flexible & customizable</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Lower development costs</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <Globe className="w-6 h-6 mx-auto mb-2 text-green-400" />
                  <p className="text-2xl font-bold text-green-400">70%</p>
                  <p className="text-xs text-gray-400">Global Market Share</p>
                </div>
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 mx-auto mb-2 text-green-400" />
                  <p className="text-2xl font-bold text-green-400">2.5B+</p>
                  <p className="text-xs text-gray-400">Active Devices</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Plans with USD & PKR */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-3 py-1 mb-4">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-xs">Investment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Android Development Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Scalable Android solutions for every budget</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-white/10 relative overflow-hidden group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-green-400">${prices.starter.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/project</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.starter.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Phone App", "Up to 10 Screens", "Material Design", "Push Notifications", "Play Store Submission"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/android-development/inquiry"
                className="block text-center py-3 bg-green-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
              >
                Get Started <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Professional Plan - Most Popular */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-green-500 shadow-xl shadow-green-500/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-green-600 to-emerald-600 px-4 py-1 rounded-bl-xl text-sm font-semibold">
                Most Popular
              </div>
              <div className={`w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-green-400">${prices.professional.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/project</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.professional.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Phone + Tablet", "Up to 25 Screens", "Custom Design", "Google Pay", "Firebase Integration", "Analytics"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/android-development/inquiry"
                className="block text-center py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
              >
                Get Started <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-white/10 relative overflow-hidden group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-green-400">{prices.enterprise.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/quote</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Multi-device", "Wear OS Support", "Custom Features", "Team Training", "Priority Support", "SLA Agreement"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/android-development/inquiry"
                className="block text-center py-3 bg-green-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
              >
                Contact Us <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Recent Projects - Fetch from Portfolio */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-3 py-1 mb-4">
              <Eye className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-xs">Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Android Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Successful Android apps on Google Play</p>
          </div>
          
          {loadingPortfolio ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
              <p className="text-gray-400">Loading projects...</p>
            </div>
          ) : portfolioItems.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {portfolioItems.map((item, idx) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card overflow-hidden group cursor-pointer"
                  onClick={() => window.location.href = `/portfolio/${item.slug}`}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.featured && (
                      <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-gray-400">4.9</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {item.technologies?.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 bg-dark-400 rounded-full text-gray-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 glass-card">
              <Briefcase className="w-16 h-16 mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400">No Android projects found in portfolio.</p>
              <Link to="/portfolio" className="text-green-400 hover:text-green-300 mt-2 inline-block">View All Projects →</Link>
            </div>
          )}
        </motion.div>

        {/* Case Study */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl p-8 border border-green-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-2">1M+ Downloads in First Month</h3>
                <p className="text-gray-300 mb-4">Our client's meditation app reached 1 million downloads within 30 days of launch on Google Play.</p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-green-400 font-bold text-xl">1M+</div>
                    <div className="text-xs text-gray-400">Downloads</div>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold text-xl">4.8★</div>
                    <div className="text-xs text-gray-400">Play Store Rating</div>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold text-xl">50+</div>
                    <div className="text-xs text-gray-400">Countries</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-dark-400/50 rounded-xl p-6">
                  <p className="text-gray-300 italic">"CodeNagar's Android team delivered a flawless app that exceeded our expectations. The Kotlin codebase is clean and maintainable."</p>
                  <div className="mt-4">
                    <p className="font-semibold">Mike Chen</p>
                    <p className="text-sm text-gray-400">CTO, MindfulApp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Play Store Optimization */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-dark-400/30 rounded-xl p-6 text-center border border-white/10">
            <Smartphone className="w-10 h-10 mx-auto mb-3 text-green-400" />
            <h3 className="font-bold mb-2">Complete Google Play Management</h3>
            <p className="text-sm text-gray-400 mb-3">We handle everything from developer account setup to Play Store optimization</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-xs px-2 py-1 bg-green-500/20 rounded-full text-green-400">Google Play Console</span>
              <span className="text-xs px-2 py-1 bg-green-500/20 rounded-full text-green-400">Internal Testing</span>
              <span className="text-xs px-2 py-1 bg-green-500/20 rounded-full text-green-400">Open Beta</span>
              <span className="text-xs px-2 py-1 bg-green-500/20 rounded-full text-green-400">ASO</span>
              <span className="text-xs px-2 py-1 bg-green-500/20 rounded-full text-green-400">Production</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-12 border border-green-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Android App?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's create an amazing Android experience that reaches billions of users worldwide.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/services/android-development/inquiry" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all group"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/10 rounded-lg font-semibold hover:bg-white/5 transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}