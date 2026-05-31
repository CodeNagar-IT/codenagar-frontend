// frontend/src/pages/TermsOfService.jsx
import { motion } from "framer-motion";
import { FileText,  AlertCircle, CreditCard, ShoppingBag, Users, Shield, Mail, Phone } from "lucide-react";

const TermsOfService = () => {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: `By accessing and using CodeNagar's website, services, and products, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, please do not use our services.

      We reserve the right to modify these terms at any time. Changes become effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.`
    },
    {
      icon: Users,
      title: "Account Registration",
      content: `To access certain features of our services, you may need to register for an account. You agree to:
      
      • Provide accurate, current, and complete information during registration
      • Maintain the security of your password and account
      • Accept responsibility for all activities that occur under your account
      • Notify us immediately of any unauthorized use of your account
      
      We reserve the right to suspend or terminate accounts that violate these terms or applicable laws.`
    },
    {
      icon: ShoppingBag,
      title: "Reservations & Purchases",
      content: `When you make a reservation or purchase through our platform:
      
      • All reservations are subject to availability
      • Prices are listed in PKR and include applicable taxes
      • Payments are processed securely through our payment partners
      • You agree to pay all charges incurred under your account
      • We reserve the right to cancel any reservation due to pricing errors or fraud
      
      In-store pickup reservations are held for 48 hours. After this period, the reservation may be cancelled.`
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      content: `For services and products purchased through CodeNagar:
      
      • Full payment is required before service delivery or product pickup
      • We accept various payment methods including credit cards and bank transfers
      • All fees are non-refundable except as expressly stated in our Refund Policy
      • You are responsible for any taxes applicable to your purchase
      • We reserve the right to change prices at any time with prior notice`
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: `All content on our website, including text, graphics, logos, images, software, and code, is the property of CodeNagar or our licensors and is protected by intellectual property laws.
      
      You may not:
      • Copy, modify, or distribute our content without permission
      • Use our trademarks or logos without written consent
      • Reverse engineer any of our software
      • Remove any copyright or proprietary notices
      
      We grant you a limited, non-exclusive license to access and use our services for personal or business purposes.`
    },
    {
      icon: AlertCircle,
      title: "Limitation of Liability",
      content: `To the maximum extent permitted by law, CodeNagar shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
      
      • Your use or inability to use our services
      • Any conduct or content of any third party
      • Unauthorized access, use, or alteration of your transmissions or content
      
      Our total liability for any claims arising from these terms shall not exceed the amount you paid us in the past 12 months.`
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
            <FileText className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm">Legal Agreement</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Terms of <span className="gradient-text">Service</span>
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
            Welcome to CodeNagar. These Terms of Service govern your use of our website, services, and products. 
            By accessing or using any part of our platform, you agree to be bound by these terms. 
            Please read them carefully before proceeding.
          </p>
        </motion.div>

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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card p-6 mt-8 text-center"
        >
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-300">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>legal@codenagar.com</span>
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

export default TermsOfService;