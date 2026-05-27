// frontend/src/pages/admin/AdminServiceInquiries.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, Search, RefreshCw, Eye, Mail, User, 
  Calendar, DollarSign, Clock, CheckCircle, XCircle, Download, 
  MessageSquare, FileText, Building, 
} from "lucide-react";
import axios from "axios";

const AdminServiceInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [stats, setStats] = useState({});
  const [updating, setUpdating] = useState(false);

  const fetchInquiries = async () => {
    try {
      const [inquiriesRes, statsRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_API_URL}/api/service/inquiries`),
        axios.get(`${import.meta.env.VITE_API_URL}/api/service/inquiries/stats`),
      ]);
      setInquiries(inquiriesRes.data);
      setStats(statsRes.data);
    } catch (error) {
      console.error("Failed to fetch inquiries", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchInquiries();
  }, []);

  const updateStatus = async (id, status, read = true) => {
    if (updating) return;
    setUpdating(true);
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/service/inquiry/${id}/status`, { status, read });
      fetchInquiries();
      if (selectedInquiry?._id === id) {
        setSelectedInquiry({ ...selectedInquiry, status, read });
      }
    } catch (error) {
      console.error("Failed to update status", error);
    } finally {
      setUpdating(false);
    }
  };

  const deleteInquiry = async (id) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/service/inquiry/${id}`);
        fetchInquiries();
        if (selectedInquiry?._id === id) setSelectedInquiry(null);
      } catch  {
        alert("Failed to delete inquiry");
      }
    }
  };

  const exportToCSV = () => {
    if (filteredInquiries.length === 0) {
      alert("No data to export");
      return;
    }
    
    const data = filteredInquiries.map(inq => ({
      Name: inq.fullName,
      Email: inq.email,
      Phone: inq.phone,
      Company: inq.company || "N/A",
      Service: inq.serviceName,
      Budget: inq.budget,
      Timeline: inq.timeline,
      Status: inq.status,
      Date: new Date(inq.createdAt).toLocaleString()
    }));
    
    const csv = [Object.keys(data[0]).join(","), ...data.map(row => Object.values(row).join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `service_inquiries_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredInquiries = inquiries.filter(inq => {
    const matchesSearch = inq.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.serviceName?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case "contacted": return "bg-blue-500/20 text-blue-400";
      case "completed": return "bg-green-500/20 text-green-400";
      case "pending": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Service Inquiries</h1>
            <p className="text-gray-400">Manage customer service requests and quotes</p>
          </div>
          <button 
            onClick={exportToCSV} 
            disabled={inquiries.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-dark-400 rounded-lg hover:bg-dark-300 transition disabled:opacity-50"
          >
            <Download className="w-5 h-5" /> Export CSV
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {[
            { label: "Total", value: stats.total || 0, icon: Briefcase, color: "from-cyan-500 to-blue-500" },
            { label: "Pending", value: stats.pending || 0, icon: Clock, color: "from-yellow-500 to-orange-500" },
            { label: "Contacted", value: stats.contacted || 0, icon: MessageSquare, color: "from-blue-500 to-indigo-500" },
            { label: "Completed", value: stats.completed || 0, icon: CheckCircle, color: "from-green-500 to-emerald-500" },
            { label: "Unread", value: stats.unread || 0, icon: Eye, color: "from-red-500 to-rose-500" },
          ].map((stat, idx) => (
            <div key={idx} className={`bg-gradient-to-r ${stat.color} p-4 rounded-xl text-center`}>
              <stat.icon className="w-5 h-5 mx-auto mb-1 text-white/80" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-white/70 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="contacted">Contacted</option>
            <option value="completed">Completed</option>
          </select>
          <button onClick={fetchInquiries} className="px-4 py-2 bg-dark-400 rounded-lg hover:bg-dark-300 transition">
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        {/* Inquiries Table */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading inquiries...</p>
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="text-center py-20 glass-card">
            <Briefcase className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">No service inquiries found</p>
          </div>
        ) : (
          <div className="bg-dark-200/50 rounded-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-dark-400 border-b border-white/10">
                  <tr className="text-left text-gray-400 text-sm">
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Service</th>
                    <th className="px-6 py-4">Budget</th>
                    <th className="px-6 py-4">Timeline</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInquiries.map((inquiry, idx) => (
                    <motion.tr
                      key={inquiry._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition cursor-pointer"
                      onClick={() => setSelectedInquiry(inquiry)}
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold">{inquiry.fullName}</p>
                          <p className="text-xs text-gray-500">{inquiry.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                          {inquiry.serviceName}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{inquiry.budget}</td>
                      <td className="px-6 py-4 text-gray-300">{inquiry.timeline}</td>
                      <td className="px-6 py-4 text-gray-400">{new Date(inquiry.createdAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(inquiry.status)}`}>
                          {inquiry.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button 
                            onClick={(e) => { e.stopPropagation(); updateStatus(inquiry._id, "contacted"); }}
                            className="text-blue-400 hover:text-blue-300 transition"
                            title="Mark as Contacted"
                            disabled={updating}
                          >
                            <MessageSquare className="w-5 h-5" />
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); deleteInquiry(inquiry._id); }}
                            className="text-red-400 hover:text-red-300 transition"
                            title="Delete"
                          >
                            <XCircle className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Inquiry Details Modal */}
        {selectedInquiry && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-dark-200 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-cyan-500"
            >
              <div className="p-6 border-b border-white/10 sticky top-0 bg-dark-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Inquiry Details</h2>
                  <button onClick={() => setSelectedInquiry(null)} className="hover:text-cyan-400 text-2xl">&times;</button>
                </div>
              </div>
              
              <div className="p-6 space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm flex items-center gap-1"><User className="w-4 h-4" /> Customer</p>
                    <p className="font-semibold text-lg">{selectedInquiry.fullName}</p>
                    <p className="text-cyan-400 text-sm">{selectedInquiry.email}</p>
                    <p className="text-gray-300 text-sm">{selectedInquiry.phone}</p>
                  </div>
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm flex items-center gap-1"><Building className="w-4 h-4" /> Company</p>
                    <p className="font-semibold">{selectedInquiry.company || "Not specified"}</p>
                  </div>
                </div>

                <div className="bg-dark-400 rounded-xl p-4">
                  <p className="text-gray-400 text-sm flex items-center gap-1"><Briefcase className="w-4 h-4" /> Service Requested</p>
                  <p className="font-semibold text-cyan-400">{selectedInquiry.serviceName}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm flex items-center gap-1"><DollarSign className="w-4 h-4" /> Budget</p>
                    <p className="font-semibold">{selectedInquiry.budget}</p>
                  </div>
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm flex items-center gap-1"><Calendar className="w-4 h-4" /> Timeline</p>
                    <p className="font-semibold">{selectedInquiry.timeline}</p>
                  </div>
                </div>

                <div className="bg-dark-400 rounded-xl p-4">
                  <p className="text-gray-400 text-sm flex items-center gap-1"><FileText className="w-4 h-4" /> Requirements</p>
                  <p className="text-gray-300 mt-2 whitespace-pre-wrap">{selectedInquiry.requirements}</p>
                </div>

                <div className="bg-dark-400 rounded-xl p-4">
                  <p className="text-gray-400 text-sm flex items-center gap-1"><Calendar className="w-4 h-4" /> Submitted</p>
                  <p>{new Date(selectedInquiry.createdAt).toLocaleString()}</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={`mailto:${selectedInquiry.email}?subject=Regarding your ${selectedInquiry.serviceName} inquiry`}
                    className="flex-1 py-2 bg-gradient-primary rounded-lg text-center hover:shadow-lg transition"
                  >
                    <Mail className="w-4 h-4 inline mr-1" /> Reply via Email
                  </a>
                  <button
                    onClick={() => {
                      updateStatus(selectedInquiry._id, "completed");
                      setSelectedInquiry(null);
                    }}
                    className="flex-1 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition"
                  >
                    Mark as Completed
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminServiceInquiries;