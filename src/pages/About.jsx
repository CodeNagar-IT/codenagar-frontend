// frontend/src/pages/About.jsx
import { motion } from "framer-motion";
import { Users, Target, Heart, Award, Clock, Globe, Sparkles, Building, Mail, Phone, MapPin, Quote, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm">Who We Are</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">CodeNagar</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to transform businesses through innovative technology solutions and empower the next generation of tech professionals.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Building className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Our Journey</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Founded in 2020, CodeNagar started as a small team of passionate developers with a vision to provide enterprise-grade software solutions at affordable prices. Over the years, we've grown into a full-service technology company offering software development, IT training, and hardware solutions.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Today, we've successfully delivered <span className="text-blue-400 font-semibold">50+ projects</span>, trained <span className="text-blue-400 font-semibold">200+ students</span>, and built lasting relationships with <span className="text-blue-400 font-semibold">100+ satisfied clients</span> across Pakistan and beyond.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our name "CodeNagar" represents our commitment to being a "city of code" — a hub where innovation meets execution, and where technology transforms businesses.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">200+</div>
                <div className="text-xs text-gray-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">100+</div>
                <div className="text-xs text-gray-400">Clients</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-blue-500/20"
          >
            <div className="mb-6">
              <Quote className="w-8 h-8 text-blue-400 mb-4 opacity-50" />
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">To democratize technology by making high-quality software development and IT education accessible to everyone.</p>
            </div>
            <div className="pt-6 border-t border-blue-500/20">
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">To become Pakistan's leading technology hub, recognized for innovation, quality, and community impact.</p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">What Drives Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Excellence", desc: "We strive for perfection in every line of code", color: "from-blue-500 to-cyan-500" },
              { icon: Heart, title: "Integrity", desc: "Honest communication and transparent processes", color: "from-red-500 to-indigo-500" },
              { icon: Users, title: "Collaboration", desc: "Working together to achieve remarkable results", color: "from-green-500 to-emerald-500" },
              { icon: Award, title: "Innovation", desc: "Staying ahead with cutting-edge technologies", color: "from-blue-500 to-indigo-500" },
              { icon: Clock, title: "Reliability", desc: "Delivering on time, every time", color: "from-orange-500 to-red-500" },
              { icon: Globe, title: "Community", desc: "Giving back to the tech ecosystem", color: "from-indigo-500 to-blue-500" },
            ].map((value, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-gradient-to-br ${value.color} p-6 rounded-xl shadow-lg group cursor-pointer`}
              >
                <value.icon className="w-12 h-12 mb-4 text-white opacity-90 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-white/80 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-3 py-1 mb-4">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-xs">Our People</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Meet the visionaries behind CodeNagar's success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Ahmed Butt", role: "CEO & Founder", image: "https://i.ibb.co/5hdfMW9G/20260501-0530-image.png", bio: "10+ years in software development" },

            ].map((member, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -8 }}
                className="group text-center bg-gray-800/30 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="relative inline-block">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500 group-hover:border-blue-400 transition-all" 
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-20 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gray-800/30 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500 transition-all">
            <Mail className="w-10 h-10 mx-auto mb-3 text-blue-400" />
            <h3 className="font-bold mb-1">Email Us</h3>
            <p className="text-gray-400 text-sm">info@codenagar.com</p>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500 transition-all">
            <Phone className="w-10 h-10 mx-auto mb-3 text-blue-400" />
            <h3 className="font-bold mb-1">Call Us</h3>
            <p className="text-gray-400 text-sm">+92 307 5762192</p>
            <p className="text-gray-400 text-sm">+92 333 0508929</p>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500 transition-all">
            <MapPin className="w-10 h-10 mx-auto mb-3 text-blue-400" />
            <h3 className="font-bold mb-1">Visit Us</h3>
            <p className="text-gray-400 text-sm">Muzaffarabad, Azad Kashmir</p>
            <p className="text-gray-400 text-sm">Sajjad Complex, Upper Adda, Muzaffarabad</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-12 border border-blue-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Be part of something amazing — whether as a client, student, or team member
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all group"
            >
              Work With Us <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/careers" 
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-white/10 transition-all group"
            >
              View Careers <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;