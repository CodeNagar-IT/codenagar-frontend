// frontend/src/pages/admin/AdminBlogs.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Edit, Trash2, Search, X, Save, Eye, 
  CheckCircle, RefreshCw,  Clock,
   Image as  FileText,  Eye as EyeIcon
} from "lucide-react";
import axios from "axios";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [previewMode, setPreviewMode] = useState(false);
  const [previewBlog, setPreviewBlog] = useState(null);
  
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "Web Development",
    author: {
      name: "",
      role: "",
      avatar: "",
      expertise: []
    },
    image: "",
    tags: [],
    readTime: "",
    status: "draft"
  });

  const categories = [
    "Web Development", "Mobile Development", "AI/ML", 
    "Cloud Computing", "DevOps", "Cybersecurity", 
    "Business & Strategy", "HR & Culture"
  ];

  // Team members data for author selection
  const teamMembers = [
    {
      name: "Ahmed Butt",
      role: "CEO & Founder",
      avatar: "https://i.ibb.co/5hdfMW9G/20260501-0530-image.png",
      expertise: ["Web Development", "AI/ML", "Cloud Architecture", "Leadership"]
    },
    {
      name: "Raja Faiz Khan",
      role: "Head of Business Development",
      avatar: "https://i.ibb.co/XrsmrnGL/Screenshot-2026-05-22-022804.jpg",
      expertise: ["Client Relations", "Business Strategy", "Partnerships"]
    },
    {
      name: "Abdul Basit",
      role: "Head of Human Resources",
      avatar: "https://i.ibb.co/YsN0Tnc/Screenshot-2026-05-22-022936.jpg",
      expertise: ["Employee Relations", "Talent Acquisition", "HR Strategy"]
    },
    {
      name: "Muhammad Abdullah",
      role: "Network Administrator",
      avatar: "https://i.ibb.co/7NQZ1XKm/Screenshot-2026-05-22-023040.jpg",
      expertise: ["Network Security", "Cloud Infrastructure", "System Monitoring"]
    },
    {
      name: "Mashahid Hussain Syed",
      role: "Lead Technical Writer & Research Analyst",
      avatar: "https://i.ibb.co/CsKcKbF1/Screenshot-2026-05-22-023730.jpg",
      expertise: ["Thesis Writing", "Research Documentation", "Technical Reports"]
    },
    {
      name: "Khawaja Muzammil Rauf",
      role: "Lead Mobile Application Developer",
      avatar: "https://i.ibb.co/Kjxsc9t9/mzml.jpg",
      expertise: ["React Native", "Flutter", "iOS Development", "Android Development"]
    },
    {
      name: "Muhammad Imam Tariq Minhas",
      role: "Senior Project Manager",
      avatar: "https://i.ibb.co/4wrzWRZ7/113d20c2-110d-48b1-9d22-5210123efc7f.jpg",
      expertise: ["Agile Methodology", "Risk Management", "Client Communication"]
    },
    {
      name: "Raja Abdul Rehman Ansar",
      role: "Operations Manager",
      avatar: "https://i.ibb.co/YTWryYrc/Chat-GPT-Image-May-22-2026-03-19-45-AM.png",
      expertise: ["Process Optimization", "Resource Management", "Quality Assurance"]
    },
    {
      name: "Ahmed Raza",
      role: "Senior AI Engineer",
      avatar: "https://i.ibb.co/SwM4S01J/Screenshot-2026-05-29-071038.jpg",
      expertise: ["Deep Learning", "Natural Language Processing", "Computer Vision"]
    }
  ];

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/admin/blogs`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBlogs(response.data);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBlogs();
  }, []);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleAuthorSelect = (author) => {
    setFormData({
      ...formData,
      author: {
        name: author.name,
        role: author.role,
        avatar: author.avatar,
        expertise: author.expertise
      }
    });
  };

  const handleTagsInput = (e) => {
    const value = e.target.value;
    if (e.key === 'Enter' && value.trim()) {
      e.preventDefault();
      setFormData({
        ...formData,
        tags: [...formData.tags, value.trim()]
      });
      e.target.value = '';
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("adminToken");
      const blogData = {
        ...formData,
        slug: formData.slug || generateSlug(formData.title)
      };
      
      if (editingBlog) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/admin/blogs/${editingBlog._id}`, blogData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert("Blog updated successfully!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/blogs`, blogData, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert("Blog created successfully!");
      }
      setShowModal(false);
      resetForm();
      fetchBlogs();
    } catch (error) {
      console.error("Failed to save blog", error);
      alert("Failed to save blog. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const token = localStorage.getItem("adminToken");
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/admin/blogs/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert("Blog deleted successfully!");
        fetchBlogs();
      } catch (error) {
        console.error("Failed to delete blog", error);
        alert("Failed to delete blog");
      }
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      author: blog.author,
      image: blog.image,
      tags: blog.tags,
      readTime: blog.readTime,
      status: blog.status
    });
    setShowModal(true);
  };

  const resetForm = () => {
    setEditingBlog(null);
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "Web Development",
      author: {
        name: "",
        role: "",
        avatar: "",
        expertise: []
      },
      image: "",
      tags: [],
      readTime: "",
      status: "draft"
    });
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "all" || blog.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    if (status === "published") {
      return { color: "bg-green-500/20 text-green-400", icon: CheckCircle, text: "Published" };
    }
    return { color: "bg-yellow-500/20 text-yellow-400", icon: Clock, text: "Draft" };
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading blogs...</p>
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
            <h1 className="text-4xl font-bold mb-2">Manage Blogs</h1>
            <p className="text-gray-400">Create, edit, and manage your blog posts</p>
          </div>
          <button
            onClick={() => {
              resetForm();
              setShowModal(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition"
          >
            <Plus className="w-5 h-5" /> Write New Blog
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
            />
          </div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
          <button onClick={fetchBlogs} className="px-4 py-2 bg-dark-400 rounded-lg hover:bg-dark-300 transition">
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        {/* Blogs Table */}
        <div className="bg-dark-400/50 rounded-2xl overflow-hidden border border-white/10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-dark-300 border-b border-white/10">
                <tr className="text-left text-gray-400 text-sm">
                  <th className="px-6 py-4">Image</th>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Author</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Views</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBlogs.map((blog, idx) => {
                  const statusBadge = getStatusBadge(blog.status);
                  const StatusIcon = statusBadge.icon;
                  return (
                    <motion.tr
                      key={blog._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition"
                    >
                      <td className="px-6 py-4">
                        <img 
                          src={blog.image} 
                          alt={blog.title}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold line-clamp-1">{blog.title}</p>
                          <p className="text-xs text-gray-500 line-clamp-1">{blog.excerpt}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                          {blog.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <img src={blog.author.avatar} alt={blog.author.name} className="w-6 h-6 rounded-full object-cover" />
                          <span className="text-sm">{blog.author.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {formatDate(blog.publishedAt || blog.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-1 text-sm">
                          <EyeIcon className="w-4 h-4" /> {blog.views || 0}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${statusBadge.color}`}>
                          <StatusIcon className="w-3 h-3" /> {statusBadge.text}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setPreviewBlog(blog);
                              setPreviewMode(true);
                            }}
                            className="p-1 hover:text-cyan-400 transition"
                            title="Preview"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleEdit(blog)}
                            className="p-1 hover:text-cyan-400 transition"
                            title="Edit"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(blog._id)}
                            className="p-1 hover:text-red-400 transition"
                            title="Delete"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
            {filteredBlogs.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 mx-auto text-gray-600 mb-4" />
                <p className="text-gray-400">No blogs found</p>
              </div>
            )}
          </div>
        </div>

        {/* Add/Edit Blog Modal */}
        <AnimatePresence>
          {showModal && (
            <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-dark-200 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500"
              >
                <div className="sticky top-0 bg-dark-200 p-6 border-b border-white/10 flex justify-between items-center">
                  <h2 className="text-2xl font-bold">
                    {editingBlog ? "Edit Blog" : "Write New Blog"}
                  </h2>
                  <button onClick={() => setShowModal(false)} className="p-2 hover:bg-white/10 rounded-lg">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Title *</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value, slug: generateSlug(e.target.value) })}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                      placeholder="Blog title"
                    />
                  </div>

                  {/* Slug */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Slug (URL)</label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                      placeholder="auto-generated-from-title"
                    />
                  </div>

                  {/* Category and Read Time */}
                  <div className="grid md:grid-cols-2 gap-4">
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
                      <label className="block text-sm font-medium mb-1">Read Time *</label>
                      <input
                        type="text"
                        required
                        value={formData.readTime}
                        onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                        className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                        placeholder="e.g., 8 min read"
                      />
                    </div>
                  </div>

                  {/* Author Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Author *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-2">
                      {teamMembers.map((member, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleAuthorSelect(member)}
                          className={`flex items-center gap-2 p-2 rounded-lg border transition ${
                            formData.author.name === member.name
                              ? "border-cyan-500 bg-cyan-500/10"
                              : "border-white/10 hover:border-cyan-500/50"
                          }`}
                        >
                          <img src={member.avatar} alt={member.name} className="w-6 h-6 rounded-full object-cover" />
                          <span className="text-xs truncate">{member.name.split(' ')[0]}</span>
                        </button>
                      ))}
                    </div>
                    {formData.author.name && (
                      <div className="mt-2 p-3 bg-dark-400 rounded-lg flex items-center gap-3">
                        <img src={formData.author.avatar} alt={formData.author.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="font-semibold">{formData.author.name}</p>
                          <p className="text-xs text-gray-400">{formData.author.role}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Image URL */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Featured Image URL *</label>
                    <input
                      type="text"
                      required
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                      placeholder="https://..."
                    />
                    {formData.image && (
                      <div className="mt-2">
                        <img src={formData.image} alt="Preview" className="h-32 object-cover rounded-lg" />
                      </div>
                    )}
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Excerpt *</label>
                    <textarea
                      required
                      rows={2}
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                      placeholder="Short summary of the blog (shown in listings)"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Content (HTML) *</label>
                    <textarea
                      required
                      rows={10}
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10 font-mono text-sm"
                      placeholder="<h2>Introduction</h2><p>Your blog content here...</p>"
                    />
                    <p className="text-xs text-gray-500 mt-1">Use HTML tags for formatting: &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, etc.</p>
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Tags</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {formData.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs flex items-center gap-1">
                          #{tag}
                          <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-400">
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <input
                      type="text"
                      onKeyDown={handleTagsInput}
                      className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                      placeholder="Type tag and press Enter"
                    />
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="draft"
                          checked={formData.status === "draft"}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                          className="w-4 h-4"
                        />
                        <span>Draft</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="published"
                          checked={formData.status === "published"}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                          className="w-4 h-4"
                        />
                        <span>Publish</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition flex items-center justify-center gap-2"
                    >
                      <Save className="w-5 h-5" /> {editingBlog ? "Update Blog" : "Create Blog"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-6 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Preview Modal */}
        <AnimatePresence>
          {previewMode && previewBlog && (
            <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 overflow-y-auto" onClick={() => setPreviewMode(false)}>
              <div className="min-h-screen py-8 px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  className="max-w-4xl mx-auto bg-dark-200 rounded-2xl overflow-hidden border border-cyan-500/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="sticky top-0 bg-dark-200 p-4 border-b border-white/10 flex justify-between items-center">
                    <h2 className="text-xl font-bold">Preview: {previewBlog.title}</h2>
                    <button onClick={() => setPreviewMode(false)} className="p-2 hover:bg-white/10 rounded-lg">
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="p-6">
                    <img src={previewBlog.image} alt={previewBlog.title} className="w-full h-64 object-cover rounded-xl mb-6" />
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">{previewBlog.category}</span>
                      <span className="text-xs text-gray-500">{previewBlog.readTime}</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-4">{previewBlog.title}</h1>
                    <div className="flex items-center gap-3 mb-6">
                      <img src={previewBlog.author.avatar} alt={previewBlog.author.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold">{previewBlog.author.name}</p>
                        <p className="text-xs text-gray-400">{previewBlog.author.role}</p>
                      </div>
                    </div>
                    <div 
                      className="prose prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: previewBlog.content }}
                    />
                    <div className="mt-6 flex flex-wrap gap-2">
                      {previewBlog.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-dark-400 rounded-full">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminBlogs;