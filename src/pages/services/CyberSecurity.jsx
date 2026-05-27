// frontend/src/pages/services/CyberSecurity.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle, Shield, Lock, Eye, Fingerprint,
 CreditCard, ShoppingCart, Cloud,  Globe, Zap, Sparkles, 
  ArrowRight, Clock, Award,  TrendingUp, 
  DollarSign, Heart, Layers, 
   Briefcase, Star, AlertTriangle, 
  FileCheck, Scan, 
} from "lucide-react";
import axios from "axios";

export default function CyberSecurity() {
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
        // Filter for Security related projects
        const securityProjects = response.data.filter(item => 
          item.category === "Cloud Solutions" || 
          (item.title && (item.title.toLowerCase().includes("security") || 
                         item.title.toLowerCase().includes("cyber") ||
                         item.title.toLowerCase().includes("compliance")))
        );
        setPortfolioItems(securityProjects.slice(0, 3));
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
          <div className="inline-flex items-center gap-2 bg-red-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm">Protect • Detect • Respond</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Cyber <span className="gradient-text">Security</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your business from evolving cyber threats with comprehensive security solutions.
          </p>
        </motion.div>

        {/* Why Choose Us & Technologies */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-500/10 rounded-full px-3 py-1 mb-4">
              <Award className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-xs">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Cyber Security?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We provide enterprise-grade security solutions to protect your digital assets. From threat detection to compliance management, our expert team ensures your business stays secure.
            </p>
            <div className="space-y-3">
              {[
                "24/7 security monitoring & threat detection",
                "Vulnerability assessment & penetration testing",
                "Compliance & regulatory management",
                "Incident response & disaster recovery",
                "Security awareness training",
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <CheckCircle className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-red-300 transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">99.99%</div>
                <div className="text-xs text-gray-400">Threat Block Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">24/7</div>
                <div className="text-xs text-gray-400">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">50+</div>
                <div className="text-xs text-gray-400">Security Experts</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-red-500/10 to-rose-500/10 rounded-2xl p-8 border border-red-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-red-400" />
              Security Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Shield, name: "Firewalls", color: "from-red-500 to-rose-500", desc: "Network Protection" },
                { icon: Eye, name: "SIEM", color: "from-orange-500 to-red-500", desc: "Security Monitoring" },
                { icon: Lock, name: "Encryption", color: "from-blue-500 to-cyan-500", desc: "Data Protection" },
                { icon: Scan, name: "Vulnerability Scanners", color: "from-green-500 to-emerald-500", desc: "Risk Assessment" },
                { icon: Fingerprint, name: "IAM", color: "from-purple-500 to-pink-500", desc: "Access Control" },
                { icon: Cloud, name: "Cloud Security", color: "from-cyan-500 to-blue-500", desc: "Cloud Protection" },
              ].map((tool, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`flex flex-col p-3 bg-gradient-to-r ${tool.color} rounded-lg shadow-lg`}
                >
                  <div className="flex items-center gap-2">
                    <tool.icon className="w-4 h-4 text-white" />
                    <span className="text-white font-medium text-sm">{tool.name}</span>
                  </div>
                  <span className="text-white/70 text-xs mt-1">{tool.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Security Services We Offer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-500/10 rounded-full px-3 py-1 mb-4">
              <Layers className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-xs">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Services We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive security solutions for modern businesses</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Network Security", desc: "Firewall & intrusion detection", color: "from-red-500 to-rose-500" },
              { icon: Lock, title: "Data Encryption", desc: "Protect sensitive information", color: "from-blue-500 to-cyan-500" },
              { icon: Eye, title: "Security Monitoring", desc: "24/7 threat detection", color: "from-orange-500 to-red-500" },
              { icon: Scan, title: "Penetration Testing", desc: "Identify vulnerabilities", color: "from-green-500 to-emerald-500" },
              { icon: Fingerprint, title: "Identity Management", desc: "Access control & authentication", color: "from-purple-500 to-pink-500" },
              { icon: FileCheck, title: "Compliance Audits", desc: "GDPR, HIPAA, ISO standards", color: "from-cyan-500 to-blue-500" },
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-dark-400/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-red-500 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Process */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-500/10 rounded-full px-3 py-1 mb-4">
              <Clock className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-xs">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Implementation Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Systematic approach to securing your business</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assessment", desc: "Identify vulnerabilities & risks", icon: Scan },
              { step: "02", title: "Implementation", desc: "Deploy security measures", icon: Shield },
              { step: "03", title: "Monitoring", desc: "24/7 threat detection", icon: Eye },
              { step: "04", title: "Response", desc: "Incident handling & recovery", icon: AlertTriangle },
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 mx-auto mb-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compliance Standards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-500/10 rounded-full px-3 py-1 mb-4">
              <FileCheck className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-xs">Compliance</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance Standards</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We ensure your business meets industry regulations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "GDPR", icon: Globe, desc: "Data Protection" },
              { name: "HIPAA", icon: Heart, desc: "Healthcare Security" },
              { name: "ISO 27001", icon: Shield, desc: "Information Security" },
              { name: "PCI DSS", icon: CreditCard, desc: "Payment Security" },
            ].map((standard, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02 }}
                className="bg-dark-400/30 rounded-xl p-4 text-center border border-white/10 hover:border-red-500 transition-all"
              >
                <standard.icon className="w-10 h-10 mx-auto mb-2 text-red-400" />
                <h3 className="font-semibold text-sm mb-1">{standard.name}</h3>
                <p className="text-xs text-gray-400">{standard.desc}</p>
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
            <div className="inline-flex items-center gap-2 bg-red-500/10 rounded-full px-3 py-1 mb-4">
              <TrendingUp className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-xs">Applications</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Security solutions tailored for various sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Finance", icon: DollarSign, desc: "Fraud protection & compliance" },
              { title: "Healthcare", icon: Heart, desc: "Patient data security" },
              { title: "E-commerce", icon: ShoppingCart, desc: "Payment security" },
              { title: "Government", icon: Shield, desc: "National security standards" },
            ].map((industry, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02 }}
                className="bg-dark-400/30 rounded-xl p-4 text-center border border-white/10 hover:border-red-500 transition-all"
              >
                <industry.icon className="w-8 h-8 mx-auto mb-2 text-red-400" />
                <h3 className="font-semibold text-sm mb-1">{industry.title}</h3>
                <p className="text-xs text-gray-400">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits of Cyber Security */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-red-600/10 to-rose-600/10 rounded-2xl p-8 border border-red-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-2">Why Your Business Needs Cyber Security</h3>
                <p className="text-gray-300 mb-4">Cyber security delivers measurable business protection:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-400" /> 60% reduction in security incidents</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-400" /> 99.9% threat detection rate</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-400" /> $4M+ average savings from breaches</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-400" /> Regulatory compliance guaranteed</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <Zap className="w-6 h-6 mx-auto mb-2 text-red-400" />
                  <p className="text-2xl font-bold text-red-400">60%</p>
                  <p className="text-xs text-gray-400">Incident Reduction</p>
                </div>
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 mx-auto mb-2 text-red-400" />
                  <p className="text-2xl font-bold text-red-400">$4M+</p>
                  <p className="text-xs text-gray-400">Breach Savings</p>
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
            <div className="inline-flex items-center gap-2 bg-red-500/10 rounded-full px-3 py-1 mb-4">
              <DollarSign className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-xs">Investment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Flexible security solutions for every budget</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-white/10 relative overflow-hidden group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-red-400">${prices.starter.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/month</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.starter.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Basic Firewall", "Antivirus Protection", "Weekly Scans", "Email Support", "Monthly Reports"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/cybersecurity/inquiry"
                className="block text-center py-3 bg-red-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all"
              >
                Get Started <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Professional Plan - Most Popular */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-red-500 shadow-xl shadow-red-500/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-red-600 to-rose-600 px-4 py-1 rounded-bl-xl text-sm font-semibold">
                Most Popular
              </div>
              <div className={`w-16 h-16 bg-gradient-to-r from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-red-400">${prices.professional.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/month</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.professional.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Advanced Firewall", "SIEM Monitoring", "Vulnerability Scanning", "Incident Response", "24/7 Support", "Compliance Reports"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/cybersecurity/inquiry"
                className="block text-center py-3 bg-gradient-to-r from-red-600 to-rose-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all"
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
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-red-400">{prices.enterprise.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/quote</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Custom Security Architecture", "Dedicated Security Team", "Penetration Testing", "Compliance Management", "SLA Agreement", "24/7 Dedicated Support"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/cybersecurity/inquiry"
                className="block text-center py-3 bg-red-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all"
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
            <div className="inline-flex items-center gap-2 bg-red-500/10 rounded-full px-3 py-1 mb-4">
              <Eye className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-xs">Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Security Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Successful security implementations we've delivered</p>
          </div>
          
          {loadingPortfolio ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
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
                      <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-gray-400">4.9</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors line-clamp-1">
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
              <p className="text-gray-400">No security projects found in portfolio.</p>
              <Link to="/portfolio" className="text-red-400 hover:text-red-300 mt-2 inline-block">View All Projects →</Link>
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
          <div className="bg-gradient-to-r from-red-600/10 to-rose-600/10 rounded-2xl p-8 border border-red-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-2">99.9% Threat Detection Rate</h3>
                <p className="text-gray-300 mb-4">Implemented enterprise-grade SIEM solution for a financial institution, achieving 99.9% threat detection and preventing multiple cyber attacks.</p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-red-400 font-bold text-xl">99.9%</div>
                    <div className="text-xs text-gray-400">Detection Rate</div>
                  </div>
                  <div>
                    <div className="text-red-400 font-bold text-xl">24/7</div>
                    <div className="text-xs text-gray-400">Monitoring</div>
                  </div>
                  <div>
                    <div className="text-red-400 font-bold text-xl">15min</div>
                    <div className="text-xs text-gray-400">Response Time</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-dark-400/50 rounded-xl p-6">
                  <p className="text-gray-300 italic">"CodeNagar's security solution has been instrumental in protecting our infrastructure. Their 24/7 monitoring gives us peace of mind."</p>
                  <div className="mt-4">
                    <p className="font-semibold">Omar Farooq</p>
                    <p className="text-sm text-gray-400">CISO, SecureBank</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-dark-400/30 rounded-xl p-6 text-center border border-white/10">
            <Lock className="w-10 h-10 mx-auto mb-3 text-red-400" />
            <h3 className="font-bold mb-2">Enterprise-Grade Security Features</h3>
            <p className="text-sm text-gray-400 mb-3">Multi-layered protection for your digital assets</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-xs px-2 py-1 bg-red-500/20 rounded-full text-red-400">DDoS Protection</span>
              <span className="text-xs px-2 py-1 bg-red-500/20 rounded-full text-red-400">Web Application Firewall</span>
              <span className="text-xs px-2 py-1 bg-red-500/20 rounded-full text-red-400">Endpoint Detection</span>
              <span className="text-xs px-2 py-1 bg-red-500/20 rounded-full text-red-400">Email Security</span>
              <span className="text-xs px-2 py-1 bg-red-500/20 rounded-full text-red-400">Data Loss Prevention</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-red-600/20 to-rose-600/20 rounded-2xl p-12 border border-red-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Business?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's protect your digital assets and ensure business continuity with comprehensive security solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/services/cybersecurity/inquiry" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-600 to-rose-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all group"
            >
              Get Security Assessment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
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