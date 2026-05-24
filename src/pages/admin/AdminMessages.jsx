// frontend/src/pages/admin/AdminMessages.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, Search, RefreshCw, TrendingUp, EyeOff,
  Trash2, Mail, User, Phone, Calendar, CheckCircle,
  Filter, Download, Inbox
} from "lucide-react";
import axios from "axios";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); // all, read, unread
  const [showStats, setShowStats] = useState(true);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/contacts`);
      setMessages(response.data);
    } catch (error) {
      console.error("Failed to fetch messages", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchMessages();
  }, []);

  const markAsRead = async (id) => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/contacts/${id}/read`);
      fetchMessages();
    } catch (error) {
      console.error("Failed to mark as read", error);
    }
  };

  const markAsUnread = async (id) => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/contacts/${id}/read`, { read: false });
      fetchMessages();
    } catch (error) {
      console.error("Failed to mark as unread", error);
    }
  };

  const deleteMessage = async (id) => {
    if (window.confirm("Are you sure you want to delete this message? This action cannot be undone.")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/contact/${id}`);
        fetchMessages();
        if (selectedMessage?._id === id) setSelectedMessage(null);
      } catch {
        alert("Failed to delete message");
      }
    }
  };

  const deleteAllMessages = async () => {
    if (window.confirm("Are you sure you want to delete ALL messages? This action cannot be undone.")) {
      try {
        await Promise.all(messages.map(msg => axios.delete(`${import.meta.env.VITE_API_URL}/api/contact/${msg._id}`)));
        fetchMessages();
        setSelectedMessage(null);
      } catch {
        alert("Failed to delete messages");
      }
    }
  };

  const exportMessages = () => {
    const data = filteredMessages.map(msg => ({
      Name: msg.name,
      Email: msg.email,
      Phone: msg.phone || "N/A",
      Subject: msg.subject || "General Inquiry",
      Message: msg.message,
      Status: msg.read ? "Read" : "Unread",
      Date: new Date(msg.createdAt).toLocaleString()
    }));
    
    const csv = [Object.keys(data[0]).join(","), ...data.map(row => Object.values(row).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `messages_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredMessages = messages.filter(msg => {
    const matchesSearch = msg.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.message?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === "all" || 
      (filterStatus === "read" && msg.read) || 
      (filterStatus === "unread" && !msg.read);
    
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: messages.length,
    read: messages.filter(m => m.read).length,
    unread: messages.filter(m => !m.read).length,
    today: messages.filter(m => new Date(m.createdAt).toDateString() === new Date().toDateString()).length,
    thisWeek: messages.filter(m => {
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return new Date(m.createdAt) >= weekAgo;
    }).length
  };

  const getSubjectBadgeColor = (subject) => {
    const colors = {
      "General Inquiry": "bg-gray-500/20 text-gray-400",
      "Project Quote": "bg-blue-500/20 text-blue-400",
      "Course Registration": "bg-green-500/20 text-green-400",
      "Hardware Purchase": "bg-purple-500/20 text-purple-400",
      "Technical Support": "bg-orange-500/20 text-orange-400",
      "Careers": "bg-pink-500/20 text-pink-400",
      "Partnership": "bg-cyan-500/20 text-cyan-400"
    };
    return colors[subject] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Contact Messages</h1>
            <p className="text-gray-400">
              <Inbox className="w-4 h-4 inline mr-1" /> 
              {stats.total} total messages • {stats.unread} unread
            </p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={exportMessages} 
              disabled={filteredMessages.length === 0}
              className="flex items-center gap-2 px-4 py-2 bg-dark-400 rounded-lg hover:bg-dark-300 transition disabled:opacity-50"
            >
              <Download className="w-5 h-5" /> Export CSV
            </button>
            <button 
              onClick={() => { if(window.confirm("Are you sure?")) deleteAllMessages(); }} 
              disabled={messages.length === 0}
              className="flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600 hover:text-white transition disabled:opacity-50"
            >
              <Trash2 className="w-5 h-5" /> Delete All
            </button>
            <button onClick={fetchMessages} className="flex items-center gap-2 px-4 py-2 bg-dark-400 rounded-lg hover:bg-dark-300 transition">
              <RefreshCw className="w-5 h-5" /> Refresh
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        {showStats && (
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {[
              { label: "Total Messages", value: stats.total, icon: MessageSquare, color: "from-blue-500 to-cyan-500" },
              { label: "Unread", value: stats.unread, icon: EyeOff, color: "from-orange-500 to-red-500" },
              { label: "Today", value: stats.today, icon: Calendar, color: "from-green-500 to-emerald-500" },
              { label: "This Week", value: stats.thisWeek, icon: TrendingUp, color: "from-purple-500 to-pink-500" },
            ].map((stat, idx) => (
              <div key={idx} className={`bg-gradient-to-r ${stat.color} p-4 rounded-xl`}>
                <stat.icon className="w-5 h-5 mb-1 text-white/80" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-white/70 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, subject, or message..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
          >
            <option value="all">All Messages</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
          </select>
          <button onClick={() => setShowStats(!showStats)} className="px-4 py-2.5 bg-dark-400 rounded-lg hover:bg-dark-300 transition">
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Messages List */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading messages...</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Messages List */}
            <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
              {filteredMessages.length === 0 ? (
                <div className="text-center py-12 glass-card">
                  <Inbox className="w-16 h-16 mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-400">No messages found</p>
                </div>
              ) : (
                filteredMessages.map((msg) => (
                  <motion.div
                    key={msg._id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 4 }}
                    className={`p-4 glass-card cursor-pointer transition-all ${
                      selectedMessage?._id === msg._id 
                        ? "border-cyan-500 bg-dark-300" 
                        : "hover:border-cyan-500/50"
                    } ${!msg.read ? "border-l-4 border-l-cyan-500" : ""}`}
                    onClick={() => {
                      setSelectedMessage(msg);
                      if (!msg.read) markAsRead(msg._id);
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-semibold">{msg.name}</h3>
                          {!msg.read && <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>}
                          <span className={`text-xs px-2 py-0.5 rounded-full ${getSubjectBadgeColor(msg.subject)}`}>
                            {msg.subject || "General Inquiry"}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{msg.email}</p>
                        <p className="text-xs text-gray-500 mt-2 line-clamp-2">{msg.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{new Date(msg.createdAt).toLocaleString()}</p>
                      </div>
                      <div className="flex gap-1 ml-2">
                        {msg.read ? (
                          <button
                            onClick={(e) => { e.stopPropagation(); markAsUnread(msg._id); }}
                            className="p-1 text-gray-500 hover:text-cyan-400 transition"
                            title="Mark as unread"
                          >
                            <EyeOff className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            onClick={(e) => { e.stopPropagation(); markAsRead(msg._id); }}
                            className="p-1 text-gray-500 hover:text-green-400 transition"
                            title="Mark as read"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={(e) => { e.stopPropagation(); deleteMessage(msg._id); }}
                          className="p-1 text-gray-500 hover:text-red-400 transition"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Message Details */}
            {selectedMessage ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card p-6 max-h-[70vh] overflow-y-auto"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold">Message Details</h2>
                  <button
                    onClick={() => deleteMessage(selectedMessage._id)}
                    className="text-red-400 hover:text-red-300 p-1"
                    title="Delete message"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm flex items-center gap-1"><User className="w-4 h-4" /> From</p>
                    <p className="font-semibold mt-1">{selectedMessage.name}</p>
                  </div>
                  
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm flex items-center gap-1"><Mail className="w-4 h-4" /> Contact</p>
                    <div className="space-y-2 mt-1">
                      <a href={`mailto:${selectedMessage.email}`} className="text-cyan-400 hover:underline block">
                        {selectedMessage.email}
                      </a>
                      {selectedMessage.phone && (
                        <a href={`tel:${selectedMessage.phone}`} className="text-gray-300 hover:text-cyan-400 block">
                          <Phone className="w-4 h-4 inline mr-1" /> {selectedMessage.phone}
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Subject</p>
                    <p className="font-semibold mt-1 text-cyan-400">{selectedMessage.subject || "General Inquiry"}</p>
                  </div>
                  
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Message</p>
                    <p className="mt-2 leading-relaxed whitespace-pre-wrap text-gray-300">{selectedMessage.message}</p>
                  </div>
                  
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Received</p>
                    <p className="mt-1">{new Date(selectedMessage.createdAt).toLocaleString()}</p>
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <a
                      href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject || 'Your inquiry'}`}
                      className="flex-1 py-2.5 bg-gradient-primary rounded-lg text-center hover:shadow-lg transition"
                    >
                      <Mail className="w-4 h-4 inline mr-1" /> Reply
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(selectedMessage.email);
                        alert("Email copied to clipboard!");
                      }}
                      className="px-4 py-2.5 border border-white/10 rounded-lg hover:bg-white/5 transition"
                    >
                      Copy Email
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="glass-card p-12 text-center">
                <MessageSquare className="w-16 h-16 mx-auto text-gray-600 mb-4" />
                <p className="text-gray-400">Select a message to view details</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessages;