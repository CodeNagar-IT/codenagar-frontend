// frontend/src/pages/services/MLIntegration.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Brain, Cpu, Database, LineChart, ShoppingBag, BarChart3, Cloud, Shield, Sparkles, ArrowRight, Award, Users, TrendingUp, Rocket, DollarSign, Eye, Heart, Code, Bot, Workflow, Microscope } from "lucide-react";

const MLIntegration = () => {
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
            <span className="text-purple-300 text-sm">AI-Powered Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            ML <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Integration</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge machine learning solutions that drive intelligent decision-making and automation.
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
            <h2 className="text-3xl font-bold mb-4">Why Choose Our ML Integration?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We help businesses leverage the power of machine learning to gain insights, automate processes, and make data-driven decisions. From predictive analytics to computer vision, our ML solutions are tailored to your specific needs.
            </p>
            <div className="space-y-3">
              {[
                "Custom ML models for your business",
                "End-to-end ML pipeline integration",
                "Real-time predictions & analytics",
                "Scalable cloud-based solutions",
                "Continuous model improvement",
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
                <div className="text-2xl font-bold text-purple-400">30+</div>
                <div className="text-xs text-gray-400">ML Models Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">95%</div>
                <div className="text-xs text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-xs text-gray-400">Model Monitoring</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-purple-400" />
              Technologies & Frameworks
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Brain, name: "TensorFlow", color: "from-orange-500 to-red-500" },
                { icon: Bot, name: "PyTorch", color: "from-red-500 to-rose-500" },
                { icon: Code, name: "Scikit-learn", color: "from-blue-500 to-cyan-500" },
                { icon: LineChart, name: "Pandas", color: "from-green-500 to-emerald-500" },
                { icon: Database, name: "NumPy", color: "from-purple-500 to-pink-500" },
                { icon: Cloud, name: "AWS SageMaker", color: "from-yellow-500 to-orange-500" },
                { icon: Workflow, name: "Keras", color: "from-indigo-500 to-purple-500" },
                { icon: Shield, name: "OpenCV", color: "from-cyan-500 to-blue-500" },
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

        {/* ML Solutions We Offer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">AI Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ML Solutions We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive machine learning services for various business needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: LineChart, title: "Predictive Analytics", desc: "Forecast trends and customer behavior", color: "from-blue-500 to-cyan-500" },
              { icon: Brain, title: "Natural Language Processing", desc: "Text analysis, chatbots & sentiment analysis", color: "from-purple-500 to-pink-500" },
              { icon: Eye, title: "Computer Vision", desc: "Image recognition & object detection", color: "from-green-500 to-emerald-500" },
              { icon: BarChart3, title: "Recommendation Systems", desc: "Personalized product recommendations", color: "from-orange-500 to-red-500" },
              { icon: Shield, title: "Fraud Detection", desc: "Real-time anomaly detection", color: "from-red-500 to-rose-500" },
              { icon: Users, title: "Customer Segmentation", desc: "Behavioral clustering & targeting", color: "from-indigo-500 to-purple-500" },
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

        {/* ML Process */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Workflow className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our ML Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A systematic approach to building intelligent solutions</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Data Collection", desc: "Gathering & preprocessing data", icon: Database },
              { step: "02", title: "Model Training", desc: "Building & training ML models", icon: Brain },
              { step: "03", title: "Testing & Validation", desc: "Ensuring accuracy & performance", icon: Microscope },
              { step: "04", title: "Deployment", desc: "Integration & monitoring", icon: Rocket },
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

        {/* Use Cases / Industries */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Applications</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">ML solutions tailored for various business sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "E-commerce", icon: ShoppingBag, desc: "Recommendations & demand forecasting" },
              { title: "Healthcare", icon: Heart, desc: "Medical imaging & diagnosis" },
              { title: "Finance", icon: DollarSign, desc: "Fraud detection & risk assessment" },
              { title: "Manufacturing", icon: Cpu, desc: "Predictive maintenance & quality control" },
            ].map((industry, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-700 hover:border-purple-500 transition-all"
              >
                <industry.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <h3 className="font-semibold mb-1">{industry.title}</h3>
                <p className="text-xs text-gray-400">{industry.desc}</p>
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
            <p className="text-gray-400 max-w-2xl mx-auto">Flexible ML integration packages</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Basic", price: "$149", priceLabel: "project", features: ["Single ML Model", "Basic Data Processing", "API Integration", "30 Days Support"], popular: false, color: "from-blue-500 to-cyan-500" },
              { name: "Professional", price: "$349", priceLabel: "project", features: ["Multiple ML Models", "Advanced Analytics", "Real-time Predictions", "Dashboard & Reports", "6 Months Support"], popular: true, color: "from-purple-500 to-pink-500" },
              { name: "Enterprise", price: "Custom", priceLabel: "quote", features: ["End-to-end ML Pipeline", "Custom Model Development", "24/7 Monitoring", "Dedicated ML Team", "SLA Agreement"], popular: false, color: "from-orange-500 to-red-500" },
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
                  <Brain className="w-8 h-8 text-white" />
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

        {/* Case Study */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Award className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Success Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Study</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">How we helped a leading e-commerce platform boost sales with ML</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-2">40% Increase in Sales</h3>
                <p className="text-gray-300 mb-4">Implemented a recommendation system that increased cross-sell and upsell revenue by 40% within 3 months.</p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-purple-400 font-bold text-xl">2M+</div>
                    <div className="text-xs text-gray-400">Products Analyzed</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-xl">95%</div>
                    <div className="text-xs text-gray-400">Prediction Accuracy</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <p className="text-gray-300 italic">"CodeNagar's ML solution transformed our business. The recommendation engine has been a game-changer for our sales."</p>
                  <div className="mt-4">
                    <p className="font-semibold">Sarah Ahmed</p>
                    <p className="text-sm text-gray-400">CTO, TechStore.pk</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Leverage AI & ML?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss how machine learning can transform your business and give you a competitive edge.
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
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MLIntegration;