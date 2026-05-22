// frontend/src/pages/admin/AdminCareers.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, Search, RefreshCw, Eye, 
  CheckCircle, XCircle, Clock, Mail, Phone, Calendar, FileText, 
  Download, Send, MessageSquare, AlertCircle, User
} from "lucide-react";
import axios from "axios";

const AdminCareers = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailTemplate, setEmailTemplate] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState({ type: "", message: "" });

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

  // Email Templates
  const getEmailTemplate = (type, applicantName, position) => {
    const baseUrl = "https://codenagar.com";
    const templates = {
      approved: {
        subject: `Congratulations! Your application for ${position} at CodeNagar`,
        body: `Dear ${applicantName},

We are pleased to inform you that your application for the position of ${position} at CodeNagar has been approved after careful review.

Our HR team will contact you within 2-3 business days to discuss the next steps, including interview scheduling and onboarding process.

Next steps:
1. Our HR team will reach out for an initial screening call
2. Technical interview with the department head
3. Final discussion and offer letter

We were impressed by your qualifications and look forward to potentially having you on our team.

Best regards,
HR Team
CodeNagar
${baseUrl}`
      },
      rejected: {
        subject: `Update regarding your application for ${position} at CodeNagar`,
        body: `Dear ${applicantName},

Thank you for your interest in the ${position} position at CodeNagar and for the time you invested in the application process.

After careful consideration, we regret to inform you that we have decided to move forward with other candidates whose qualifications more closely match our current requirements for this role.

We appreciate your interest in CodeNagar and encourage you to apply for future openings that may be a better fit for your skills and experience.

We wish you the best in your job search and future career endeavors.

Best regards,
HR Team
CodeNagar
${baseUrl}/careers`
      },
      reviewing: {
        subject: `Your application for ${position} at CodeNagar - Under Review`,
        body: `Dear ${applicantName},

Thank you for applying for the ${position} position at CodeNagar.

We are pleased to inform you that your application has been shortlisted and is currently under review by our hiring team. We will carefully evaluate your qualifications and experience against the role requirements.

What to expect next:
- Application review: 3-5 business days
- If shortlisted: You will receive an invitation for an initial screening call
- Status updates will be sent to your email

We appreciate your patience and will keep you updated on your application status.

Best regards,
HR Team
CodeNagar
${baseUrl}`
      },
      interview: {
        subject: `Interview Invitation: ${position} position at CodeNagar`,
        body: `Dear ${applicantName},

Congratulations! Based on your impressive application for the ${position} position, we would like to invite you for an interview.

Interview Details:
- Position: ${position}
- Mode: [Online/In-person]
- Duration: 45-60 minutes

Please reply to this email with your available time slots, and our team will confirm the schedule.

If you have any questions before the interview, feel free to reach out to us at hr@codenagar.com.

We look forward to speaking with you.

Best regards,
HR Team
CodeNagar`
      }
    };
    return templates[type];
  };

  const openEmailModal = (type, app) => {
    const template = getEmailTemplate(type, app.fullName, app.position);
    setEmailSubject(template.subject);
    setEmailTemplate(template.body);
    setEmailStatus({ type: "", message: "" });
    setShowEmailModal(true);
  };

  const sendEmail = async () => {
    if (!selectedApp) return;
    
    setSendingEmail(true);
    setEmailStatus({ type: "", message: "" });
    
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/careers/send-email`, {
        to: selectedApp.email,
        subject: emailSubject,
        body: emailTemplate,
        name: selectedApp.fullName
      });
      setEmailStatus({ type: "success", message: "Email sent successfully!" });
      setTimeout(() => {
        setShowEmailModal(false);
        setEmailStatus({ type: "", message: "" });
      }, 2000);
    } catch  {
      setEmailStatus({ type: "error", message: "Failed to send email. Please try again." });
    } finally {
      setSendingEmail(false);
    }
  };

  // Fix the getResumeUrl function
const getResumeUrl = (resumePath) => {
  if (!resumePath) return null;
  // If it's already a full URL, return as is
  if (resumePath.startsWith('http')) return resumePath;
  // Remove leading ./ or ../ if present
  let cleanPath = resumePath.replace(/^\.?\/+/, '');
  // Return full URL
  return `${import.meta.env.VITE_API_URL}/${cleanPath}`;
};

// Fix downloadResume (remove unused parameter)
const downloadResume = (resumePath) => {
  const url = getResumeUrl(resumePath);
  if (!url) {
    alert("No resume available for download");
    return;
  }
  // Open in new tab
  window.open(url, '_blank');
};

  const filteredApps = applications.filter(app => {
    const matchesSearch = app.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.position?.toLowerCase().includes(searchTerm.toLowerCase());
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

  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === "pending").length,
    reviewing: applications.filter(a => a.status === "reviewing").length,
    approved: applications.filter(a => a.status === "approved").length,
    rejected: applications.filter(a => a.status === "rejected").length,
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
          <button onClick={fetchApplications} className="flex items-center gap-2 px-4 py-2 bg-dark-400 rounded-lg hover:bg-white/5 transition">
            <RefreshCw className="w-5 h-5" /> Refresh
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {[
            { label: "Total", value: stats.total, color: "from-blue-500 to-cyan-500", icon: Briefcase },
            { label: "Pending", value: stats.pending, color: "from-yellow-500 to-orange-500", icon: Clock },
            { label: "Reviewing", value: stats.reviewing, color: "from-blue-500 to-indigo-500", icon: Eye },
            { label: "Approved", value: stats.approved, color: "from-green-500 to-emerald-500", icon: CheckCircle },
            { label: "Rejected", value: stats.rejected, color: "from-red-500 to-rose-500", icon: XCircle },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`bg-gradient-to-r ${stat.color} p-4 rounded-xl text-center shadow-lg`}
            >
              <stat.icon className="w-6 h-6 mx-auto mb-1 text-white" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-white/80 text-xs">{stat.label}</div>
            </motion.div>
          ))}
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
            <option value="reviewing">Reviewing</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Applications Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
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
                className="bg-dark-200/50 rounded-2xl p-6 border border-white/10 hover:border-cyan-500 transition-all cursor-pointer"
                onClick={() => setSelectedApp(app)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(app.status)}`}>
                    {getStatusIcon(app.status)} {app.status || "pending"}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{app.fullName}</h3>
                <p className="text-cyan-400 text-sm mb-3">{app.position}</p>
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
          <div className="text-center py-20 glass-card">
            <Briefcase className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">No applications found</p>
          </div>
        )}

        {/* Application Details Modal */}
        {selectedApp && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-dark-200 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500"
            >
              <div className="p-6 border-b border-white/10 sticky top-0 bg-dark-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold">Application Details</h2>
                    <p className="text-gray-400 text-sm">Review candidate information and take action</p>
                  </div>
                  <button onClick={() => setSelectedApp(null)} className="hover:text-cyan-400 text-2xl">&times;</button>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Two column layout */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm flex items-center gap-1"><Briefcase className="w-4 h-4" /> Position</p>
                    <p className="font-semibold text-cyan-400 text-lg">{selectedApp.position}</p>
                  </div>
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm flex items-center gap-1"><Clock className="w-4 h-4" /> Experience</p>
                    <p>{selectedApp.experience || "Not specified"}</p>
                  </div>
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm flex items-center gap-1"><User className="w-4 h-4" /> Full Name</p>
                    <p className="font-semibold text-lg">{selectedApp.fullName}</p>
                  </div>
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm flex items-center gap-1"><Mail className="w-4 h-4" /> Email</p>
                    <a href={`mailto:${selectedApp.email}`} className="text-cyan-400 hover:underline">{selectedApp.email}</a>
                  </div>
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm flex items-center gap-1"><Phone className="w-4 h-4" /> Phone</p>
                    <a href={`tel:${selectedApp.phone}`}>{selectedApp.phone}</a>
                  </div>
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm flex items-center gap-1"><Calendar className="w-4 h-4" /> Applied On</p>
                    <p>{new Date(selectedApp.appliedAt).toLocaleString()}</p>
                  </div>
                </div>
                
                {/* Cover Letter */}
                {selectedApp.coverLetter && (
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-2 flex items-center gap-1"><MessageSquare className="w-4 h-4" /> Cover Letter</p>
                    <p className="text-gray-300 whitespace-pre-wrap">{selectedApp.coverLetter}</p>
                  </div>
                )}

                {/* Resume Download */}
                {selectedApp.resume && (
                  <div className="bg-dark-400 rounded-xl p-4">
                    <p className="text-gray-400 text-sm mb-2 flex items-center gap-1"><FileText className="w-4 h-4" /> Resume/CV</p>
                    <button
                      onClick={() => downloadResume(selectedApp.resume)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition text-sm"
                    >
                      <Download className="w-4 h-4" /> Download Resume
                    </button>
                    <button onClick={() => window.open(getResumeUrl(selectedApp.resume), '_blank')} 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition text-sm">
    <Eye className="w-4 h-4" /> Preview
  </button>
                  </div>
                )}

                {/* Status Update Buttons */}
                <div>
                  <h3 className="font-semibold mb-3">Update Application Status</h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => updateStatus(selectedApp._id, "reviewing")}
                      className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-sm"
                    >
                      Mark as Reviewing
                    </button>
                    <button
                      onClick={() => updateStatus(selectedApp._id, "approved")}
                      className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition text-sm"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(selectedApp._id, "rejected")}
                      className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition text-sm"
                    >
                      Reject
                    </button>
                  </div>
                </div>

                {/* Email Templates Section */}
                <div className="border-t border-white/10 pt-4">
                  <h3 className="font-semibold mb-3 flex items-center gap-2"><Mail className="w-5 h-5 text-cyan-400" /> Send Email to Candidate</h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => openEmailModal("reviewing", selectedApp)}
                      className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition text-sm border border-blue-500/50"
                    >
                      <Send className="w-4 h-4 inline mr-1" /> Application Under Review
                    </button>
                    <button
                      onClick={() => openEmailModal("interview", selectedApp)}
                      className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition text-sm border border-purple-500/50"
                    >
                      <Send className="w-4 h-4 inline mr-1" /> Interview Invitation
                    </button>
                    <button
                      onClick={() => openEmailModal("approved", selectedApp)}
                      className="px-4 py-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600 hover:text-white transition text-sm border border-green-500/50"
                    >
                      <Send className="w-4 h-4 inline mr-1" /> Approval & Next Steps
                    </button>
                    <button
                      onClick={() => openEmailModal("rejected", selectedApp)}
                      className="px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600 hover:text-white transition text-sm border border-red-500/50"
                    >
                      <Send className="w-4 h-4 inline mr-1" /> Better Luck Next Time
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Email Modal */}
        {showEmailModal && selectedApp && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-dark-200 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-cyan-500"
            >
              <div className="p-6 border-b border-white/10 sticky top-0 bg-dark-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Send Email to {selectedApp.fullName}</h2>
                  <button onClick={() => setShowEmailModal(false)} className="hover:text-cyan-400 text-2xl">&times;</button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {emailStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg flex items-center gap-2 text-sm ${
                      emailStatus.type === "success" 
                        ? "bg-green-500/20 text-green-400 border border-green-500" 
                        : "bg-red-500/20 text-red-400 border border-red-500"
                    }`}
                  >
                    {emailStatus.type === "success" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                    {emailStatus.message}
                  </motion.div>
                )}
                
                <div>
                  <label className="block text-sm font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Message Body</label>
                  <textarea
                    rows={12}
                    value={emailTemplate}
                    onChange={(e) => setEmailTemplate(e.target.value)}
                    className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10 font-mono text-sm"
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={sendEmail}
                    disabled={sendingEmail}
                    className="flex-1 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {sendingEmail ? "Sending..." : <><Send className="w-5 h-5" /> Send Email</>}
                  </button>
                  <button
                    onClick={() => setShowEmailModal(false)}
                    className="px-6 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition"
                  >
                    Cancel
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