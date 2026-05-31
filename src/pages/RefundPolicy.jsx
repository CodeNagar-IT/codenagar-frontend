// frontend/src/pages/RefundPolicy.jsx
import { motion } from "framer-motion";
import { RefreshCw, CreditCard, Clock, ShoppingBag, BookOpen, GraduationCap, Mail, Phone, CheckCircle,  Calendar, Gift } from "lucide-react";

const RefundPolicy = () => {
  const refundCategories = [
    {
      icon: CreditCard,
      title: "Digital Services & Software Development",
      conditions: [
        "50% deposit is required before project initiation",
        "Deposit is non-refundable after work has commenced",
        "Full refund available if project hasn't started",
        "Progress payments are non-refundable once milestones are achieved",
        "Final payment is due upon project completion before delivery"
      ]
    },
    {
      icon: ShoppingBag,
      title: "Hardware & Accessories (In-Store Pickup)",
      conditions: [
        "7-day return policy for unopened items",
        "Items must be in original packaging with all accessories",
        "30-day warranty for manufacturing defects",
        "No refunds for items damaged due to misuse",
        "Returns only accepted at our Muzaffarabad store",
        "Proof of purchase (reservation code) required"
      ]
    },
    {
      icon: BookOpen,
      title: "Courses & Training Programs",
      conditions: [
        "Full refund within 7 days of purchase if less than 10% completed",
        "50% refund within 14 days if less than 25% completed",
        "No refund after 30 days or more than 50% completion",
        "Corporate training cancellations require 14 days notice",
        "Course transfers allowed within 30 days (one-time)"
      ]
    },
    {
      icon: GraduationCap,
      title: "FYP Projects & Thesis",
      conditions: [
        "Student price includes 40% discount - final sale",
        "No refunds for digital project deliveries",
        "Revisions and bug fixes included for 30 days",
        "Custom project quotes are non-refundable after development starts",
        "Partial refund may be considered on case-by-case basis"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2 mb-4">
            <RefreshCw className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm">Money Back Guarantee</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Refund <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-8"
        >
          <p className="text-gray-300 leading-relaxed">
            At CodeNagar, we strive to ensure your satisfaction with every purchase. 
            This Refund Policy outlines the circumstances under which refunds may be issued 
            for different categories of products and services. Please review carefully before making a purchase.
          </p>
        </motion.div>

        {/* Quick Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4 mb-8"
        >
          <div className="glass-card p-4 text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <div className="text-2xl font-bold text-green-400">30 Days</div>
            <div className="text-sm text-gray-400">For Course Refunds*</div>
          </div>
          <div className="glass-card p-4 text-center">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
            <div className="text-2xl font-bold text-yellow-400">7 Days</div>
            <div className="text-sm text-gray-400">For Hardware Returns*</div>
          </div>
          <div className="glass-card p-4 text-center">
            <Gift className="w-8 h-8 mx-auto mb-2 text-blue-400" />
            <div className="text-2xl font-bold text-blue-400">48 Hours</div>
            <div className="text-sm text-gray-400">Reservation Hold</div>
          </div>
        </motion.div>

        {/* Refund Categories */}
        <div className="space-y-6">
          {refundCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-xl font-bold">{category.title}</h2>
              </div>
              <ul className="space-y-2">
                {category.conditions.map((condition, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 mt-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-blue-400" />
            Refund Process
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-sm font-bold text-blue-400">1</div>
              <p className="text-gray-300">Contact our support team within the eligible period</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-sm font-bold text-blue-400">2</div>
              <p className="text-gray-300">Provide your order/reservation code and reason for refund</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-sm font-bold text-blue-400">3</div>
              <p className="text-gray-300">Our team will review your request within 3-5 business days</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-sm font-bold text-blue-400">4</div>
              <p className="text-gray-300">Approved refunds are processed within 7-10 business days</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 mt-8 text-center"
        >
          <h2 className="text-xl font-bold mb-4">Need Help?</h2>
          <p className="text-gray-400 mb-4">
            For refund requests or questions about this policy, please contact us:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>refunds@codenagar.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>+92 307 5762192</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;