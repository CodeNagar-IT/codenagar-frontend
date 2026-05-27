// frontend/src/pages/services/Services.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, Smartphone, Brain,  Cloud, Zap, 
  Layout, Clock, GitBranch, ShoppingCart, Palette, Cpu, 
  Sparkles, ArrowRight, CheckCircle, Award, Users, TrendingUp,
  Server, Shield,  Eye, MessageCircle, 
  Apple, Monitor, Layers, HardDrive,
} from "lucide-react";

const Services = () => {
  const services = [
    { 
      icon: Globe, 
      title: "Web Development", 
      desc: "Modern, responsive websites with cutting-edge technology",
      path: "/services/web-development",
      color: "from-cyan-500 to-blue-500",
      features: ["React.js/Next.js", "Responsive Design", "SEO Optimized", "Fast Performance"],
      tag: "Popular"
    },
    { 
      icon: Smartphone, 
      title: "App Development", 
      desc: "Native & cross-platform mobile applications",
      path: "/services/app-development",
      color: "from-green-500 to-emerald-500",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Deployment"],
      tag: "Popular"
    },
    { 
      icon: Apple, 
      title: "iOS Development", 
      desc: "Premium iOS applications for Apple ecosystem",
      path: "/services/ios-development",
      color: "from-gray-500 to-gray-700",
      features: ["Swift/SwiftUI", "App Store Optimization", "Apple Pay", "Push Notifications"],
      tag: "New"
    },
    { 
      icon: Monitor, 
      title: "Android Development", 
      desc: "Powerful Android apps for billions of users",
      path: "/services/android-development",
      color: "from-green-500 to-emerald-500",
      features: ["Kotlin/Java", "Material Design", "Google Play Store", "Firebase Integration"],
      tag: ""
    },
    { 
      icon: Globe, 
      title: "Cross-Platform", 
      desc: "Write once, run anywhere - iOS & Android together",
      path: "/services/cross-platform",
      color: "from-purple-500 to-pink-500",
      features: ["React Native", "Flutter", "Single Codebase", "Cost Effective"],
      tag: ""
    },
    { 
      icon: Brain, 
      title: "ML Integration", 
      desc: "AI-powered solutions & intelligent systems",
      path: "/services/ml-integration",
      color: "from-blue-500 to-indigo-500",
      features: ["Predictive Analytics", "NLP", "Computer Vision", "Recommendation Systems"],
      tag: "Trending"
    },
    { 
      icon: Cpu, 
      title: "AI Solutions", 
      desc: "Cutting-edge artificial intelligence for business",
      path: "/services/ai-solutions",
      color: "from-red-500 to-rose-500",
      features: ["Chatbots", "Automation", "LLM Integration", "Custom AI Models"],
      tag: "Trending"
    },
    { 
      icon: Eye, 
      title: "Computer Vision", 
      desc: "Advanced image & video recognition solutions",
      path: "/services/computer-vision",
      color: "from-purple-500 to-pink-500",
      features: ["Object Detection", "Facial Recognition", "OCR", "Video Analytics"],
      tag: ""
    },
    { 
      icon: MessageCircle, 
      title: "NLP Solutions", 
      desc: "Natural language processing & understanding",
      path: "/services/nlp",
      color: "from-green-500 to-emerald-500",
      features: ["Sentiment Analysis", "Chatbots", "Text Summarization", "Language Translation"],
      tag: ""
    },
    { 
      icon: Layout, 
      title: "Frontend Development", 
      desc: "Beautiful, responsive user interfaces",
      path: "/services/frontend-development",
      color: "from-cyan-500 to-blue-500",
      features: ["React/Vue/Angular", "Tailwind CSS", "PWA", "Performance Optimization"],
      tag: ""
    },
    { 
      icon: Server, 
      title: "Backend Development", 
      desc: "Scalable server-side applications",
      path: "/services/backend-development",
      color: "from-orange-500 to-red-500",
      features: ["Node.js/Python", "RESTful APIs", "Database Design", "Microservices"],
      tag: ""
    },
    { 
      icon: Layers, 
      title: "Full Stack Development", 
      desc: "End-to-end application development",
      path: "/services/full-stack-development",
      color: "from-indigo-500 to-purple-500",
      features: ["MERN/PERN Stack", "API Integration", "Cloud Deployment", "DevOps"],
      tag: ""
    },
    { 
      icon: ShoppingCart, 
      title: "E-commerce Development", 
      desc: "Powerful online stores that sell",
      path: "/services/ecommerce-development",
      color: "from-green-500 to-emerald-500",
      features: ["Shopify/WooCommerce", "Payment Integration", "Inventory Management", "SEO"],
      tag: "Popular"
    },
    { 
      icon: Cloud, 
      title: "Cloud Solutions", 
      desc: "Scalable cloud infrastructure & migration",
      path: "/services/cloud-solutions",
      color: "from-yellow-500 to-orange-500",
      features: ["AWS/Azure/GCP", "Cloud Migration", "Cost Optimization", "24/7 Monitoring"],
      tag: ""
    },
    { 
      icon: GitBranch, 
      title: "DevOps", 
      desc: "Automated CI/CD pipelines & infrastructure",
      path: "/services/devops",
      color: "from-gray-500 to-gray-700",
      features: ["CI/CD Pipeline", "Docker/K8s", "Infrastructure as Code", "Monitoring"],
      tag: ""
    },
    { 
      icon: Shield, 
      title: "Cybersecurity", 
      desc: "Enterprise-grade security solutions",
      path: "/services/cybersecurity",
      color: "from-red-500 to-rose-500",
      features: ["Threat Detection", "Security Audits", "Compliance", "24/7 Monitoring"],
      tag: "New"
    },
    { 
      icon: HardDrive, 
      title: "Database Management", 
      desc: "Optimized database design & management",
      path: "/services/database-management",
      color: "from-blue-500 to-cyan-500",
      features: ["Performance Tuning", "Backup & Recovery", "Migration", "Monitoring"],
      tag: ""
    },
    { 
      icon: Palette, 
      title: "UI/UX Design", 
      desc: "User-centered design for digital products",
      path: "/services/ui-ux-design",
      color: "from-pink-500 to-rose-500",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      tag: ""
    },
  ];

  const getTagColor = (tag) => {
    switch(tag) {
      case "Popular": return "bg-cyan-500/20 text-cyan-400";
      case "Trending": return "bg-orange-500/20 text-orange-400";
      case "New": return "bg-green-500/20 text-green-400";
      default: return "";
    }
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">What We Offer</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions to help your business grow and succeed in the digital age.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Award, value: "50+", label: "Projects Delivered", color: "from-cyan-500 to-blue-500" },
            { icon: Users, value: "100+", label: "Happy Clients", color: "from-blue-500 to-indigo-500" },
            { icon: TrendingUp, value: "98%", label: "Client Retention", color: "from-green-500 to-emerald-500" },
            { icon: Zap, value: "24/7", label: "Support Available", color: "from-orange-500 to-red-500" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 text-center shadow-lg`}
            >
              <stat.icon className="w-10 h-10 mx-auto mb-2 text-white" />
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="group glass-card overflow-hidden transition-all duration-300 relative"
            >
              {service.tag && (
                <div className={`absolute top-4 right-4 z-10 px-2 py-1 rounded-full text-xs font-semibold ${getTagColor(service.tag)}`}>
                  {service.tag}
                </div>
              )}
              <div className="p-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{service.desc}</p>
                
                {/* Features List */}
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={service.path} 
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="gradient-text">CodeNagar</span>?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">What makes us different from the competition</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Expert Team", desc: "10+ years of combined experience", color: "from-cyan-500 to-blue-500" },
              { icon: Shield, title: "Quality Assurance", desc: "Rigorous testing & quality checks", color: "from-green-500 to-emerald-500" },
              { icon: Clock, title: "On-Time Delivery", desc: "99% projects delivered on schedule", color: "from-orange-500 to-red-500" },
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Process</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">How we bring your ideas to life</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs", color: "from-cyan-500 to-blue-500" },
              { step: "02", title: "Design", desc: "Creating the blueprint", color: "from-purple-500 to-pink-500" },
              { step: "03", title: "Development", desc: "Building your solution", color: "from-orange-500 to-red-500" },
              { step: "04", title: "Delivery", desc: "Launch & support", color: "from-green-500 to-emerald-500" },
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 rounded-2xl p-12 border border-cyan-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all group"
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
};

export default Services;