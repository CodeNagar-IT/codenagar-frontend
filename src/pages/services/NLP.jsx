// frontend/src/pages/services/NLP.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle, MessageCircle, FileText,  Languages, 
  Sparkles, ArrowRight, Clock, Award,  TrendingUp, 
  Rocket, DollarSign, Heart, Layers, Code, 
  Database, Cloud, ShoppingCart, Briefcase, Star,
  Brain, Zap, Bot, Mail, Globe, BarChart3, Eye
} from "lucide-react";
import axios from "axios";

export default function NLP() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loadingPortfolio, setLoadingPortfolio] = useState(true);

  // Pricing configuration (1 USD = 280 PKR)
  const prices = {
    starter: { usd: 1099, pkr: 307000 },
    professional: { usd: 2199, pkr: 615000 },
    enterprise: { usd: "Custom", pkr: "Custom" }
  };

  useEffect(() => {
    const fetchPortfolioItems = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/portfolio`);
        // Filter for AI/ML/NLP related projects
        const nlpProjects = response.data.filter(item => 
          item.category === "AI/ML" || 
          (item.title && (item.title.toLowerCase().includes("nlp") || 
                         item.title.toLowerCase().includes("chatbot") ||
                         item.title.toLowerCase().includes("sentiment") ||
                         item.title.toLowerCase().includes("language")))
        );
        setPortfolioItems(nlpProjects.slice(0, 3));
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
          <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm">Understand Human Language</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Natural Language <span className="gradient-text">Processing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enable machines to understand, interpret, and generate human language for intelligent communication and insights.
          </p>
        </motion.div>

        {/* Why Choose Us & Technologies */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-3 py-1 mb-4">
              <Award className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-xs">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Why Choose Our NLP Solutions?</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We build intelligent language systems that can analyze text, understand sentiment, generate responses, and extract meaningful insights from unstructured data. Our NLP solutions help businesses automate communication and gain valuable insights.
            </p>
            <div className="space-y-3">
              {[
                "Sentiment analysis & emotion detection",
                "Named Entity Recognition (NER)",
                "Text summarization & generation",
                "Language translation & localization",
                "Chatbot & virtual assistant development",
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2 group cursor-pointer"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-green-300 transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">15+</div>
                <div className="text-xs text-gray-400">NLP Models</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">94%</div>
                <div className="text-xs text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">1M+</div>
                <div className="text-xs text-gray-400">Texts Processed</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-green-400" />
              NLP Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: MessageCircle, name: "BERT", color: "from-blue-500 to-cyan-500", desc: "Google's NLP Model" },
                { icon: Brain, name: "GPT", color: "from-orange-500 to-red-500", desc: "Generative AI" },
                { icon: Bot, name: "Hugging Face", color: "from-yellow-500 to-orange-500", desc: "Transformers Library" },
                { icon: Languages, name: "spaCy", color: "from-green-500 to-emerald-500", desc: "Industrial NLP" },
                { icon: FileText, name: "NLTK", color: "from-purple-500 to-pink-500", desc: "Classic NLP" },
                { icon: Cloud, name: "AWS Comprehend", color: "from-indigo-500 to-blue-500", desc: "Cloud NLP API" },
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

        {/* NLP Solutions We Offer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-3 py-1 mb-4">
              <Layers className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-xs">Our Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">NLP Solutions We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Transform unstructured text into valuable insights</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: "Sentiment Analysis", desc: "Understand customer emotions & opinions", color: "from-green-500 to-emerald-500" },
              { icon: MessageCircle, title: "Chatbots", desc: "Intelligent conversation agents", color: "from-cyan-500 to-blue-500" },
              { icon: FileText, title: "Text Summarization", desc: "Condense long documents efficiently", color: "from-purple-500 to-pink-500" },
              { icon: Languages, title: "Translation", desc: "Cross-language communication", color: "from-orange-500 to-red-500" },
              { icon: Mail, title: "Email Classification", desc: "Auto-categorize messages", color: "from-indigo-500 to-purple-500" },
              { icon: Globe, title: "Content Moderation", desc: "Filter inappropriate content", color: "from-red-500 to-rose-500" },
            ].map((solution, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-dark-400/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500 transition-all group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">{solution.title}</h3>
                <p className="text-gray-400 text-sm">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* NLP Development Process */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-3 py-1 mb-4">
              <Clock className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-xs">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">NLP Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Systematic approach to building language AI</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Data Collection", desc: "Gather text data", icon: Database },
              { step: "02", title: "Preprocessing", desc: "Clean & prepare text", icon: Code },
              { step: "03", title: "Model Training", desc: "Train NLP models", icon: Brain },
              { step: "04", title: "Deployment", desc: "Integrate & monitor", icon: Rocket },
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 mx-auto mb-2 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
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
            <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-3 py-1 mb-4">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-xs">Applications</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">NLP solutions tailored for various business sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "E-commerce", icon: ShoppingCart, desc: "Product reviews & recommendations" },
              { title: "Healthcare", icon: Heart, desc: "Clinical notes & diagnosis" },
              { title: "Finance", icon: DollarSign, desc: "Fraud detection & reports" },
              { title: "Customer Service", icon: MessageCircle, desc: "Chatbots & support automation" },
            ].map((industry, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.02 }}
                className="bg-dark-400/30 rounded-xl p-4 text-center border border-white/10 hover:border-green-500 transition-all"
              >
                <industry.icon className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <h3 className="font-semibold text-sm mb-1">{industry.title}</h3>
                <p className="text-xs text-gray-400">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits of NLP */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl p-8 border border-green-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-2xl font-bold mb-2">Why Your Business Needs NLP</h3>
                <p className="text-gray-300 mb-4">Natural Language Processing delivers measurable business impact:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 75% reduction in support tickets</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 60% faster customer response</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 40% increase in customer satisfaction</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 24/7 automated support</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <Zap className="w-6 h-6 mx-auto mb-2 text-green-400" />
                  <p className="text-2xl font-bold text-green-400">75%</p>
                  <p className="text-xs text-gray-400">Ticket Reduction</p>
                </div>
                <div className="bg-dark-400/50 rounded-xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-400" />
                  <p className="text-2xl font-bold text-green-400">60%</p>
                  <p className="text-xs text-gray-400">Faster Response</p>
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
            <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-3 py-1 mb-4">
              <Zap className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-xs">Advanced NLP</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">LLM & Generative AI</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Harness the power of large language models</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MessageCircle, title: "GPT Integration", desc: "ChatGPT & custom LLMs", color: "from-green-500 to-emerald-500" },
              { icon: FileText, title: "Content Generation", desc: "Auto-write articles & copy", color: "from-cyan-500 to-blue-500" },
              { icon: Code, title: "Code Generation", desc: "AI-powered development", color: "from-purple-500 to-pink-500" },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-dark-400/50 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-green-500 transition-all"
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

        {/* Pricing Plans with USD & PKR */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-3 py-1 mb-4">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-xs">Investment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">NLP Packages</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Intelligent language solutions for your business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-white/10 relative overflow-hidden group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-green-400">${prices.starter.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/project</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.starter.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Single NLP Task", "Basic Sentiment Analysis", "API Integration", "30 Days Support"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/nlp/inquiry"
                className="block text-center py-3 bg-green-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
              >
                Get Started <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            </motion.div>

            {/* Professional Plan - Most Popular */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="glass-card p-8 border border-green-500 shadow-xl shadow-green-500/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-l from-green-600 to-emerald-600 px-4 py-1 rounded-bl-xl text-sm font-semibold">
                Most Popular
              </div>
              <div className={`w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-green-400">${prices.professional.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/project</span>
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  ≈ ₨{prices.professional.pkr.toLocaleString()}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Multiple NLP Tasks", "Chatbot Integration", "Custom Training", "Dashboard & Analytics", "6 Months Support"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/nlp/inquiry"
                className="block text-center py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
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
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-4">
                <div>
                  <span className="text-3xl font-bold text-green-400">{prices.enterprise.usd}</span>
                  <span className="text-gray-400 text-sm ml-1">/quote</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {["Custom LLM Fine-tuning", "Multi-language Support", "Dedicated AI Team", "24/7 Monitoring", "SLA Agreement"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/services/nlp/inquiry"
                className="block text-center py-3 bg-green-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
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
            <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-3 py-1 mb-4">
              <Eye className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-xs">Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent NLP Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Successful language AI implementations we've delivered</p>
          </div>
          
          {loadingPortfolio ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
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
                      <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-gray-400">4.9</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors line-clamp-1">
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
              <p className="text-gray-400">No NLP projects found in portfolio.</p>
              <Link to="/portfolio" className="text-green-400 hover:text-green-300 mt-2 inline-block">View All Projects →</Link>
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
          <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl p-8 border border-green-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-2xl font-bold mb-2">75% Reduction in Support Tickets</h3>
                <p className="text-gray-300 mb-4">Implemented an AI chatbot that handles 70% of customer queries automatically, reducing support team workload and improving response times.</p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-green-400 font-bold text-xl">75%</div>
                    <div className="text-xs text-gray-400">Ticket Reduction</div>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold text-xl">70%</div>
                    <div className="text-xs text-gray-400">Auto-resolution</div>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold text-xl">24/7</div>
                    <div className="text-xs text-gray-400">Availability</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-dark-400/50 rounded-xl p-6">
                  <p className="text-gray-300 italic">"CodeNagar's NLP solution transformed our customer support. The chatbot handles routine queries seamlessly, allowing our team to focus on complex issues."</p>
                  <div className="mt-4">
                    <p className="font-semibold">Fatima Ali</p>
                    <p className="text-sm text-gray-400">Customer Support Director, TechServe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Language Support */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-dark-400/30 rounded-xl p-6 text-center border border-white/10">
            <Languages className="w-10 h-10 mx-auto mb-3 text-green-400" />
            <h3 className="font-bold mb-2">Multi-Language Support</h3>
            <p className="text-sm text-gray-400 mb-3">We support 50+ languages including English, Urdu, Arabic, Chinese, Spanish, French, German, and more</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-xs px-2 py-1 bg-green-500/20 rounded-full text-green-400">English</span>
              <span className="text-xs px-2 py-1 bg-green-500/20 rounded-full text-green-400">Urdu</span>
              <span className="text-xs px-2 py-1 bg-green-500/20 rounded-full text-green-400">Arabic</span>
              <span className="text-xs px-2 py-1 bg-green-500/20 rounded-full text-green-400">Spanish</span>
              <span className="text-xs px-2 py-1 bg-green-500/20 rounded-full text-green-400">French</span>
              <span className="text-xs px-2 py-1 bg-green-500/20 rounded-full text-green-400">German</span>
              <span className="text-xs px-2 py-1 bg-green-500/20 rounded-full text-green-400">Chinese</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-12 border border-green-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Understand Your Language Data?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's help you extract insights from text and build intelligent language systems for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/services/nlp/inquiry" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all group"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/10 rounded-lg font-semibold hover:bg-white/5 transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}