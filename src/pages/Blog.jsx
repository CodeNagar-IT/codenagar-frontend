// frontend/src/pages/Blog.jsx
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Heart, Clock, Sparkles, Eye, X, 
  ChevronLeft, ChevronRight, Calendar, Tag, Share2,
  LinkIcon, MessageCircle
} from "lucide-react";
import { FaLinkedin,  FaFacebook, FaTwitter,  } from "react-icons/fa";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState({});
  const postsPerPage = 9;

  // Team members data
  const teamMembers = [
    {
      name: "Ahmed Butt",
      role: "CEO & Founder",
      image: "https://i.ibb.co/5hdfMW9G/20260501-0530-image.png",
      expertise: ["Leadership", "Web Development", "Mobile Development", "Machine Learning", "Artificial Intelligence", "Cloud Architecture"]
    },
    {
      name: "Raja Faiz Khan",
      role: "Head of Business Development",
      image: "https://i.ibb.co/XrsmrnGL/Screenshot-2026-05-22-022804.jpg",
      expertise: ["Client Relations", "Business Strategy", "Technical Communication", "Partnerships"]
    },
    {
      name: "Abdul Basit",
      role: "Head of Human Resources",
      image: "https://i.ibb.co/YsN0Tnc/Screenshot-2026-05-22-022936.jpg",
      expertise: ["Employee Relations", "Conflict Resolution", "Talent Acquisition", "HR Strategy"]
    },
    {
      name: "Muhammad Abdullah",
      role: "Network Administrator",
      image: "https://i.ibb.co/7NQZ1XKm/Screenshot-2026-05-22-023040.jpg",
      expertise: ["Network Security", "Cloud Infrastructure", "Firewall Management", "System Monitoring"]
    },
    {
      name: "Mashahid Hussain Syed",
      role: "Lead Technical Writer & Research Analyst",
      image: "https://i.ibb.co/CsKcKbF1/Screenshot-2026-05-22-023730.jpg",
      expertise: ["Thesis Writing", "Research Documentation", "Technical Reports", "MS Office Expert"]
    },
    {
      name: "Khawaja Muzammil Rauf",
      role: "Lead Mobile Application Developer",
      image: "https://i.ibb.co/Kjxsc9t9/mzml.jpg",
      expertise: ["React Native", "Flutter", "iOS Development", "Android Development"]
    },
    {
      name: "Muhammad Imam Tariq Minhas",
      role: "Senior Project Manager",
      image: "https://i.ibb.co/4wrzWRZ7/113d20c2-110d-48b1-9d22-5210123efc7f.jpg",
      expertise: ["Agile Methodology", "Scrum Master", "Risk Management", "Client Communication"]
    },
    {
      name: "Raja Abdul Rehman Ansar",
      role: "Operations Manager",
      image: "https://i.ibb.co/YTWryYrc/Chat-GPT-Image-May-22-2026-03-19-45-AM.png",
      expertise: ["Process Optimization", "Resource Management", "Quality Assurance", "Project Planning"]
    },
    {
      name: "Ahmed Raza",
      role: "Senior AI Engineer",
      image: "https://i.ibb.co/SwM4S01J/Screenshot-2026-05-29-071038.jpg",
      expertise: ["Deep Learning", "Natural Language Processing", "Computer Vision", "Large Language Models"]
    }
  ];

  // Static blog posts data (no Math.random)
  const blogPosts = useMemo(() => {
    const posts = [];
    
    const topics = {
      "Web Development": [
        { title: "The Future of Web Development: What's Coming in 2025", daysOffset: 1 },
        { title: "Building Accessible Web Applications: A Complete Guide", daysOffset: 5 },
        { title: "Why Next.js is the Future of React Development", daysOffset: 10 },
        { title: "WebAssembly: The Game Changer for Web Performance", daysOffset: 15 }
      ],
      "Mobile Development": [
        { title: "React Native vs Flutter: Which One Should You Choose?", daysOffset: 2 },
        { title: "Building Offline-First Mobile Apps", daysOffset: 7 },
        { title: "The Evolution of Cross-Platform Development", daysOffset: 12 },
        { title: "Push Notifications: Best Practices for Mobile Apps", daysOffset: 18 }
      ],
      "AI/ML": [
        { title: "How to Implement RAG Systems in Production", daysOffset: 3 },
        { title: "The Rise of Edge AI: Processing at the Source", daysOffset: 8 },
        { title: "Fine-tuning Large Language Models for Business", daysOffset: 14 },
        { title: "Computer Vision Applications in Retail", daysOffset: 20 }
      ],
      "Cloud Computing": [
        { title: "Cloud Cost Optimization: Save 40% on AWS", daysOffset: 4 },
        { title: "Multi-Cloud Strategy: Pros and Cons", daysOffset: 9 },
        { title: "Serverless Architecture: When to Use It", daysOffset: 16 },
        { title: "Disaster Recovery Planning in the Cloud", daysOffset: 22 }
      ],
      "DevOps": [
        { title: "CI/CD Pipelines: From Zero to Hero", daysOffset: 6 },
        { title: "Kubernetes for Small Teams: Overkill or Essential?", daysOffset: 11 },
        { title: "Infrastructure as Code with Terraform", daysOffset: 17 },
        { title: "Monitoring and Observability Best Practices", daysOffset: 23 }
      ],
      "Cybersecurity": [
        { title: "Zero Trust Security: Implementation Guide", daysOffset: 13 },
        { title: "Common API Security Vulnerabilities", daysOffset: 19 },
        { title: "Social Engineering: How to Protect Your Team", daysOffset: 24 },
        { title: "GDPR and Data Privacy Compliance", daysOffset: 28 }
      ],
      "Business & Strategy": [
        { title: "Building a Tech Startup: Lessons Learned", daysOffset: 21 },
        { title: "How to Scale Your Development Team", daysOffset: 25 },
        { title: "Client Communication: Turning Requirements into Solutions", daysOffset: 29 },
        { title: "The Art of Technical Proposal Writing", daysOffset: 32 }
      ],
      "HR & Culture": [
        { title: "Remote Work: Building Culture Across Time Zones", daysOffset: 26 },
        { title: "Hiring Top Tech Talent in Competitive Markets", daysOffset: 30 },
        { title: "Employee Retention Strategies for Tech Companies", daysOffset: 33 },
        { title: "Diversity and Inclusion in Tech", daysOffset: 35 }
      ]
    };

    const categories = Object.keys(topics);
    const images = [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e"
    ];

    const readTimes = [5, 6, 7, 8, 9, 10, 11, 12];
    const viewsCounts = [120, 340, 560, 890, 1240, 2150, 3420, 4560];
    const likesCounts = [15, 28, 45, 67, 89, 120, 156, 234];
    const commentsCounts = [3, 8, 12, 18, 24, 32, 42, 56];

    let postId = 1;
    const startDate = new Date("2025-01-01");

    for (const category of categories) {
      const categoryTopics = topics[category];
      for (let i = 0; i < categoryTopics.length; i++) {
        const topic = categoryTopics[i];
        // Cycle through team members instead of random
        const author = teamMembers[(postId - 1) % teamMembers.length];
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + topic.daysOffset);
        
        posts.push({
          id: postId,
          title: topic.title,
          slug: topic.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
          excerpt: `Discover ${topic.title.toLowerCase()} with insights from ${author.name}, ${author.role} at CodeNagar. Learn practical strategies and best practices.`,
          content: `
            <h2>Introduction</h2>
            <p>In this comprehensive guide, ${author.name}, our ${author.role}, shares expert insights on ${topic.title.toLowerCase()}.</p>
            
            <h2>Key Insights</h2>
            <p>Based on ${author.expertise.slice(0, 3).join(', ')} expertise, we've identified several key areas that businesses should focus on when implementing these strategies.</p>
            
            <h2>Practical Applications</h2>
            <p>At CodeNagar, we've successfully implemented these approaches across multiple projects, resulting in improved efficiency and client satisfaction.</p>
            
            <h2>Best Practices</h2>
            <ul>
              <li>Start with a clear understanding of your requirements</li>
              <li>Invest in proper planning and architecture</li>
              <li>Regular testing and quality assurance</li>
              <li>Continuous learning and adaptation</li>
            </ul>
            
            <h2>Future Trends</h2>
            <p>The landscape of ${category.toLowerCase()} is constantly evolving. Stay ahead by following industry leaders and investing in continuous learning.</p>
            
            <h2>Conclusion</h2>
            <p>${author.name} emphasizes that success in ${category.toLowerCase()} comes from combining technical excellence with business understanding. At CodeNagar, we're committed to helping our clients navigate this journey.</p>
          `,
          category: category,
          author: author.name,
          authorRole: author.role,
          authorAvatar: author.image,
          authorExpertise: author.expertise.slice(0, 3),
          date: date.toISOString().split('T')[0],
          readTime: `${readTimes[postId % readTimes.length]} min read`,
          views: viewsCounts[postId % viewsCounts.length],
          likes: likesCounts[postId % likesCounts.length],
          comments: commentsCounts[postId % commentsCounts.length],
          image: images[postId % images.length],
          tags: [category, author.expertise[0], "CodeNagar", "Tech Insights"]
        });
        postId++;
      }
    }

    return posts;
  }, [teamMembers]);

  const categories = ["all", "Web Development", "Mobile Development", "AI/ML", "Cloud Computing", "DevOps", "Cybersecurity", "Business & Strategy", "HR & Culture"];

  useEffect(() => {
    setTimeout(() => {
      setPosts(blogPosts);
      setLoading(false);
    }, 500);
  }, [blogPosts]);

  const handleLike = (postId, e) => {
    e.stopPropagation();
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + (likedPosts[postId] ? -1 : 1) }
        : post
    ));
  };

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

  const sharePost = (platform, post) => {
    const url = window.location.href;
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
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  whileHover={{ y: -4 }}
                  className="glass-card overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedPost(post)}
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
                        <img src={post.authorAvatar} alt={post.author} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <p className="text-sm font-semibold">{post.author}</p>
                          <p className="text-xs text-gray-500">{formatDate(post.date)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-500 text-sm">
                        <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {post.views}</span>
                        <button 
                          onClick={(e) => handleLike(post.id, e)}
                          className="flex items-center gap-1 hover:text-red-400 transition"
                        >
                          <Heart className={`w-3 h-3 ${likedPosts[post.id] ? 'fill-red-500 text-red-500' : ''}`} /> 
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
                        <Calendar className="w-3 h-3" /> {formatDate(selectedPost.date)}
                      </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">{selectedPost.title}</h1>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 p-4 bg-dark-300/50 rounded-xl mb-8">
                      <img 
                        src={selectedPost.authorAvatar} 
                        alt={selectedPost.author}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{selectedPost.author}</h3>
                        <p className="text-cyan-400 text-sm">{selectedPost.authorRole}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedPost.authorExpertise.map((skill, i) => (
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
                          <FaFacebook className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => sharePost('twitter', selectedPost)}
                          className="p-2 bg-[#1da1f2]/20 text-[#1da1f2] rounded-lg hover:bg-[#1da1f2]/30 transition"
                        >
                          <FaTwitter className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => sharePost('linkedin', selectedPost)}
                          className="p-2 bg-[#0077b5]/20 text-[#0077b5] rounded-lg hover:bg-[#0077b5]/30 transition"
                        >
                          <FaLinkedin className="w-5 h-5" />
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
                        onClick={() => {
                          const fakeEvent = { stopPropagation: () => {} };
                          handleLike(selectedPost.id, fakeEvent);
                        }}
                        className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition"
                      >
                        <Heart className={`w-4 h-4 ${likedPosts[selectedPost.id] ? 'fill-red-500 text-red-500' : ''}`} />
                        <span>{selectedPost.likes} likes</span>
                      </button>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MessageCircle className="w-4 h-4" />
                        <span>{selectedPost.comments} comments</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>

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