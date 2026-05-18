// frontend/src/pages/services/Services.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, Smartphone, Brain,Code, Cloud,  Zap, 
  Layout, Database, GitBranch, ShoppingCart, Palette, Cpu, 
  Sparkles, ArrowRight, CheckCircle, Award, Users, TrendingUp 
} from "lucide-react";

const Services = () => {
  const services = [
    { 
      icon: Globe, 
      title: "Web Development", 
      desc: "Modern, responsive websites with cutting-edge technology",
      path: "/services/web-development",
      color: "from-blue-500 to-cyan-500",
      features: ["React.js/Next.js", "Responsive Design", "SEO Optimized", "Fast Performance"]
    },
    { 
      icon: Smartphone, 
      title: "App Development", 
      desc: "Native & cross-platform mobile applications",
      path: "/services/app-development",
      color: "from-green-500 to-emerald-500",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Deployment"]
    },
    { 
      icon: Brain, 
      title: "ML Integration", 
      desc: "AI-powered solutions & intelligent systems",
      path: "/services/ml-integration",
      color: "from-purple-500 to-pink-500",
      features: ["Predictive Analytics", "NLP", "Computer Vision", "Recommendation Systems"]
    },
    { 
      icon: Cpu, 
      title: "AI Solutions", 
      desc: "Cutting-edge artificial intelligence for business",
      path: "/services/ai-solutions",
      color: "from-red-500 to-rose-500",
      features: ["Chatbots", "Automation", "LLM Integration", "Custom AI Models"]
    },
    { 
      icon: Layout, 
      title: "Frontend Development", 
      desc: "Beautiful, responsive user interfaces",
      path: "/services/frontend-development",
      color: "from-cyan-500 to-blue-500",
      features: ["React/Vue/Angular", "Tailwind CSS", "PWA", "Performance Optimization"]
    },
    { 
      icon: Database, 
      title: "Backend Development", 
      desc: "Scalable server-side applications",
      path: "/services/backend-development",
      color: "from-orange-500 to-red-500",
      features: ["Node.js/Python", "RESTful APIs", "Database Design", "Microservices"]
    },
    { 
      icon: Code, 
      title: "Full Stack Development", 
      desc: "End-to-end application development",
      path: "/services/full-stack-development",
      color: "from-indigo-500 to-purple-500",
      features: ["MERN/PERN Stack", "API Integration", "Cloud Deployment", "DevOps"]
    },
    { 
      icon: Cloud, 
      title: "Cloud Solutions", 
      desc: "Scalable cloud infrastructure & migration",
      path: "/services/cloud-solutions",
      color: "from-yellow-500 to-orange-500",
      features: ["AWS/Azure/GCP", "Cloud Migration", "Cost Optimization", "24/7 Monitoring"]
    },
    { 
      icon: GitBranch, 
      title: "DevOps", 
      desc: "Automated CI/CD pipelines & infrastructure",
      path: "/services/devops",
      color: "from-gray-500 to-gray-700",
      features: ["CI/CD Pipeline", "Docker/K8s", "Infrastructure as Code", "Monitoring"]
    },
    { 
      icon: Palette, 
      title: "UI/UX Design", 
      desc: "User-centered design for digital products",
      path: "/services/ui-ux-design",
      color: "from-pink-500 to-rose-500",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    { 
      icon: ShoppingCart, 
      title: "E-commerce Development", 
      desc: "Powerful online stores that sell",
      path: "/services/ecommerce-development",
      color: "from-green-500 to-emerald-500",
      features: ["Shopify/WooCommerce", "Payment Integration", "Inventory Management", "SEO"]
    },
  ];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">What We Offer</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions to help your business grow and succeed in the digital age.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Award, value: "50+", label: "Projects Delivered", color: "from-blue-500 to-cyan-500" },
            { icon: Users, value: "100+", label: "Happy Clients", color: "from-purple-500 to-pink-500" },
            { icon: TrendingUp, value: "98%", label: "Client Retention", color: "from-green-500 to-emerald-500" },
            { icon: Zap, value: "24/7", label: "Support Available", color: "from-orange-500 to-red-500" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
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
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="p-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{service.desc}</p>
                
                {/* Features List */}
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={service.path} 
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all group"
          >
            Get Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;