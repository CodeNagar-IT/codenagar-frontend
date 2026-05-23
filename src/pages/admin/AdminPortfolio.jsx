// frontend/src/pages/admin/AdminPortfolio.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, Plus, Edit, Trash2, X, CheckCircle, XCircle, 
  RefreshCw, Eye, Grid, Users, Search
} from "lucide-react";
import axios from "axios";

const AdminPortfolio = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "Web Development",
    client: "",
    description: "",
    challenge: "",
    solution: "",
    results: [],
    technologies: [],
    image: "",
    gallery: [],
    featured: false,
    completedDate: "",
  });
  const [resultInput, setResultInput] = useState("");
  const [techInput, setTechInput] = useState("");
  // FIX: Change from setImageInput to imageInput
  const [imageInput, setImageInput] = useState("");

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/portfolio`);
      setItems(response.data);
    } catch (error) {
      console.error("Failed to fetch portfolio", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchItems();
  }, []);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingItem) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/portfolio/${editingItem._id}`, formData);
        alert("Portfolio item updated successfully!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/portfolio`, formData);
        alert("Portfolio item created successfully!");
      }
      setShowModal(false);
      setEditingItem(null);
      resetForm();
      fetchItems();
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save portfolio item");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this portfolio item?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/portfolio/${id}`);
        alert("Portfolio item deleted successfully!");
        fetchItems();
      } catch (error) {
        console.error("Delete error:", error);
        alert("Failed to delete portfolio item");
      }
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      slug: item.slug,
      category: item.category,
      client: item.client,
      description: item.description,
      challenge: item.challenge,
      solution: item.solution,
      results: item.results || [],
      technologies: item.technologies || [],
      image: item.image || "",
      gallery: item.gallery || [],
      featured: item.featured || false,
      completedDate: item.completedDate?.split('T')[0] || "",
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      category: "Web Development",
      client: "",
      description: "",
      challenge: "",
      solution: "",
      results: [],
      technologies: [],
      image: "",
      gallery: [],
      featured: false,
      completedDate: "",
    });
    setResultInput("");
    setTechInput("");
    setImageInput("");
  };

  const addResult = () => {
    if (resultInput.trim()) {
      setFormData({
        ...formData,
        results: [...formData.results, resultInput.trim()]
      });
      setResultInput("");
    }
  };

  const removeResult = (index) => {
    setFormData({
      ...formData,
      results: formData.results.filter((_, i) => i !== index)
    });
  };

  const addTech = () => {
    if (techInput.trim()) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, techInput.trim()]
      });
      setTechInput("");
    }
  };

  const removeTech = (index) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter((_, i) => i !== index)
    });
  };

  const addGalleryImage = () => {
    if (imageInput.trim()) {
      setFormData({
        ...formData,
        gallery: [...formData.gallery, imageInput.trim()]
      });
      setImageInput("");
    }
  };

  const removeGalleryImage = (index) => {
    setFormData({
      ...formData,
      gallery: formData.gallery.filter((_, i) => i !== index)
    });
  };

  const filteredItems = items.filter(item =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.client?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ["Web Development", "App Development", "AI/ML", "Cloud Solutions", "E-commerce", "UI/UX Design"];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Portfolio Management</h1>
            <p className="text-gray-400">Manage your portfolio projects</p>
          </div>
          <button
            onClick={() => {
              setEditingItem(null);
              resetForm();
              setShowModal(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition"
          >
            <Plus className="w-5 h-5" /> Add Project
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Projects", value: items.length, icon: Briefcase },
            { label: "Featured", value: items.filter(i => i.featured).length, icon: Eye },
            { label: "Categories", value: categories.length, icon: Grid },
            { label: "Clients", value: [...new Set(items.map(i => i.client))].length, icon: Users },
          ].map((stat, idx) => (
            <div key={idx} className="glass-card p-4 text-center">
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
            />
          </div>
          <button onClick={fetchItems} className="px-4 py-2 bg-dark-400 rounded-lg hover:bg-dark-300 transition">
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        {/* Portfolio Table */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading portfolio...</p>
          </div>
        ) : (
          <div className="bg-dark-200/50 rounded-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-dark-400 border-b border-white/10">
                  <tr className="text-left text-gray-400 text-sm">
                    <th className="px-6 py-4">Project</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Client</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Featured</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item, idx) => (
                    <motion.tr
                      key={item._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-dark-400">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-xs text-gray-500 line-clamp-1">{item.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">{item.category}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{item.client}</td>
                      <td className="px-6 py-4 text-gray-400">{new Date(item.completedDate).getFullYear()}</td>
                      <td className="px-6 py-4">
                        {item.featured ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-500" />
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button onClick={() => handleEdit(item)} className="text-gray-400 hover:text-cyan-400">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button onClick={() => handleDelete(item._id)} className="text-gray-400 hover:text-red-400">
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
              className="bg-dark-200 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-dark-200">
                <h2 className="text-2xl font-bold">
                  {editingItem ? "Edit Project" : "Add New Project"}
                </h2>
                <button onClick={() => setShowModal(false)} className="hover:text-cyan-400">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title *</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => {
                        setFormData({ 
                          ...formData, 
                          title: e.target.value,
                          slug: generateSlug(e.target.value)
                        });
                      }}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Slug (URL)</label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Category *</label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                    >
                      {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Client Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.client}
                      onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Completed Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.completedDate}
                      onChange={(e) => setFormData({ ...formData, completedDate: e.target.value })}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Image URL *</label>
                    <input
                      type="url"
                      required
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Description *</label>
                  <textarea
                    rows="2"
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Challenge *</label>
                  <textarea
                    rows="2"
                    required
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Solution *</label>
                  <textarea
                    rows="2"
                    required
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Key Results</label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={resultInput}
                      onChange={(e) => setResultInput(e.target.value)}
                      className="flex-1 px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                      placeholder="e.g., 40% increase in sales"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addResult())}
                    />
                    <button type="button" onClick={addResult} className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700">Add</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.results.map((result, i) => (
                      <span key={i} className="flex items-center gap-1 px-2 py-1 bg-cyan-500/20 rounded-full text-sm">
                        {result}
                        <button type="button" onClick={() => removeResult(i)} className="hover:text-red-400">
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Technologies</label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={techInput}
                      onChange={(e) => setTechInput(e.target.value)}
                      className="flex-1 px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                      placeholder="e.g., React, Node.js, MongoDB"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
                    />
                    <button type="button" onClick={addTech} className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700">Add</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.technologies.map((tech, i) => (
                      <span key={i} className="flex items-center gap-1 px-2 py-1 bg-dark-400 rounded-full text-sm">
                        {tech}
                        <button type="button" onClick={() => removeTech(i)} className="hover:text-red-400">
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gallery Images Section */}
                <div>
                  <label className="block text-sm font-medium mb-1">Gallery Images</label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="url"
                      value={imageInput}
                      onChange={(e) => setImageInput(e.target.value)}
                      className="flex-1 px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                      placeholder="https://... (additional image URL)"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addGalleryImage())}
                    />
                    <button type="button" onClick={addGalleryImage} className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700">Add</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.gallery.map((img, i) => (
                      <span key={i} className="flex items-center gap-1 px-2 py-1 bg-dark-400 rounded-full text-sm">
                        Image {i + 1}
                        <button type="button" onClick={() => removeGalleryImage(i)} className="hover:text-red-400">
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4 rounded focus:ring-cyan-500"
                  />
                  <label htmlFor="featured" className="text-sm">Feature this project</label>
                </div>

                <div className="flex gap-3 pt-4">
                  <button type="submit" className="flex-1 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition">
                    {editingItem ? "Update Project" : "Create Project"}
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

export default AdminPortfolio;