// frontend/src/pages/courses/CourseApply.jsx
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, GraduationCap, FileText, CheckCircle, AlertCircle, ArrowLeft, Sparkles, Clock, Award, Users } from "lucide-react";
import axios from "axios";

const CourseApply = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const courseNames = {
    "ms-office": { name: "MS Office Mastery", duration: "2 Months", students: 150 },
    "web-development": { name: "Web Development", duration: "6 Months", students: 280 },
    "app-development": { name: "App Development", duration: "6 Months", students: 195 },
    "python": { name: "Python Programming", duration: "4 Months", students: 210 },
    "data-science": { name: "Data Science & ML", duration: "8 Months", students: 120 },
    "ui-ux": { name: "UI/UX Design", duration: "3 Months", students: 175 },
  };

  const course = courseNames[slug] || { name: "Course", duration: "", students: 0 };
  const courseName = course.name;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus({ type: "", message: "" });
    
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/courses/apply`, {
        ...formData,
        course: courseName,
      });
      setSubmitStatus({ 
        type: "success", 
        message: "Application submitted successfully! We'll contact you within 24 hours." 
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        education: "",
        experience: "",
        message: "",
      });
      setTimeout(() => {
        navigate("/courses");
      }, 3000);
    } catch  {
      setSubmitStatus({ 
        type: "error", 
        message: "Submission failed. Please try again or contact us directly." 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link to={`/courses/${slug}`} className="text-gray-400 hover:text-purple-400 text-sm flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to Course Details
          </Link>
        </div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Start Your Journey</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Apply for <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{courseName}</span>
          </h1>
          <p className="text-gray-400 text-lg">Fill out the form below to secure your seat. Our team will contact you shortly.</p>
        </motion.div>

        {/* Course Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-4 mb-6 border border-purple-500/20"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <Clock className="w-5 h-5 mx-auto mb-1 text-purple-400" />
              <p className="text-xs text-gray-400">Duration</p>
              <p className="font-semibold text-sm">{course.duration}</p>
            </div>
            <div>
              <Award className="w-5 h-5 mx-auto mb-1 text-purple-400" />
              <p className="text-xs text-gray-400">Certificate</p>
              <p className="font-semibold text-sm">Included</p>
            </div>
            <div>
              <Users className="w-5 h-5 mx-auto mb-1 text-purple-400" />
              <p className="text-xs text-gray-400">Students</p>
              <p className="font-semibold text-sm">{course.students}+</p>
            </div>
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.form 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }} 
          onSubmit={handleSubmit} 
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
        >
          {/* Success/Error Message */}
          {submitStatus.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                submitStatus.type === "success" 
                  ? "bg-green-500/20 text-green-400 border border-green-500" 
                  : "bg-red-500/20 text-red-400 border border-red-500"
              }`}
            >
              {submitStatus.type === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              <span className="text-sm">{submitStatus.message}</span>
            </motion.div>
          )}

          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                <input 
                  type="text" 
                  required 
                  value={formData.fullName} 
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email Address *</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                <input 
                  type="email" 
                  required 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <div className="relative group">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                <input 
                  type="tel" 
                  required 
                  value={formData.phone} 
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition-all"
                  placeholder="+92 300 1234567"
                />
              </div>
            </div>

            {/* Education */}
            <div>
              <label className="block text-sm font-medium mb-2">Highest Education *</label>
              <div className="relative group">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                <select 
                  required 
                  value={formData.education} 
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })} 
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition-all appearance-none"
                >
                  <option value="">Select Education Level</option>
                  <option>High School / Intermediate</option>
                  <option>Bachelor's Degree</option>
                  <option>Master's Degree</option>
                  <option>PhD</option>
                  <option>Diploma</option>
                </select>
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium mb-2">Experience (if any)</label>
              <div className="relative group">
                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                <input 
                  type="text" 
                  value={formData.experience} 
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })} 
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition-all"
                  placeholder="e.g., 1 year of coding experience / Fresher"
                />
              </div>
            </div>

            {/* Why This Course */}
            <div>
              <label className="block text-sm font-medium mb-2">Why do you want to join this course?</label>
              <textarea 
                rows="4" 
                value={formData.message} 
                onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition-all resize-none"
                placeholder="Tell us about your goals, what you hope to achieve, and why you're interested in this course..."
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={submitting} 
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 group"
            >
              {submitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition" /> 
                  Submit Application
                </>
              )}
            </button>

            {/* Info Note */}
            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting this form, you agree to our terms and conditions. We'll contact you within 24 hours.
            </p>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default CourseApply;