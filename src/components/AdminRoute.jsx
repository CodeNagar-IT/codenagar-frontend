// frontend/src/components/AdminRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminAuth = async () => {
      const token = localStorage.getItem("adminToken");
      const adminData = localStorage.getItem("adminData");
      
      // No token or no admin data -> not admin
      if (!token || !adminData) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      try {
        // Parse stored admin data to check role
        const parsedAdminData = JSON.parse(adminData);
        
        // CRITICAL: Check if stored role is actually "admin"
        if (parsedAdminData.role !== "admin") {
          console.warn("Non-admin user attempted to access admin route");
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminData");
          setIsAdmin(false);
          setLoading(false);
          return;
        }

        // Check if token is expired
        const payload = JSON.parse(atob(token.split('.')[1]));
        const isExpired = payload.exp * 1000 < Date.now();
        
        if (isExpired) {
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminData");
          setIsAdmin(false);
          setLoading(false);
          return;
        }

        // OPTIONAL BUT RECOMMENDED: Verify with backend that user still has admin role
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          
          // Double-check backend confirms admin role
          if (response.data.role !== "admin") {
            console.warn("Backend rejected admin access for user with admin token");
            localStorage.removeItem("adminToken");
            localStorage.removeItem("adminData");
            setIsAdmin(false);
            setLoading(false);
            return;
          }
        } catch (backendErr) {
          // Backend verification failed - token might be invalid
          console.error("Backend admin verification failed:", backendErr);
          localStorage.removeItem("adminToken");
          localStorage.removeItem("adminData");
          setIsAdmin(false);
          setLoading(false);
          return;
        }
        
        // All checks passed
        setIsAdmin(true);
      } catch (error) {
        console.error("Admin auth check error:", error);
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminData");
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };
    
    checkAdminAuth();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mb-4"></div>
        <p className="text-gray-400">Verifying admin access...</p>
      </div>
    );
  }

  return isAdmin ? children : <Navigate to="/admin/login" state={{ from: location }} replace />;
};

export default AdminRoute;