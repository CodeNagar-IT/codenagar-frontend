// frontend/src/pages/admin/AdminLogin.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the page they were trying to access
  const from = location.state?.from?.pathname || "/admin/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      // Direct API call for admin login
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, { 
        email, 
        password 
      });
      
      const { token, user } = response.data;
      
      // CRITICAL: Check if user has admin role
      if (user.role === "admin") {
        // Store admin specific data with role explicitly included
        localStorage.setItem("adminToken", token);
        localStorage.setItem("adminData", JSON.stringify({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,  // Explicitly store role for frontend validation
          createdAt: user.createdAt
        }));
        // Redirect to the page they came from
        navigate(from, { replace: true });
      } else {
        setError("Admin access only. This account does not have administrator privileges.");
        // Clear any existing admin data
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminData");
      }
    } catch (err) {
      setError(err.response?.data?.error || "Invalid credentials. Please check your email and password.");
      // Clear any existing admin data on failed login
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminData");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-blue-600/20 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="max-w-md w-full relative z-10"
      >
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-2">
            Admin <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Login</span>
          </h1>
          <p className="text-gray-400">Secure access for administrators only</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
          {/* Error Message */}
          {error && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-xl flex items-center gap-3 text-red-400 text-sm"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </motion.div>
          )}

          <div className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                <input 
                  type="email" 
                  placeholder="admin@codenagar.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                  required 
                  autoComplete="off"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-400 transition-colors" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="w-full pl-10 pr-12 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                  required 
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-blue-400 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading} 
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2 group"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Authenticating...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5 group-hover:scale-110 transition" />
                  Login to Dashboard
                </>
              )}
            </button>

            {/* Back to Site Link */}
            <div className="text-center pt-4">
              <a href="/" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                ← Back to Website
              </a>
            </div>

            {/* Security Note */}
            <div className="mt-4 pt-4 border-t border-gray-700 text-center">
              <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                <Shield className="w-3 h-3" /> Secure area • Authorized access only
              </p>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;