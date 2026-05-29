// frontend/src/pages/FYPInquiry.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Send, User, Mail, Phone, DollarSign, Calendar, 
  Sparkles, CheckCircle, AlertCircle, ArrowLeft, FileText, 
  GraduationCap, BookOpen, Clock, Upload, X, PenTool
} from "lucide-react";
import axios from "axios";

const FYPInquiry = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [studentCard, setStudentCard] = useState(null);
  const [studentCardPreview, setStudentCardPreview] = useState(null);
  const [isCustomProject, setIsCustomProject] = useState(false);
  
  const [formData, setFormData] = useState({
    projectId: "",
    projectTitle: "",
    projectType: "",
    fullName: "",
    email: "",
    phone: "",
    university: "",
    studentId: "",
    semester: "",
    program: "",
    requirements: "",
    deadline: "",
    budget: "",
    customProjectTitle: "",
    customCategory: "",
    customTechnologies: "",
  });

  useEffect(() => {
    // Check if it's a custom project inquiry
    if (slug === "custom") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsCustomProject(true);
      setLoading(false);
      return;
    }
    
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/fyp/projects/${slug}`);
        setProject(response.data);
        setFormData(prev => ({
          ...prev,
          projectId: response.data._id,
          projectTitle: response.data.title,
          projectType: response.data.type,
        }));
      } catch (error) {
        console.error("Failed to fetch project", error);
        setStatus({ type: "error", message: "Failed to load project details. Please try again." });
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [slug]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStudentCard(file);
      setStudentCardPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    const formDataToSend = new FormData();
    
    if (isCustomProject) {
      // For custom projects - append only custom fields
      formDataToSend.append("projectTitle", formData.customProjectTitle || "Custom Project Request");
      formDataToSend.append("projectType", "Custom");
      formDataToSend.append("customProject", "true");
      formDataToSend.append("customCategory", formData.customCategory || "");
      formDataToSend.append("customTechnologies", formData.customTechnologies || "");
    } else {
      // For regular projects - append project fields only once
      formDataToSend.append("projectId", formData.projectId);
      formDataToSend.append("projectTitle", formData.projectTitle);
      formDataToSend.append("projectType", formData.projectType);
    }
    
    // Append student information fields (common for both)
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("university", formData.university);
    formDataToSend.append("studentId", formData.studentId);
    formDataToSend.append("semester", formData.semester);
    formDataToSend.append("program", formData.program);
    formDataToSend.append("requirements", formData.requirements);
    formDataToSend.append("deadline", formData.deadline);
    formDataToSend.append("budget", formData.budget);
    
    if (studentCard) {
      formDataToSend.append("studentCard", studentCard);
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/fyp/inquiry`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setStatus({ type: "success", message: "Inquiry submitted successfully! We'll contact you within 24 hours." });
      setTimeout(() => {
        navigate("/fyp");
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({ type: "error", message: error.response?.data?.error || "Failed to submit inquiry. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-32 text-center min-h-screen bg-dark-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen bg-dark-100">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 hover:text-green-400 mb-6 transition"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Projects
        </button>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-8"
        >
          <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 ${isCustomProject ? 'bg-purple-500/10' : 'bg-green-500/10'}`}>
            <Sparkles className={`w-4 h-4 ${isCustomProject ? 'text-purple-400' : 'text-green-400'}`} />
            <span className={`text-sm ${isCustomProject ? 'text-purple-300' : 'text-green-300'}`}>
              {isCustomProject ? "Custom Project Request" : "Student Inquiry"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            {isCustomProject ? (
              <>Request <span className="gradient-text">Custom FYP</span></>
            ) : (
              <>Apply for <span className="gradient-text">{project?.title}</span></>
            )}
          </h1>
          <p className="text-gray-400 text-lg">
            {isCustomProject 
              ? "Don't see your idea? Tell us what you need and we'll create it for you!"
              : "Fill out the form below to get your student discount quote"
            }
          </p>
        </motion.div>

        {/* Project Info Card - Only for non-custom projects */}
        {!isCustomProject && project && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 mb-8"
          >
            <div className="flex flex-wrap gap-6 justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.type} • {project.category}</p>
                <p className="text-gray-400 text-sm">Duration: {project.duration}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-400">${project.studentPrice}</div>
                <p className="text-xs text-gray-500 line-through">${project.originalPrice}</p>
                <p className="text-xs text-green-400">{project.discountPercentage}% Student Discount</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Custom Project Info Card */}
        {isCustomProject && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 mb-8 border border-purple-500/30"
          >
            <div className="flex flex-wrap gap-4 items-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                <PenTool className="w-8 h-8 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-purple-400 mb-1">Custom Project Request</h3>
                <p className="text-gray-400 text-sm">
                  Tell us about your unique project idea and we'll provide a custom quote with the same 40% student discount!
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Inquiry Form */}
        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="glass-card p-6 md:p-8"
        >
          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                status.type === "success" 
                  ? "bg-green-500/20 text-green-400 border border-green-500/50" 
                  : "bg-red-500/20 text-red-400 border border-red-500/50"
              }`}
            >
              {status.type === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              <span>{status.message}</span>
            </motion.div>
          )}

          {/* Custom Project Fields */}
          {isCustomProject && (
            <>
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Title *</label>
                  <div className="relative">
                    <PenTool className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      required
                      value={formData.customProjectTitle}
                      onChange={(e) => setFormData({ ...formData, customProjectTitle: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-white/10"
                      placeholder="e.g., AI-Powered Healthcare System"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Category *</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <select
                      required
                      value={formData.customCategory}
                      onChange={(e) => setFormData({ ...formData, customCategory: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-white/10"
                    >
                      <option value="">Select Category</option>
                      <option>Web Development</option>
                      <option>App Development</option>
                      <option>AI/ML</option>
                      <option>Data Science</option>
                      <option>IoT</option>
                      <option>Game Development</option>
                      <option>Blockchain</option>
                      <option>Cloud Computing</option>
                      <option>Cybersecurity</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">Technologies (comma separated)</label>
                <input
                  type="text"
                  value={formData.customTechnologies}
                  onChange={(e) => setFormData({ ...formData, customTechnologies: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-white/10"
                  placeholder="React, Python, TensorFlow, Node.js, MongoDB"
                />
              </div>
            </>
          )}

          {/* Student Information Fields (Common for both) */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                  placeholder="John Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Address *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                  placeholder="student@university.edu"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                  placeholder="+92 300 1234567"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">University Name *</label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  required
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                  placeholder="University Name"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium mb-2">Student ID Number *</label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  required
                  value={formData.studentId}
                  onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                  placeholder="e.g., CS-2024-001"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Current Semester *</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  required
                  value={formData.semester}
                  onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                >
                  <option value="">Select Semester</option>
                  <option>1st Semester</option>
                  <option>2nd Semester</option>
                  <option>3rd Semester</option>
                  <option>4th Semester</option>
                  <option>5th Semester</option>
                  <option>6th Semester</option>
                  <option>7th Semester</option>
                  <option>8th Semester</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium mb-2">Program/Degree *</label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  required
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                >
                  <option value="">Select Program</option>
                  <option>BS Computer Science</option>
                  <option>BS Software Engineering</option>
                  <option>BS Information Technology</option>
                  <option>BS Artificial Intelligence</option>
                  <option>BS Data Science</option>
                  <option>BS Cyber Security</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Project Deadline *</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  required
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                >
                  <option value="">Select Deadline</option>
                  <option>Within 2 weeks</option>
                  <option>Within 1 month</option>
                  <option>Within 2 months</option>
                  <option>Within 3 months</option>
                  <option>Flexible</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">Budget Range *</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <select
                required
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
              >
                <option value="">Select Budget Range</option>
                <option>$50 - $100</option>
                <option>$100 - $200</option>
                <option>$200 - $300</option>
                <option>$300 - $500</option>
                <option>$500+</option>
              </select>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">Additional Requirements *</label>
            <div className="relative">
              <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
              <textarea
                required
                rows={4}
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10 resize-none"
                placeholder="Describe your project requirements, specific features, technologies you want, etc..."
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Student ID Card / University ID *</label>
            <div className="relative">
              <div className="border-2 border-dashed border-green-500/30 rounded-lg p-6 text-center hover:border-green-500 transition cursor-pointer"
                   onClick={() => document.getElementById('studentCardInput').click()}>
                {studentCardPreview ? (
                  <div className="relative">
                    <img src={studentCardPreview} alt="Student ID Preview" className="max-h-32 mx-auto rounded-lg" />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setStudentCard(null);
                        setStudentCardPreview(null);
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-12 h-12 mx-auto text-green-400 mb-2" />
                    <p className="text-gray-400">Click to upload your student ID card</p>
                    <p className="text-xs text-gray-500 mt-1">Required for student discount verification</p>
                  </>
                )}
              </div>
              <input
                id="studentCardInput"
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
              isCustomProject 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-purple-500/25' 
                : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-green-500/25'
            }`}
          >
            {submitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                {isCustomProject ? "Submit Custom Project Request" : "Submit Student Inquiry"}
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By submitting this form, you agree to our terms and conditions. Your student discount will be verified before confirmation.
          </p>
        </motion.form>
      </div>
    </div>
  );
};

export default FYPInquiry;