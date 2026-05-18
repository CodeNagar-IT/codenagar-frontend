// frontend/src/pages/services/WebDev.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Code, Globe, Zap, Shield, Layout, Smartphone, Database, Sparkles, ArrowRight, Clock, Award, Users,  Rocket, DollarSign, TrendingUp } from "lucide-react";

const WebDev = () => {
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
            <span className="text-purple-300 text-sm">Expert Web Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Web <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build modern, responsive, and high-performance websites that drive results.
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
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Web Development?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We create custom websites tailored to your business needs. From simple landing pages to complex web applications, our team delivers pixel-perfect, responsive, and SEO-optimized solutions.
            </p>
            <div className="space-y-3">
              {[
                "React.js, Next.js, Vue.js expertise",
                "Responsive & Mobile-first design",
                "SEO optimized architecture",
                "Fast loading & performance",
                "Secure & scalable solutions",
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
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-xs text-gray-400">Websites Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">100%</div>
                <div className="text-xs text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-xs text-gray-400">Support</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Code className="w-6 h-6 text-purple-400" />
              Technologies We Use
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Code, name: "React.js", color: "from-blue-500 to-cyan-500" },
                { icon: Code, name: "Next.js", color: "from-gray-500 to-gray-700" },
                { icon: Layout, name: "Vue.js", color: "from-green-500 to-emerald-500" },
                { icon: Smartphone, name: "Tailwind CSS", color: "from-cyan-500 to-blue-500" },
                { icon: Database, name: "Node.js", color: "from-green-600 to-green-800" },
                { icon: Shield, name: "Express", color: "from-gray-600 to-gray-800" },
                { icon: Globe, name: "MongoDB", color: "from-green-500 to-emerald-500" },
                { icon: Zap, name: "Firebase", color: "from-yellow-500 to-orange-500" },
              ].map((tech, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`flex items-center gap-2 p-3 bg-gradient-to-r ${tech.color} rounded-lg shadow-lg`}
                >
                  <tech.icon className="w-4 h-4 text-white" />
                  <span className="text-white font-medium text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Process Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A structured approach to deliver quality websites on time</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your requirements & goals", icon: Users },
              { step: "02", title: "Design", desc: "Creating wireframes & UI/UX designs", icon: Layout },
              { step: "03", title: "Development", desc: "Agile development with regular updates", icon: Code },
              { step: "04", title: "Launch", desc: "Testing, deployment & post-launch support", icon: Rocket },
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

        {/* Pricing Plans */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Choose the perfect plan for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Basic", price: "$499", priceLabel: "one-time", features: ["5 Pages", "Responsive Design", "Contact Form", "Basic SEO"], popular: false, color: "from-blue-500 to-cyan-500" },
              { name: "Professional", price: "$1,499", priceLabel: "one-time", features: ["15 Pages", "CMS Integration", "E-commerce Ready", "Advanced SEO", "Speed Optimization"], popular: true, color: "from-purple-500 to-pink-500" },
              { name: "Enterprise", price: "Custom", priceLabel: "quote based", features: ["Unlimited Pages", "Custom Features", "API Integration", "Dedicated Support", "SLA Agreement"], popular: false, color: "from-orange-500 to-red-500" },
            ].map((plan, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -8 }}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular ? "border-purple-500 shadow-xl shadow-purple-500/10" : "border-gray-700"
                } relative overflow-hidden group`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-pink-600 px-4 py-1 rounded-bl-xl text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                  <span className="text-gray-400 text-sm ml-1">/{plan.priceLabel}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                    plan.popular 
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/25" 
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                >
                  Get Started <ArrowRight className="inline w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Globe className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Some of our amazing web development projects</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 group hover:border-purple-500 transition-all">
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  🖥️
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Project Name</h3>
                  <p className="text-sm text-gray-400">E-commerce Platform</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Website?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss your project and get a free quote. No obligation, just expert advice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all group"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDev;