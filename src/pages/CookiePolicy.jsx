// frontend/src/pages/CookiePolicy.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Cookie, Info, Settings, CheckCircle, Mail, Phone, Globe, Database, Eye } from "lucide-react";

const CookiePolicy = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false
  });

  const cookieTypes = [
    {
      id: "necessary",
      icon: CheckCircle,
      title: "Necessary Cookies",
      description: "Essential for the website to function properly. These cannot be disabled.",
      required: true
    },
    {
      id: "functional",
      icon: Settings,
      title: "Functional Cookies",
      description: "Enable enhanced functionality and personalization, such as remembering your preferences.",
      required: false
    },
    {
      id: "analytics",
      icon: Database,
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website by collecting anonymous data.",
      required: false
    },
    {
      id: "marketing",
      icon: Globe,
      title: "Marketing Cookies",
      description: "Used to track visitors across websites to display relevant advertisements.",
      required: false
    }
  ];

  const handlePreferenceChange = (type) => {
    if (type !== "necessary") {
      setCookiePreferences(prev => ({
        ...prev,
        [type]: !prev[type]
      }));
    }
  };

  const savePreferences = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
    alert("Cookie preferences saved!");
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2 mb-4">
            <Cookie className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm">Your Privacy Choice</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Cookie <span className="gradient-text">Policy</span>
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
          <div className="flex items-start gap-4">
            <Cookie className="w-10 h-10 text-blue-400 flex-shrink-0" />
            <div>
              <p className="text-gray-300 leading-relaxed">
                This Cookie Policy explains how CodeNagar uses cookies and similar technologies to recognize you when you visit our website. 
                It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What are Cookies */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-400" />
            What are Cookies?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
            They are widely used to make websites work more efficiently and provide information to the website owners. 
            Cookies help us improve your browsing experience by remembering your preferences and understanding how you use our site.
          </p>
        </motion.div>

        {/* Cookie Preferences */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-400" />
            Manage Cookie Preferences
          </h2>
          <p className="text-gray-400 mb-6">
            You can customize your cookie preferences below. Necessary cookies are required for the website to function and cannot be disabled.
          </p>
          
          <div className="space-y-4">
            {cookieTypes.map((cookie) => (
              <div key={cookie.id} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <cookie.icon className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">{cookie.title}</h3>
                    <p className="text-sm text-gray-400">{cookie.description}</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cookiePreferences[cookie.id]}
                    onChange={() => handlePreferenceChange(cookie.id)}
                    disabled={cookie.required}
                    className="sr-only peer"
                  />
                  <div className={`w-11 h-6 rounded-full peer ${
                    cookiePreferences[cookie.id] 
                      ? "bg-blue-600" 
                      : "bg-gray-600"
                  } peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${cookie.required ? "opacity-50" : ""}`}>
                  </div>
                </label>
              </div>
            ))}
          </div>
          
          <button
            onClick={savePreferences}
            className="mt-6 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition w-full md:w-auto"
          >
            Save Preferences
          </button>
        </motion.div>

        {/* Third-Party Cookies */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-400" />
            Third-Party Cookies
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We may also use cookies from third-party services such as Google Analytics, social media platforms, and payment processors. 
            These third parties may set cookies on your device when you use our website. We do not control these cookies, and you should check the respective third-party websites for more information.
          </p>
        </motion.div>

        {/* How to Control Cookies */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-400" />
            How to Control Cookies
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Most web browsers allow you to control cookies through their settings preferences. You can usually find these settings in the "Options" or "Preferences" menu of your browser. Here are links to popular browsers:
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Google Chrome</a>
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Mozilla Firefox</a>
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Safari</a>
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Microsoft Edge</a>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 text-center"
        >
          <h2 className="text-xl font-bold mb-4">Questions About Cookies?</h2>
          <p className="text-gray-400 mb-4">
            If you have any questions about our use of cookies, please contact us:
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;