// frontend/src/pages/PrivacyPolicy.jsx
import { motion } from "framer-motion";
import { Shield, Eye, Database, Lock, Globe, Mail, Phone, MapPin, Clock } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: `We collect information that you provide directly to us, such as when you create an account, fill out a contact form, make a reservation, or communicate with us. This may include:
      
      • Personal identification information (name, email address, phone number)
      • Account credentials (username, password)
      • Payment information (for reservations and purchases)
      • Communication preferences
      • Demographic information
      • Usage data and analytics
      
      We also automatically collect certain information when you visit our website, including IP address, browser type, operating system, pages visited, and referring URLs.`
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: `We use the information we collect to:
      
      • Provide, maintain, and improve our services
      • Process your reservations and orders
      • Communicate with you about your account or transactions
      • Send you technical notices, updates, and support messages
      • Respond to your comments and questions
      • Personalize your experience
      • Monitor and analyze trends, usage, and activities
      • Detect, investigate, and prevent fraudulent transactions
      • Comply with legal obligations`
    },
    {
      icon: Lock,
      title: "Data Security",
      content: `We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. Our security practices include:
      
      • SSL/TLS encryption for data transmission
      • Secure data storage with access controls
      • Regular security assessments and updates
      • Employee training on data protection
      • Limited access to personal information
      
      However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.`
    },
    {
      icon: Globe,
      title: "Information Sharing",
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
      
      • With your consent or at your direction
      • With service providers who perform services on our behalf
      • To comply with legal obligations or respond to lawful requests
      • To protect our rights, privacy, safety, or property
      • In connection with a business transfer (merger, acquisition, or sale)
      
      We may share aggregated or anonymized information that cannot reasonably be used to identify you.`
    },
    {
      icon: Eye,
      title: "Your Rights & Choices",
      content: `Depending on your location, you may have certain rights regarding your personal information:
      
      • Access the personal information we hold about you
      • Request correction of inaccurate information
      • Request deletion of your information
      • Object to or restrict certain processing
      • Request data portability
      • Withdraw consent at any time
      
      To exercise these rights, please contact us at privacy@codenagar.com. We will respond to your request within 30 days.`
    },
    {
      icon: Clock,
      title: "Cookies & Tracking",
      content: `We use cookies and similar tracking technologies to:
      
      • Remember your preferences and settings
      • Understand how you use our website
      • Improve our services and user experience
      • Analyze traffic and usage patterns
      
      You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.`
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2 mb-4">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm">Your Privacy Matters</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-8"
        >
          <p className="text-gray-300 leading-relaxed">
            At CodeNagar, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
            or use our services. Please read this policy carefully to understand our practices regarding your personal data.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-xl font-bold">{section.title}</h2>
              </div>
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-6 mt-8 text-center"
        >
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>privacy@codenagar.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>+92 307 5762192</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Sajjad Complex, Upper Adda, Muzaffarabad</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;