// frontend/src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, BookOpen, MessageSquare,  Calendar, Award, ChevronRight, Sparkles, Clock, Package, Store, MapPin } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({ reservations: 0, applications: 0, messages: 0 });
  const [recentReservations, setRecentReservations] = useState([]);
  const [recentApplications, setRecentApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const [reservationsRes, appsRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/api/reservations/my`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/courses/my-applications`),
        ]);
        setStats({
          reservations: reservationsRes.data.length,
          applications: appsRes.data.length,
          messages: 0,
        });
        setRecentReservations(reservationsRes.data.slice(0, 3));
        setRecentApplications(appsRes.data.slice(0, 3));
      } catch (err) {
        console.error("Failed to fetch user data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const getStatusBadge = (status) => {
    switch(status) {
      case "completed":
        return { color: "bg-green-500/20 text-green-400", text: "Completed" };
      case "ready_for_pickup":
        return { color: "bg-blue-500/20 text-blue-400", text: "Ready for Pickup" };
      case "pending_pickup":
        return { color: "bg-yellow-500/20 text-yellow-400", text: "Pending Pickup" };
      case "expired":
        return { color: "bg-red-500/20 text-red-400", text: "Expired" };
      default:
        return { color: "bg-gray-500/20 text-gray-400", text: status };
    }
  };

  const statCards = [
    { title: "Total Reservations", value: stats.reservations, icon: ShoppingBag, color: "from-blue-500 to-cyan-500", link: "/my-reservations", bgColor: "bg-blue-500/10" },
    { title: "Course Applications", value: stats.applications, icon: BookOpen, color: "from-blue-500 to-indigo-500", link: "/courses", bgColor: "bg-blue-500/10" },
    { title: "Support Tickets", value: stats.messages, icon: MessageSquare, color: "from-green-500 to-emerald-500", link: "/contact", bgColor: "bg-green-500/10" },
  ];

  const quickActions = [
    { title: "Browse Store", icon: ShoppingBag, link: "/store", color: "bg-blue-600" },
    { title: "Explore Courses", icon: BookOpen, link: "/courses", color: "bg-blue-600" },
    { title: "My Reservations", icon: Package, link: "/my-reservations", color: "bg-orange-600" },
    { title: "Contact Support", icon: MessageSquare, link: "/contact", color: "bg-green-600" },
  ];

  if (loading) {
    return (
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
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
                Welcome back, <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">{user?.name?.split(' ')[0]}</span>! 👋
              </h1>
              <p className="text-gray-400">Here's what's happening with your account today.</p>
            </div>
            <div className="flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Member since {new Date(user?.createdAt).getFullYear() || 2025}</span>
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

        {/* Store Info Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-8 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-4 border border-blue-500/30"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Store className="w-6 h-6 text-blue-400" />
              <div>
                <p className="font-semibold">Pickup Location</p>
                <p className="text-sm text-gray-400">CodeNagar Store, Muzaffarabad City</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-300">Mon-Sat: 10AM - 8PM</span>
            </div>
            <a 
              href="https://www.google.com/maps?q=CodeNagar+Muzaffarabad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm bg-blue-600/20 px-3 py-1.5 rounded-lg hover:bg-blue-600/30 transition"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </motion.div>

        {/* Recent Activity Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Recent Reservations */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-blue-400" /> 
                Recent Reservations
              </h2>
              <Link to="/my-reservations" className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1 transition-all hover:gap-2">
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            {recentReservations.length === 0 ? (
              <div className="text-center py-8">
                <Package className="w-12 h-12 mx-auto text-gray-600 mb-3" />
                <p className="text-gray-400">No reservations yet</p>
                <Link to="/store" className="text-blue-400 text-sm mt-2 inline-block hover:underline">
                  Browse Store →
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {recentReservations.map((reservation, idx) => {
                  const statusInfo = getStatusBadge(reservation.status);
                  return (
                    <motion.div 
                      key={reservation._id} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex justify-between items-center p-3 bg-gray-900 rounded-xl hover:bg-gray-800 transition-all"
                    >
                      <div>
                        <p className="font-semibold font-mono text-sm text-blue-400">{reservation.reservationCode}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(reservation.createdAt).toLocaleDateString()}</span>
                          <Clock className="w-3 h-3 ml-2" />
                          <span>{reservation.items?.length || 0} items</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-blue-400">${reservation.total?.toFixed(2)}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${statusInfo.color}`}>
                          {statusInfo.text}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>

          {/* Recent Applications */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" /> 
                Course Applications
              </h2>
              <Link to="/courses" className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1 transition-all hover:gap-2">
                Browse <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            {recentApplications.length === 0 ? (
              <div className="text-center py-8">
                <BookOpen className="w-12 h-12 mx-auto text-gray-600 mb-3" />
                <p className="text-gray-400">No applications yet</p>
                <Link to="/courses" className="text-blue-400 text-sm mt-2 inline-block hover:underline">
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
            <Sparkles className="w-5 h-5 text-blue-400" />
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
          className="mt-8 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl p-6 border border-blue-500/20"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Award className="w-10 h-10 text-blue-400" />
              <div>
                <h3 className="font-bold text-lg">Achievement Unlocked</h3>
                <p className="text-sm text-gray-400">You've joined the CodeNagar community!</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Store className="w-5 h-5 text-green-400" />
              <span className="text-sm">Reserve online • Pay at our Muzaffarabad store</span>
            </div>
          </div>
        </motion.div>

        {/* Store Location Map */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mt-12"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            Visit Our Store
          </h2>
          <div className="glass-card overflow-hidden p-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411.6420718474806!2d73.47095634089504!3d34.372446473469225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e09f76421c02e9%3A0xaeb385ad86c56a8c!2sCodeNagar!5e0!3m2!1sen!2s!4v1779136409725!5m2!1sen!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="CodeNagar Location"
              className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
          <div className="mt-3 text-center text-gray-400 text-xs">
            <p>📍 CodeNagar Store, Muzaffarabad City | 🕐 Mon-Sat: 10AM - 8PM | Sunday: Closed</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;