// frontend/src/pages/services/ComputerVision.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle, Eye, Brain, Scan, Image, Video, 
  Sparkles, ArrowRight, Clock, Award,  TrendingUp, 
  Rocket, DollarSign, Heart, Layers, Code, Shield, 
  Database, Cloud, ShoppingCart, Briefcase, Star,
  Cpu, Zap, Fingerprint, MapPin,  FileText, Car
} from "lucide-react";
import axios from "axios";

export default function ComputerVision() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);

  // Pricing configuration (1 USD = 280 PKR)
  const prices = {
    starter: { usd: 1299, pkr: 363000 },
    professional: { usd: 2499, pkr: 699000 },
    enterprise: { usd: "Custom", pkr: "Custom" }
  };

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/portfolio`);
        // Filter for AI/ML/Computer Vision related projects
        const cvProjects = response.data.filter(item => 
          item.category === "AI/ML" || 
          (item.title && (item.title.toLowerCase().includes("vision") || 
                         item.title.toLowerCase().includes("recognition") ||
                         item.title.toLowerCase().includes("detection") ||
                         item.title.toLowerCase().includes("image")))
        );
        setPortfolioItems(cvProjects.slice(0, 3));
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
          <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">See the Unseen</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Computer <span className="gradient-text">Vision</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enable machines to interpret and understand the visual world through advanced image and video analysis.
          </p>
        </motion.div>

        {/* Why Choose Us & Technologies */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Award className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Computer Vision Solutions?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We build intelligent vision systems that can analyze, understand, and extract information from images and videos. From facial recognition to object detection, our solutions power automation and insights across industries.
            </p>
            <div className="space-y-3">
              {[
                "Object detection & tracking",
                "Facial recognition & analysis",
                "Image classification & tagging",
                "Optical Character Recognition (OCR)",
                "Video analytics & surveillance",
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <CheckCircle className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-purple-300 transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">20+</div>
                <div className="text-xs text-gray-400">CV Models</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">98%</div>
                <div className="text-xs text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">10M+</div>
                <div className="text-xs text-gray-400">Images Processed</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-purple-400" />
              Technologies & Frameworks
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Eye, name: "OpenCV", color: "from-cyan-500 to-blue-500", desc: "Computer Vision Library" },
                { icon: Brain, name: "YOLO", color: "from-orange-500 to-red-500", desc: "Object Detection" },
                { icon: Cpu, name: "TensorFlow", color: "from-blue-500 to-indigo-500", desc: "Deep Learning" },
                { icon: Code, name: "PyTorch", color: "from-red-500 to-rose-500", desc: "ML Framework" },
                { icon: Scan, name: "Tesseract", color: "from-green-500 to-emerald-500", desc: "OCR Engine" },
                { icon: Cloud, name: "AWS Rekognition", color: "from-yellow-500 to-orange-500", desc: "Cloud Vision API" },
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

        {/* Computer Vision Solutions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Layers className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Our Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Computer Vision Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Transform visual data into actionable insights</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Scan, title: "Object Detection", desc: "Identify and locate objects in images", color: "from-purple-500 to-pink-500" },
              { icon: Fingerprint, title: "Facial Recognition", desc: "Identify and verify individuals", color: "from-cyan-500 to-blue-500" },
              { icon: FileText, title: "OCR Text Extraction", desc: "Extract text from images/documents", color: "from-green-500 to-emerald-500" },
              { icon: Video, title: "Video Analytics", desc: "Real-time video surveillance", color: "from-orange-500 to-red-500" },
              { icon: Image, title: "Image Classification", desc: "Categorize images automatically", color: "from-indigo-500 to-purple-500" },
              { icon: MapPin, title: "License Plate Recognition", desc: "ANPR for security & tolls", color: "from-red-500 to-rose-500" },
            ].map((solution, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-dark-400/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{solution.title}</h3>
                <p className="text-gray-400 text-sm">{solution.desc}</p>
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
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Clock className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CV Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Building intelligent vision systems step by step</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Data Collection", desc: "Gather & annotate images", icon: Database },
              { step: "02", title: "Model Training", desc: "Train CV models", icon: Brain },
              { step: "03", title: "Testing", desc: "Validate accuracy", icon: Shield },
              { step: "04", title: "Deployment", desc: "Integrate & monitor", icon: Rocket },
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 mx-auto mb-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industries We Serve */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Applications</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Computer vision solutions for various sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Retail", icon: ShoppingCart, desc: "Inventory management & customer analytics" },
              { title: "Healthcare", icon: Heart, desc: "Medical imaging & diagnosis" },
              { title: "Security", icon: Shield, desc: "Surveillance & threat detection" },
              { title: "Automotive", icon: Car, desc: "Autonomous driving & safety" },
            ].map((industry, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02 }}
                className="bg-dark-400/30 rounded-xl p-4 text-center border border-white/10 hover:border-purple-500 transition-all"
              >
                <industry.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <h3 className="font-semibold text-sm mb-1">{industry.title}</h3>
                <p className="text-xs text-gray-400">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits of Computer Vision */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-5xl mb-4">👁️</div>
                <h3 className="text-2xl font-bold mb-2">Why Your Business Needs Computer Vision</h3>
                <p className="text-gray-300 mb-4">Computer vision delivers measurable business impact:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> 50% reduction in manual inspection costs</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> 99% accuracy in quality control</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> Real-time threat detection</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> 24/7 automated monitoring</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <Zap className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                  <p className="text-2xl font-bold text-purple-400">50%</p>
                  <p className="text-xs text-gray-400">Cost Reduction</p>
                </div>
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                  <p className="text-2xl font-bold text-purple-400">99%</p>
                  <p className="text-xs text-gray-400">Accuracy Rate</p>
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
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <DollarSign className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Investment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Computer Vision Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Custom vision solutions for your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-white/10 relative overflow-hidden group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-purple-400">${prices.starter.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/project</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.starter.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Single CV Model", "Image Classification", "Basic API Integration", "30 Days Support"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/computer-vision/inquiry"
                className="block text-center py-3 bg-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Get Started <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Professional Plan - Most Popular */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-purple-500 shadow-xl shadow-purple-500/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-pink-600 px-4 py-1 rounded-bl-xl text-sm font-semibold">
                Most Popular
              </div>
              <div className={`w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-purple-400">${prices.professional.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/project</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.professional.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Multiple CV Models", "Object Detection", "Facial Recognition", "Dashboard & Analytics", "6 Months Support"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/computer-vision/inquiry"
                className="block text-center py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
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
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-purple-400">{prices.enterprise.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/quote</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Real-time Video Analytics", "Custom Model Training", "24/7 Monitoring", "Dedicated Team", "SLA Agreement"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/computer-vision/inquiry"
                className="block text-center py-3 bg-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
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
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Eye className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Computer Vision Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Successful vision implementations we've delivered</p>
          </div>
          
          {loadingPortfolio ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
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
                      <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-gray-400">4.9</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors line-clamp-1">
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
              <p className="text-gray-400">No computer vision projects found in portfolio.</p>
              <Link to="/portfolio" className="text-purple-400 hover:text-purple-300 mt-2 inline-block">View All Projects →</Link>
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
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">👁️</div>
                <h3 className="text-2xl font-bold mb-2">95% Accuracy in Object Detection</h3>
                <p className="text-gray-300 mb-4">Implemented a real-time object detection system for a retail chain, reducing theft by 40% and improving inventory accuracy.</p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-purple-400 font-bold text-xl">95%</div>
                    <div className="text-xs text-gray-400">Detection Accuracy</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-xl">40%</div>
                    <div className="text-xs text-gray-400">Theft Reduction</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-xl">24/7</div>
                    <div className="text-xs text-gray-400">Monitoring</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-dark-400/50 rounded-xl p-6">
                  <p className="text-gray-300 italic">"CodeNagar's computer vision solution has revolutionized our security and inventory management. The accuracy is remarkable."</p>
                  <div className="mt-4">
                    <p className="font-semibold">Ahmed Raza</p>
                    <p className="text-sm text-gray-400">Operations Director, RetailChain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* OCR & Recognition */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-dark-400/30 rounded-xl p-6 text-center border border-white/10">
            <Scan className="w-10 h-10 mx-auto mb-3 text-purple-400" />
            <h3 className="font-bold mb-2">Advanced OCR & Document Processing</h3>
            <p className="text-sm text-gray-400 mb-3">Extract text from images, scanned documents, and PDFs with high accuracy</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-xs px-2 py-1 bg-purple-500/20 rounded-full text-purple-400">Document Scanning</span>
              <span className="text-xs px-2 py-1 bg-purple-500/20 rounded-full text-purple-400">License Plate Recognition</span>
              <span className="text-xs px-2 py-1 bg-purple-500/20 rounded-full text-purple-400">Handwriting Recognition</span>
              <span className="text-xs px-2 py-1 bg-purple-500/20 rounded-full text-purple-400">Form Processing</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to See What Computer Vision Can Do?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's help your business see the unseen with powerful vision AI solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/services/computer-vision/inquiry" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all group"
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