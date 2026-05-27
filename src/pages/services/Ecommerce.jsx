// frontend/src/pages/services/Ecommerce.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle, ShoppingCart, CreditCard, Truck, Shield, Code, Layout, 
  Eye, Smartphone, Globe, BarChart3, Sparkles, ArrowRight, Clock, 
  Award, Users, TrendingUp, Rocket, DollarSign, Layers, Package, Mail,
  Briefcase, Star
} from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import axios from "axios";

export default function Ecommerce() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);

  // Pricing configuration (1 USD = 280 PKR)
  const prices = {
    starter: { usd: 1499, pkr: 419000 },
    professional: { usd: 2999, pkr: 839000 },
    enterprise: { usd: "Custom", pkr: "Custom" }
  };

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/portfolio`);
        // Filter for E-commerce related projects
        const ecommerceProjects = response.data.filter(item => 
          item.category === "E-commerce" || 
          (item.title && (item.title.toLowerCase().includes("ecommerce") || 
                         item.title.toLowerCase().includes("store") ||
                         item.title.toLowerCase().includes("shop")))
        );
        setPortfolioItems(ecommerceProjects.slice(0, 3));
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
            <span className="text-cyan-300 text-sm">Sell Online with Ease</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            E-commerce <span className="gradient-text">Development</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build powerful, scalable online stores that drive sales and deliver exceptional customer experiences.
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
            <h2 className="text-3xl font-bold mb-4">Why Choose Our E-commerce Development?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We build high-converting online stores that are secure, scalable, and optimized for sales. From custom solutions to popular platforms, we help you sell more with less hassle.
            </p>
            <div className="space-y-3">
              {[
                "Secure payment gateway integration",
                "Mobile-optimized shopping experience",
                "Inventory & order management",
                "SEO-friendly product pages",
                "Analytics & sales tracking",
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
                <div className="text-2xl font-bold text-cyan-400">50+</div>
                <div className="text-xs text-gray-400">Stores Launched</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">$10M+</div>
                <div className="text-xs text-gray-400">Sales Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">500K+</div>
                <div className="text-xs text-gray-400">Orders Processed</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-2xl p-8 border border-cyan-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-cyan-400" />
              Platforms We Use
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Package, name: "Shopify", color: "from-green-500 to-emerald-500", desc: "All-in-one solution" },
                { icon: Globe, name: "WooCommerce", color: "from-cyan-500 to-blue-500", desc: "WordPress based" },
                { icon: Smartphone, name: "Magento", color: "from-orange-500 to-red-500", desc: "Enterprise ready" },
                { icon: Code, name: "Custom", color: "from-blue-500 to-indigo-500", desc: "Tailored solution" },
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

        {/* Features We Offer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">E-commerce Features We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Complete online store functionality</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CreditCard, title: "Payment Gateways", desc: "Stripe, PayPal, Razorpay & more", color: "from-cyan-500 to-blue-500" },
              { icon: Truck, title: "Shipping Integration", desc: "Real-time shipping rates", color: "from-green-500 to-emerald-500" },
              { icon: Shield, title: "Secure Checkout", desc: "SSL & PCI compliant", color: "from-blue-500 to-indigo-500" },
              { icon: BarChart3, title: "Analytics Dashboard", desc: "Sales & customer insights", color: "from-orange-500 to-red-500" },
              { icon: Mail, title: "Email Marketing", desc: "Automated campaigns", color: "from-indigo-500 to-blue-500" },
              { icon: Users, title: "Customer Accounts", desc: "Order history & wishlists", color: "from-pink-500 to-rose-500" },
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-dark-400/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
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
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">E-commerce Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From concept to launch and beyond</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Planning", desc: "Requirements & product catalog", icon: Users },
              { step: "02", title: "Design", desc: "UI/UX & storefront design", icon: Layout },
              { step: "03", title: "Development", desc: "Build & integrate features", icon: Code },
              { step: "04", title: "Launch", desc: "Testing & deployment", icon: Rocket },
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

        {/* Why E-commerce Matters */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Go Online?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The benefits of selling online with a professional e-commerce store</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "24/7 Sales", desc: "Sell around the clock", color: "from-cyan-500 to-blue-500" },
              { icon: Users, title: "Global Reach", desc: "Sell worldwide", color: "from-green-500 to-emerald-500" },
              { icon: TrendingUp, title: "Lower Costs", desc: "Reduce overhead", color: "from-blue-500 to-indigo-500" },
              { icon: BarChart3, title: "Data Insights", desc: "Understand customers", color: "from-orange-500 to-red-500" },
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

        {/* Marketing & SEO */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-cyan-600/10 to-indigo-600/10 rounded-2xl p-8 border border-cyan-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-2xl font-bold mb-2">Built-in Marketing Tools</h3>
                <p className="text-gray-300 mb-4">Our e-commerce solutions come with integrated marketing features to help you grow your business.</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> SEO-optimized product pages</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Social media integration</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Email marketing automation</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" /> Abandoned cart recovery</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <FaInstagram className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                  <p className="text-xs text-gray-400">Instagram Shopping</p>
                </div>
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <FaFacebook className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                  <p className="text-xs text-gray-400">Facebook Store</p>
                </div>
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <Mail className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                  <p className="text-xs text-gray-400">Email Campaigns</p>
                </div>
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <FaTwitter className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                  <p className="text-xs text-gray-400">Social Selling</p>
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
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-3 py-1 mb-4">
              <DollarSign className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-xs">Investment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">E-commerce Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Choose the perfect plan for your online store</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Store */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-white/10 relative overflow-hidden group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Starter Store</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-cyan-400">${prices.starter.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/one-time</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.starter.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Up to 100 Products", "Payment Gateway", "Basic SEO", "Mobile Responsive", "1 Month Support"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/ecommerce-development/inquiry"
                className="block text-center py-3 bg-cyan-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Start Selling <ArrowRight className="inline w-4 h-4 ml-1" />
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
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-cyan-400">${prices.professional.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/one-time</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.professional.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Up to 1000 Products", "Advanced SEO", "Email Marketing", "Abandoned Cart", "Inventory Management", "3 Months Support"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/ecommerce-development/inquiry"
                className="block text-center py-3 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Start Selling <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-white/10 relative overflow-hidden group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-cyan-400">{prices.enterprise.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/quote</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Unlimited Products", "Custom Features", "Multi-vendor Support", "Dedicated Support", "SLA Agreement", "24/7 Monitoring"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/ecommerce-development/inquiry"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our E-commerce Stores</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Successful online stores we've built for our clients</p>
          </div>
          
          {loadingPortfolio ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
              <p className="text-gray-400">Loading stores...</p>
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
              <p className="text-gray-400">No e-commerce stores found in portfolio.</p>
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
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-2">300% Sales Growth in 6 Months</h3>
                <p className="text-gray-300 mb-4">Helped a local clothing brand scale from $50K to $200K monthly revenue with a custom e-commerce solution.</p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-cyan-400 font-bold text-xl">300%</div>
                    <div className="text-xs text-gray-400">Revenue Growth</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-bold text-xl">50K+</div>
                    <div className="text-xs text-gray-400">Monthly Visitors</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-bold text-xl">4.9★</div>
                    <div className="text-xs text-gray-400">Customer Rating</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-dark-400/50 rounded-xl p-6">
                  <p className="text-gray-300 italic">"CodeNagar built us a stunning online store that has transformed our business. Sales have tripled and customers love the experience!"</p>
                  <div className="mt-4">
                    <p className="font-semibold">Ayesha Khan</p>
                    <p className="text-sm text-gray-400">Founder, StyleHub.pk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* E-commerce Features */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-dark-400/30 rounded-xl p-6 text-center border border-white/10">
            <ShoppingCart className="w-10 h-10 mx-auto mb-3 text-cyan-400" />
            <h3 className="font-bold mb-2">Complete E-commerce Solution</h3>
            <p className="text-sm text-gray-400 mb-3">Everything you need to start selling online</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-xs px-2 py-1 bg-cyan-500/20 rounded-full text-cyan-400">Product Management</span>
              <span className="text-xs px-2 py-1 bg-cyan-500/20 rounded-full text-cyan-400">Order Tracking</span>
              <span className="text-xs px-2 py-1 bg-cyan-500/20 rounded-full text-cyan-400">Payment Gateway</span>
              <span className="text-xs px-2 py-1 bg-cyan-500/20 rounded-full text-cyan-400">Shipping Integration</span>
              <span className="text-xs px-2 py-1 bg-cyan-500/20 rounded-full text-cyan-400">Inventory Management</span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Online Store?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's build an e-commerce store that drives sales and grows your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/services/ecommerce-development/inquiry" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all group"
            >
              Start Your Store <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
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