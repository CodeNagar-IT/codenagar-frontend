// frontend/src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Code, ShoppingBag, Briefcase, Users, Server, 
  Globe, Sparkles, Rocket, Zap, Smartphone, Brain, GraduationCap,
  BookOpen,  Star, Clock, Shield, Heart, TrendingUp,
   MapPin, Phone, Mail, ChevronRight, 
   Database, 
} from "lucide-react";
import Logo from "../assets/logo.png";

const Home = () => {
  const services = [
    { icon: Globe, title: "Web Development", desc: "Modern responsive websites with cutting-edge tech", link: "/services/web-development", color: "from-blue-500 to-cyan-500" },
    { icon: Smartphone, title: "App Development", desc: "Native iOS & Android cross-platform apps", link: "/services/app-development", color: "from-green-500 to-emerald-500" },
    { icon: Brain, title: "ML Integration", desc: "AI-powered solutions & intelligent systems", link: "/services/ml-integration", color: "from-purple-500 to-pink-500" },
    { icon: Server, title: "Cloud Solutions", desc: "Scalable AWS, Azure, GCP infrastructure", link: "/services/cloud-solutions", color: "from-orange-500 to-red-500" },
    { icon: Shield, title: "Cybersecurity", desc: "Protect your business from threats", link: "/services/cybersecurity", color: "from-red-500 to-rose-500" },
    { icon: Database, title: "Data Analytics", desc: "Turn data into actionable insights", link: "/services/data-analytics", color: "from-yellow-500 to-orange-500" },
  ];

  const features = [
    { icon: Rocket, title: "Fast Delivery", desc: "Rapid development and deployment" },
    { icon: Shield, title: "Secure Code", desc: "Industry-standard security practices" },
    { icon: Heart, title: "24/7 Support", desc: "Round-the-clock technical assistance" },
    { icon: TrendingUp, title: "Scalable", desc: "Solutions that grow with you" },
  ];

  const testimonials = [
    {
      name: "Basit Ali Jahan",
      role: "CEO, JahanSaaS",
      content: "CodeNagar delivered an exceptional web application that exceeded our expectations. Their team is professional, skilled, and responsive.",
      rating: 5,
      avatar: "https://i.ibb.co/wZMBRYJy/Screenshot-2026-05-31-051043.jpg"
    },
    {
      name: "Syed Saqlain Sajjad",
      role: "Jr. ERP Consultant, Dynamics 360",
      content: "The ERP solution CodeNagar delivered has revolutionized our operations. Real-time inventory tracking, automated workflows, and powerful analytics have made our team more efficient than ever. Highly recommended!",
      rating: 5,
      avatar: "https://i.ibb.co/dsjhZVbB/1776872295633.jpg"
    },
    {
      name: "Syed Muhammad",
      role: "Lead App Developer, Firefly Tech Solutions",
      content: "CodeNagar's mobile development expertise is outstanding. They delivered a complex cross-platform app that exceeded our expectations. The app has 50,000+ downloads with a 4.8-star rating. Their clean code and performance optimization set them apart from other vendors. We're now working on three more projects together!",
      rating: 5,
      avatar: "https://i.ibb.co/TX2MzQX/1769055379431.png" 
    },
  ];

  const fypProjects = [
    {
      title: "AI-Powered Resume Screening System",
      category: "AI/ML",
      price: "PKR 35,999",
      discount: "40% OFF",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
      link: "/fyp"
    },
    {
      title: "Smart Agriculture IoT System",
      category: "IoT",
      price: "PKR 26,999",
      discount: "40% OFF",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
      link: "/fyp"
    },
    {
      title: "Blockchain Voting System",
      category: "Blockchain",
      price: "PKR 41,999",
      discount: "40% OFF",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      link: "/fyp"
    },
    {
      title: "Mental Health Chatbot",
      category: "AI/ML",
      price: "PKR 29,999",
      discount: "40% OFF",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      link: "/fyp"
    },
  ];

  const recentBlogs = [
    {
      title: "The Future of Web Development in 2025",
      excerpt: "Explore emerging trends and technologies shaping the future of web development...",
      date: "Mar 15, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      link: "/blog/future-of-web-development-2025"
    },
    {
      title: "Building Scalable React Native Apps",
      excerpt: "Best practices for building enterprise-grade mobile applications with React Native...",
      date: "Mar 10, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      link: "/blog/scalable-react-native-apps"
    },
    {
      title: "RAG Systems in Production",
      excerpt: "A practical guide to implementing Retrieval-Augmented Generation systems...",
      date: "Mar 5, 2025",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      link: "/blog/rag-systems-production"
    },
  ];

  const partners = [
    { name: "NexGen Solutions", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop" },
    { name: "CloudScale", logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop" },
    { name: "VentureSpark", logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop" },
    { name: "JahanSaaS", logo: "https://i.ibb.co/8D0xB45R/jahan-saas-logo.jpg" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-blue-600/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            {/* Logo with Animation */}
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <img 
                  src={Logo} 
                  alt="CodeNagar Logo" 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover relative z-10 border-4 border-blue-500/30 shadow-2xl"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ delay: 0.3 }} 
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></span>
              <span className="text-blue-300 text-sm">Pakistan's Leading Tech Hub</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                CodeNagar
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 flex items-center justify-center gap-2 flex-wrap">
              <Sparkles className="w-6 h-6 text-yellow-400" />
              Where Code Meets Vision
              <Rocket className="w-6 h-6 text-blue-400" />
            </p>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Software Development | IT Training | Hardware Store | FYP Projects — Your Complete Technology Partner
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/services" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2 group">
                Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/courses" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2 group">
                Browse Courses
              </Link>
              <Link to="/store" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2 group">
                Shop Now
              </Link>
              <Link to="/fyp" className="px-8 py-3 border-2 border-green-500 rounded-lg font-semibold hover:bg-green-500/10 transition-all flex items-center gap-2 group">
                <GraduationCap className="w-5 h-5" />
                FYP Projects <span className="text-green-400 text-sm">40% OFF</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-1 mb-4">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive software solutions for modern businesses</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: idx * 0.1 }} 
                whileHover={{ y: -8, scale: 1.02 }} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{service.desc}</p>
                <Link to={service.link} className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-all hover:gap-3">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FYP Projects Section - NEW */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-4 py-1 mb-4">
              <GraduationCap className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm">For University Students</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Final Year <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Ready-made FYP projects, theses, and reports with exclusive student discount</p>
            <div className="inline-flex items-center gap-2 mt-4 bg-green-500/20 rounded-full px-4 py-2">
              <span className="text-green-400 font-bold">40% Student Discount</span>
              <span className="text-gray-300 text-sm">| Limited Time Offer</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fypProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-green-500 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    {project.discount}
                  </div>
                  <div className="absolute bottom-2 left-2 bg-blue-600/90 text-white text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-green-400 transition-colors line-clamp-1">{project.title}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-green-400">{project.price}</span>
                  </div>
                  <Link to={project.link} className="block text-center py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all text-sm">
                    Get Student Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/fyp" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all group">
              View All FYP Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Impact</span> in Numbers
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Trusted by businesses and students across Pakistan</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 text-center">
            {[
              { icon: Code, value: "50+", label: "Projects Delivered" },
              { icon: Users, value: "200+", label: "Students Trained" },
              { icon: Briefcase, value: "100+", label: "Happy Clients" },
              { icon: ShoppingBag, value: "500+", label: "Products Sold" },
              { icon: GraduationCap, value: "30+", label: "FYP Projects" },
              { icon: Star, value: "98%", label: "Client Satisfaction" },
              { icon: Clock, value: "24/7", label: "Support Available" },
              { icon: Globe, value: "10+", label: "Countries Served" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.5 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/30 rounded-xl md:rounded-2xl p-3 md:p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-3 text-blue-400" />
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">CodeNagar</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We deliver excellence through innovation and dedication</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-4 py-1 mb-4">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm">Latest Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              From Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Blog</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Stay updated with the latest trends and insights</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentBlogs.map((blog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                  <Link to={blog.link} className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-all hover:gap-3">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 rounded-full px-4 py-1 mb-4">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-300 text-sm">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Don't just take our word for it</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Trusted by <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-gray-400 text-sm">We partner with the best in the business</p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-8 partners-gap">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="w-24 h-24 bg-gray-800/50 rounded-xl flex items-center justify-center p-4 border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain rounded-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-1 mb-4">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm">Visit Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Location</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Visit our state-of-the-art facility in Muzaffarabad for in-person consultations, hardware purchases, and support.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>CodeNagar, Sajjad Complex, Upper Adda, Muzaffarabad</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+92 3075762192</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>info@codenagar.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>Monday - Saturday: 10AM - 8PM | Sunday: Closed</span>
                </div>
              </div>
              <div className="mt-6">
                <Link to="/contact" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold">
                  Get Directions <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card overflow-hidden rounded-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411.6420718474806!2d73.47095634089504!3d34.372446473469225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e09f76421c02e9%3A0xaeb385ad86c56a8c!2sCodeNagar!5e0!3m2!1sen!2s!4v1779136409725!5m2!1sen!2s"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="CodeNagar Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/10 to-indigo-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-gray-400 mb-6">Get the latest tech insights and updates delivered to your inbox</p>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">No spam, unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 rounded-3xl p-12 border border-blue-500/20 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how CodeNagar can help you achieve your business goals with cutting-edge technology solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2 group"
              >
                Get Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/fyp" 
                className="px-8 py-3 border-2 border-green-500 rounded-lg font-semibold hover:bg-green-500/10 transition-all flex items-center gap-2 group"
              >
                <GraduationCap className="w-5 h-5" />
                Explore FYP Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;