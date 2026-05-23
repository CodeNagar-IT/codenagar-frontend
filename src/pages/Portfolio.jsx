// frontend/src/pages/Portfolio.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, Search, Filter, Calendar, 
  Github, ExternalLink, CheckCircle, Briefcase,
  Code, Smartphone, Brain, Cloud, ShoppingBag, Palette,
 Users, Star, X
} from "lucide-react";
import axios from "axios";

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilter, setShowFilter] = useState(false);

  const categories = [
    "all",
    "Web Development",
    "App Development",
    "AI/ML",
    "Cloud Solutions",
    "E-commerce",
    "UI/UX Design"
  ];

  const categoryIcons = {
    "Web Development": Code,
    "App Development": Smartphone,
    "AI/ML": Brain,
    "Cloud Solutions": Cloud,
    "E-commerce": ShoppingBag,
    "UI/UX Design": Palette,
  };
const fetchPortfolio = async () => {
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
    fetchPortfolio();
  }, []);


  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredItems = items.filter(item => item.featured).slice(0, 3);

  const getCategoryIcon = (category) => {
    const Icon = categoryIcons[category] || Briefcase;
    return <Icon className="w-5 h-5" />;
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
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">Our Work</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform through technology.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { value: items.length, label: "Projects Completed", icon: Briefcase },
            { value: "50+", label: "Happy Clients", icon: Users },
            { value: "4.9★", label: "Client Rating", icon: Star },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-cyan-400" />
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Featured Projects */}
        {featuredItems.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredItems.map((item, idx) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {new Date(item.completedDate).getFullYear()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
            />
          </div>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="px-4 py-2.5 bg-dark-400 rounded-lg flex items-center gap-2 hover:bg-dark-300 transition"
          >
            <Filter className="w-5 h-5" /> Filter
          </button>
        </div>

        {/* Category Filter */}
        {showFilter && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mb-8 p-4 glass-card"
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm transition ${
                    selectedCategory === cat
                      ? "bg-cyan-600 text-white"
                      : "bg-dark-400 text-gray-300 hover:bg-dark-300"
                  }`}
                >
                  {cat === "all" ? "All Projects" : cat}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Portfolio Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading projects...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-card overflow-hidden group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.featured && (
                    <div className="absolute top-2 right-2 bg-cyan-600 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center gap-1">
                      {getCategoryIcon(item.category)} {item.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {new Date(item.completedDate).getFullYear()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2 line-clamp-2">{item.description}</p>
                  <p className="text-xs text-gray-500">Client: {item.client}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {item.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 bg-dark-400 rounded-full text-gray-400">
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="text-xs px-2 py-0.5 bg-dark-400 rounded-full text-gray-400">
                        +{item.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && !loading && (
          <div className="text-center py-20">
            <Briefcase className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">No projects found matching your criteria.</p>
          </div>
        )}

        {/* Project Details Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setSelectedItem(null)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-dark-200 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-dark-200 border-b border-white/10 p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
                  <button onClick={() => setSelectedItem(null)} className="hover:text-cyan-400">
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-64 object-cover rounded-lg" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Project Details</h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p><span className="text-cyan-400">Client:</span> {selectedItem.client}</p>
                      <p><span className="text-cyan-400">Category:</span> {selectedItem.category}</p>
                      <p><span className="text-cyan-400">Completed:</span> {new Date(selectedItem.completedDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.technologies.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-dark-400 rounded-full text-gray-300">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Challenge</h3>
                  <p className="text-gray-300">{selectedItem.challenge}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Solution</h3>
                  <p className="text-gray-300">{selectedItem.solution}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Key Results</h3>
                  <ul className="space-y-2">
                    {selectedItem.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" /> {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4">
                  {selectedItem.liveUrl && (
                    <a href={selectedItem.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition">
                      <ExternalLink className="w-4 h-4 inline mr-1" /> Live Demo
                    </a>
                  )}
                  {selectedItem.githubUrl && (
                    <a href={selectedItem.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 border border-white/10 rounded-lg hover:bg-white/5 transition">
                      <Github className="w-4 h-4 inline mr-1" /> View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;