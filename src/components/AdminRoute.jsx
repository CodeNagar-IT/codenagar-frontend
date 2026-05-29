// frontend/src/components/AdminRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminAuth = () => {
      const token = localStorage.getItem("adminToken");
      const adminData = localStorage.getItem("adminData");
      
      if (token && adminData) {
        try {
          // Check if token is expired
          const payload = JSON.parse(atob(token.split('.')[1]));
          const isExpired = payload.exp * 1000 < Date.now();
          
          if (!isExpired) {
            setIsAdmin(true);
          } else {
            // Token expired, clear storage
            localStorage.removeItem("adminToken");
            localStorage.removeItem("adminData");
            setIsAdmin(false);
          }
        } catch {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
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