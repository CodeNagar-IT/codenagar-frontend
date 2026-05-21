// frontend/src/pages/services/FrontendDev.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Code, Layout, Smartphone, Globe, Zap, Shield, Eye, Sparkles, ArrowRight, Clock, Award, Users, TrendingUp, DollarSign, Heart, Monitor, Palette, } from "lucide-react";
import { SiFigma } from "react-icons/si"
const FrontendDev = () => {
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
            <span className="text-blue-300 text-sm">Modern Frontend Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Frontend <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Create stunning, responsive, and high-performance user interfaces that captivate your audience.
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
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Frontend Development?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We build beautiful, fast, and accessible web interfaces using cutting-edge technologies. Our frontend solutions focus on user experience, performance optimization, and cross-browser compatibility.
            </p>
            <div className="space-y-3">
              {[
                "Responsive & mobile-first design",
                "SEO-optimized architecture",
                "Fast loading & performance",
                "Cross-browser compatibility",
                "Accessible & user-friendly",
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
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">80+</div>
                <div className="text-xs text-gray-400">Websites Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">100%</div>
                <div className="text-xs text-gray-400">Responsive</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">99%</div>
                <div className="text-xs text-gray-400">Performance Score</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-blue-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Code className="w-6 h-6 text-blue-400" />
              Technologies We Use
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Layout, name: "React.js", color: "from-cyan-500 to-blue-500" },
                { icon: Code, name: "Next.js", color: "from-gray-500 to-gray-700" },
                { icon: Smartphone, name: "Vue.js", color: "from-green-500 to-emerald-500" },
                { icon: Zap, name: "Tailwind CSS", color: "from-cyan-500 to-blue-500" },
                { icon: Palette, name: "SCSS/SASS", color: "from-indigo-500 to-rose-500" },
                { icon: SiFigma, name: "Figma to Code", color: "from-blue-500 to-indigo-500" },
                { icon: Globe, name: "TypeScript", color: "from-blue-600 to-indigo-600" },
                { icon: Eye, name: "Redux/Context", color: "from-blue-500 to-indigo-500" },
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

        {/* Services We Offer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Monitor className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Our Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frontend Services We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Complete frontend solutions for your digital presence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Monitor, title: "Custom Websites", desc: "Unique, brand-aligned websites", color: "from-blue-500 to-cyan-500" },
              { icon: Layout, title: "SPA Development", desc: "Fast single-page applications", color: "from-blue-500 to-indigo-500" },
              { icon: Smartphone, title: "Mobile-First Design", desc: "Optimized for all devices", color: "from-green-500 to-emerald-500" },
              { icon: Globe, title: "PWA Development", desc: "App-like web experiences", color: "from-orange-500 to-red-500" },
              { icon: Zap, title: "Performance Optimization", desc: "Lightning-fast load times", color: "from-yellow-500 to-orange-500" },
              { icon: Shield, title: "UI/UX Implementation", desc: "Pixel-perfect designs", color: "from-indigo-500 to-blue-500" },
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all group"
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

        {/* Development Process */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From design to deployment, we've got you covered</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Design Review", desc: "Analyzing UI/UX designs", icon: Eye },
              { step: "02", title: "Component Dev", desc: "Building reusable components", icon: Layout },
              { step: "03", title: "Integration", desc: "API & backend integration", icon: Code },
              { step: "04", title: "Optimization", desc: "Performance & SEO tuning", icon: Zap },
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

        {/* Why Frontend Matters */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Great Frontend Matters</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Investing in quality frontend delivers measurable business results</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Better Engagement", desc: "40% lower bounce rate", color: "from-blue-500 to-cyan-500" },
              { icon: TrendingUp, title: "Higher Conversions", desc: "30% increase in sales", color: "from-green-500 to-emerald-500" },
              { icon: Eye, title: "Brand Perception", desc: "Professional image", color: "from-blue-500 to-indigo-500" },
              { icon: Zap, title: "SEO Rankings", desc: "Better Google ranking", color: "from-orange-500 to-red-500" },
            ].map((impact, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500 transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${impact.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <impact.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-1">{impact.title}</h3>
                <p className="text-gray-400 text-xs">{impact.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frameworks We Master */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Heart className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Frameworks</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frameworks We Master</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Expertise in modern JavaScript frameworks</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "React.js", icon: Layout, desc: "Component-based UI library" },
              { name: "Next.js", icon: Code, desc: "React framework for production" },
              { name: "Vue.js", icon: Eye, desc: "Progressive JavaScript framework" },
              { name: "Angular", icon: Shield, desc: "Enterprise-grade framework" },
            ].map((framework, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-700 hover:border-blue-500 transition-all"
              >
                <framework.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <h3 className="font-semibold text-sm">{framework.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{framework.desc}</p>
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
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <DollarSign className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Investment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Flexible frontend development packages</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Basic", price: "$99", priceLabel: "project", features: ["Up to 5 Pages", "Responsive Design", "Basic Animations", "Contact Form", "1 Month Support"], popular: false, color: "from-blue-500 to-cyan-500" },
              { name: "Professional", price: "$169", priceLabel: "project", features: ["Up to 15 Pages", "Advanced Animations", "SEO Optimization", "Performance Tuning", "API Integration", "3 Months Support"], popular: true, color: "from-blue-500 to-indigo-500" },
              { name: "Enterprise", price: "Custom", priceLabel: "quote", features: ["Unlimited Pages", "PWA Development", "Custom Components", "Dedicated Developer", "24/7 Support", "SLA Agreement"], popular: false, color: "from-orange-500 to-red-500" },
            ].map((plan, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -8 }}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular ? "border-blue-500 shadow-xl shadow-blue-500/10" : "border-gray-700"
                } relative overflow-hidden group`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-indigo-600 px-4 py-1 rounded-bl-xl text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Layout className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                  <span className="text-gray-400 text-sm ml-1">/{plan.priceLabel}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                    plan.popular 
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/25" 
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
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Eye className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Frontend Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Beautiful interfaces we've created for our clients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 group hover:border-blue-500 transition-all">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  🖥️
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Modern Dashboard</h3>
                  <p className="text-sm text-gray-400">React + Tailwind CSS</p>
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
          className="text-center bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-12 border border-blue-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Frontend?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's create a stunning, high-performance frontend that your users will love.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all group"
            >
              Get Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
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

export default FrontendDev;