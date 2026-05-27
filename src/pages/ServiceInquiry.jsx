// frontend/src/pages/ServiceInquiry.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Send, User, Mail, Phone, Building, DollarSign, Calendar,
  Sparkles, CheckCircle, AlertCircle, ArrowLeft, FileText
} from "lucide-react";
import axios from "axios";

const ServiceInquiry = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    serviceName: "",
    serviceCategory: "",
    fullName: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    currency: "USD",
    timeline: "",
    requirements: "",
  });

  // Service mapping with updated prices matching service pages
  const serviceMap = {
    "web-development": { name: "Web Development", category: "web", priceUSD: 499, pricePKR: 139000 },
    "app-development": { name: "App Development", category: "mobile", priceUSD: 1399, pricePKR: 391000 },
    "ios-development": { name: "iOS Development", category: "mobile", priceUSD: 1799, pricePKR: 499000 },
    "android-development": { name: "Android Development", category: "mobile", priceUSD: 1599, pricePKR: 447000 },
    "cross-platform": { name: "Cross-Platform Development", category: "mobile", priceUSD: 1199, pricePKR: 335000 },
    "ml-integration": { name: "ML Integration", category: "ai", priceUSD: 1499, pricePKR: 419000 },
    "ai-solutions": { name: "AI Solutions", category: "ai", priceUSD: 999, pricePKR: 279000 },
    "computer-vision": { name: "Computer Vision", category: "ai", priceUSD: 1299, pricePKR: 363000 },
    "nlp": { name: "Natural Language Processing", category: "ai", priceUSD: 1099, pricePKR: 307000 },
    "frontend-development": { name: "Frontend Development", category: "web", priceUSD: 799, pricePKR: 223000 },
    "backend-development": { name: "Backend Development", category: "web", priceUSD: 999, pricePKR: 279000 },
    "full-stack-development": { name: "Full Stack Development", category: "web", priceUSD: 1999, pricePKR: 559000 },
    "ecommerce-development": { name: "E-commerce Development", category: "web", priceUSD: 1499, pricePKR: 419000 },
    "cloud-solutions": { name: "Cloud Solutions", category: "cloud", priceUSD: 899, pricePKR: 251000 },
    "devops": { name: "DevOps", category: "cloud", priceUSD: 1499, pricePKR: 419000 },
    "cybersecurity": { name: "Cybersecurity", category: "cloud", priceUSD: 999, pricePKR: 279000 },
    "database-management": { name: "Database Management", category: "cloud", priceUSD: 799, pricePKR: 223000 },
    "ui-ux-design": { name: "UI/UX Design", category: "design", priceUSD: 599, pricePKR: 167000 },
  };

  useEffect(() => {
    const serviceData = serviceMap[serviceId];
    if (serviceData) {
         // eslint-disable-next-line react-hooks/set-state-in-effect
      setService(serviceData);
      setFormData(prev => ({
        ...prev,
        serviceName: serviceData.name,
        serviceCategory: serviceData.category,
      }));
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/service/inquiry`, formData);
      setStatus({ type: "success", message: "Inquiry submitted successfully! We'll contact you within 24 hours." });
      setTimeout(() => {
        navigate("/services");
      }, 3000);
    } catch  {
      setStatus({ type: "error", message: "Failed to submit inquiry. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-32 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="pt-32 text-center">
        <AlertCircle className="w-16 h-16 mx-auto text-red-400 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Service Not Found</h2>
        <p className="text-gray-400 mb-6">The service you're looking for doesn't exist.</p>
        <button onClick={() => navigate("/services")} className="btn-primary">
          Back to Services
        </button>
      </div>
    );
  }

  const usdPrice = service.priceUSD;
  const pkrPrice = service.pricePKR;

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-6 transition"
        >
          <ArrowLeft className="w-5 h-5" /> Back
        </button>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">Get Started</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Inquire About <span className="gradient-text">{service.name}</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Pricing Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-8 text-center"
        >
          <h3 className="text-lg font-semibold mb-3">Starting From</h3>
          <div className="flex justify-center items-center gap-8">
            <div>
              <span className="text-3xl font-bold text-cyan-400">${usdPrice}</span>
              <p className="text-sm text-gray-400">USD</p>
            </div>
            <span className="text-gray-500">/</span>
            <div>
              <span className="text-3xl font-bold text-cyan-400">₨{pkrPrice.toLocaleString()}</span>
              <p className="text-sm text-gray-400">PKR</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">*Final price depends on project requirements</p>
        </motion.div>

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
                  className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
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
                  className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                  placeholder="john@example.com"
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
                  className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                  placeholder="+92 300 1234567"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company Name</label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                  placeholder="Your Company"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium mb-2">Budget Range *</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10 appearance-none"
                >
                  <option value="">Select Budget Range</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000+">$25,000+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Timeline *</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  required
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10 appearance-none"
                >
                  <option value="">Select Timeline</option>
                  <option value="ASAP (Within 2 weeks)">ASAP (Within 2 weeks)</option>
                  <option value="1 Month">1 Month</option>
                  <option value="2-3 Months">2-3 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="6+ Months">6+ Months</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">Project Requirements *</label>
            <div className="relative">
              <FileText className="absolute left-3 top-4 w-5 h-5 text-gray-500" />
              <textarea
                rows="5"
                required
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10 resize-none"
                placeholder="Please describe your project requirements, goals, and any specific features you need..."
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Be as detailed as possible for an accurate quote.</p>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 py-3 bg-gradient-primary rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" /> Submit Inquiry
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-3 border border-white/10 rounded-lg hover:bg-white/5 transition"
            >
              Cancel
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default ServiceInquiry;