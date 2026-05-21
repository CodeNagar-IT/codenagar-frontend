// frontend/src/pages/courses/Courses.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Users, Award,  ChevronRight, Headphones, ArrowRight, Sparkles, Star, Briefcase, Calendar, CheckCircle,  Code, Smartphone, Brain, Palette, FileText, GraduationCap, Trophy,  Rocket } from "lucide-react";

const Courses = () => {
  const [courses] = useState([
    { id: "ms-office", title: "MS Office Mastery", duration: "2 Months", level: "Beginner", students: 150, price: 99, icon: FileText, description: "Master Word, Excel, PowerPoint, and Outlook for professional productivity.", popular: false, badge: "Most Popular" },
    { id: "web-development", title: "Web Development", duration: "6 Months", level: "Advanced", students: 280, price: 499, icon: Code, description: "Learn HTML, CSS, JavaScript, React, Node.js, and build full-stack apps.", popular: true, badge: "Job Guarantee" },
    { id: "app-development", title: "App Development", duration: "6 Months", level: "Advanced", students: 195, price: 549, icon: Smartphone, description: "Build iOS and Android apps using React Native and Flutter.", popular: false, badge: "Trending" },
    { id: "python", title: "Python Programming", duration: "4 Months", level: "Intermediate", students: 210, price: 299, icon: Code, description: "Master Python from basics to advanced with real-world projects.", popular: false, badge: "" },
    { id: "data-science", title: "Data Science & ML", duration: "8 Months", level: "Advanced", students: 120, price: 799, icon: Brain, description: "Learn data analysis, visualization, machine learning, and AI.", popular: true, badge: "AI Powered" },
    { id: "ui-ux", title: "UI/UX Design", duration: "3 Months", level: "Beginner", students: 175, price: 249, icon: Palette, description: "Create beautiful user interfaces with Figma and Adobe XD.", popular: false, badge: "" },
  ]);

  const getBadgeColor = (badge) => {
    switch(badge) {
      case "Most Popular": return "bg-orange-500";
      case "Job Guarantee": return "bg-green-500";
      case "Trending": return "bg-blue-500";
      case "AI Powered": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

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
            <span className="text-blue-300 text-sm">Learn & Grow</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Courses</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-ready training with hands-on projects, certification, and job placement assistance.
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 relative"
            >
              {/* Badge */}
              {course.badge && (
                <div className={`absolute top-4 right-4 ${getBadgeColor(course.badge)} text-white text-xs px-3 py-1 rounded-full z-10 font-semibold`}>
                  {course.badge}
                </div>
              )}
              
              <div className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <course.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{course.title}</h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-4 text-sm line-clamp-2">{course.description}</p>
                
                {/* Details */}
                <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-blue-400" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4 text-blue-400" /> {course.students}+</span>
                  <span className="flex items-center gap-1"><Award className="w-4 h-4 text-blue-400" /> {course.level}</span>
                </div>
                
                {/* Price & Action */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-blue-400">${course.price}</span>
                    <span className="text-xs text-gray-500 ml-1">one-time</span>
                  </div>
                  <Link 
                    to={`/courses/${course.id}`} 
                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 group-hover:gap-2 transition-all"
                  >
                    View Details <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mt-20 mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
              <Star className="w-8 h-8 text-blue-400" />
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">CodeNagar</span> for Training?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We provide the best learning experience with industry experts</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, value: "50+", label: "Live Projects", desc: "Real-world experience", color: "from-blue-500 to-cyan-500" },
              { icon: Trophy, value: "100%", label: "Job Placement", desc: "Career assistance", color: "from-green-500 to-emerald-500" },
              { icon: Headphones, value: "24/7", label: "Support", desc: "Dedicated mentors", color: "from-blue-500 to-indigo-500" },
              { icon: Award, value: "Certified", label: "Trainers", desc: "Industry experts", color: "from-orange-500 to-red-500" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500 transition-all group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-white font-semibold mt-1">{stat.label}</div>
                <div className="text-gray-500 text-xs mt-1">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Benefits */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl p-8 border border-blue-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold mb-2">What You'll Get</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Industry-recognized certification</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Hands-on project experience</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> 1-on-1 mentorship sessions</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Lifetime access to course materials</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-blue-400" /> Resume & interview preparation</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <GraduationCap className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <p className="text-sm font-semibold">Certification</p>
                  <p className="text-xs text-gray-400">Globally recognized</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <p className="text-sm font-semibold">Community</p>
                  <p className="text-xs text-gray-400">Active alumni network</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <p className="text-sm font-semibold">Flexible Schedule</p>
                  <p className="text-xs text-gray-400">Weekend & evening batches</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 text-center">
                  <Rocket className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <p className="text-sm font-semibold">Career Support</p>
                  <p className="text-xs text-gray-400">Job placement assistance</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Success Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Success</span> in Numbers</h2>
            <p className="text-gray-400">Thousands of students have transformed their careers with us</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "2000+", label: "Students Trained", icon: Users },
              { value: "500+", label: "Projects Completed", icon: Code },
              { value: "95%", label: "Placement Rate", icon: Briefcase },
              { value: "4.9★", label: "Student Rating", icon: Star },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 text-center">
            <div className="text-6xl mb-4">⭐</div>
            <p className="text-gray-300 text-lg italic max-w-3xl mx-auto mb-6">
              "CodeNagar's web development course completely transformed my career. Within 3 months of completing the course, I landed a job as a full-stack developer at a top tech company."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="text-left">
                <p className="font-semibold">Ahmed Raza</p>
                <p className="text-sm text-gray-400">Full-Stack Developer | Batch 2024</p>
              </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Enroll now and take the first step towards a successful career in tech.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all group"
            >
              Enroll Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Talk to Advisor
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;