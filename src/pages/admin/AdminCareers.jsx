// frontend/src/pages/admin/AdminCareers.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, Search, RefreshCw, Eye, 
  CheckCircle, XCircle, Clock, Mail, Phone, Calendar, FileText
} from "lucide-react";
import axios from "axios";

const AdminCareers = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

   const fetchApplications = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/careers/applications`);
      setApplications(response.data);
    } catch (error) {
      console.error("Failed to fetch career applications", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchApplications();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/careers/applications/${id}`, { status });
      fetchApplications();
      alert(`Application marked as ${status}`);
    } catch {
      alert("Failed to update status");
    }
  };

  const filteredApps = applications.filter(app => {
    const matchesSearch = app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case "approved": return "bg-green-500/20 text-green-400";
      case "rejected": return "bg-red-500/20 text-red-400";
      case "reviewing": return "bg-blue-500/20 text-blue-400";
      default: return "bg-yellow-500/20 text-yellow-400";
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case "approved": return <CheckCircle className="w-4 h-4" />;
      case "rejected": return <XCircle className="w-4 h-4" />;
      case "reviewing": return <Eye className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Career Applications</h1>
            <p className="text-gray-400">Review and manage job applications</p>
          </div>
          <button onClick={fetchApplications} className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            <RefreshCw className="w-5 h-5" /> Refresh
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, or position..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="reviewing">Reviewing</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Applications Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading applications...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app, idx) => (
              <motion.div
                key={app._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all cursor-pointer"
                onClick={() => setSelectedApp(app)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(app.status)}`}>
                    {getStatusIcon(app.status)} {app.status || "pending"}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{app.fullName}</h3>
                <p className="text-blue-400 text-sm mb-3">{app.position}</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> {app.email}</div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {app.phone}</div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {new Date(app.appliedAt).toLocaleDateString()}</div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filteredApps.length === 0 && !loading && (
          <div className="text-center py-20">
            <Briefcase className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">No applications found</p>
          </div>
        )}

        {/* Application Details Modal */}
        {selectedApp && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-500"
            >
              <div className="p-6 border-b border-gray-700">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Application Details</h2>
                  <button onClick={() => setSelectedApp(null)} className="hover:text-blue-400 text-2xl">&times;</button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Position</p>
                    <p className="font-semibold text-blue-400">{selectedApp.position}</p>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Experience</p>
                    <p>{selectedApp.experience || "Not specified"}</p>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Full Name</p>
                    <p className="font-semibold">{selectedApp.fullName}</p>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Email</p>
                    <p>{selectedApp.email}</p>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p>{selectedApp.phone}</p>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Applied On</p>
                    <p>{new Date(selectedApp.appliedAt).toLocaleString()}</p>
                  </div>
                </div>
                
                {selectedApp.coverLetter && (
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-2">Cover Letter</p>
                    <p className="text-gray-300 whitespace-pre-wrap">{selectedApp.coverLetter}</p>
                  </div>
                )}

                {selectedApp.resume && (
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-2">Resume/CV</p>
                    <a
                      href={selectedApp.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    >
                      <FileText className="w-4 h-4" /> Download Resume
                    </a>
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => updateStatus(selectedApp._id, "reviewing")}
                    className="flex-1 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                  >
                    Mark as Reviewing
                  </button>
                  <button
                    onClick={() => updateStatus(selectedApp._id, "approved")}
                    className="flex-1 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(selectedApp._id, "rejected")}
                    className="flex-1 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition"
                  >
                    Reject
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

export default AdminCareers;