// frontend/src/pages/services/AISolutions.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Brain, Cpu, Bot, Mic, Eye, MessageCircle, BarChart3, Sparkles, ArrowRight, Clock, Award, TrendingUp, Rocket, DollarSign, Heart, Layers, Code, Shield, Zap, Database, Cloud,ShoppingCart, FileText } from "lucide-react";

const AISolutions = () => {
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
            <span className="text-purple-300 text-sm">Intelligent • Automated • Future-Ready</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions that automate processes, gain insights, and drive innovation.
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
            <h2 className="text-3xl font-bold mb-4">Why Choose Our AI Solutions?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We help businesses leverage the power of artificial intelligence to automate tasks, gain valuable insights, and create intelligent products that give you a competitive edge.
            </p>
            <div className="space-y-3">
              {[
                "Custom AI model development",
                "Natural Language Processing (NLP)",
                "Computer Vision & Image Recognition",
                "Predictive analytics & forecasting",
                "AI-powered automation & chatbots",
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
                <div className="text-xs text-gray-400">AI Models Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">95%</div>
                <div className="text-xs text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-xs text-gray-400">AI Monitoring</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-purple-400" />
              AI Technologies & Frameworks
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Brain, name: "TensorFlow", color: "from-orange-500 to-red-500", desc: "ML Framework" },
                { icon: Bot, name: "PyTorch", color: "from-red-500 to-rose-500", desc: "Deep Learning" },
                { icon: Cpu, name: "OpenAI GPT", color: "from-green-500 to-emerald-500", desc: "LLM Models" },
                { icon: Eye, name: "OpenCV", color: "from-blue-500 to-cyan-500", desc: "Computer Vision" },
                { icon: MessageCircle, name: "Hugging Face", color: "from-yellow-500 to-orange-500", desc: "NLP Models" },
                { icon: Cloud, name: "AWS SageMaker", color: "from-purple-500 to-pink-500", desc: "ML Platform" },
                { icon: Database, name: "LangChain", color: "from-indigo-500 to-purple-500", desc: "LLM Framework" },
                { icon: Shield, name: "Scikit-learn", color: "from-cyan-500 to-blue-500", desc: "Classic ML" },
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

        {/* AI Solutions We Offer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Layers className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">AI Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Solutions We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive artificial intelligence services for modern businesses</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MessageCircle, title: "Chatbots & Virtual Assistants", desc: "Intelligent customer support automation", color: "from-blue-500 to-cyan-500" },
              { icon: FileText, title: "Natural Language Processing", desc: "Text analysis & sentiment detection", color: "from-green-500 to-emerald-500" },
              { icon: Eye, title: "Computer Vision", desc: "Image recognition & object detection", color: "from-purple-500 to-pink-500" },
              { icon: Mic, title: "Speech Recognition", desc: "Voice-to-text & audio processing", color: "from-orange-500 to-red-500" },
              { icon: BarChart3, title: "Predictive Analytics", desc: "Forecasting & trend prediction", color: "from-yellow-500 to-orange-500" },
              { icon: Bot, title: "Process Automation", desc: "AI-powered workflow automation", color: "from-indigo-500 to-purple-500" },
            ].map((solution, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{solution.title}</h3>
                <p className="text-gray-400 text-sm">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Development Process */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Systematic approach to building intelligent solutions</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Data Collection", desc: "Gather & preprocess data", icon: Database },
              { step: "02", title: "Model Training", desc: "Train & optimize AI models", icon: Brain },
              { step: "03", title: "Testing", desc: "Validate accuracy & performance", icon: Shield },
              { step: "04", title: "Deployment", desc: "Integrate & monitor", icon: Rocket },
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
            <p className="text-gray-400 max-w-2xl mx-auto">AI solutions tailored for various business sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "E-commerce", icon: ShoppingCart, desc: "Recommendations & personalization" },
              { title: "Healthcare", icon: Heart, desc: "Diagnosis & medical imaging" },
              { title: "Finance", icon: DollarSign, desc: "Fraud detection & risk" },
              { title: "Customer Service", icon: MessageCircle, desc: "Chatbots & support automation" },
              { title: "Manufacturing", icon: Cpu, desc: "Quality control & predictive maintenance" },
              { title: "Marketing", icon: BarChart3, desc: "Customer segmentation & targeting" },
            ].map((industry, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/30 rounded-xl p-4 text-center border border-gray-700 hover:border-purple-500 transition-all"
              >
                <industry.icon className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <h3 className="font-semibold text-sm mb-1">{industry.title}</h3>
                <p className="text-xs text-gray-400">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits of AI */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-2">Why Your Business Needs AI</h3>
                <p className="text-gray-300 mb-4">Artificial intelligence delivers measurable business impact:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> 40% increase in operational efficiency</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> 30% reduction in costs</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> 50% faster decision making</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-400" /> 24/7 automated operations</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                  <p className="text-2xl font-bold text-purple-400">40%</p>
                  <p className="text-xs text-gray-400">Efficiency Gain</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                  <p className="text-2xl font-bold text-purple-400">30%</p>
                  <p className="text-xs text-gray-400">Cost Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* LLM & Generative AI */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-xs">Advanced AI</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">LLM & Generative AI</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Harness the power of large language models</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MessageCircle, title: "GPT Integration", desc: "ChatGPT & custom LLMs", color: "from-green-500 to-emerald-500" },
              { icon: FileText, title: "Content Generation", desc: "Auto-write articles & copy", color: "from-blue-500 to-cyan-500" },
              { icon: Code, title: "Code Generation", desc: "AI-powered development", color: "from-purple-500 to-pink-500" },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-purple-500 transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Solution Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Flexible AI integration packages</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter AI", price: "$349", priceLabel: "project", features: ["Single AI Model", "Basic NLP/CV", "API Integration", "30 Days Support"], popular: false, color: "from-blue-500 to-cyan-500" },
              { name: "Professional AI", price: "$699", priceLabel: "project", features: ["Multiple AI Models", "Advanced NLP/CV", "Custom Training", "Dashboard & Analytics", "6 Months Support"], popular: true, color: "from-purple-500 to-pink-500" },
              { name: "Enterprise AI", price: "Custom", priceLabel: "quote", features: ["End-to-end AI Pipeline", "Custom LLM Fine-tuning", "Dedicated AI Team", "24/7 Monitoring", "SLA Agreement"], popular: false, color: "from-orange-500 to-red-500" },
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
                  Integrate AI <ArrowRight className="inline w-4 h-4 ml-1" />
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
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-2">60% Reduction in Response Time</h3>
                <p className="text-gray-300 mb-4">Implemented an AI-powered chatbot that reduced customer support response time by 60% and handled 70% of queries automatically.</p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-purple-400 font-bold text-xl">60%</div>
                    <div className="text-xs text-gray-400">Faster Response</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-xl">70%</div>
                    <div className="text-xs text-gray-400">Auto-resolution</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-xl">24/7</div>
                    <div className="text-xs text-gray-400">Availability</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <p className="text-gray-300 italic">"CodeNagar's AI solution transformed our customer service. Our team can now focus on complex issues while AI handles routine queries."</p>
                  <div className="mt-4">
                    <p className="font-semibold">Sana Malik</p>
                    <p className="text-sm text-gray-400">Customer Experience Director, ServiceHub</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Leverage AI?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's explore how artificial intelligence can transform your business and give you a competitive advantage.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all group"
            >
              Start Your AI Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
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

export default AISolutions;