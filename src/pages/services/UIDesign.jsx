// frontend/src/pages/services/UIDesign.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Palette, PenTool, Smartphone, Layout, Monitor, Sparkles, ArrowRight, Clock, Award, Users, DollarSign, Eye, Heart, Layers, Grid } from "lucide-react";
import { SiFigma } from "react-icons/si"
const UIDesign = () => {
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
            <span className="text-purple-300 text-sm">Creative Design Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            UI/UX <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Design</span>
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
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Award className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Why Choose Us</span>
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
                  <CheckCircle className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-purple-300 transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">80+</div>
                <div className="text-xs text-gray-400">Projects Designed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">98%</div>
                <div className="text-xs text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-xs text-gray-400">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <PenTool className="w-6 h-6 text-purple-400" />
              Tools We Use
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: SiFigma, name: "Figma", color: "from-purple-500 to-pink-500" },
                { icon: PenTool, name: "Adobe XD", color: "from-pink-500 to-rose-500" },
                { icon: Layout, name: "Sketch", color: "from-orange-500 to-red-500" },
                { icon: Palette, name: "Illustrator", color: "from-yellow-500 to-orange-500" },
                { icon: Eye, name: "Photoshop", color: "from-blue-500 to-cyan-500" },
                { icon: Layers, name: "InVision", color: "from-indigo-500 to-purple-500" },
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
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Grid className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive UI/UX design solutions for your digital products</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Monitor, title: "Web Design", desc: "Responsive websites that look great on all devices", color: "from-blue-500 to-cyan-500" },
              { icon: Smartphone, title: "Mobile App Design", desc: "Native iOS and Android app interfaces", color: "from-green-500 to-emerald-500" },
              { icon: Layout, title: "Dashboard Design", desc: "Data-rich admin panels and dashboards", color: "from-purple-500 to-pink-500" },
              { icon: Heart, title: "User Research", desc: "Understanding user needs through research", color: "from-red-500 to-rose-500" },
              { icon: Eye, title: "Usability Testing", desc: "Testing designs with real users", color: "from-orange-500 to-yellow-500" },
              { icon: Layers, title: "Design Systems", desc: "Consistent component libraries", color: "from-indigo-500 to-purple-500" },
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{service.title}</h3>
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
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Clock className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Our Process</span>
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
            <p className="text-gray-400 max-w-2xl mx-auto">Flexible design packages tailored to your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Basic", price: "$89", priceLabel: "project", features: ["5 Screens", "Wireframes", "Basic Prototype", "Style Guide"], popular: false, color: "from-blue-500 to-cyan-500" },
              { name: "Professional", price: "$159", priceLabel: "project", features: ["15 Screens", "High-fidelity Design", "Interactive Prototype", "Design System", "User Testing"], popular: true, color: "from-purple-500 to-pink-500" },
              { name: "Enterprise", price: "Custom", priceLabel: "quote", features: ["Unlimited Screens", "Full Design System", "User Research", "Usability Testing", "Dedicated Designer"], popular: false, color: "from-orange-500 to-red-500" },
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
                  <Palette className="w-8 h-8 text-white" />
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
              <Eye className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Design Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Beautiful designs we've created for our clients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 group hover:border-purple-500 transition-all">
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  🎨
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Project Name</h3>
                  <p className="text-sm text-gray-400">Mobile App Design</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Beautiful Designs?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's bring your vision to life with stunning UI/UX designs that your users will love.
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

export default UIDesign;