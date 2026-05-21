// frontend/src/pages/admin/AdminMessages.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, Search, RefreshCw,
  Trash2, Mail, User, Phone, Calendar, 
} from "lucide-react";
import axios from "axios";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const deleteMessage = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/contact/${id}`);
        fetchMessages();
        if (selectedMessage?._id === id) setSelectedMessage(null);
        alert("Message deleted successfully");
      } catch {
        alert("Failed to delete message");
      }
    }
  };

  const filteredMessages = messages.filter(msg =>
    msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.subject?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const unreadCount = messages.filter(m => !m.read).length;

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Contact Messages</h1>
            <p className="text-gray-400">
              {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
            </p>
          </div>
          <button onClick={fetchMessages} className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            <RefreshCw className="w-5 h-5" /> Refresh
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, email, or subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Messages List */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading messages...</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Messages List */}
            <div className="space-y-3">
              {filteredMessages.map((msg) => (
                <motion.div
                  key={msg._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 4 }}
                  className={`p-4 bg-gray-800/50 rounded-xl border cursor-pointer transition-all ${
                    selectedMessage?._id === msg._id 
                      ? "border-blue-500 bg-gray-800" 
                      : "border-gray-700 hover:border-blue-500/50"
                  } ${!msg.read ? "border-l-4 border-l-blue-500" : ""}`}
                  onClick={() => {
                    setSelectedMessage(msg);
                    if (!msg.read) markAsRead(msg._id);
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{msg.name}</h3>
                        {!msg.read && <span className="w-2 h-2 bg-blue-400 rounded-full"></span>}
                      </div>
                      <p className="text-sm text-gray-400">{msg.email}</p>
                      <p className="text-sm text-blue-400 mt-1">{msg.subject || "General Inquiry"}</p>
                      <p className="text-xs text-gray-500 mt-2 line-clamp-2">{msg.message}</p>
                    </div>
                    <div className="text-right text-xs text-gray-500">
                      <p>{new Date(msg.createdAt).toLocaleDateString()}</p>
                      <button
                        onClick={(e) => { e.stopPropagation(); deleteMessage(msg._id); }}
                        className="mt-2 text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
              {filteredMessages.length === 0 && (
                <div className="text-center py-12">
                  <MessageSquare className="w-16 h-16 mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-400">No messages found</p>
                </div>
              )}
            </div>

            {/* Message Details */}
            {selectedMessage && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold">Message Details</h2>
                  <button
                    onClick={() => deleteMessage(selectedMessage._id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">From</p>
                    <div className="flex items-center gap-2 mt-1">
                      <User className="w-4 h-4 text-blue-400" />
                      <p className="font-semibold">{selectedMessage.name}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Contact</p>
                    <div className="space-y-2 mt-1">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-400" />
                        <a href={`mailto:${selectedMessage.email}`} className="text-blue-400 hover:underline">
                          {selectedMessage.email}
                        </a>
                      </div>
                      {selectedMessage.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-blue-400" />
                          <a href={`tel:${selectedMessage.phone}`}>{selectedMessage.phone}</a>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Subject</p>
                    <p className="font-semibold mt-1">{selectedMessage.subject || "General Inquiry"}</p>
                  </div>
                  
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Message</p>
                    <p className="mt-2 leading-relaxed whitespace-pre-wrap">{selectedMessage.message}</p>
                  </div>
                  
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Received</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <p>{new Date(selectedMessage.createdAt).toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <a
                    href={`mailto:${selectedMessage.email}`}
                    className="block w-full py-2 bg-blue-600 rounded-lg text-center hover:bg-blue-700 transition"
                  >
                    Reply to Message
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessages;