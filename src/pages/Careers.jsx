// frontend/src/pages/Careers.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, DollarSign, Clock, Upload, Send, Sparkles, CheckCircle, X, Award, Users, TrendingUp, Heart, FileText, Mail, Phone, User } from "lucide-react";
import axios from "axios";

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    position: "",
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
  });
  const [resume, setResume] = useState(null);
  const [resumeName, setResumeName] = useState("");

  const positions = [
    {
      title: "Senior React Developer",
      type: "Full-time",
      location: "Karachi (Hybrid)",
      salary: "$2,000 - $3,000",
      experience: "3+ years",
      description: "We're looking for an experienced React developer to lead our frontend team.",
      requirements: ["3+ years React experience", "Redux/Context API", "Tailwind CSS", "TypeScript"],
      icon: "⚛️",
    },
    {
      title: "Node.js Backend Developer",
      type: "Full-time",
      location: "Remote",
      salary: "$1,800 - $2,800",
      experience: "2+ years",
      description: "Join our backend team to build scalable APIs and microservices.",
      requirements: ["Node.js/Express", "MongoDB", "REST APIs", "AWS/GCP"],
      icon: "🚀",
    },
    {
      title: "ML Engineer",
      type: "Full-time",
      location: "Karachi",
      salary: "$2,500 - $4,000",
      experience: "2+ years",
      description: "Seeking ML expert to develop AI solutions for our clients.",
      requirements: ["Python", "TensorFlow/PyTorch", "Computer Vision/NLP", "SQL"],
      icon: "🧠",
    },
    {
      title: "UI/UX Designer",
      type: "Contract",
      location: "Remote",
      salary: "$1,500 - $2,500",
      experience: "2+ years",
      description: "Create beautiful, user-centered designs for web and mobile apps.",
      requirements: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      icon: "🎨",
    },
    {
      title: "IT Trainer",
      type: "Full-time",
      location: "Karachi",
      salary: "$1,200 - $2,000",
      experience: "2+ years teaching",
      description: "Teach web development, Python, or data science to students.",
      requirements: ["Teaching experience", "Strong communication", "Portfolio of student work"],
      icon: "📚",
    },
    {
      title: "Sales Executive",
      type: "Full-time",
      location: "Karachi",
      salary: "$800 - $1,500 + Commission",
      experience: "1+ year",
      description: "Drive sales for our software services and hardware products.",
      requirements: ["B2B sales experience", "Tech knowledge", "Communication skills"],
      icon: "💼",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus({ type: "", message: "" });
    
    const formDataToSend = new FormData();
    formDataToSend.append("position", selectedPosition.title);
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("experience", formData.experience);
    formDataToSend.append("coverLetter", formData.coverLetter);
    if (resume) formDataToSend.append("resume", resume);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/careers/apply`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSubmitStatus({ type: "success", message: "Application submitted successfully! We'll review your application and get back to you soon." });
      setTimeout(() => {
        setSelectedPosition(null);
        setFormData({ position: "", fullName: "", email: "", phone: "", experience: "", coverLetter: "" });
        setResume(null);
        setResumeName("");
        setSubmitStatus({ type: "", message: "" });
      }, 2000);
    } catch {
      setSubmitStatus({ type: "error", message: "Submission failed. Please try again or contact us directly." });
    } finally {
      setSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
      setResumeName(file.name);
    }
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Join Our Growing Team</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Join Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build your career with CodeNagar. We're always looking for talented, passionate people to join our growing team.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Briefcase, title: "Competitive Salary", desc: "Market-leading compensation", color: "from-blue-500 to-cyan-500" },
            { icon: Clock, title: "Flexible Hours", desc: "Work-life balance", color: "from-green-500 to-emerald-500" },
            { icon: MapPin, title: "Remote Options", desc: "Work from anywhere", color: "from-purple-500 to-pink-500" },
            { icon: Award, title: "Growth Opportunities", desc: "Learn and advance", color: "from-orange-500 to-red-500" },
          ].map((benefit, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`text-center p-6 bg-gradient-to-br ${benefit.color} rounded-xl shadow-lg`}
            >
              <benefit.icon className="w-12 h-12 mx-auto mb-3 text-white" />
              <h3 className="text-lg font-bold mb-1 text-white">{benefit.title}</h3>
              <p className="text-white/80 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Company Culture Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 bg-gray-800/30 rounded-2xl p-8 border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-purple-400" />
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Great Culture", desc: "Collaborative, inclusive, and supportive environment" },
              { icon: TrendingUp, title: "Career Growth", desc: "Regular learning opportunities and promotions" },
              { icon: Award, title: "Recognition", desc: "Performance bonuses and employee recognition" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <item.icon className="w-10 h-10 mx-auto mb-3 text-purple-400" />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Briefcase className="w-8 h-8 text-purple-400" />
          Open Positions ({positions.length})
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {positions.map((position, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{position.icon}</span>
                  <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">{position.title}</h3>
                </div>
                <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                  {position.type}
                </span>
              </div>
              <div className="flex flex-wrap gap-4 mb-4 text-sm">
                <span className="flex items-center gap-1 text-gray-300"><MapPin className="w-4 h-4 text-purple-400" /> {position.location}</span>
                <span className="flex items-center gap-1 text-gray-300"><DollarSign className="w-4 h-4 text-purple-400" /> {position.salary}</span>
                <span className="flex items-center gap-1 text-gray-300"><Clock className="w-4 h-4 text-purple-400" /> {position.experience}</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm">{position.description}</p>
              <div className="mb-4">
                <p className="text-xs text-purple-400 mb-2">Requirements:</p>
                <div className="flex flex-wrap gap-2">
                  {position.requirements.map((req, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">{req}</span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setSelectedPosition(position)} 
                className="w-full py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Application Modal */}
        <AnimatePresence>
          {selectedPosition && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => {
                setSelectedPosition(null);
                setSubmitStatus({ type: "", message: "" });
              }}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                className="bg-gray-800 rounded-2xl max-w-2xl w-full border border-purple-500 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{selectedPosition.icon}</span>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          Apply for {selectedPosition.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm">Fill out the form below to submit your application</p>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedPosition(null);
                        setSubmitStatus({ type: "", message: "" });
                      }}
                      className="p-1 hover:bg-gray-700 rounded-lg transition"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 max-h-[60vh] overflow-y-auto">
                  {submitStatus.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mb-4 p-3 rounded-lg flex items-center gap-2 text-sm ${
                        submitStatus.type === "success" 
                          ? "bg-green-500/20 text-green-400 border border-green-500" 
                          : "bg-red-500/20 text-red-400 border border-red-500"
                      }`}
                    >
                      {submitStatus.type === "success" ? <CheckCircle className="w-4 h-4" /> : <X className="w-4 h-4" />}
                      {submitStatus.message}
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="position" value={selectedPosition.title} />
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition"
                          placeholder="+92 300 1234567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Years of Experience *</label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          required
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition appearance-none"
                        >
                          <option value="">Select experience</option>
                          <option>Fresh Graduate</option>
                          <option>1-2 years</option>
                          <option>3-5 years</option>
                          <option>5+ years</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Resume/CV *</label>
                      <div className="flex items-center gap-2">
                        <label className="flex-1 relative cursor-pointer">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            required
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 rounded-lg border border-gray-700 hover:border-purple-500 transition cursor-pointer">
                            <FileText className="w-5 h-5 text-purple-400" />
                            <span className="text-sm text-gray-300">{resumeName || "Choose file..."}</span>
                          </div>
                        </label>
                        <Upload className="w-5 h-5 text-gray-400" />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Cover Letter</label>
                      <textarea
                        rows="4"
                        value={formData.coverLetter}
                        onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition resize-none"
                        placeholder="Tell us why you're a great fit for this position..."
                      ></textarea>
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="flex-1 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {submitting ? "Submitting..." : <><Send className="w-5 h-5" /> Submit Application</>}
                      </button>
                      <button 
                        type="button" 
                        onClick={() => {
                          setSelectedPosition(null);
                          setSubmitStatus({ type: "", message: "" });
                        }}
                        className="px-6 py-2.5 border border-gray-600 rounded-lg hover:bg-gray-700 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Careers;