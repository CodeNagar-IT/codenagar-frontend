// frontend/src/pages/Whitepapers.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, Download, Sparkles, Search, 
  Calendar, Users, Eye, Clock, Award
} from "lucide-react";

const Whitepapers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const whitepapers = [
    {
      id: 1,
      title: "The State of AI in Enterprise 2025",
      description: "A comprehensive analysis of AI adoption trends, challenges, and opportunities in enterprises across the globe.",
      category: "Artificial Intelligence",
      author: "Ahmed Butt",
      date: "2025-03-15",
      pages: 45,
      downloads: 2840,
      views: 5120,
      tags: ["AI", "Enterprise", "Trends"],
      image: "https://placehold.co/400x300/1e293b/ffffff?text=AI+Whitepaper",
      readTime: "25 min read"
    },
    {
      id: 2,
      title: "Cloud Migration: A Strategic Framework",
      description: "Step-by-step methodology for successful cloud migration with minimal disruption and maximum ROI.",
      category: "Cloud Computing",
      author: "Muhammad Abdullah",
      date: "2025-02-20",
      pages: 38,
      downloads: 1950,
      views: 3420,
      tags: ["Cloud", "Migration", "AWS", "Azure"],
      image: "https://placehold.co/400x300/1e293b/ffffff?text=Cloud+Whitepaper",
      readTime: "20 min read"
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of Remote Work",
      description: "Best practices and emerging threats in distributed work environments, plus actionable security frameworks.",
      category: "Cybersecurity",
      author: "Raja Abdul Rehman Ansar",
      date: "2025-01-10",
      pages: 52,
      downloads: 3120,
      views: 6780,
      tags: ["Security", "Remote Work", "Compliance"],
      image: "https://placehold.co/400x300/1e293b/ffffff?text=Security+Whitepaper",
      readTime: "30 min read"
    },
    {
      id: 4,
      title: "Sustainable Software Development",
      description: "How to build eco-friendly applications and reduce your digital carbon footprint without sacrificing performance.",
      category: "Sustainability",
      author: "Mashahid Hussain Syed",
      date: "2024-12-05",
      pages: 42,
      downloads: 1280,
      views: 2450,
      tags: ["Green Tech", "Sustainability", "Best Practices"],
      image: "https://placehold.co/400x300/1e293b/ffffff?text=Sustainability+Whitepaper",
      readTime: "22 min read"
    },
    {
      id: 5,
      title: "The Future of FinTech: Trends and Predictions",
      description: "Exploring blockchain, digital banking, embedded finance, and the technologies reshaping financial services.",
      category: "FinTech",
      author: "Raja Faiz Khan",
      date: "2024-11-18",
      pages: 48,
      downloads: 2250,
      views: 4180,
      tags: ["FinTech", "Blockchain", "Banking"],
      image: "https://placehold.co/400x300/1e293b/ffffff?text=FinTech+Whitepaper",
      readTime: "28 min read"
    },
    {
      id: 6,
      title: "Edge Computing: The Next Frontier",
      description: "Understanding edge architecture, use cases, and how it complements cloud computing for real-time applications.",
      category: "Edge Computing",
      author: "Muhammad Imam Tariq Minhas",
      date: "2024-10-22",
      pages: 35,
      downloads: 980,
      views: 1890,
      tags: ["Edge Computing", "IoT", "Infrastructure"],
      image: "https://placehold.co/400x300/1e293b/ffffff?text=Edge+Whitepaper",
      readTime: "18 min read"
    }
  ];

  const categories = ["all", "Artificial Intelligence", "Cloud Computing", "Cybersecurity", "Sustainability", "FinTech", "Edge Computing"];

  const filteredWhitepapers = whitepapers.filter(wp => {
    const matchesSearch = wp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wp.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || wp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (whitepaper) => {
    alert(`Downloading "${whitepaper.title}"...\n\nThis is a placeholder. In production, this would trigger the actual PDF download.`);
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
            <span className="text-cyan-300 text-sm">In-Depth Research</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Whitepapers</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep-dive research and analysis on emerging technologies, industry trends, and best practices.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { value: "15+", label: "Whitepapers Published", icon: FileText },
            { value: "50K+", label: "Total Downloads", icon: Download },
            { value: "100K+", label: "Total Views", icon: Eye },
            { value: "4.8★", label: "Average Rating", icon: Award },
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

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search whitepapers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2.5 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
            ))}
          </select>
        </div>

        {/* Whitepapers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWhitepapers.map((wp, idx) => (
            <motion.div
              key={wp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass-card overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={wp.image} 
                  alt={wp.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                    {wp.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {wp.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {wp.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{wp.description}</p>
                <div className="flex items-center gap-2 mb-3">
                  {wp.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 bg-dark-400 rounded-full text-gray-400">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(wp.date).getFullYear()}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {wp.author.split(' ')[0]}</span>
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {wp.views.toLocaleString()}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDownload(wp)}
                    className="flex-1 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition text-sm flex items-center justify-center gap-1"
                  >
                    <Download className="w-4 h-4" /> Download PDF
                  </button>
                  <button className="px-3 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredWhitepapers.length === 0 && (
          <div className="text-center py-20">
            <FileText className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">No whitepapers found matching your criteria.</p>
          </div>
        )}

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-cyan-600/10 to-indigo-600/10 rounded-2xl p-8 border border-cyan-500/20"
        >
          <h3 className="text-2xl font-bold mb-2">Submit Your Email for Research Updates</h3>
          <p className="text-gray-400 mb-4">Get notified when we publish new whitepapers and research.</p>
          <div className="flex max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
            />
            <button className="px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Whitepapers;