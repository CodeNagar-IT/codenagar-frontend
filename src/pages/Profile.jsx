// frontend/src/pages/Profile.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Camera, Save, Lock, Bell, Shield, CheckCircle, XCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Profile = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    bio: "",
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Clear message after 3 seconds
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: "", text: "" });
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/users/profile`, formData);
      setMessage({ type: "success", text: "Profile updated successfully!" });
    } catch (err) {
      setMessage({ type: "error", text: err.response?.data?.error || "Failed to update profile" });
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match" });
      return;
    }
    if (passwordData.newPassword.length < 6) {
      setMessage({ type: "error", text: "Password must be at least 6 characters" });
      return;
    }
    
    setSaving(true);
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/users/password`, {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });
      setMessage({ type: "success", text: "Password changed successfully!" });
      setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err) {
      setMessage({ type: "error", text: err.response?.data?.error || "Failed to change password" });
    } finally {
      setSaving(false);
    }
  };

  const tabs = [
    { id: "profile", label: "Profile Information", icon: User },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Profile</h1>
          <p className="text-gray-400">Manage your account settings and preferences</p>
        </motion.div>

        {/* Message Alert */}
        {message.text && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
              message.type === "success" 
                ? "bg-green-500/20 text-green-400 border border-green-500" 
                : "bg-red-500/20 text-red-400 border border-red-500"
            }`}
          >
            {message.type === "success" ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
            {message.text}
          </motion.div>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 sticky top-24">
              <div className="text-center mb-6">
                <div className="relative inline-block group">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto shadow-lg">
                    {user?.name?.charAt(0) || "U"}
                  </div>
                  <button className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="font-bold mt-3 text-lg">{user?.name}</h3>
                <p className="text-sm text-gray-400">{user?.email}</p>
                <span className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${
                  user?.role === "admin" 
                    ? "bg-blue-500/20 text-blue-400" 
                    : "bg-blue-500/20 text-blue-400"
                }`}>
                  {user?.role === "admin" ? "Administrator" : "Member"}
                </span>
              </div>
              
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id 
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" 
                        : "hover:bg-gray-700 text-gray-300"
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
              
              <button 
                onClick={logout} 
                className="w-full mt-6 px-4 py-3 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-200"
              >
                Logout
              </button>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Profile Information</h2>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                          type="text" 
                          value={formData.name} 
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                          className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                          type="email" 
                          value={formData.email} 
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                          className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                          type="tel" 
                          value={formData.phone} 
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                          className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                          placeholder="+92 300 1234567"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Location/City</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                          type="text" 
                          value={formData.city} 
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })} 
                          className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                          placeholder="Karachi"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Address</label>
                      <textarea 
                        rows="2" 
                        value={formData.address} 
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })} 
                        className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                        placeholder="Street, building, apartment number"
                      ></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Bio</label>
                      <textarea 
                        rows="3" 
                        value={formData.bio} 
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })} 
                        className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all" 
                        placeholder="Tell us a little about yourself..."
                      ></textarea>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    disabled={saving} 
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    <Save className="w-5 h-5" /> {saving ? "Saving..." : "Save Changes"}
                  </button>
                </form>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-blue-400" /> 
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Change Password</span>
                </h2>
                <form onSubmit={handlePasswordChange} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Password</label>
                    <input 
                      type="password" 
                      required 
                      value={passwordData.currentPassword} 
                      onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })} 
                      className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                      placeholder="Enter your current password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">New Password</label>
                    <input 
                      type="password" 
                      required 
                      value={passwordData.newPassword} 
                      onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })} 
                      className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                      placeholder="Min. 6 characters"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                    <input 
                      type="password" 
                      required 
                      value={passwordData.confirmPassword} 
                      onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })} 
                      className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                      placeholder="Re-enter your new password"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={saving} 
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50"
                  >
                    {saving ? "Updating..." : "Update Password"}
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-400" />
                    Two-Factor Authentication
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Add an extra layer of security to your account by enabling two-factor authentication.
                  </p>
                  <button className="px-6 py-2 border border-blue-600 rounded-lg text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-200">
                    Enable 2FA
                  </button>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Notification Preferences</h2>
                <div className="space-y-4">
                  {[
                    { title: "Order Updates", desc: "Receive notifications about your orders and deliveries", defaultChecked: true },
                    { title: "Course Updates", desc: "Get notified about new courses and enrollment deadlines", defaultChecked: true },
                    { title: "Promotions & Offers", desc: "Exclusive deals, discounts, and special offers", defaultChecked: false },
                    { title: "Newsletter", desc: "Weekly tech news and industry insights", defaultChecked: true },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all">
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={item.defaultChecked} />
                        <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all">
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;