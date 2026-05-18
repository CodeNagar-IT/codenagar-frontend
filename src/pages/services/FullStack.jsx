// frontend/src/pages/services/FullStack.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Code, Database, Server, Globe, Shield, Layout, Smartphone, Sparkles, ArrowRight, Award, Users, TrendingUp, Rocket, DollarSign, Heart, Layers, GitBranch, Cloud, Zap, ShoppingCart} from "lucide-react";

const FullStack = () => {
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
            <span className="text-purple-300 text-sm">End-to-End Development</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Full Stack <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete web application development from frontend to backend, database to deployment.
          </p>
        </motion.div>

        {/* Why Choose Us & Tech Stack */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Award className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Full Stack Development?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We build complete, production-ready web applications using modern technologies. From responsive frontends to scalable backends, our full stack solutions are designed for performance, security, and growth.
            </p>
            <div className="space-y-3">
              {[
                "End-to-end application development",
                "Modern frontend & backend frameworks",
                "Scalable database architecture",
                "Secure authentication & authorization",
                "Cloud deployment & DevOps",
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
                <div className="text-2xl font-bold text-purple-400">100+</div>
                <div className="text-xs text-gray-400">Apps Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">99.9%</div>
                <div className="text-xs text-gray-400">Uptime</div>
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
              <Code className="w-6 h-6 text-purple-400" />
              Our Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Layout, name: "React.js", color: "from-cyan-500 to-blue-500", category: "Frontend" },
                { icon: Code, name: "Next.js", color: "from-gray-500 to-gray-700", category: "Frontend" },
                { icon: Smartphone, name: "Vue.js", color: "from-green-500 to-emerald-500", category: "Frontend" },
                { icon: Server, name: "Node.js", color: "from-green-600 to-green-800", category: "Backend" },
                { icon: Shield, name: "Python/Django", color: "from-blue-600 to-indigo-600", category: "Backend" },
                { icon: Database, name: "MongoDB", color: "from-green-500 to-emerald-500", category: "Database" },
                { icon: Globe, name: "PostgreSQL", color: "from-blue-500 to-indigo-500", category: "Database" },
                { icon: Cloud, name: "AWS/Azure", color: "from-orange-500 to-yellow-500", category: "Cloud" },
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
                  <span className="text-white/70 text-xs mt-1">{tech.category}</span>
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
              <Layers className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Our Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Complete web applications tailored to your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Web Applications", desc: "Custom SaaS platforms & business apps", color: "from-blue-500 to-cyan-500" },
              { icon: ShoppingCart, title: "E-commerce Platforms", desc: "Online stores with payment integration", color: "from-purple-500 to-pink-500" },
              { icon: Layout, title: "Admin Dashboards", desc: "Data-rich management interfaces", color: "from-green-500 to-emerald-500" },
              { icon: Database, title: "API Development", desc: "RESTful & GraphQL APIs", color: "from-orange-500 to-red-500" },
              { icon: Shield, title: "Authentication Systems", desc: "Secure user management", color: "from-indigo-500 to-purple-500" },
              { icon: Cloud, title: "Cloud Migration", desc: "Scale your app to the cloud", color: "from-red-500 to-rose-500" },
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

        {/* Development Process */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <GitBranch className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Agile methodology for rapid, quality delivery</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Planning", desc: "Requirements & architecture design", icon: Users },
              { step: "02", title: "Frontend Dev", desc: "Responsive UI development", icon: Layout },
              { step: "03", title: "Backend Dev", desc: "API & database integration", icon: Server },
              { step: "04", title: "Deployment", desc: "Testing & production launch", icon: Rocket },
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

        {/* Architecture Benefits */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Full Stack?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">End-to-end development for seamless integration</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Faster Development", desc: "Single team handling everything", color: "from-yellow-500 to-orange-500" },
              { icon: Database, title: "Seamless Integration", desc: "Perfect frontend-backend sync", color: "from-blue-500 to-cyan-500" },
              { icon: Shield, title: "Better Security", desc: "Consistent security patterns", color: "from-green-500 to-emerald-500" },
              { icon: TrendingUp, title: "Scalability", desc: "Built to handle growth", color: "from-purple-500 to-pink-500" },
            ].map((benefit, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-purple-500 transition-all"
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
            <p className="text-gray-400 max-w-2xl mx-auto">Flexible engagement models for your project</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Startup", price: "$5,999", priceLabel: "project", features: ["Up to 10 Pages", "Basic Authentication", "Database Integration", "Responsive Design", "1 Month Support"], popular: false, color: "from-blue-500 to-cyan-500" },
              { name: "Business", price: "$12,999", priceLabel: "project", features: ["Up to 30 Pages", "Advanced Features", "Payment Integration", "Admin Dashboard", "API Development", "3 Months Support"], popular: true, color: "from-purple-500 to-pink-500" },
              { name: "Enterprise", price: "Custom", priceLabel: "quote", features: ["Unlimited Pages", "Custom Architecture", "Microservices", "Cloud Deployment", "Dedicated Team", "SLA Agreement"], popular: false, color: "from-orange-500 to-red-500" },
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
                  <Code className="w-8 h-8 text-white" />
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

        {/* Technologies We Excel In */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Heart className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Technologies</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Excel In</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Modern stack for modern applications</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "MERN Stack", icon: Code, desc: "MongoDB, Express, React, Node" },
              { name: "PERN Stack", icon: Database, desc: "PostgreSQL, Express, React, Node" },
              { name: "JAMstack", icon: Zap, desc: "JavaScript, APIs, Markup" },
              { name: "Serverless", icon: Cloud, desc: "AWS Lambda, API Gateway" },
            ].map((stack, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-700 hover:border-purple-500 transition-all"
              >
                <stack.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <h3 className="font-semibold text-sm">{stack.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{stack.desc}</p>
              </motion.div>
            ))}
          </div>
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
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-2">3x Faster Time to Market</h3>
                <p className="text-gray-300 mb-4">Built a complete e-commerce platform in just 3 months, handling 50,000+ daily active users.</p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-purple-400 font-bold text-xl">50K+</div>
                    <div className="text-xs text-gray-400">Daily Users</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-xl">$2M+</div>
                    <div className="text-xs text-gray-400">Revenue Generated</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <p className="text-gray-300 italic">"CodeNagar's full stack team delivered beyond our expectations. The platform is robust, scalable, and a pleasure to use."</p>
                  <div className="mt-4">
                    <p className="font-semibold">Omar Farooq</p>
                    <p className="text-sm text-gray-400">CEO, ShopEasy.pk</p>
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
          className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Full Stack Application?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and get a detailed timeline & quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all group"
            >
              Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
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

export default FullStack;