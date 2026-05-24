// frontend/src/pages/Contact.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Send, Clock, MessageSquare, User, Building, 
  CheckCircle, AlertCircle, Sparkles, Headphones, Globe, Users,
  Clock as ClockIcon, Award, Shield, ThumbsUp
} from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
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
  const [focusedField, setFocusedField] = useState(null);
  const [charCount, setCharCount] = useState(0);

  // Auto-clear status after 5 seconds
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status.message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      setStatus({ type: "success", message: "✓ Message sent successfully! We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setCharCount(0);
    } catch  {
      setStatus({ type: "error", message: "✗ Failed to send message. Please try again or call us directly." });
    } finally {
      setLoading(false);
    }
  };

  const handleMessageChange = (e) => {
    setFormData({ ...formData, message: e.target.value });
    setCharCount(e.target.value.length);
  };

  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, href: "https://facebook.com/codenagar", color: "hover:bg-blue-600" },
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com/codenagar", color: "hover:bg-sky-500" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/company/codenagar", color: "hover:bg-blue-700" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/codenagar", color: "hover:bg-pink-600" },
    { name: "Github", icon: FaGithub, href: "https://github.com/codenagar", color: "hover:bg-pink-600" },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM", status: "open" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM", status: "open" },
    { day: "Sunday", hours: "Closed", status: "closed" },
  ];

  const stats = [
    { icon: Award, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: ThumbsUp, value: "98%", label: "Satisfaction Rate" },
    { icon: ClockIcon, value: "24/7", label: "Support Available" },
  ];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">We're Here to Help</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a question or want to start a project? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-4 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="lg:col-span-1 space-y-6"
          >
            {/* Main Contact Card */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                Contact Information
              </h2>
              <div className="space-y-4">
                {[
                  { icon: MapPin, title: "Visit Us", details: ["Sajjad Complex, Upper Adda", "Muzaffarabad, Azad Kashmir"], link: null },
                  { icon: Phone, title: "Call Us", details: ["+92 307 5762192", "+92 333 0508929"], link: "tel:+923075762192" },
                  { icon: Mail, title: "Email Us", details: ["info@codenagar.com"], link: "mailto:info@codenagar.com" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      {item.details.map((detail, i) => (
                        item.link ? (
                          <a key={i} href={item.link} className="text-gray-400 text-sm hover:text-cyan-400 transition block">
                            {detail}
                          </a>
                        ) : (
                          <p key={i} className="text-gray-400 text-sm">{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                Business Hours
              </h2>
              <div className="space-y-3">
                {officeHours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-gray-300">{item.day}</span>
                    <span className={`text-sm ${item.status === 'closed' ? 'text-red-400' : 'text-green-400'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-white/10">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <Shield className="w-3 h-3" /> Emergency support available 24/7
                </p>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="glass-card p-6 border-l-4 border-l-cyan-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-bold">24/7 Emergency Support</h3>
              </div>
              <p className="text-gray-400 text-sm mb-3">For urgent technical issues:</p>
              <a href="tel:+923075762192" className="text-cyan-400 font-bold text-2xl block mb-1 hover:text-cyan-300 transition">
                +92 307 5762192
              </a>
              <p className="text-xs text-gray-500">Available 24/7 for critical issues</p>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-3 text-center">Connect With Us</h3>
              <div className="flex justify-center gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-dark-400 rounded-full flex items-center justify-center ${social.color} transition-all hover:scale-110 hover:text-white`}
                  >
                    <social.icon className="w-4 h-4" />
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
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-cyan-400" />
                Send us a Message
              </h2>
              <p className="text-gray-400 text-sm mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name <span className="text-red-400">*</span></label>
                  <div className={`relative transition-all duration-200 ${focusedField === 'name' ? 'ring-2 ring-cyan-500 rounded-lg' : ''}`}>
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="text" 
                      required 
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none border border-white/10 transition-all" 
                      placeholder="John Doe" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address <span className="text-red-400">*</span></label>
                  <div className={`relative transition-all duration-200 ${focusedField === 'email' ? 'ring-2 ring-cyan-500 rounded-lg' : ''}`}>
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="email" 
                      required 
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none border border-white/10 transition-all" 
                      placeholder="you@example.com" 
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <div className={`relative transition-all duration-200 ${focusedField === 'phone' ? 'ring-2 ring-cyan-500 rounded-lg' : ''}`}>
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input 
                      type="tel" 
                      value={formData.phone} 
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none border border-white/10 transition-all" 
                      placeholder="+92 300 1234567" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject <span className="text-red-400">*</span></label>
                  <div className={`relative transition-all duration-200 ${focusedField === 'subject' ? 'ring-2 ring-cyan-500 rounded-lg' : ''}`}>
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <select 
                      required 
                      value={formData.subject} 
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none border border-white/10 transition-all appearance-none"
                    >
                      <option value="">Select Subject</option>
                      <option>General Inquiry</option>
                      <option>Project Quote</option>
                      <option>Course Registration</option>
                      <option>Hardware Purchase</option>
                      <option>Technical Support</option>
                      <option>Careers</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium mb-2">Message <span className="text-red-400">*</span></label>
                <div className={`relative transition-all duration-200 ${focusedField === 'message' ? 'ring-2 ring-cyan-500 rounded-lg' : ''}`}>
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-500" />
                  <textarea 
                    rows="5" 
                    required 
                    value={formData.message} 
                    onChange={handleMessageChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-10 pr-4 py-3 bg-dark-400 rounded-lg focus:outline-none border border-white/10 transition-all resize-none" 
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                <div className="flex justify-end mt-1">
                  <span className={`text-xs ${charCount > 500 ? 'text-red-400' : 'text-gray-500'}`}>
                    {charCount}/500 characters
                  </span>
                </div>
              </div>

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
                  {status.type === "success" ? <CheckCircle className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                  <span className="text-sm">{status.message}</span>
                </motion.div>
              )}

              <button 
                type="submit" 
                disabled={loading} 
                className="w-full py-3.5 bg-gradient-primary rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 group"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> 
                    Send Message
                  </>
                )}
              </button>

              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
                  <Shield className="w-3 h-3" />
                  Your information is secure and will not be shared
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="text-gray-400">Quick answers to common questions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: "How quickly do you respond?", a: "We respond to all inquiries within 24 hours during business days." },
              { q: "Do you offer free consultations?", a: "Yes, we offer free initial consultations to understand your project needs." },
              { q: "What payment methods do you accept?", a: "We accept bank transfers, credit cards, and online payments." },
              { q: "Do you work with international clients?", a: "Yes, we work with clients worldwide remotely." },
            ].map((faq, idx) => (
              <div key={idx} className="glass-card p-4">
                <h3 className="font-semibold text-cyan-400 mb-1">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-card overflow-hidden p-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411.6420718474806!2d73.47095634089504!3d34.372446473469225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e09f76421c02e9%3A0xaeb385ad86c56a8c!2sCodeNagar!5e0!3m2!1sen!2s!4v1779136409725!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="CodeNagar Location"
              className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center glass-card p-8"
        >
          <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">Get the latest updates and offers directly in your inbox.</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2.5 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
            />
            <button className="px-5 py-2.5 bg-gradient-primary rounded-lg hover:shadow-lg transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;