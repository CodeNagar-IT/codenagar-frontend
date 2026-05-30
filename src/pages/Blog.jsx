// frontend/src/pages/Blog.jsx
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Heart, Clock, Sparkles, Eye, X, 
  ChevronLeft, ChevronRight, Calendar, Tag, Share2,
  Facebook, Twitter, Linkedin, LinkIcon, MessageCircle
} from "lucide-react";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 9;

  const categories = ["all", "Web Development", "Mobile Development", "AI/ML", "Cloud Computing", "DevOps", "Cybersecurity", "Business & Strategy", "HR & Culture"];

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs`, {
        params: {
          category: selectedCategory,
          search: searchTerm,
          page: currentPage,
          limit: postsPerPage
        }
      });
      setPosts(response.data.blogs);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, searchTerm, currentPage]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPosts();
  }, [fetchPosts]);

  const fetchSinglePost = async (slug) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/blogs/${slug}`);
      setSelectedPost(response.data);
    } catch (error) {
      console.error("Failed to fetch blog:", error);
    }
  };

  const handleLike = async (postId, e) => {
    e.stopPropagation();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/blogs/${postId}/like`);
      setPosts(prev => prev.map(post => 
        post._id === postId ? { ...post, likes: post.likes + 1 } : post
      ));
      if (selectedPost && selectedPost._id === postId) {
        setSelectedPost(prev => ({ ...prev, likes: prev.likes + 1 }));
      }
    } catch (error) {
      console.error("Failed to like post:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const sharePost = (platform, post) => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    const text = encodeURIComponent(`Check out "${post.title}" on CodeNagar Blog`);
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${encodeURIComponent(post.title)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
    }
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
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2.5 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2.5 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat === "all" ? "All Categories" : cat}</option>
            ))}
          </select>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading articles...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 glass-card">
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, idx) => (
                <motion.article
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  whileHover={{ y: -4 }}
                  className="glass-card overflow-hidden group cursor-pointer"
                  onClick={() => fetchSinglePost(post.slug)}
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
                        <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <p className="text-sm font-semibold">{post.author.name}</p>
                          <p className="text-xs text-gray-500">{formatDate(post.publishedAt)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 text-sm">
                        <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {post.views}</span>
                        <button 
                          onClick={(e) => handleLike(post._id, e)}
                          className="flex items-center gap-1 hover:text-red-400 transition"
                        >
                          <Heart className="w-3 h-3" /> 
                          {post.likes}
                        </button>
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

        {/* Blog Post Modal */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 overflow-y-auto" onClick={() => setSelectedPost(null)}>
              <div className="min-h-screen py-8 px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  className="max-w-4xl mx-auto bg-dark-200 rounded-2xl overflow-hidden border border-cyan-500/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-dark-400 rounded-full hover:bg-dark-300 transition"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Hero Image */}
                  <div className="h-64 md:h-96 overflow-hidden">
                    <img 
                      src={selectedPost.image} 
                      alt={selectedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {/* Categories and Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                        {selectedPost.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {selectedPost.readTime}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {formatDate(selectedPost.publishedAt)}
                      </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">{selectedPost.title}</h1>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 p-4 bg-dark-300/50 rounded-xl mb-8">
                      <img 
                        src={selectedPost.author.avatar} 
                        alt={selectedPost.author.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{selectedPost.author.name}</h3>
                        <p className="text-cyan-400 text-sm">{selectedPost.author.role}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedPost.author.expertise.map((skill, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 bg-dark-400 rounded-full text-gray-400">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Blog Content */}
                    <div 
                      className="prose prose-invert prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                    />

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-4 h-4 text-cyan-400" />
                        <span className="font-semibold">Tags:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedPost.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-dark-400 rounded-full text-gray-400">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Share Section */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Share2 className="w-4 h-4 text-cyan-400" />
                        Share this article:
                      </h4>
                      <div className="flex gap-3">
                        <button
                          onClick={() => sharePost('facebook', selectedPost)}
                          className="p-2 bg-[#1877f2]/20 text-[#1877f2] rounded-lg hover:bg-[#1877f2]/30 transition"
                        >
                          <Facebook className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => sharePost('twitter', selectedPost)}
                          className="p-2 bg-[#1da1f2]/20 text-[#1da1f2] rounded-lg hover:bg-[#1da1f2]/30 transition"
                        >
                          <Twitter className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => sharePost('linkedin', selectedPost)}
                          className="p-2 bg-[#0077b5]/20 text-[#0077b5] rounded-lg hover:bg-[#0077b5]/30 transition"
                        >
                          <Linkedin className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => sharePost('copy', selectedPost)}
                          className="p-2 bg-gray-600/20 text-gray-400 rounded-lg hover:bg-gray-600/30 transition"
                        >
                          <LinkIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-6 flex items-center gap-6 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Eye className="w-4 h-4" />
                        <span>{selectedPost.views} views</span>
                      </div>
                      <button 
                        onClick={() => handleLike(selectedPost._id, { stopPropagation: () => {} })}
                        className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition"
                      >
                        <Heart className="w-4 h-4" />
                        <span>{selectedPost.likes} likes</span>
                      </button>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MessageCircle className="w-4 h-4" />
                        <span>{selectedPost.comments?.length || 0} comments</span>
                      </div>
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

export default Blog;