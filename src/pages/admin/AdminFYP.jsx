// frontend/src/pages/admin/AdminFYP.jsx
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Edit, Trash2, Search, X, Save, Users, 
  CheckCircle, Clock, AlertCircle, PenTool, MessageSquare, 
  Image as ImageIcon, Briefcase
} from "lucide-react";
import axios from "axios";

const AdminFYP = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [activeTab, setActiveTab] = useState("projects");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "Web Development",
    type: "Project",
    description: "",
    technologies: "",
    features: "",
    deliverables: "",
    image: "",
    difficulty: "Intermediate",
    duration: "",
    price: "",
    discountedPrice: "",
    studentPrice: "",
    originalPrice: "",
    discountPercentage: 40,
    featured: false,
    isActive: true
  });

  const categories = ["Web Development", "App Development", "AI/ML", "Data Science", "IoT", "Game Development", "Blockchain", "Cloud Computing"];
  const types = ["Project", "Thesis", "Report"];
  const difficulties = ["Beginner", "Intermediate", "Advanced"];

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        navigate("/admin/login");
        return;
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const [projectsRes, inquiriesRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_API_URL}/api/fyp/projects`),
        axios.get(`${import.meta.env.VITE_API_URL}/api/fyp/inquiries`, config)
      ]);
      setProjects(projectsRes.data);
      setInquiries(inquiriesRes.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
      }
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  // Check authentication and fetch data
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    } else {
        // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchData();
    }
  }, [navigate, fetchData]);

  const resetForm = useCallback(() => {
    setEditingProject(null);
    setFormData({
      title: "",
      slug: "",
      category: "Web Development",
      type: "Project",
      description: "",
      technologies: "",
      features: "",
      deliverables: "",
      image: "",
      difficulty: "Intermediate",
      duration: "",
      price: "",
      discountedPrice: "",
      studentPrice: "",
      originalPrice: "",
      discountPercentage: 40,
      featured: false,
      isActive: true
    });
  }, []);

  const handleSaveProject = useCallback(async () => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        navigate("/admin/login");
        return;
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const projectData = {
        ...formData,
        technologies: formData.technologies.split(",").map(t => t.trim()),
        features: formData.features.split(",").map(f => f.trim()),
        deliverables: formData.deliverables.split(",").map(d => d.trim()),
        price: Number(formData.price),
        discountedPrice: Number(formData.discountedPrice),
        studentPrice: Number(formData.studentPrice),
        originalPrice: Number(formData.originalPrice),
        discountPercentage: Number(formData.discountPercentage)
      };

      if (editingProject) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/fyp/projects/${editingProject._id}`, projectData, config);
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/fyp/projects`, projectData, config);
      }
      
      setShowModal(false);
      fetchData();
      resetForm();
    } catch (error) {
      console.error("Failed to save project", error);
      if (error.response?.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
      }
    }
  }, [formData, editingProject, navigate, fetchData, resetForm]);

  const handleDeleteProject = useCallback(async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        const token = localStorage.getItem("adminToken");
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/fyp/projects/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        fetchData();
      } catch (error) {
        console.error("Failed to delete project", error);
      }
    }
  }, [fetchData]);

  const handleUpdateInquiryStatus = useCallback(async (id, status) => {
    try {
      const token = localStorage.getItem("adminToken");
      await axios.put(`${import.meta.env.VITE_API_URL}/api/fyp/inquiry/${id}/status`, 
        { status, read: true }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchData();
    } catch (error) {
      console.error("Failed to update status", error);
    }
  }, [fetchData]);

  const editProject = useCallback((project) => {
    setEditingProject(project);
    setFormData({
      ...project,
      technologies: project.technologies?.join(", ") || "",
      features: project.features?.join(", ") || "",
      deliverables: project.deliverables?.join(", ") || "",
    });
    setShowModal(true);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case "pending": return "bg-yellow-500/20 text-yellow-400";
      case "contacted": return "bg-blue-500/20 text-blue-400";
      case "completed": return "bg-green-500/20 text-green-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredInquiries = inquiries.filter(i => 
    i.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.projectTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.university?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="pt-32 pb-16 px-4 min-h-screen bg-dark-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading FYP Management...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16 px-4 bg-dark-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">FYP Management</h1>
            <p className="text-gray-400">Manage student projects and inquiries</p>
          </div>
          <button
            onClick={() => { resetForm(); setShowModal(true); }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition"
          >
            <Plus className="w-5 h-5" /> Add Project
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <div className="glass-card p-4 text-center">
            <Briefcase className="w-6 h-6 mx-auto text-green-400 mb-2" />
            <div className="text-2xl font-bold">{projects.length}</div>
            <div className="text-xs text-gray-400">Total Projects</div>
          </div>
          <div className="glass-card p-4 text-center">
            <Users className="w-6 h-6 mx-auto text-blue-400 mb-2" />
            <div className="text-2xl font-bold">{inquiries.length}</div>
            <div className="text-xs text-gray-400">Total Inquiries</div>
          </div>
          <div className="glass-card p-4 text-center">
            <Clock className="w-6 h-6 mx-auto text-yellow-400 mb-2" />
            <div className="text-2xl font-bold">{inquiries.filter(i => i.status === "pending").length}</div>
            <div className="text-xs text-gray-400">Pending</div>
          </div>
          <div className="glass-card p-4 text-center">
            <MessageSquare className="w-6 h-6 mx-auto text-blue-400 mb-2" />
            <div className="text-2xl font-bold">{inquiries.filter(i => i.status === "contacted").length}</div>
            <div className="text-xs text-gray-400">Contacted</div>
          </div>
          <div className="glass-card p-4 text-center">
            <CheckCircle className="w-6 h-6 mx-auto text-green-400 mb-2" />
            <div className="text-2xl font-bold">{inquiries.filter(i => i.status === "completed").length}</div>
            <div className="text-xs text-gray-400">Completed</div>
          </div>
          <div className="glass-card p-4 text-center">
            <AlertCircle className="w-6 h-6 mx-auto text-red-400 mb-2" />
            <div className="text-2xl font-bold">{inquiries.filter(i => !i.read).length}</div>
            <div className="text-xs text-gray-400">Unread</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-white/10">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-3 font-medium transition relative ${
              activeTab === "projects" ? "text-green-400" : "text-gray-400 hover:text-white"
            }`}
          >
            Projects
            {activeTab === "projects" && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("inquiries")}
            className={`px-6 py-3 font-medium transition relative ${
              activeTab === "inquiries" ? "text-green-400" : "text-gray-400 hover:text-white"
            }`}
          >
            Student Inquiries
            {inquiries.filter(i => !i.read).length > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {inquiries.filter(i => !i.read).length}
              </span>
            )}
            {activeTab === "inquiries" && (
              <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400" />
            )}
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
          />
        </div>

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="space-y-4">
            {filteredProjects.map(project => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-4 hover:shadow-lg transition"
              >
                <div className="flex flex-wrap gap-4">
                  <img src={project.image} alt={project.title} className="w-24 h-24 object-cover rounded-lg" />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">
                        {project.type}
                      </span>
                      <span className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded-full">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mb-2 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-green-400">${project.studentPrice} (Student)</span>
                      <span className="text-gray-500 line-through">${project.originalPrice}</span>
                      <span className="text-gray-400">{project.difficulty}</span>
                      <span className="text-gray-400">{project.duration}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => editProject(project)} className="p-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition">
                      <Edit className="w-5 h-5 text-blue-400" />
                    </button>
                    <button onClick={() => handleDeleteProject(project._id)} className="p-2 bg-red-500/20 rounded-lg hover:bg-red-500/30 transition">
                      <Trash2 className="w-5 h-5 text-red-400" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12 glass-card">
                <p className="text-gray-400">No projects found</p>
              </div>
            )}
          </div>
        )}

       {activeTab === "inquiries" && (
  <div className="space-y-4">
    {filteredInquiries.map(inquiry => (
      <motion.div
        key={inquiry._id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`glass-card p-4 hover:shadow-lg transition cursor-pointer ${
          !inquiry.read ? "border-l-4 border-l-green-500" : ""
        }`}
        onClick={() => setSelectedInquiry(inquiry)}
      >
        <div className="flex flex-wrap justify-between items-start">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-semibold">{inquiry.fullName}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(inquiry.status)}`}>
                {inquiry.status}
              </span>
              {!inquiry.read && (
                <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">
                  New
                </span>
              )}
              {/* NEW: Custom Project Badge */}
              {inquiry.isCustomProject && (
                <span className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded-full flex items-center gap-1">
                  <PenTool className="w-3 h-3" /> Custom Request
                </span>
              )}
            </div>
            <p className="text-sm text-gray-400">
              <span className="text-white">Project:</span> {inquiry.projectTitle}
              {inquiry.isCustomProject && inquiry.customCategory && (
                <span className="ml-2 text-purple-400">({inquiry.customCategory})</span>
              )}
            </p>
            <p className="text-sm text-gray-400">
              <span className="text-white">University:</span> {inquiry.university} | <span className="text-white">Program:</span> {inquiry.program}
            </p>
            <p className="text-sm text-gray-400">
              <span className="text-white">Email:</span> {inquiry.email} | <span className="text-white">Phone:</span> {inquiry.phone}
            </p>
            {/* NEW: Show custom technologies if present */}
            {inquiry.isCustomProject && inquiry.customTechnologies && (
              <p className="text-sm text-gray-400 mt-1">
                <span className="text-white">Technologies:</span> {inquiry.customTechnologies}
              </p>
            )}
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">{new Date(inquiry.createdAt).toLocaleDateString()}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={(e) => { e.stopPropagation(); handleUpdateInquiryStatus(inquiry._id, "contacted"); }}
                className="px-3 py-1 bg-blue-500/20 rounded-lg text-xs hover:bg-blue-500/30"
              >
                Contacted
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleUpdateInquiryStatus(inquiry._id, "completed"); }}
                className="px-3 py-1 bg-green-500/20 rounded-lg text-xs hover:bg-green-500/30"
              >
                Complete
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
    {filteredInquiries.length === 0 && (
      <div className="text-center py-12 glass-card">
        <p className="text-gray-400">No inquiries found</p>
      </div>
    )}
  </div>
)}

        {/* Project Modal */}
        <AnimatePresence>
          {showModal && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-dark-200 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="sticky top-0 bg-dark-200 p-6 border-b border-white/10 flex justify-between items-center">
                  <h2 className="text-2xl font-bold">{editingProject ? "Edit Project" : "Add New Project"}</h2>
                  <button onClick={() => setShowModal(false)} className="p-2 hover:bg-white/10 rounded-lg">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Title *</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value, slug: e.target.value.toLowerCase().replace(/ /g, "-") })}
                        className="w-full px-3 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Slug</label>
                      <input
                        type="text"
                        value={formData.slug}
                        readOnly
                        className="w-full px-3 py-2 bg-dark-400 rounded-lg border border-white/10 text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                      >
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Type</label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-3 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                      >
                        {types.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Technologies (comma separated)</label>
                      <input
                        type="text"
                        value={formData.technologies}
                        onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                        className="w-full px-3 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                        placeholder="React, Node.js, MongoDB"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Difficulty</label>
                      <select
                        value={formData.difficulty}
                        onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                        className="w-full px-3 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                      >
                        {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Image URL</label>
                      <input
                        type="text"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        className="w-full px-3 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                        placeholder="https://..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Duration</label>
                      <input
                        type="text"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full px-3 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                        placeholder="4-6 weeks"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Original Price</label>
                      <input
                        type="number"
                        value={formData.originalPrice}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setFormData({ 
                            ...formData, 
                            originalPrice: val,
                            studentPrice: Math.round(val * 0.6)
                          });
                        }}
                        className="w-full px-3 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Student Price</label>
                      <input
                        type="number"
                        value={formData.studentPrice}
                        onChange={(e) => setFormData({ ...formData, studentPrice: Number(e.target.value) })}
                        className="w-full px-3 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Regular Price</label>
                      <input
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                        className="w-full px-3 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Discount %</label>
                      <input
                        type="number"
                        value={formData.discountPercentage}
                        onChange={(e) => setFormData({ ...formData, discountPercentage: Number(e.target.value) })}
                        className="w-full px-3 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Features (comma separated)</label>
                      <input
                        type="text"
                        value={formData.features}
                        onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                        className="w-full px-3 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                        placeholder="Feature 1, Feature 2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Deliverables (comma separated)</label>
                      <input
                        type="text"
                        value={formData.deliverables}
                        onChange={(e) => setFormData({ ...formData, deliverables: e.target.value })}
                        className="w-full px-3 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
                        placeholder="Source code, Documentation"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.featured}
                        onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Featured Project</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.isActive}
                        onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Active</span>
                    </label>
                  </div>

                  <button
                    onClick={handleSaveProject}
                    className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <Save className="w-5 h-5" /> Save Project
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Inquiry Details Modal */}
        <AnimatePresence>
          {selectedInquiry && (
  <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-dark-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
    >
      <div className="sticky top-0 bg-dark-200 p-6 border-b border-white/10 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Student Inquiry Details</h2>
        <button onClick={() => setSelectedInquiry(null)} className="p-2 hover:bg-white/10 rounded-lg">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-400">Full Name</p>
            <p className="font-medium">{selectedInquiry.fullName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Email</p>
            <p className="font-medium">{selectedInquiry.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Phone</p>
            <p className="font-medium">{selectedInquiry.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Student ID</p>
            <p className="font-medium">{selectedInquiry.studentId}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">University</p>
            <p className="font-medium">{selectedInquiry.university}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Program</p>
            <p className="font-medium">{selectedInquiry.program}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Semester</p>
            <p className="font-medium">{selectedInquiry.semester}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Deadline</p>
            <p className="font-medium">{selectedInquiry.deadline}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Budget</p>
            <p className="font-medium">{selectedInquiry.budget}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Project</p>
            <p className="font-medium">{selectedInquiry.projectTitle}</p>
          </div>
          {selectedInquiry.isCustomProject && (
            <>
              <div>
                <p className="text-sm text-gray-400">Custom Category</p>
                <p className="font-medium">{selectedInquiry.customCategory || 'Not specified'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Technologies</p>
                <p className="font-medium">{selectedInquiry.customTechnologies || 'Not specified'}</p>
              </div>
            </>
          )}
        </div>
        
        <div>
          <p className="text-sm text-gray-400">Requirements</p>
          <p className="bg-dark-400 p-3 rounded-lg mt-1">{selectedInquiry.requirements}</p>
        </div>

        {selectedInquiry.studentCard && (
          <div>
            <p className="text-sm text-gray-400">Student ID Card</p>
            <a 
              href={selectedInquiry.studentCard} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:underline flex items-center gap-2 mt-1"
            >
              <ImageIcon className="w-4 h-4" /> View Student ID
            </a>
          </div>
        )}

        <div className="flex gap-3 pt-4">
          <button
            onClick={() => { handleUpdateInquiryStatus(selectedInquiry._id, "contacted"); setSelectedInquiry(null); }}
            className="flex-1 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            Mark as Contacted
          </button>
          <button
            onClick={() => { handleUpdateInquiryStatus(selectedInquiry._id, "completed"); setSelectedInquiry(null); }}
            className="flex-1 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
          >
            Mark as Completed
          </button>
        </div>
      </div>
    </motion.div>
  </div>
)}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminFYP;