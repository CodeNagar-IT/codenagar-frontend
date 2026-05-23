// frontend/src/pages/Blog.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Search, Heart,
  Clock, Sparkles,  Eye,
  ChevronLeft, ChevronRight
} from "lucide-react";


const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Mock blog data (will be replaced with API call)
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: What to Expect in 2025",
      slug: "future-of-web-development-2025",
      excerpt: "Explore the emerging trends and technologies that will shape web development in the coming year, from AI-powered development to edge computing.",
      content: "Full content here...",
      category: "Web Development",
      author: "Ahmed Butt",
      authorAvatar: "https://ui-avatars.com/api/?background=0891b2&color=fff&name=Ahmed",
      date: "2025-05-15",
      readTime: "8 min read",
      views: 1240,
      likes: 89,
      comments: 24,
      image: "https://placehold.co/800x400/1e293b/ffffff?text=Web+Dev+2025",
      tags: ["Web Development", "Trends", "AI"]
    },
    {
      id: 2,
      title: "Building Scalable Mobile Apps with React Native",
      slug: "scalable-mobile-apps-react-native",
      excerpt: "Learn best practices for building performant and scalable mobile applications using React Native and modern architecture patterns.",
      content: "Full content here...",
      category: "Mobile Development",
      author: "Khawaja Muzammil Rauf",
      authorAvatar: "https://ui-avatars.com/api/?background=7c3aed&color=fff&name=Muzammil",
      date: "2025-05-10",
      readTime: "10 min read",
      views: 890,
      likes: 67,
      comments: 18,
      image: "https://placehold.co/800x400/1e293b/ffffff?text=React+Native",
      tags: ["Mobile", "React Native", "Performance"]
    },
    {
      id: 3,
      title: "Machine Learning in Production: A Practical Guide",
      slug: "ml-in-production-guide",
      excerpt: "From model training to deployment: a comprehensive guide to implementing machine learning solutions in production environments.",
      content: "Full content here...",
      category: "AI/ML",
      author: "Ahmed Butt",
      authorAvatar: "https://ui-avatars.com/api/?background=0891b2&color=fff&name=Ahmed",
      date: "2025-05-05",
      readTime: "12 min read",
      views: 2150,
      likes: 156,
      comments: 42,
      image: "https://placehold.co/800x400/1e293b/ffffff?text=ML+Production",
      tags: ["Machine Learning", "AI", "DevOps"]
    },
    {
      id: 4,
      title: "UI/UX Trends That Will Dominate 2025",
      slug: "ui-ux-trends-2025",
      excerpt: "Discover the latest UI/UX design trends that are reshaping digital experiences and how to implement them effectively.",
      content: "Full content here...",
      category: "Design",
      author: "Mashahid Hussain Syed",
      authorAvatar: "https://ui-avatars.com/api/?background=059669&color=fff&name=Mashahid",
      date: "2025-04-28",
      readTime: "6 min read",
      views: 567,
      likes: 45,
      comments: 12,
      image: "https://placehold.co/800x400/1e293b/ffffff?text=UI+UX+Trends",
      tags: ["UI/UX", "Design", "Trends"]
    },
    {
      id: 5,
      title: "Cloud Cost Optimization Strategies",
      slug: "cloud-cost-optimization",
      excerpt: "Practical strategies to reduce your cloud infrastructure costs without compromising performance or reliability.",
      content: "Full content here...",
      category: "Cloud Computing",
      author: "Muhammad Abdullah",
      authorAvatar: "https://ui-avatars.com/api/?background=ea580c&color=fff&name=Abdullah",
      date: "2025-04-20",
      readTime: "9 min read",
      views: 734,
      likes: 52,
      comments: 16,
      image: "https://placehold.co/800x400/1e293b/ffffff?text=Cloud+Cost",
      tags: ["Cloud", "AWS", "Cost Optimization"]
    },
    {
      id: 6,
      title: "DevOps Best Practices for Startups",
      slug: "devops-best-practices-startups",
      excerpt: "How early-stage startups can implement DevOps practices without overwhelming their teams or budgets.",
      content: "Full content here...",
      category: "DevOps",
      author: "Muhammad Imam Tariq Minhas",
      authorAvatar: "https://ui-avatars.com/api/?background=dc2626&color=fff&name=Imam",
      date: "2025-04-15",
      readTime: "7 min read",
      views: 623,
      likes: 38,
      comments: 9,
      image: "https://placehold.co/800x400/1e293b/ffffff?text=DevOps",
      tags: ["DevOps", "CI/CD", "Startups"]
    }
  ];

  const categories = ["all", "Web Development", "Mobile Development", "AI/ML", "Design", "Cloud Computing", "DevOps"];

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setPosts(blogPosts);
      setLoading(false);
    }, 500);
  }, );

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
            <span className="text-cyan-300 text-sm">Latest Insights</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, thoughts, and stories from the CodeNagar team on technology, innovation, and digital transformation.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
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

        {/* Blog Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading articles...</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="glass-card overflow-hidden group cursor-pointer"
                  onClick={() => window.location.href = `/blog/${post.slug}`}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src={post.authorAvatar} alt={post.author} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="text-sm font-semibold">{post.author}</p>
                          <p className="text-xs text-gray-500">{formatDate(post.date)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 text-sm">
                        <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {post.views}</span>
                        <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {post.likes}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 bg-dark-400 rounded-lg disabled:opacity-50 hover:bg-dark-300 transition"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 rounded-lg transition ${
                      currentPage === i + 1 
                        ? "bg-cyan-600 text-white" 
                        : "bg-dark-400 hover:bg-dark-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 bg-dark-400 rounded-lg disabled:opacity-50 hover:bg-dark-300 transition"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}

        {/* Newsletter CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-cyan-600/10 to-indigo-600/10 rounded-2xl p-8 border border-cyan-500/20"
        >
          <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 mb-4">Get the latest tech insights delivered to your inbox weekly.</p>
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

export default Blog;