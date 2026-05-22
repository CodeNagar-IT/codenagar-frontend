// frontend/src/pages/admin/AdminJobs.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, X, CheckCircle, XCircle } from "lucide-react";
import axios from "axios";

const AdminJobs = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPosition, setEditingPosition] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    type: "Full-time",
    location: "",
    salary: "",
    experience: "",
    description: "",
    requirements: [],
    icon: "💼",
    isActive: true,
  });
  const fetchPositions = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/careers/positions`);
      setPositions(response.data);
    } catch (error) {
      console.error("Failed to fetch positions", error);
    } finally {
      setLoading(false);
    }
  };
  
  const [requirementInput, setRequirementInput] = useState("");

  useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPositions();
  }, []);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingPosition) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/careers/positions/${editingPosition._id}`, formData);
        alert("Position updated successfully!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/careers/positions`, formData);
        alert("Position created successfully!");
      }
      setShowModal(false);
      setEditingPosition(null);
      setFormData({
        title: "",
        type: "Full-time",
        location: "",
        salary: "",
        experience: "",
        description: "",
        requirements: [],
        icon: "💼",
        isActive: true,
      });
      fetchPositions();
    } catch {
      alert("Failed to save position");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this position?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/careers/positions/${id}`);
        alert("Position deleted successfully!");
        fetchPositions();
      } catch {
        alert("Failed to delete position");
      }
    }
  };

  const handleEdit = (position) => {
    setEditingPosition(position);
    setFormData({
      title: position.title,
      type: position.type,
      location: position.location,
      salary: position.salary,
      experience: position.experience,
      description: position.description,
      requirements: position.requirements || [],
      icon: position.icon || "💼",
      isActive: position.isActive,
    });
    setShowModal(true);
  };

  const addRequirement = () => {
    if (requirementInput.trim()) {
      setFormData({
        ...formData,
        requirements: [...formData.requirements, requirementInput.trim()],
      });
      setRequirementInput("");
    }
  };

  const removeRequirement = (index) => {
    setFormData({
      ...formData,
      requirements: formData.requirements.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Manage Job Positions</h1>
            <p className="text-gray-400">Create, edit, and manage job openings</p>
          </div>
          <button
            onClick={() => {
              setEditingPosition(null);
              setFormData({
                title: "",
                type: "Full-time",
                location: "",
                salary: "",
                experience: "",
                description: "",
                requirements: [],
                icon: "💼",
                isActive: true,
              });
              setShowModal(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition"
          >
            <Plus className="w-5 h-5" /> Add Position
          </button>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading positions...</p>
          </div>
        ) : (
          <div className="bg-dark-200/50 rounded-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-dark-400 border-b border-white/10">
                  <tr className="text-left text-gray-400 text-sm">
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Type</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4">Salary</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {positions.map((position, idx) => (
                    <motion.tr
                      key={position._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition"
                    >
                      <td className="px-6 py-4 font-semibold">{position.title}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-cyan-500/20 rounded-full text-xs">{position.type}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{position.location}</td>
                      <td className="px-6 py-4 text-gray-300">{position.salary}</td>
                      <td className="px-6 py-4">
                        {position.isActive ? (
                          <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-4 h-4" /> Active</span>
                        ) : (
                          <span className="flex items-center gap-1 text-red-400"><XCircle className="w-4 h-4" /> Inactive</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button onClick={() => handleEdit(position)} className="text-gray-400 hover:text-cyan-400">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button onClick={() => handleDelete(position._id)} className="text-gray-400 hover:text-red-400">
                            <Trash2 className="w-5 h-5" />
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

        {/* Add/Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-dark-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  {editingPosition ? "Edit Position" : "Add New Position"}
                </h2>
                <button onClick={() => setShowModal(false)} className="hover:text-cyan-400">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Job Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                    placeholder="e.g., Senior React Developer"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Employment Type *</label>
                    <select
                      required
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                    >
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Remote</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Location *</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                      placeholder="e.g., Karachi (Hybrid) or Remote"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Salary Range *</label>
                    <input
                      type="text"
                      required
                      value={formData.salary}
                      onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                      placeholder="e.g., $2,000 - $3,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Experience Required *</label>
                    <input
                      type="text"
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                      placeholder="e.g., 3+ years"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description *</label>
                  <textarea
                    rows="3"
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                    placeholder="Job description..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Requirements</label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={requirementInput}
                      onChange={(e) => setRequirementInput(e.target.value)}
                      className="flex-1 px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                      placeholder="Add a requirement (e.g., 3+ years React experience)"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addRequirement())}
                    />
                    <button type="button" onClick={addRequirement} className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700">
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.requirements.map((req, i) => (
                      <span key={i} className="flex items-center gap-1 px-2 py-1 bg-cyan-500/20 rounded-full text-sm">
                        {req}
                        <button type="button" onClick={() => removeRequirement(i)} className="hover:text-red-400">
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Icon (Emoji)</label>
                    <input
                      type="text"
                      value={formData.icon}
                      onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                      placeholder="e.g., ⚛️ for React"
                    />
                  </div>
                  <div className="flex items-center gap-2 pt-6">
                    <input
                      type="checkbox"
                      id="isActive"
                      checked={formData.isActive}
                      onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                      className="w-4 h-4 rounded focus:ring-cyan-500"
                    />
                    <label htmlFor="isActive" className="text-sm">Active (show on careers page)</label>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <button type="submit" className="flex-1 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition">
                    {editingPosition ? "Update Position" : "Create Position"}
                  </button>
                  <button type="button" onClick={() => setShowModal(false)} className="px-6 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition">
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminJobs;