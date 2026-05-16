// 8. src/components/Admin.jsx - FINAL FIXED
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, TrendingUp, Eye, Trash2 } from "lucide-react";
import axios from "axios";

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const adminPassword = "Admin@2025";

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === adminPassword) {
      setAuthenticated(true);
      // Load messages after successful login
      axios.get(`${import.meta.env.VITE_API_URL}/api/contacts`)
        .then(response => {
          setMessages(response.data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Failed to fetch messages", err);
          setLoading(false);
        });
    } else {
      alert("Wrong password!");
    }
  };

  const deleteMessage = async (id) => {
    if (window.confirm("Delete this message?")) {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/contact/${id}`);
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/contacts`);
      setMessages(response.data);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleLogin}
          className="bg-gray-800 p-8 rounded-2xl max-w-md w-full"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button type="submit" className="w-full py-3 bg-purple-600 rounded-lg font-semibold">
            Login
          </button>
        </motion.form>
      </div>
    );
  }

  const stats = {
    totalMessages: messages.length,
    unread: messages.filter(m => !m.read).length,
    thisMonth: messages.filter(m => new Date(m.createdAt).getMonth() === new Date().getMonth()).length,
  };

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: MessageSquare, label: "Total Messages", value: stats.totalMessages, color: "from-blue-500 to-cyan-500" },
            { icon: Eye, label: "Unread", value: stats.unread, color: "from-purple-500 to-pink-500" },
            { icon: TrendingUp, label: "This Month", value: stats.thisMonth, color: "from-green-500 to-emerald-500" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-gradient-to-r ${stat.color} p-6 rounded-2xl`}
            >
              <stat.icon className="w-8 h-8 mb-2" />
              <p className="text-sm opacity-90">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
          {loading ? (
            <p>Loading...</p>
          ) : messages.length === 0 ? (
            <p className="text-gray-400">No messages yet</p>
          ) : (
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={msg._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gray-900 p-4 rounded-lg"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{msg.name}</p>
                      <p className="text-sm text-gray-400">{msg.email} {msg.phone && `| ${msg.phone}`}</p>
                      {msg.service && <p className="text-xs text-purple-400 mt-1">Service: {msg.service}</p>}
                      <p className="mt-2">{msg.message}</p>
                      <p className="text-xs text-gray-500 mt-2">{new Date(msg.createdAt).toLocaleString()}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => deleteMessage(msg._id)} className="p-2 hover:bg-red-500/20 rounded-lg">
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;