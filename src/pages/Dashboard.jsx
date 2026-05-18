import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, BookOpen, MessageSquare, TrendingUp, Calendar, Award, ChevronRight, Sparkles, Clock, Package } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({ orders: 0, applications: 0, messages: 0 });
  const [recentOrders, setRecentOrders] = useState([]);
  const [recentApplications, setRecentApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const [ordersRes, appsRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/api/orders`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/courses/my-applications`),
        ]);
        setStats({
          orders: ordersRes.data.length,
          applications: appsRes.data.length,
          messages: 0,
        });
        setRecentOrders(ordersRes.data.slice(0, 3));
        setRecentApplications(appsRes.data.slice(0, 3));
      } catch (err) {
        console.error("Failed to fetch user data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const statCards = [
    { title: "Total Orders", value: stats.orders, icon: ShoppingBag, color: "from-blue-500 to-cyan-500", link: "/orders", bgColor: "bg-blue-500/10" },
    { title: "Course Applications", value: stats.applications, icon: BookOpen, color: "from-purple-500 to-pink-500", link: "/courses", bgColor: "bg-purple-500/10" },
    { title: "Support Tickets", value: stats.messages, icon: MessageSquare, color: "from-green-500 to-emerald-500", link: "/contact", bgColor: "bg-green-500/10" },
  ];

  const quickActions = [
    { title: "Browse Store", icon: ShoppingBag, link: "/store", color: "bg-blue-600" },
    { title: "Explore Courses", icon: BookOpen, link: "/courses", color: "bg-purple-600" },
    { title: "View Orders", icon: Package, link: "/orders", color: "bg-orange-600" },
    { title: "Contact Support", icon: MessageSquare, link: "/contact", color: "bg-green-600" },
  ];

  if (loading) {
    return (
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-8"
        >
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Welcome back, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{user?.name?.split(' ')[0]}</span>! 👋
              </h1>
              <p className="text-gray-400">Here's what's happening with your account today.</p>
            </div>
            <div className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Member since {new Date(user?.createdAt).getFullYear() || 2025}</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {statCards.map((card, idx) => (
            <Link key={idx} to={card.link}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: idx * 0.1 }} 
                whileHover={{ scale: 1.02, y: -5 }} 
                className={`bg-gradient-to-r ${card.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <card.icon className="w-10 h-10 mb-3 opacity-90" />
                    <p className="text-sm opacity-80">{card.title}</p>
                    <p className="text-3xl font-bold mt-1">{card.value}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 opacity-60 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Recent Activity Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Recent Orders */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-purple-400" /> 
                Recent Orders
              </h2>
              <Link to="/orders" className="text-purple-400 text-sm hover:text-purple-300 flex items-center gap-1 transition-all hover:gap-2">
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            {recentOrders.length === 0 ? (
              <div className="text-center py-8">
                <Package className="w-12 h-12 mx-auto text-gray-600 mb-3" />
                <p className="text-gray-400">No orders yet</p>
                <Link to="/store" className="text-purple-400 text-sm mt-2 inline-block hover:underline">
                  Start Shopping →
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {recentOrders.map((order, idx) => (
                  <motion.div 
                    key={order._id} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex justify-between items-center p-3 bg-gray-900 rounded-xl hover:bg-gray-800 transition-all"
                  >
                    <div>
                      <p className="font-semibold">Order #{order._id.slice(-6).toUpperCase()}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                        <Clock className="w-3 h-3 ml-2" />
                        <span>{order.items?.length || 0} items</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-purple-400">${order.total?.toFixed(2)}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === "delivered" ? "bg-green-500/20 text-green-400" :
                        order.status === "shipped" ? "bg-blue-500/20 text-blue-400" :
                        "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {order.status || "pending"}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Recent Applications */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-400" /> 
                Course Applications
              </h2>
              <Link to="/courses" className="text-purple-400 text-sm hover:text-purple-300 flex items-center gap-1 transition-all hover:gap-2">
                Browse <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            {recentApplications.length === 0 ? (
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 mx-auto text-gray-600 mb-3" />
                <p className="text-gray-400">No applications yet</p>
                <Link to="/courses" className="text-purple-400 text-sm mt-2 inline-block hover:underline">
                  Explore Courses →
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {recentApplications.map((app, idx) => (
                  <motion.div 
                    key={app._id} 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex justify-between items-center p-3 bg-gray-900 rounded-xl hover:bg-gray-800 transition-all"
                  >
                    <div>
                      <p className="font-semibold">{app.course}</p>
                      <p className="text-xs text-gray-400 mt-1">Applied: {new Date(app.appliedAt).toLocaleDateString()}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      app.status === "approved" ? "bg-green-500/20 text-green-400" :
                      app.status === "rejected" ? "bg-red-500/20 text-red-400" :
                      "bg-yellow-500/20 text-yellow-400"
                    }`}>
                      {app.status || "pending"}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            Quick Actions
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, idx) => (
              <Link key={idx} to={action.link}>
                <motion.div 
                  whileHover={{ scale: 1.02, y: -3 }}
                  className={`${action.color} p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 cursor-pointer group`}
                >
                  <action.icon className="w-8 h-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold">{action.title}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Achievement Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-6 border border-purple-500/20"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Award className="w-10 h-10 text-purple-400" />
              <div>
                <h3 className="font-bold text-lg">Achievement Unlocked</h3>
                <p className="text-sm text-gray-400">You've joined the CodeNagar community!</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-sm">Keep learning and earning rewards</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;