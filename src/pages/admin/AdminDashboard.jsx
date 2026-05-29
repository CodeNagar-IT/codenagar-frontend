// frontend/src/pages/admin/AdminDashboard.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Users, Package, MessageSquare, GraduationCap, Briefcase, DollarSign, 
  TrendingUp, ShoppingCart, Clock, ArrowRight, 
  Download, RefreshCw, AlertCircle, CheckCircle, Truck, Activity,
   Award, GraduationCap as FYPIcon, Database as FYPProjectsIcon
} from "lucide-react";
import axios from "axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [fypStats, setFypStats] = useState({
    totalProjects: 0,
    totalInquiries: 0,
    pendingInquiries: 0,
    contactedInquiries: 0,
    completedInquiries: 0,
    unreadInquiries: 0
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const [recentMessages, setRecentMessages] = useState([]);
  const [recentApplications, setRecentApplications] = useState([]);
  const [recentFypInquiries, setRecentFypInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [statsRes, ordersRes, messagesRes, appsRes, fypStatsRes, fypInquiriesRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/api/stats`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/orders/all`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/contacts`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/courses/applications`),
          axios.get(`${import.meta.env.VITE_API_URL}/api/fyp/inquiries/stats`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` }
          }),
          axios.get(`${import.meta.env.VITE_API_URL}/api/fyp/inquiries`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` }
          }),
        ]);
        
        setStats(statsRes.data);
        setFypStats(fypStatsRes.data);
        setRecentOrders(ordersRes.data.slice(0, 5));
        setRecentMessages(messagesRes.data.slice(0, 5));
        setRecentApplications(appsRes.data.slice(0, 5));
        setRecentFypInquiries(fypInquiriesRes.data.slice(0, 5));
      } catch (err) {
        console.error("Failed to fetch dashboard data", err);
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    };
    
    fetchAllData();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const [statsRes, ordersRes, messagesRes, appsRes, fypStatsRes, fypInquiriesRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_API_URL}/api/stats`),
        axios.get(`${import.meta.env.VITE_API_URL}/api/orders/all`),
        axios.get(`${import.meta.env.VITE_API_URL}/api/contacts`),
        axios.get(`${import.meta.env.VITE_API_URL}/api/courses/applications`),
        axios.get(`${import.meta.env.VITE_API_URL}/api/fyp/inquiries/stats`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` }
        }),
        axios.get(`${import.meta.env.VITE_API_URL}/api/fyp/inquiries`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` }
        }),
      ]);
      
      setStats(statsRes.data);
      setFypStats(fypStatsRes.data);
      setRecentOrders(ordersRes.data.slice(0, 5));
      setRecentMessages(messagesRes.data.slice(0, 5));
      setRecentApplications(appsRes.data.slice(0, 5));
      setRecentFypInquiries(fypInquiriesRes.data.slice(0, 5));
    } catch (err) {
      console.error("Failed to fetch dashboard data", err);
    } finally {
      setRefreshing(false);
    }
  };

  const statCards = [
  { title: "Total Users", value: stats.users || 0, icon: Users, color: "from-blue-500 to-cyan-500", link: "/admin/users", change: "+12%" },
  { title: "Total Products", value: stats.products || 0, icon: Package, color: "from-blue-500 to-indigo-500", link: "/admin/products", change: "+5%" },
  { title: "Messages", value: stats.messages || 0, icon: MessageSquare, color: "from-green-500 to-emerald-500", link: "/admin/messages", change: stats.unreadMessages ? `${stats.unreadMessages} unread` : "0 unread" },
  { title: "Applications", value: stats.applications || 0, icon: GraduationCap, color: "from-orange-500 to-red-500", link: "/admin/applications", change: "+8%" },
  { title: "Career Apps", value: stats.careers || 0, icon: Briefcase, color: "from-yellow-500 to-amber-500", link: "/admin/careers", change: "+3%" },
  { title: "Total Orders", value: stats.orders || 0, icon: DollarSign, color: "from-indigo-500 to-blue-500", link: "/admin/orders", change: `$${stats.revenue || 0}` },
  { title: "Job Positions", value: stats.jobs || 0, icon: Briefcase, color: "from-cyan-500 to-blue-500", link: "/admin/jobs", change: "" },
  { title: "Portfolio", value: stats.portfolio || 0, icon: Briefcase, color: "from-purple-500 to-pink-500", link: "/admin/portfolio", change: "" },
  { title: "Service Inquiries", value: stats.serviceInquiries || 0, icon: MessageSquare, color: "from-cyan-500 to-blue-500", link: "/admin/service-inquiries", change: "" },
  { title: "FYP Projects", value: stats.fypProjects || 0, icon: FYPProjectsIcon, color: "from-green-500 to-emerald-500", link: "/admin/fyp", change: "40% Off" },
{ title: "Student Inquiries", value: fypStats.totalInquiries || 0, icon: FYPIcon, color: "from-teal-500 to-green-500", link: "/admin/fyp", change: `${fypStats.unreadInquiries || 0} unread` },
];

  const getStatusColor = (status) => {
    switch(status) {
      case "delivered": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "shipped": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "processing": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "completed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "contacted": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "pending": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case "delivered":
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "shipped":
      case "contacted":
        return <Truck className="w-4 h-4" />;
      case "processing":
      case "pending":
        return <Clock className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  if (loading) {
    return (
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Admin <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Dashboard</span>
            </h1>
            <p className="text-gray-400">Welcome back! Here's what's happening with your business today.</p>
          </div>
          <button 
            onClick={handleRefresh} 
            disabled={refreshing}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {statCards.map((card, idx) => (
            <Link key={idx} to={card.link}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: idx * 0.05 }} 
                whileHover={{ scale: 1.02, y: -5 }} 
                className={`bg-gradient-to-r ${card.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer group`}
              >
                <div className="flex justify-between items-start">
                  <card.icon className="w-10 h-10 opacity-90 group-hover:scale-110 transition-transform" />
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{card.change}</span>
                </div>
                <p className="text-sm opacity-80 mt-4">{card.title}</p>
                <p className="text-3xl font-bold mt-1">{card.value}</p>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* FYP Quick Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <div className="glass-card p-4 text-center">
            <FYPProjectsIcon className="w-6 h-6 mx-auto text-green-400 mb-2" />
            <div className="text-2xl font-bold">{stats.fypProjects || 0}</div>
            <div className="text-xs text-gray-400">Total Projects</div>
          </div>
          <div className="glass-card p-4 text-center">
            <FYPIcon className="w-6 h-6 mx-auto text-green-400 mb-2" />
            <div className="text-2xl font-bold">{fypStats.totalInquiries || 0}</div>
            <div className="text-xs text-gray-400">Total Inquiries</div>
          </div>
          <div className="glass-card p-4 text-center">
            <Clock className="w-6 h-6 mx-auto text-yellow-400 mb-2" />
            <div className="text-2xl font-bold">{fypStats.pendingInquiries || 0}</div>
            <div className="text-xs text-gray-400">Pending</div>
          </div>
          <div className="glass-card p-4 text-center">
            <CheckCircle className="w-6 h-6 mx-auto text-blue-400 mb-2" />
            <div className="text-2xl font-bold">{fypStats.contactedInquiries || 0}</div>
            <div className="text-xs text-gray-400">Contacted</div>
          </div>
          <div className="glass-card p-4 text-center">
            <Award className="w-6 h-6 mx-auto text-green-400 mb-2" />
            <div className="text-2xl font-bold">{fypStats.completedInquiries || 0}</div>
            <div className="text-xs text-gray-400">Completed</div>
          </div>
        </div>

        {/* Charts Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              Revenue Overview
            </h2>
            <div className="h-64 bg-gray-900/50 rounded-xl flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <DollarSign className="w-12 h-12 mx-auto text-gray-600 mb-2" />
                <p className="text-gray-500 text-sm">Chart visualization will appear here</p>
                <p className="text-xs text-gray-600">Monthly revenue trends</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-400" />
              Recent Activity
            </h2>
            <div className="space-y-3">
              {recentOrders.slice(0, 2).map((order) => (
                <div key={order._id} className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">New Order #{order._id.slice(-6)}</p>
                    <p className="text-xs text-gray-400">${order.total} • {new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              ))}
              {recentFypInquiries.slice(0, 2).map((inquiry) => (
                <div key={inquiry._id} className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Student Inquiry: {inquiry.fullName}</p>
                    <p className="text-xs text-gray-400">{inquiry.projectTitle} • {new Date(inquiry.createdAt).toLocaleDateString()}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(inquiry.status)}`}>
                    {inquiry.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-blue-400" />
              Recent Orders
            </h2>
            <Link to="/admin/orders" className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-700">
                <tr className="text-left text-gray-400 text-sm">
                  <th className="pb-3">Order ID</th>
                  <th className="pb-3">Customer</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Total</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order._id} className="border-b border-gray-700/50 hover:bg-gray-800/30 transition">
                    <td className="py-3 font-mono text-sm">#{order._id.slice(-8).toUpperCase()}</td>
                    <td className="py-3 text-sm">{order.userId?.name || "Guest"}</td>
                    <td className="py-3 text-sm text-gray-400">{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td className="py-3 font-semibold">${order.total?.toFixed(2)}</td>
                    <td className="py-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)} {order.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <Link to={`/admin/orders/${order._id}`} className="text-blue-400 hover:text-blue-300 text-sm">View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent FYP Inquiries Section */}
        <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-6 border border-green-500/30 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-green-400" />
              Recent Student Inquiries
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                40% Student Discount
              </span>
            </h2>
            <Link to="/admin/fyp" className="text-green-400 text-sm hover:text-green-300 flex items-center gap-1">
  Manage FYP <ArrowRight className="w-4 h-4" />
</Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-green-500/30">
                <tr className="text-left text-gray-400 text-sm">
                  <th className="pb-3">Student Name</th>
                  <th className="pb-3">Project</th>
                  <th className="pb-3">University</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentFypInquiries.map((inquiry) => (
                  <tr key={inquiry._id} className={`border-b border-green-500/20 hover:bg-green-500/5 transition ${!inquiry.read ? "bg-green-500/5" : ""}`}>
                    <td className="py-3">
                      <div>
                        <p className="font-semibold text-sm">{inquiry.fullName}</p>
                        <p className="text-xs text-gray-500">{inquiry.email}</p>
                      </div>
                    </td>
                    <td className="py-3 text-sm">{inquiry.projectTitle}</td>
                    <td className="py-3 text-sm text-gray-400">{inquiry.university}</td>
                    <td className="py-3 text-sm text-gray-400">{new Date(inquiry.createdAt).toLocaleDateString()}</td>
                    <td className="py-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(inquiry.status)}`}>
                        {getStatusIcon(inquiry.status)} {inquiry.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <Link to="/admin/fyp" className="text-green-400 hover:text-green-300 text-sm">View Details</Link>
                    </td>
                  </tr>
                ))}
                {recentFypInquiries.length === 0 && (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-gray-500">
                      No student inquiries yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Messages & Applications */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                Recent Messages
              </h2>
              <Link to="/admin/messages" className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {recentMessages.map((msg) => (
                <div key={msg._id} className="p-3 bg-gray-900 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-sm">{msg.name}</p>
                      <p className="text-xs text-gray-400">{msg.email}</p>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">{msg.message}</p>
                    </div>
                    {!msg.read && <span className="w-2 h-2 bg-green-400 rounded-full"></span>}
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-gray-500">{new Date(msg.createdAt).toLocaleDateString()}</p>
                    <Link to={`/admin/messages/${msg._id}`} className="text-blue-400 text-xs hover:underline">Read</Link>
                  </div>
                </div>
              ))}
              {recentMessages.length === 0 && (
                <p className="text-center text-gray-500 py-4">No messages yet</p>
              )}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                Recent Applications
              </h2>
              <Link to="/admin/applications" className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {recentApplications.map((app) => (
                <div key={app._id} className="p-3 bg-gray-900 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-sm">{app.fullName}</p>
                      <p className="text-xs text-gray-400">{app.course}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      app.status === "approved" ? "bg-green-500/20 text-green-400" :
                      app.status === "rejected" ? "bg-red-500/20 text-red-400" :
                      "bg-yellow-500/20 text-yellow-400"
                    }`}>
                      {app.status || "pending"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-gray-500">{new Date(app.appliedAt).toLocaleDateString()}</p>
                    <Link to={`/admin/applications/${app._id}`} className="text-blue-400 text-xs hover:underline">Review</Link>
                  </div>
                </div>
              ))}
              {recentApplications.length === 0 && (
                <p className="text-center text-gray-500 py-4">No applications yet</p>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { title: "Add Product", icon: Package, link: "/admin/products/add", color: "bg-blue-600" },
            { title: "View Orders", icon: ShoppingCart, link: "/admin/orders", color: "bg-blue-600" },
            { title: "Manage Courses", icon: GraduationCap, link: "/admin/courses", color: "bg-green-600" },
            { title: "Manage FYP", icon: FYPIcon, link: "/admin/fyp", color: "bg-emerald-600" },
            { title: "Export Data", icon: Download, link: "/admin/export", color: "bg-orange-600" },
          ].map((action, idx) => (
            <Link key={idx} to={action.link}>
              <div className={`${action.color} p-4 rounded-xl text-center hover:opacity-90 transition-all group`}>
                <action.icon className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold">{action.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;