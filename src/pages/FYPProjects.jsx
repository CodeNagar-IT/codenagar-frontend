// frontend/src/pages/FYPProjects.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Sparkles, Search, Clock, 
  Award, Users,  DollarSign, 
   Code, Smartphone, Brain,
  Cpu, Database, Cloud, Shield,  Briefcase
} from "lucide-react";
import axios from "axios";

const FYPProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [showDiscountModal, setShowDiscountModal] = useState(false);

  const categories = [
    "all", "Web Development", "App Development", "AI/ML", 
    "Data Science", "IoT", "Game Development", "Blockchain", "Cloud Computing"
  ];

  const types = ["all", "Project", "Thesis", "Report"];
const fetchProjects = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/fyp/projects`);
      setProjects(response.data);
    } catch (error) {
      console.error("Failed to fetch projects", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProjects();
  }, []);

  

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesType = selectedType === "all" || project.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-400";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-400";
      case "Advanced": return "bg-red-500/20 text-red-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      "Web Development": Code,
      "App Development": Smartphone,
      "AI/ML": Brain,
      "Data Science": Database,
      "IoT": Cpu,
      "Game Development": Gamepad,
      "Blockchain": Shield,
      "Cloud Computing": Cloud,
    };
    const Icon = icons[category] || Code;
    return <Icon className="w-4 h-4" />;
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm">For University Students</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            FYP <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Final Year Projects, Theses, and Reports with exclusive 40% student discount
          </p>
        </motion.div>

        {/* Discount Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30 text-center cursor-pointer"
          onClick={() => setShowDiscountModal(true)}
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="text-5xl">🎓</div>
            <div>
              <h3 className="text-2xl font-bold text-green-400">40% Student Discount!</h3>
              <p className="text-gray-300">Show your valid student ID and get 40% off on all FYP projects</p>
            </div>
            <div className="bg-green-600 rounded-full px-4 py-2 text-sm font-semibold">
              Limited Time Offer
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { value: projects.length, label: "Projects Available", icon: Briefcase },
            { value: "40%", label: "Student Discount", icon: DollarSign },
            { value: "24/7", label: "Student Support", icon: Users },
            { value: "100+", label: "Happy Students", icon: Award },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-green-400" />
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2.5 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat === "all" ? "All Categories" : cat}</option>
            ))}
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2.5 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border border-white/10"
          >
            {types.map(type => (
              <option key={type} value={type}>{type === "all" ? "All Types" : type}</option>
            ))}
          </select>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading projects...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20 glass-card">
            <Briefcase className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">No projects found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </span>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full flex items-center gap-1">
                      {getCategoryIcon(project.category)} {project.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {project.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-3">{project.description}</p>
                  
                  {/* Pricing with discount */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-400">${project.studentPrice}</span>
                      <span className="text-sm text-gray-500 line-through">${project.originalPrice}</span>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                        {project.discountPercentage}% OFF
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">Regular: ${project.price} | Student: ${project.studentPrice}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies?.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 bg-dark-400 rounded-full text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/fyp/inquiry/${project.slug}`}
                    className="block text-center py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
                  >
                    Get Student Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Discount Modal */}
        {showDiscountModal && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setShowDiscountModal(false)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-dark-200 rounded-2xl max-w-md w-full border border-green-500"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-white/10">
                <h2 className="text-2xl font-bold text-center">🎓 Student Discount</h2>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-300">Get <span className="text-green-400 font-bold">40% OFF</span> on all FYP projects!</p>
                <div className="bg-dark-400 rounded-lg p-4">
                  <p className="text-sm text-gray-400">How to avail:</p>
                  <ul className="text-sm text-gray-300 mt-2 space-y-1">
                    <li>✓ Valid university student ID required</li>
                    <li>✓ Must be currently enrolled student</li>
                    <li>✓ Discount applies to all project types</li>
                    <li>✓ Limited time offer</li>
                  </ul>
                </div>
                <button
                  onClick={() => setShowDiscountModal(false)}
                  className="w-full py-2 bg-green-600 rounded-lg hover:bg-green-700 transition"
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FYPProjects;