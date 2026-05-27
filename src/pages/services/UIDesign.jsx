// frontend/src/pages/services/UIDesign.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle, Palette, PenTool, Smartphone, Layout, Monitor, 
  Sparkles, ArrowRight, Clock, Award, Users, DollarSign, 
  Eye, Heart, Layers, Grid, Briefcase, Star
} from "lucide-react";
import { SiFigma } from "react-icons/si";
import axios from "axios";

export default function UIDesign() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);

  // Pricing configuration (1 USD = 280 PKR)
  const prices = {
    basic: { usd: 599, pkr: 167000 },
    professional: { usd: 1199, pkr: 335000 },
    enterprise: { usd: "Custom", pkr: "Custom" }
  };

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/portfolio`);
        // Filter for UI/UX Design related projects
        const designProjects = response.data.filter(item => 
          item.category === "UI/UX Design" || 
          (item.title && (item.title.toLowerCase().includes("design") || 
                         item.title.toLowerCase().includes("ui") ||
                         item.title.toLowerCase().includes("ux")))
        );
        setPortfolioItems(designProjects.slice(0, 3));
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
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">Creative Design Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            UI/UX <span className="gradient-text">Design</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create beautiful, intuitive, and user-centered designs that delight your users and drive engagement.
          </p>
        </motion.div>

        {/* Why Choose Us & Tools */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Our UI/UX Design?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We create user-centered designs that not only look beautiful but also provide seamless experiences. Our design process focuses on understanding your users, their needs, and delivering intuitive interfaces that drive results.
            </p>
            <div className="space-y-3">
              {[
                "User-centered design approach",
                "Pixel-perfect interfaces",
                "Mobile-first responsive designs",
                "Interactive prototypes",
                "Usability testing & research",
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-cyan-300 transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">80+</div>
                <div className="text-xs text-gray-400">Projects Designed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">98%</div>
                <div className="text-xs text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">50+</div>
                <div className="text-xs text-gray-400">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-2xl p-8 border border-cyan-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <PenTool className="w-6 h-6 text-cyan-400" />
              Tools We Use
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: SiFigma, name: "Figma", color: "from-cyan-500 to-indigo-500" },
                { icon: PenTool, name: "Adobe XD", color: "from-indigo-500 to-rose-500" },
                { icon: Layout, name: "Sketch", color: "from-orange-500 to-red-500" },
                { icon: Palette, name: "Illustrator", color: "from-yellow-500 to-orange-500" },
                { icon: Eye, name: "Photoshop", color: "from-cyan-500 to-blue-500" },
                { icon: Layers, name: "InVision", color: "from-indigo-500 to-blue-500" },
              ].map((tool, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`flex items-center gap-2 p-3 bg-gradient-to-r ${tool.color} rounded-lg shadow-lg`}
                >
                  <tool.icon className="w-4 h-4 text-white" />
                  <span className="text-white font-medium text-sm">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Services We Offer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              <Grid className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive UI/UX design solutions for your digital products</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Monitor, title: "Web Design", desc: "Responsive websites that look great on all devices", color: "from-cyan-500 to-blue-500" },
              { icon: Smartphone, title: "Mobile App Design", desc: "Native iOS and Android app interfaces", color: "from-green-500 to-emerald-500" },
              { icon: Layout, title: "Dashboard Design", desc: "Data-rich admin panels and dashboards", color: "from-blue-500 to-indigo-500" },
              { icon: Heart, title: "User Research", desc: "Understanding user needs through research", color: "from-red-500 to-rose-500" },
              { icon: Eye, title: "Usability Testing", desc: "Testing designs with real users", color: "from-orange-500 to-yellow-500" },
              { icon: Layers, title: "Design Systems", desc: "Consistent component libraries", color: "from-indigo-500 to-blue-500" },
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-dark-400/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Process */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A human-centered design approach that delivers results</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Research", desc: "Understanding users & business goals", icon: Users },
              { step: "02", title: "Design", desc: "Wireframing & visual design", icon: PenTool },
              { step: "03", title: "Prototype", desc: "Interactive prototypes", icon: Layout },
              { step: "04", title: "Test", desc: "Usability testing & iteration", icon: Eye },
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 mx-auto mb-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
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
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              <DollarSign className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">Investment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Flexible design packages tailored to your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-white/10 relative overflow-hidden group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-cyan-400">${prices.basic.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/project</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.basic.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["5 Screens", "Wireframes", "Basic Prototype", "Style Guide"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/ui-ux-design/inquiry"
                className="block text-center py-3 bg-cyan-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Get Started <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Professional Plan - Most Popular */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-cyan-500 shadow-xl shadow-cyan-500/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-600 to-indigo-600 px-4 py-1 rounded-bl-xl text-sm font-semibold">
                Most Popular
              </div>
              <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-cyan-400">${prices.professional.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/project</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.professional.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["15 Screens", "High-fidelity Design", "Interactive Prototype", "Design System", "User Testing"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/ui-ux-design/inquiry"
                className="block text-center py-3 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
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
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-cyan-400">{prices.enterprise.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/quote</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Unlimited Screens", "Full Design System", "User Research", "Usability Testing", "Dedicated Designer"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/ui-ux-design/inquiry"
                className="block text-center py-3 bg-cyan-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
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
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              <Eye className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Design Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Beautiful designs we've created for our clients</p>
          </div>
          
          {loadingPortfolio ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
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
                      <div className="absolute top-2 right-2 bg-cyan-600 text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-gray-400">4.9</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">
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
              <p className="text-gray-400">No design projects found in portfolio.</p>
              <Link to="/portfolio" className="text-cyan-400 hover:text-cyan-300 mt-2 inline-block">View All Projects →</Link>
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 rounded-2xl p-12 border border-cyan-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Beautiful Designs?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's bring your vision to life with stunning UI/UX designs that your users will love.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/services/ui-ux-design/inquiry" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all group"
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