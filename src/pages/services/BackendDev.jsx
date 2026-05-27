// frontend/src/pages/services/BackendDev.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle, Server, Database, Shield, Zap, Code, Cloud, Lock, 
  Sparkles, ArrowRight, Award, Users, TrendingUp, Rocket, DollarSign, 
  Layers, GitBranch, Terminal, Globe, Briefcase, Star, Eye
} from "lucide-react";
import axios from "axios";

export default function BackendDev() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);

  // Pricing configuration (1 USD = 280 PKR)
  const prices = {
    starter: { usd: 999, pkr: 279000 },
    professional: { usd: 1999, pkr: 559000 },
    enterprise: { usd: "Custom", pkr: "Custom" }
  };

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/portfolio`);
        // Filter for Backend/API related projects
        const backendProjects = response.data.filter(item => 
          item.category === "Web Development" || 
          (item.title && (item.title.toLowerCase().includes("api") || 
                         item.title.toLowerCase().includes("backend") ||
                         item.title.toLowerCase().includes("microservice")))
        );
        setPortfolioItems(backendProjects.slice(0, 3));
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
            <span className="text-cyan-300 text-sm">Powerful • Scalable • Secure</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Backend <span className="gradient-text">Development</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build robust, scalable, and high-performance server-side applications that power your business.
          </p>
        </motion.div>

        {/* Why Choose Us & Technologies */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Backend Development?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We build powerful, secure, and scalable backend systems that handle millions of requests. From API development to database design, our backend solutions are built for performance and reliability.
            </p>
            <div className="space-y-3">
              {[
                "RESTful & GraphQL API development",
                "Scalable database architecture",
                "Secure authentication & authorization",
                "Microservices & serverless architecture",
                "High-performance & optimized code",
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
                <div className="text-2xl font-bold text-cyan-400">100+</div>
                <div className="text-xs text-gray-400">APIs Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">1M+</div>
                <div className="text-xs text-gray-400">Daily Requests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">50ms</div>
                <div className="text-xs text-gray-400">Avg Response Time</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-2xl p-8 border border-cyan-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-cyan-400" />
              Technologies & Frameworks
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Code, name: "Node.js", color: "from-green-500 to-emerald-500", desc: "JavaScript Runtime" },
                { icon: Globe, name: "Python/Django", color: "from-cyan-500 to-blue-500", desc: "High-level Framework" },
                { icon: Server, name: "Java/Spring", color: "from-red-500 to-orange-500", desc: "Enterprise Ready" },
                { icon: Database, name: "PHP/Laravel", color: "from-blue-500 to-indigo-500", desc: "Full-stack Framework" },
                { icon: Shield, name: "Go/Gin", color: "from-cyan-500 to-blue-500", desc: "High Performance" },
                { icon: Cloud, name: ".NET Core", color: "from-indigo-500 to-blue-500", desc: "Microsoft Stack" },
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

        {/* Services We Offer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">Our Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Backend Services We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Complete backend solutions for modern applications</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Code, title: "API Development", desc: "RESTful & GraphQL APIs", color: "from-cyan-500 to-blue-500" },
              { icon: Database, title: "Database Design", desc: "SQL & NoSQL databases", color: "from-green-500 to-emerald-500" },
              { icon: Shield, title: "Authentication", desc: "JWT, OAuth, SSO integration", color: "from-blue-500 to-indigo-500" },
              { icon: Zap, title: "Performance Optimization", desc: "Caching & query optimization", color: "from-orange-500 to-red-500" },
              { icon: Cloud, title: "Cloud Integration", desc: "AWS, Azure, GCP services", color: "from-yellow-500 to-orange-500" },
              { icon: Lock, title: "Security", desc: "Input validation & encryption", color: "from-indigo-500 to-blue-500" },
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

        {/* Development Process */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              <GitBranch className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Agile methodology for reliable backend development</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Requirements", desc: "Analyze & plan architecture", icon: Users },
              { step: "02", title: "Development", desc: "Write clean, scalable code", icon: Code },
              { step: "03", title: "Testing", desc: "Unit & integration tests", icon: Shield },
              { step: "04", title: "Deployment", desc: "CI/CD & monitoring", icon: Rocket },
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

        {/* Database Expertise */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              <Database className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">Databases</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Database Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Mastery of modern database technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "PostgreSQL", icon: Database, desc: "Advanced relational DB" },
              { name: "MongoDB", icon: Database, desc: "NoSQL document store" },
              { name: "MySQL", icon: Database, desc: "Popular relational DB" },
              { name: "Redis", icon: Zap, desc: "In-memory cache" },
            ].map((db, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02 }}
                className="bg-dark-400/30 rounded-xl p-4 text-center border border-white/10 hover:border-cyan-500 transition-all"
              >
                <db.icon className="w-10 h-10 mx-auto mb-2 text-cyan-400" />
                <h3 className="font-semibold">{db.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{db.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* API Architecture */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-cyan-600/10 to-indigo-600/10 rounded-2xl p-8 border border-cyan-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-5xl mb-4">🔌</div>
                <h3 className="text-2xl font-bold mb-2">Modern API Architecture</h3>
                <p className="text-gray-300 mb-4">We build RESTful and GraphQL APIs that are:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Well-documented with Swagger/OpenAPI</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Versioned for backward compatibility</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Rate-limited & secure</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Optimized for performance</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <Zap className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                  <p className="text-xs text-gray-400">RESTful APIs</p>
                </div>
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <Code className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                  <p className="text-xs text-gray-400">GraphQL</p>
                </div>
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <Server className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                  <p className="text-xs text-gray-400">WebSockets</p>
                </div>
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <Cloud className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                  <p className="text-xs text-gray-400">gRPC</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits of Strong Backend */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Strong Backend Matters</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The backbone of your application</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Performance", desc: "Handle millions of users", color: "from-yellow-500 to-orange-500" },
              { icon: Shield, title: "Security", desc: "Protect sensitive data", color: "from-green-500 to-emerald-500" },
              { icon: TrendingUp, title: "Scalability", desc: "Grow with your business", color: "from-cyan-500 to-blue-500" },
              { icon: Database, title: "Reliability", desc: "99.99% uptime", color: "from-blue-500 to-indigo-500" },
            ].map((benefit, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-dark-400/30 rounded-xl border border-white/10 hover:border-cyan-500 transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-1">{benefit.title}</h3>
                <p className="text-gray-400 text-xs">{benefit.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Backend Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Flexible engagement models for your backend needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-white/10 relative overflow-hidden group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-cyan-400">${prices.starter.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/project</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.starter.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Basic API Development", "Single Database", "Authentication", "Basic Security", "1 Month Support"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/backend-development/inquiry"
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
                <Server className="w-8 h-8 text-white" />
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
                {["Advanced API Development", "Multiple Databases", "Caching & Optimization", "API Documentation", "Security Audits", "3 Months Support"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/backend-development/inquiry"
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
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-cyan-400">{prices.enterprise.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/quote</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Microservices Architecture", "Real-time Features", "High Availability", "Dedicated Team", "SLA Agreement", "24/7 Support"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/backend-development/inquiry"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Backend Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Successful backend implementations we've delivered</p>
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
              <p className="text-gray-400">No backend projects found in portfolio.</p>
              <Link to="/portfolio" className="text-cyan-400 hover:text-cyan-300 mt-2 inline-block">View All Projects →</Link>
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
          <div className="bg-gradient-to-r from-cyan-600/10 to-indigo-600/10 rounded-2xl p-8 border border-cyan-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold mb-2">10x Performance Improvement</h3>
                <p className="text-gray-300 mb-4">Optimized backend APIs reduced response time from 500ms to 50ms for a high-traffic e-commerce platform.</p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-cyan-400 font-bold text-xl">500ms → 50ms</div>
                    <div className="text-xs text-gray-400">Response Time</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-bold text-xl">10x</div>
                    <div className="text-xs text-gray-400">Performance Gain</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-bold text-xl">5M+</div>
                    <div className="text-xs text-gray-400">Daily Requests</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-dark-400/50 rounded-xl p-6">
                  <p className="text-gray-300 italic">"CodeNagar's backend team transformed our API performance. The system now handles 5M+ daily requests with ease."</p>
                  <div className="mt-4">
                    <p className="font-semibold">Imran Ali</p>
                    <p className="text-sm text-gray-400">Technical Director, RetailHub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 rounded-2xl p-12 border border-cyan-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Backend?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's build a powerful, scalable backend that powers your application for years to come.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/services/backend-development/inquiry" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all group"
            >
              Discuss Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/10 rounded-lg font-semibold hover:bg-white/5 transition-all"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}