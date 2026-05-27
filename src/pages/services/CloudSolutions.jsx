// frontend/src/pages/services/CloudSolutions.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle, Cloud, Server, Shield, Database, Globe, Zap, 
  Sparkles, ArrowRight, Clock, Award, Users, TrendingUp, Rocket, 
  DollarSign, Layers, RefreshCw, Layout, Network, BarChart3, 
  Briefcase, Star, Eye
} from "lucide-react";
import axios from "axios";

export default function CloudSolutions() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);

  // Pricing configuration (1 USD = 280 PKR)
  const prices = {
    starter: { usd: 899, pkr: 251000 },
    professional: { usd: 1799, pkr: 503000 },
    enterprise: { usd: "Custom", pkr: "Custom" }
  };

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/portfolio`);
        // Filter for Cloud Solutions related projects
        const cloudProjects = response.data.filter(item => 
          item.category === "Cloud Solutions" || 
          (item.title && (item.title.toLowerCase().includes("cloud") || 
                         item.title.toLowerCase().includes("aws") ||
                         item.title.toLowerCase().includes("azure") ||
                         item.title.toLowerCase().includes("migration")))
        );
        setPortfolioItems(cloudProjects.slice(0, 3));
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
            <span className="text-cyan-300 text-sm">Scale • Secure • Optimize</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Cloud <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Modernize your infrastructure with scalable, secure, and cost-effective cloud solutions.
          </p>
        </motion.div>

        {/* Why Choose Us & Platforms */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Cloud Solutions?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We help businesses migrate, manage, and optimize their cloud infrastructure. From AWS to Azure, our certified experts ensure your cloud journey is smooth, secure, and cost-effective.
            </p>
            <div className="space-y-3">
              {[
                "Cloud migration & strategy",
                "Cost optimization & management",
                "High availability & disaster recovery",
                "Security & compliance",
                "24/7 cloud monitoring",
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
                <div className="text-xs text-gray-400">Cloud Migrations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">99.99%</div>
                <div className="text-xs text-gray-400">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">40%</div>
                <div className="text-xs text-gray-400">Cost Savings</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-2xl p-8 border border-cyan-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Cloud className="w-6 h-6 text-cyan-400" />
              Cloud Platforms
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Globe, name: "AWS", color: "from-orange-500 to-yellow-500", desc: "Market Leader" },
                { icon: Cloud, name: "Microsoft Azure", color: "from-cyan-500 to-blue-500", desc: "Enterprise Ready" },
                { icon: Database, name: "Google Cloud", color: "from-red-500 to-indigo-500", desc: "Data & AI Focus" },
                { icon: Server, name: "DigitalOcean", color: "from-blue-400 to-blue-600", desc: "Simple & Scalable" },
              ].map((platform, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`flex flex-col p-3 bg-gradient-to-r ${platform.color} rounded-lg shadow-lg`}
                >
                  <div className="flex items-center gap-2">
                    <platform.icon className="w-4 h-4 text-white" />
                    <span className="text-white font-medium text-sm">{platform.name}</span>
                  </div>
                  <span className="text-white/70 text-xs mt-1">{platform.desc}</span>
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
              <span className="text-cyan-300 text-xs">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud Services We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive cloud solutions for every business need</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Rocket, title: "Cloud Migration", desc: "Seamless lift & shift or re-platforming", color: "from-cyan-500 to-blue-500" },
              { icon: Shield, title: "Cloud Security", desc: "IAM, encryption & compliance", color: "from-green-500 to-emerald-500" },
              { icon: Database, title: "Data Storage", desc: "S3, RDS, BigQuery solutions", color: "from-blue-500 to-indigo-500" },
              { icon: Network, title: "Cloud Networking", desc: "VPC, CDN & load balancing", color: "from-orange-500 to-red-500" },
              { icon: BarChart3, title: "Cost Optimization", desc: "Reduce cloud spend by 30-40%", color: "from-yellow-500 to-orange-500" },
              { icon: RefreshCw, title: "Disaster Recovery", desc: "Backup & business continuity", color: "from-indigo-500 to-blue-500" },
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

        {/* Cloud Migration Process */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud Migration Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Structured approach to move your infrastructure to the cloud</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assessment", desc: "Analyze current infrastructure", icon: Users },
              { step: "02", title: "Planning", desc: "Migration strategy & timeline", icon: Layout },
              { step: "03", title: "Migration", desc: "Execute lift & shift or re-architecture", icon: Rocket },
              { step: "04", title: "Optimization", desc: "Monitor & optimize costs", icon: TrendingUp },
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

        {/* Benefits of Cloud */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Move to the Cloud?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Transform your business with cloud computing</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Scalability", desc: "Scale resources on-demand", color: "from-yellow-500 to-orange-500" },
              { icon: DollarSign, title: "Cost Efficiency", desc: "Pay only for what you use", color: "from-green-500 to-emerald-500" },
              { icon: Shield, title: "Security", desc: "Enterprise-grade protection", color: "from-cyan-500 to-blue-500" },
              { icon: Globe, title: "Global Reach", desc: "Deploy worldwide", color: "from-blue-500 to-indigo-500" },
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

        {/* Cloud Architecture Types */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">Architecture</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud Architecture Options</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Choose the right deployment model for your business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Cloud, 
                title: "Public Cloud", 
                desc: "Shared infrastructure with maximum scalability", 
                features: ["Cost-effective", "Auto-scaling", "Managed services"],
                color: "from-cyan-500 to-blue-500"
              },
              { 
                icon: Server, 
                title: "Private Cloud", 
                desc: "Dedicated infrastructure for maximum security", 
                features: ["Enhanced security", "Full control", "Compliance ready"],
                color: "from-blue-500 to-indigo-500"
              },
              { 
                icon: Network, 
                title: "Hybrid Cloud", 
                desc: "Best of both worlds - public & private", 
                features: ["Flexibility", "Cost optimization", "Disaster recovery"],
                color: "from-orange-500 to-red-500"
              },
            ].map((arch, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-dark-400/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500 transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${arch.color} rounded-xl flex items-center justify-center mb-4`}>
                  <arch.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{arch.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{arch.desc}</p>
                <ul className="space-y-2">
                  {arch.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs">
                      <CheckCircle className="w-3 h-3 text-cyan-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Flexible cloud solutions for every budget</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-white/10 relative overflow-hidden group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-cyan-400">${prices.starter.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/month</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.starter.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Up to 10 Servers", "Basic Monitoring", "24/7 Support", "Backup & Recovery", "Email Support"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/cloud-solutions/inquiry"
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
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-cyan-400">${prices.professional.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/month</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.professional.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Up to 50 Servers", "Advanced Monitoring", "Auto-scaling", "Load Balancing", "Security Audits", "24/7 Priority Support"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/cloud-solutions/inquiry"
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
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-cyan-400">{prices.enterprise.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/quote</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Unlimited Servers", "Custom Architecture", "Dedicated Cloud Engineer", "Compliance Management", "SLA Agreement", "24/7 Dedicated Support"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/cloud-solutions/inquiry"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Cloud Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Successful cloud implementations we've delivered</p>
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
              <p className="text-gray-400">No cloud projects found in portfolio.</p>
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
                <div className="text-5xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold mb-2">40% Cost Reduction</h3>
                <p className="text-gray-300 mb-4">Migrated a legacy on-premise infrastructure to AWS, reducing operational costs by 40% while improving performance.</p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-cyan-400 font-bold text-xl">40%</div>
                    <div className="text-xs text-gray-400">Cost Savings</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-bold text-xl">99.99%</div>
                    <div className="text-xs text-gray-400">Uptime Achieved</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-bold text-xl">3x</div>
                    <div className="text-xs text-gray-400">Faster Performance</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-dark-400/50 rounded-xl p-6">
                  <p className="text-gray-300 italic">"CodeNagar's cloud expertise helped us reduce costs significantly while improving reliability. The migration was seamless with zero downtime."</p>
                  <div className="mt-4">
                    <p className="font-semibold">Fatima Zafar</p>
                    <p className="text-sm text-gray-400">CTO, FinTech Solutions</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Move to the Cloud?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss your cloud strategy and find the perfect solution for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/services/cloud-solutions/inquiry" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all group"
            >
              Get Free Assessment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
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