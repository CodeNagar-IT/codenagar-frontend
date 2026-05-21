// frontend/src/pages/services/AppDev.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Smartphone, Apple, Monitor, Code, Cloud, Shield, Sparkles, ArrowRight, Clock, Award, Users, TrendingUp, Rocket, DollarSign, Heart, Layers, Zap, ShoppingCart, Layout, CreditCard, Eye, Globe, BarChart3, MessageCircle } from "lucide-react";

const AppDev = () => {
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
            <span className="text-blue-300 text-sm">Native • Cross-Platform • Hybrid</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            App <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build powerful, user-friendly mobile applications for iOS and Android that engage users and drive business growth.
          </p>
        </motion.div>

        {/* Why Choose Us & Platforms */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Our App Development?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We build high-performance mobile applications that users love. From native iOS and Android apps to cross-platform solutions, our apps are designed for speed, reliability, and exceptional user experience.
            </p>
            <div className="space-y-3">
              {[
                "Native iOS & Android development",
                "Cross-platform with React Native & Flutter",
                "Offline-first architecture",
                "Push notifications & real-time updates",
                "App store optimization & deployment",
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
                <div className="text-2xl font-bold text-blue-400">40+</div>
                <div className="text-xs text-gray-400">Apps Launched</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">1M+</div>
                <div className="text-xs text-gray-400">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">4.8★</div>
                <div className="text-xs text-gray-400">Avg Rating</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-blue-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-blue-400" />
              Platforms & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Apple, name: "iOS (Swift)", color: "from-gray-500 to-gray-700", desc: "Native Apple Apps" },
                { icon: Monitor, name: "Android (Kotlin)", color: "from-green-500 to-emerald-500", desc: "Native Android Apps" },
                { icon: Code, name: "React Native", color: "from-blue-500 to-cyan-500", desc: "Cross-platform" },
                { icon: Globe, name: "Flutter", color: "from-blue-400 to-blue-600", desc: "Google's UI Toolkit" },
                { icon: Cloud, name: "Firebase", color: "from-yellow-500 to-orange-500", desc: "Backend Services" },
                { icon: Shield, name: "GraphQL", color: "from-indigo-500 to-rose-500", desc: "API Integration" },
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

        {/* App Types We Build */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Layers className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Our Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">App Types We Build</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Diverse mobile solutions for every business need</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShoppingCart, title: "E-commerce Apps", desc: "Online shopping with secure payments", color: "from-blue-500 to-cyan-500" },
              { icon: MessageCircle, title: "Social & Chat Apps", desc: "Real-time messaging & social features", color: "from-green-500 to-emerald-500" },
              { icon: BarChart3, title: "Business & Enterprise", desc: "Productivity & management tools", color: "from-blue-500 to-indigo-500" },
              { icon: Heart, title: "Health & Fitness", desc: "Workout tracking & wellness apps", color: "from-red-500 to-rose-500" },
              { icon: Globe, title: "Educational Apps", desc: "E-learning & course platforms", color: "from-orange-500 to-yellow-500" },
              { icon: Zap, title: "On-Demand Services", desc: "Booking & delivery solutions", color: "from-indigo-500 to-blue-500" },
            ].map((type, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{type.title}</h3>
                <p className="text-gray-400 text-sm">{type.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">App Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From idea to app store in weeks</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Requirements & wireframing", icon: Users },
              { step: "02", title: "Design", desc: "UI/UX & prototyping", icon: Layout },
              { step: "03", title: "Development", desc: "Coding & testing", icon: Code },
              { step: "04", title: "Launch", desc: "App store deployment", icon: Rocket },
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

        {/* Key Features */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key App Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Modern features that users expect</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Secure Authentication", desc: "Biometric & social login", color: "from-blue-500 to-cyan-500" },
              { icon: Cloud, title: "Cloud Sync", desc: "Real-time data backup", color: "from-green-500 to-emerald-500" },
              { icon: MessageCircle, title: "Push Notifications", desc: "Engage users instantly", color: "from-blue-500 to-indigo-500" },
              { icon: Zap, title: "Offline Mode", desc: "Work without internet", color: "from-orange-500 to-red-500" },
              { icon: CreditCard, title: "In-App Payments", desc: "Secure transactions", color: "from-indigo-500 to-blue-500" },
              { icon: BarChart3, title: "Analytics", desc: "Track user behavior", color: "from-red-500 to-rose-500" },
            ].map((feature, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits of Mobile Apps */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl p-8 border border-blue-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-2">Why Your Business Needs a Mobile App</h3>
                <p className="text-gray-300 mb-4">Mobile apps drive engagement, loyalty, and revenue:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> 90% of mobile time spent in apps</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> 3x higher engagement than mobile web</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> Push notifications drive 88% open rates</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400" /> 60% of users prefer brands with apps</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <p className="text-2xl font-bold text-blue-400">3x</p>
                  <p className="text-xs text-gray-400">Higher Engagement</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <p className="text-2xl font-bold text-blue-400">88%</p>
                  <p className="text-xs text-gray-400">Push Notification Opens</p>
                </div>
              </div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">App Development Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Flexible packages for every budget</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Basic App", price: "$349", priceLabel: "one-time", features: ["Single Platform (iOS/Android)", "Up to 10 Screens", "Basic UI/UX Design", "Authentication", "Push Notifications", "1 Month Support"], popular: false, color: "from-blue-500 to-cyan-500" },
              { name: "Professional", price: "$699", priceLabel: "one-time", features: ["Both Platforms (iOS & Android)", "Up to 25 Screens", "Custom UI/UX Design", "Social Login", "In-App Purchases", "Analytics", "3 Months Support"], popular: true, color: "from-blue-500 to-indigo-500" },
              { name: "Enterprise", price: "Custom", priceLabel: "quote", features: ["Both Platforms + Backend", "Unlimited Screens", "Custom Features", "Real-time Sync", "Admin Dashboard", "Dedicated Team", "SLA Agreement"], popular: false, color: "from-orange-500 to-red-500" },
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
                  <Smartphone className="w-8 h-8 text-white" />
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
                  Start Your App <ArrowRight className="inline w-4 h-4 ml-1" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent App Launches</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Successful apps we've delivered to the app stores</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 group hover:border-blue-500 transition-all">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  📱
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Fitness Tracker App</h3>
                  <p className="text-sm text-gray-400">React Native • 100K+ Downloads</p>
                </div>
              </div>
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
          <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl p-8 border border-blue-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-2">500K+ Downloads in 6 Months</h3>
                <p className="text-gray-300 mb-4">Launched a fitness tracking app that gained 500K+ downloads and 4.9★ rating on both app stores.</p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-blue-400 font-bold text-xl">500K+</div>
                    <div className="text-xs text-gray-400">Downloads</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-bold text-xl">4.9★</div>
                    <div className="text-xs text-gray-400">Avg Rating</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-bold text-xl">98%</div>
                    <div className="text-xs text-gray-400">Retention Rate</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <p className="text-gray-300 italic">"CodeNagar built an amazing app that exceeded our expectations. The development process was smooth and the result is outstanding."</p>
                  <div className="mt-4">
                    <p className="font-semibold">Hassan Raza</p>
                    <p className="text-sm text-gray-400">Founder, FitLife</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* App Store Optimization */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/30 rounded-xl p-6 text-center border border-gray-700">
              <Apple className="w-10 h-10 mx-auto mb-3 text-blue-400" />
              <h3 className="font-bold mb-2">App Store (iOS)</h3>
              <p className="text-sm text-gray-400">Complete App Store submission & approval</p>
            </div>
            <div className="bg-gray-800/30 rounded-xl p-6 text-center border border-gray-700">
              <Monitor className="w-10 h-10 mx-auto mb-3 text-blue-400" />
              <h3 className="font-bold mb-2">Google Play (Android)</h3>
              <p className="text-sm text-gray-400">Play Store listing & optimization</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's turn your app idea into reality and get it into the hands of users.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all group"
            >
              Start Your App <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
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

export default AppDev;