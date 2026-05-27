// frontend/src/pages/services/DatabaseManagement.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle, Database, HardDrive, Server, Cloud, Shield, 
  Sparkles, ArrowRight, Clock, Award, TrendingUp, 
  Rocket, DollarSign, Heart, Layers, Code, RefreshCw, 
  Activity, Briefcase, Star, Eye, ShoppingCart,
  Zap
} from "lucide-react";
import axios from "axios";

export default function DatabaseManagement() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);

  // Pricing configuration (1 USD = 280 PKR)
  const prices = {
    starter: { usd: 799, pkr: 223000 },
    professional: { usd: 1599, pkr: 447000 },
    enterprise: { usd: "Custom", pkr: "Custom" }
  };

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/portfolio`);
        // Filter for Database related projects
        const dbProjects = response.data.filter(item => 
          item.category === "Cloud Solutions" || 
          (item.title && (item.title.toLowerCase().includes("database") || 
                         item.title.toLowerCase().includes("data") ||
                         item.title.toLowerCase().includes("migration")))
        );
        setPortfolioItems(dbProjects.slice(0, 3));
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
          <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm">Store • Manage • Optimize</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Database <span className="gradient-text">Management</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Design, optimize, and manage your databases for peak performance, security, and scalability.
          </p>
        </motion.div>

        {/* Why Choose Us & Technologies */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Database Management?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We provide end-to-end database solutions including design, migration, optimization, and 24/7 monitoring. Our experts ensure your data is secure, accessible, and performing at its best.
            </p>
            <div className="space-y-3">
              {[
                "Database design & architecture",
                "Performance tuning & optimization",
                "Data migration & replication",
                "Backup & disaster recovery",
                "24/7 database monitoring",
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-blue-300 transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">100+</div>
                <div className="text-xs text-gray-400">Databases Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">99.99%</div>
                <div className="text-xs text-gray-400">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">50TB+</div>
                <div className="text-xs text-gray-400">Data Managed</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-blue-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Database className="w-6 h-6 text-blue-400" />
              Database Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Database, name: "PostgreSQL", color: "from-blue-500 to-cyan-500", desc: "Advanced Relational" },
                { icon: Database, name: "MySQL", color: "from-orange-500 to-red-500", desc: "Popular RDBMS" },
                { icon: Database, name: "MongoDB", color: "from-green-500 to-emerald-500", desc: "NoSQL Document" },
                { icon: Cloud, name: "AWS RDS", color: "from-yellow-500 to-orange-500", desc: "Managed Cloud" },
                { icon: HardDrive, name: "Redis", color: "from-red-500 to-rose-500", desc: "In-Memory Cache" },
                { icon: Server, name: "Oracle", color: "from-purple-500 to-pink-500", desc: "Enterprise DB" },
              ].map((db, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`flex flex-col p-3 bg-gradient-to-r ${db.color} rounded-lg shadow-lg`}
                >
                  <div className="flex items-center gap-2">
                    <db.icon className="w-4 h-4 text-white" />
                    <span className="text-white font-medium text-sm">{db.name}</span>
                  </div>
                  <span className="text-white/70 text-xs mt-1">{db.desc}</span>
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
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Layers className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Database Services We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Complete database solutions for your data needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Database, title: "Database Design", desc: "Optimized schema architecture", color: "from-blue-500 to-cyan-500" },
              { icon: Rocket, title: "Migration Services", desc: "Seamless data migration", color: "from-green-500 to-emerald-500" },
              { icon: Zap, title: "Performance Tuning", desc: "Query optimization & indexing", color: "from-orange-500 to-red-500" },
              { icon: Shield, title: "Security & Compliance", desc: "Data encryption & auditing", color: "from-purple-500 to-pink-500" },
              { icon: RefreshCw, title: "Backup & Recovery", desc: "Automated backups & restore", color: "from-indigo-500 to-blue-500" },
              { icon: Activity, title: "24/7 Monitoring", desc: "Real-time performance alerts", color: "from-red-500 to-rose-500" },
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-dark-400/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Database Process */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Database Management Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Systematic approach to database excellence</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assessment", desc: "Analyze current database", icon: Eye },
              { step: "02", title: "Design", desc: "Architecture & planning", icon: Database },
              { step: "03", title: "Implementation", desc: "Deploy & optimize", icon: Code },
              { step: "04", title: "Monitoring", desc: "24/7 performance tracking", icon: Activity },
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 mx-auto mb-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits of Professional Database Management */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl p-8 border border-blue-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-5xl mb-4">🗄️</div>
                <h3 className="text-2xl font-bold mb-2">Why Professional Database Management Matters</h3>
                <p className="text-gray-300 mb-4">Expert database management delivers measurable benefits:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> 50% faster query performance</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> 99.99% data availability</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> 40% reduction in storage costs</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> Automated backup & recovery</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <Zap className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <p className="text-2xl font-bold text-blue-400">50%</p>
                  <p className="text-xs text-gray-400">Faster Queries</p>
                </div>
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <p className="text-2xl font-bold text-blue-400">40%</p>
                  <p className="text-xs text-gray-400">Cost Reduction</p>
                </div>
              </div>
            </div>
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
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Applications</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Database solutions tailored for various sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "E-commerce", icon: ShoppingCart, desc: "Product & order data" },
              { title: "Healthcare", icon: Heart, desc: "Patient records & compliance" },
              { title: "Finance", icon: DollarSign, desc: "Transactional data" },
              { title: "SaaS", icon: Cloud, desc: "Multi-tenant databases" },
            ].map((industry, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02 }}
                className="bg-dark-400/30 rounded-xl p-4 text-center border border-white/10 hover:border-blue-500 transition-all"
              >
                <industry.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <h3 className="font-semibold text-sm mb-1">{industry.title}</h3>
                <p className="text-xs text-gray-400">{industry.desc}</p>
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
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <DollarSign className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Investment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Database Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Flexible database solutions for every budget</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-white/10 relative overflow-hidden group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-blue-400">${prices.starter.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/month</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.starter.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Up to 50GB Storage", "Basic Monitoring", "Weekly Backups", "Email Support", "Monthly Reports"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/database-management/inquiry"
                className="block text-center py-3 bg-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Get Started <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Professional Plan - Most Popular */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-blue-500 shadow-xl shadow-blue-500/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-indigo-600 px-4 py-1 rounded-bl-xl text-sm font-semibold">
                Most Popular
              </div>
              <div className={`w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-blue-400">${prices.professional.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/month</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.professional.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Up to 250GB Storage", "Advanced Monitoring", "Daily Backups", "Performance Tuning", "24/7 Support", "Compliance Reports"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/database-management/inquiry"
                className="block text-center py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
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
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-blue-400">{prices.enterprise.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/quote</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Unlimited Storage", "Custom Architecture", "High Availability", "Disaster Recovery", "Dedicated DBA", "SLA Agreement"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/database-management/inquiry"
                className="block text-center py-3 bg-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
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
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Eye className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Database Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Successful database implementations we've delivered</p>
          </div>
          
          {loadingPortfolio ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
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
                      <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-gray-400">4.9</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
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
              <p className="text-gray-400">No database projects found in portfolio.</p>
              <Link to="/portfolio" className="text-blue-400 hover:text-blue-300 mt-2 inline-block">View All Projects →</Link>
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
          <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl p-8 border border-blue-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-2">70% Faster Query Performance</h3>
                <p className="text-gray-300 mb-4">Optimized database for a major e-commerce platform, reducing query time from 2 seconds to 600ms and handling 100K+ concurrent users.</p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-blue-400 font-bold text-xl">70%</div>
                    <div className="text-xs text-gray-400">Faster Queries</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-bold text-xl">100K+</div>
                    <div className="text-xs text-gray-400">Concurrent Users</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-bold text-xl">99.99%</div>
                    <div className="text-xs text-gray-400">Uptime</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-dark-400/50 rounded-xl p-6">
                  <p className="text-gray-300 italic">"CodeNagar's database optimization transformed our application performance. The team's expertise in query optimization and indexing is outstanding."</p>
                  <div className="mt-4">
                    <p className="font-semibold">Hina Malik</p>
                    <p className="text-sm text-gray-400">CTO, ShopFast.pk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Database Features */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-dark-400/30 rounded-xl p-6 text-center border border-white/10">
            <HardDrive className="w-10 h-10 mx-auto mb-3 text-blue-400" />
            <h3 className="font-bold mb-2">Enterprise Database Features</h3>
            <p className="text-sm text-gray-400 mb-3">High-performance, secure, and scalable database solutions</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded-full text-blue-400">High Availability</span>
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded-full text-blue-400">Automated Backups</span>
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded-full text-blue-400">Encryption at Rest</span>
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded-full text-blue-400">Read Replicas</span>
              <span className="text-xs px-2 py-1 bg-blue-500/20 rounded-full text-blue-400">Point-in-Time Recovery</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-12 border border-blue-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Database?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's ensure your data is secure, performant, and always available with our expert database management services.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/services/database-management/inquiry" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all group"
            >
              Get Database Assessment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
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