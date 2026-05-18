// frontend/src/pages/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, User, Building, CheckCircle, AlertCircle, Sparkles, Headphones, Globe } from "lucide-react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      setStatus({ type: "success", message: "Message sent successfully! We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch  {
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    } finally {
      setLoading(false);
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
            <span className="text-purple-300 text-sm">We're Here to Help</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a question or want to start a project? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-purple-400" />
                Get in Touch
              </h2>
              <div className="space-y-5">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-all">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-gray-400 text-sm">123 Tech Plaza, Shahrah-e-Faisal, Karachi, Pakistan</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-all">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-400 text-sm">+92 300 1234567</p>
                    <p className="text-gray-400 text-sm">+92 21 12345678</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-all">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-gray-400 text-sm">info@codenagar.com</p>
                    <p className="text-gray-400 text-sm">support@codenagar.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-all">
                    <Clock className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-gray-400 text-sm">Mon-Fri: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-400 text-sm">Sat: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-400 text-sm">Sun: Closed</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Headphones className="w-8 h-8 text-purple-400" />
                <h3 className="font-bold text-lg">24/7 Emergency Support</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">For urgent technical issues, call our dedicated support line:</p>
              <p className="text-purple-400 font-bold text-2xl">+92 300 7654321</p>
              <p className="text-xs text-gray-500 mt-2">Available 24/7 for critical issues</p>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/30 rounded-2xl p-6 text-center">
              <p className="text-sm text-gray-400 mb-3">Connect with us on social media</p>
              <div className="flex justify-center gap-4">
                {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all hover:scale-110">
                    <span className="text-sm">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-purple-400" />
                Send us a Message
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name *</label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                    <input 
                      type="text" 
                      required 
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                      className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                </div>
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
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <div className="relative group">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                    <input 
                      type="tel" 
                      value={formData.phone} 
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                      className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition-all" 
                      placeholder="+92 300 1234567" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <div className="relative group">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                    <select 
                      required 
                      value={formData.subject} 
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })} 
                      className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition-all appearance-none"
                    >
                      <option value="">Select Subject</option>
                      <option>General Inquiry</option>
                      <option>Project Quote</option>
                      <option>Course Registration</option>
                      <option>Hardware Purchase</option>
                      <option>Technical Support</option>
                      <option>Careers</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message *</label>
                <div className="relative group">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                  <textarea 
                    rows="6" 
                    required 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition-all resize-none" 
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
              </div>

              {status.message && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
                    status.type === "success" 
                      ? "bg-green-500/20 text-green-400 border border-green-500" 
                      : "bg-red-500/20 text-red-400 border border-red-500"
                  }`}
                >
                  {status.type === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                  {status.message}
                </motion.div>
              )}

              <button 
                type="submit" 
                disabled={loading} 
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 group"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> 
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                We'll respond to your message within 24 hours during business days.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28959.65578360873!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0666b7b2f3%3A0x8b4e8f8c8e8f8c8e!2sKarachi!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="CodeNagar Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;