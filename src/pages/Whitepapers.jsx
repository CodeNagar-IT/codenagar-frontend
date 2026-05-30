// frontend/src/pages/Whitepapers.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, Download, Sparkles, Search, 
  Calendar,  Eye, Clock, Award, X,
  BookOpen
  ChevronLeft, ChevronRight
} from "lucide-react";

const Whitepapers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedWhitepaper, setSelectedWhitepaper] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const whitepapers = [
    {
      id: 1,
      title: "The State of Artificial Intelligence in Enterprise 2025",
      description: "A comprehensive analysis of AI adoption trends, challenges, and opportunities in enterprises across the globe, with actionable insights for business leaders.",
      fullContent: `
        <h2>Executive Summary</h2>
        <p>Artificial Intelligence has moved from experimental to essential in enterprise environments. This whitepaper analyzes adoption patterns, ROI metrics, and implementation challenges based on surveys of 500+ enterprise leaders.</p>
        
        <h2>Key Findings</h2>
        <ul>
          <li>87% of enterprises have implemented or are planning to implement AI solutions</li>
          <li>45% average productivity improvement in AI-adopted processes</li>
          <li>$15.7 trillion projected global AI economic impact by 2030</li>
          <li>Top use cases: Customer service automation, data analytics, and process optimization</li>
        </ul>
        
        <h2>Implementation Framework</h2>
        <p>Our research has identified a 5-stage framework for successful enterprise AI implementation: Assessment, Strategy Development, Pilot Programs, Scaling, and Optimization.</p>
        
        <h2>ROI Analysis</h2>
        <p>Companies that successfully implement AI report an average ROI of 3.5x within 24 months, with faster time-to-value in customer-facing applications.</p>
        
        <h2>Future Outlook</h2>
        <p>By 2027, AI agents will autonomously handle 40% of routine business tasks, freeing human workers for strategic work. Organizations that invest now will have significant competitive advantages.</p>
      `,
      category: "Artificial Intelligence",
      author: "Ahmed Raza",
      authorRole: "Senior AI Engineer",
      authorAvatar: "https://i.ibb.co/SwM4S01J/Screenshot-2026-05-29-071038.jpg",
      date: "2025-03-15",
      pages: 45,
      downloads: 2840,
      views: 5120,
      tags: ["AI", "Enterprise", "Trends", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      readTime: "25 min read",
      pdfUrl: "#"
    },
    {
      id: 2,
      title: "Cloud Migration: A Strategic Framework for Success",
      description: "Step-by-step methodology for successful cloud migration with minimal disruption and maximum ROI, including cost analysis and risk assessment.",
      fullContent: `
        <h2>Introduction</h2>
        <p>Cloud migration has become imperative for modern enterprises, yet 60% of migrations face delays or cost overruns. This framework provides a proven methodology for successful cloud adoption.</p>
        
        <h2>The 6-Step Migration Framework</h2>
        <ul>
          <li>Assessment & Discovery - Inventory and analyze existing infrastructure</li>
          <li>Strategy Development - Define migration approach (rehost, replatform, refactor)</li>
          <li>Security & Compliance - Ensure regulatory requirements are met</li>
          <li>Pilot Migration - Test with low-risk applications first</li>
          <li>Full Migration - Execute at scale with automated tools</li>
          <li>Optimization - Continuously improve cost and performance</li>
        </ul>
        
        <h2>Cost Analysis</h2>
        <p>Our research shows organizations save an average of 35% on infrastructure costs after cloud migration, with additional savings from reduced maintenance overhead.</p>
        
        <h2>Risk Management</h2>
        <p>Common risks include data loss, security breaches, and application downtime. This whitepaper provides mitigation strategies for each risk category.</p>
      `,
      category: "Cloud Computing",
      author: "Muhammad Abdullah",
      authorRole: "Network Administrator",
      authorAvatar: "https://i.ibb.co/7NQZ1XKm/Screenshot-2026-05-22-023040.jpg",
      date: "2025-02-20",
      pages: 38,
      downloads: 1950,
      views: 3420,
      tags: ["Cloud", "Migration", "AWS", "Azure", "Strategy"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      readTime: "20 min read",
      pdfUrl: "#"
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of Remote Work",
      description: "Best practices and emerging threats in distributed work environments, plus actionable security frameworks for protecting remote teams.",
      fullContent: `
        <h2>The New Security Landscape</h2>
        <p>Remote work has expanded the attack surface dramatically. This whitepaper analyzes the security challenges of distributed workforces and provides practical solutions.</p>
        
        <h2>Key Threats</h2>
        <ul>
          <li>Phishing attacks increased 300% since 2020</li>
          <li>Unsecured home networks create vulnerabilities</li>
          <li>Shadow IT proliferates outside corporate control</li>
          <li>Data leakage through personal devices</li>
        </ul>
        
        <h2>Zero Trust Implementation</h2>
        <p>Zero Trust architecture is essential for remote work security. This section provides a step-by-step implementation guide for organizations of all sizes.</p>
        
        <h2>Employee Training Programs</h2>
        <p>Human error remains the leading cause of security breaches. Effective training programs can reduce risk by 70%.</p>
      `,
      category: "Cybersecurity",
      author: "Raja Abdul Rehman Ansar",
      authorRole: "Operations Manager",
      authorAvatar: "https://i.ibb.co/YTWryYrc/Chat-GPT-Image-May-22-2026-03-19-45-AM.png",
      date: "2025-01-10",
      pages: 52,
      downloads: 3120,
      views: 6780,
      tags: ["Security", "Remote Work", "Compliance", "Zero Trust"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      readTime: "30 min read",
      pdfUrl: "#"
    },
    {
      id: 4,
      title: "Sustainable Software Development: Green Coding Practices",
      description: "How to build eco-friendly applications and reduce your digital carbon footprint without sacrificing performance or user experience.",
      fullContent: `
        <h2>The Environmental Impact of Software</h2>
        <p>The tech industry accounts for 2-3% of global carbon emissions. Efficient code can significantly reduce energy consumption and environmental impact.</p>
        
        <h2>Green Coding Principles</h2>
        <ul>
          <li>Optimize algorithms for energy efficiency</li>
          <li>Reduce unnecessary data transfers</li>
          <li>Implement efficient caching strategies</li>
          <li>Choose energy-efficient hosting providers</li>
        </ul>
        
        <h2>Measuring Carbon Footprint</h2>
        <p>Tools like the Green Software Foundation's Carbon Intensity API help organizations measure and reduce their software carbon emissions.</p>
        
        <h2>Business Case for Green Software</h2>
        <p>Efficient software reduces cloud costs by 20-40% while improving user experience through faster load times.</p>
      `,
      category: "Sustainability",
      author: "Mashahid Hussain Syed",
      authorRole: "Lead Technical Writer & Research Analyst",
      authorAvatar: "https://i.ibb.co/CsKcKbF1/Screenshot-2026-05-22-023730.jpg",
      date: "2024-12-05",
      pages: 42,
      downloads: 1280,
      views: 2450,
      tags: ["Green Tech", "Sustainability", "Best Practices", "Eco-Friendly"],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      readTime: "22 min read",
      pdfUrl: "#"
    },
    {
      id: 5,
      title: "The Future of FinTech: Trends Reshaping Financial Services",
      description: "Exploring blockchain, digital banking, embedded finance, and the technologies reshaping how we bank, invest, and transact.",
      fullContent: `
        <h2>The FinTech Revolution</h2>
        <p>Financial technology has disrupted traditional banking at an unprecedented pace. This whitepaper analyzes emerging trends and their implications for financial institutions.</p>
        
        <h2>Key Trends</h2>
        <ul>
          <li>Embedded finance - Banking integrated into non-financial platforms</li>
          <li>Open Banking - API-driven financial data sharing</li>
          <li>Blockchain and DeFi - Decentralized financial services</li>
          <li>AI-powered fraud detection and risk assessment</li>
        </ul>
        
        <h2>Regulatory Landscape</h2>
        <p>FinTech regulation varies significantly by region. Understanding compliance requirements is essential for successful implementation.</p>
        
        <h2>Investment Outlook</h2>
        <p>Global FinTech investment reached $164 billion in 2024, with continued growth projected through 2028.</p>
      `,
      category: "FinTech",
      author: "Raja Faiz Khan",
      authorRole: "Head of Business Development",
      authorAvatar: "https://i.ibb.co/XrsmrnGL/Screenshot-2026-05-22-022804.jpg",
      date: "2024-11-18",
      pages: 48,
      downloads: 2250,
      views: 4180,
      tags: ["FinTech", "Blockchain", "Banking", "Digital Payments"],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44",
      readTime: "28 min read",
      pdfUrl: "#"
    },
    {
      id: 6,
      title: "Edge Computing: Architecture, Use Cases, and Implementation",
      description: "Understanding edge architecture, use cases, and how it complements cloud computing for real-time applications and IoT solutions.",
      fullContent: `
        <h2>What is Edge Computing?</h2>
        <p>Edge computing processes data closer to its source, reducing latency and bandwidth usage. This whitepaper explores architecture patterns and implementation strategies.</p>
        
        <h2>Use Cases</h2>
        <ul>
          <li>IoT sensor data processing</li>
          <li>Autonomous vehicles</li>
          <li>Real-time video analytics</li>
          <li>Smart manufacturing</li>
        </ul>
        
        <h2>Architecture Patterns</h2>
        <p>This section covers edge-native architectures, including device-edge-cloud continuum and distributed data processing.</p>
        
        <h2>Implementation Roadmap</h2>
        <p>A phased approach to edge computing adoption, starting with pilot projects and scaling to enterprise-wide deployment.</p>
      `,
      category: "Edge Computing",
      author: "Muhammad Imam Tariq Minhas",
      authorRole: "Senior Project Manager",
      authorAvatar: "https://i.ibb.co/4wrzWRZ7/113d20c2-110d-48b1-9d22-5210123efc7f.jpg",
      date: "2024-10-22",
      pages: 35,
      downloads: 980,
      views: 1890,
      tags: ["Edge Computing", "IoT", "Infrastructure", "Real-time"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      readTime: "18 min read",
      pdfUrl: "#"
    },
    {
      id: 7,
      title: "DevOps Maturity: From Continuous Integration to Continuous Innovation",
      description: "A comprehensive guide to advancing DevOps maturity, including CI/CD pipelines, infrastructure as code, and security integration.",
      fullContent: `
        <h2>DevOps Maturity Model</h2>
        <p>Organizations progress through five stages of DevOps maturity. This whitepaper helps you assess your current state and plan improvements.</p>
        
        <h2>CI/CD Best Practices</h2>
        <p>Effective CI/CD pipelines reduce deployment failures by 70% and accelerate time-to-market by 50%.</p>
        
        <h2>DevSecOps Integration</h2>
        <p>Security must be integrated, not added later. This section covers shifting security left and automated vulnerability scanning.</p>
        
        <h2>Measuring Success</h2>
        <p>Key metrics include deployment frequency, lead time, change failure rate, and mean time to recovery.</p>
      `,
      category: "DevOps",
      author: "Khawaja Muzammil Rauf",
      authorRole: "Lead Mobile Application Developer",
      authorAvatar: "https://i.ibb.co/Kjxsc9t9/mzml.jpg",
      date: "2024-09-15",
      pages: 40,
      downloads: 1560,
      views: 2890,
      tags: ["DevOps", "CI/CD", "Automation", "DevSecOps"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
      readTime: "24 min read",
      pdfUrl: "#"
    },
    {
      id: 8,
      title: "Data Privacy and Compliance in the Digital Age",
      description: "Navigating GDPR, CCPA, and emerging privacy regulations while building customer trust through responsible data practices.",
      fullContent: `
        <h2>The Privacy Landscape</h2>
        <p>Privacy regulations have expanded globally. Organizations must navigate complex requirements while maintaining operational efficiency.</p>
        
        <h2>Key Regulations</h2>
        <ul>
          <li>GDPR - European Union data protection</li>
          <li>CCPA/CPRA - California consumer privacy</li>
          <li>PIPEDA - Canadian privacy framework</li>
          <li>Emerging AI regulations</li>
        </ul>
        
        <h2>Compliance Frameworks</h2>
        <p>This section provides practical guidance for implementing privacy-by-design and maintaining compliance across jurisdictions.</p>
        
        <h2>Building Customer Trust</h2>
        <p>Beyond compliance, transparent data practices build customer loyalty and competitive advantage.</p>
      `,
      category: "Cybersecurity",
      author: "Muhammad Abdullah",
      authorRole: "Network Administrator",
      authorAvatar: "https://i.ibb.co/7NQZ1XKm/Screenshot-2026-05-22-023040.jpg",
      date: "2024-08-20",
      pages: 55,
      downloads: 1870,
      views: 3420,
      tags: ["Privacy", "GDPR", "Compliance", "Data Protection"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      readTime: "32 min read",
      pdfUrl: "#"
    },
    {
      id: 9,
      title: "The Rise of Low-Code Development Platforms",
      description: "Analyzing the impact of low-code on software development productivity, citizen development, and enterprise application delivery.",
      fullContent: `
        <h2>The Low-Code Revolution</h2>
        <p>Low-code platforms are democratizing application development. This whitepaper analyzes adoption trends, benefits, and limitations.</p>
        
        <h2>Productivity Impact</h2>
        <p>Organizations report 3-10x faster application delivery with low-code platforms, enabling rapid response to business needs.</p>
        
        <h2>Citizen Development</h2>
        <p>Business users can now build applications, but governance frameworks are essential to manage quality and security risks.</p>
        
        <h2>Enterprise Integration</h2>
        <p>Low-code platforms must integrate with existing systems. API-first architecture and extensibility are critical selection criteria.</p>
      `,
      category: "Software Development",
      author: "Ahmed Butt",
      authorRole: "CEO & Founder",
      authorAvatar: "https://i.ibb.co/5hdfMW9G/20260501-0530-image.png",
      date: "2024-07-10",
      pages: 38,
      downloads: 2100,
      views: 3980,
      tags: ["Low-Code", "Developer Productivity", "Enterprise"],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
      readTime: "21 min read",
      pdfUrl: "#"
    },
    {
      id: 10,
      title: "Digital Transformation in Healthcare: Opportunities and Challenges",
      description: "Exploring telemedicine, electronic health records, AI diagnostics, and the digital transformation of healthcare delivery.",
      fullContent: `
        <h2>Healthcare Digital Transformation</h2>
        <p>The healthcare industry is undergoing rapid digital transformation. This whitepaper examines key technologies and implementation challenges.</p>
        
        <h2>Key Technologies</h2>
        <ul>
          <li>Telemedicine and remote patient monitoring</li>
          <li>AI-powered diagnostics and treatment planning</li>
          <li>Electronic Health Records interoperability</li>
          <li>IoT medical devices and real-time monitoring</li>
        </ul>
        
        <h2>Implementation Challenges</h2>
        <p>Regulatory compliance, data security, and clinician adoption are primary challenges. This section provides mitigation strategies.</p>
        
        <h2>ROI Analysis</h2>
        <p>Healthcare organizations report 30-50% operational efficiency improvements and 20% better patient outcomes after digital transformation.</p>
      `,
      category: "Healthcare",
      author: "Mashahid Hussain Syed",
      authorRole: "Lead Technical Writer & Research Analyst",
      authorAvatar: "https://i.ibb.co/CsKcKbF1/Screenshot-2026-05-22-023730.jpg",
      date: "2024-06-05",
      pages: 48,
      downloads: 1430,
      views: 2670,
      tags: ["Healthcare", "Digital Transformation", "Telemedicine", "AI"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      readTime: "26 min read",
      pdfUrl: "#"
    }
  ];

  const categories = ["all", ...new Set(whitepapers.map(wp => wp.category))];

  const filteredWhitepapers = whitepapers.filter(wp => {
    const matchesSearch = wp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wp.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || wp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredWhitepapers.length / itemsPerPage);
  const paginatedWhitepapers = filteredWhitepapers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDownload = (whitepaper) => {
    // In production, this would trigger actual PDF download
    alert(`Downloading "${whitepaper.title}"...\n\nThis would download the PDF file.`);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
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
            Deep-dive research and analysis on emerging technologies, industry trends, and best practices from CodeNagar experts.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { value: "10+", label: "Whitepapers Published", icon: FileText },
            { value: "25K+", label: "Total Downloads", icon: Download },
            { value: "50K+", label: "Total Views", icon: Eye },
            { value: "4.9★", label: "Average Rating", icon: Award },
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

        {/* Whitepapers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedWhitepapers.map((wp, idx) => (
            <motion.div
              key={wp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass-card overflow-hidden group cursor-pointer"
              onClick={() => setSelectedWhitepaper(wp)}
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
                  {wp.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 bg-dark-400 rounded-full text-gray-400">#{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <img src={wp.authorAvatar} alt={wp.author} className="w-6 h-6 rounded-full object-cover" />
                    <span>{wp.author.split(' ')[0]}</span>
                  </div>
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {wp.views.toLocaleString()}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(wp);
                    }}
                    className="flex-1 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition text-sm flex items-center justify-center gap-1"
                  >
                    <Download className="w-4 h-4" /> Download PDF
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedWhitepaper(wp);
                    }}
                    className="px-3 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
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

        {filteredWhitepapers.length === 0 && (
          <div className="text-center py-20">
            <FileText className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">No whitepapers found matching your criteria.</p>
          </div>
        )}

        {/* Whitepaper Detail Modal */}
        <AnimatePresence>
          {selectedWhitepaper && (
            <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 overflow-y-auto" onClick={() => setSelectedWhitepaper(null)}>
              <div className="min-h-screen py-8 px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  className="max-w-4xl mx-auto bg-dark-200 rounded-2xl overflow-hidden border border-cyan-500/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="sticky top-0 bg-dark-200 p-6 border-b border-white/10 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-cyan-400" />
                      <h2 className="text-xl font-bold">{selectedWhitepaper.title}</h2>
                    </div>
                    <button onClick={() => setSelectedWhitepaper(null)} className="p-2 hover:bg-white/10 rounded-lg">
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="p-6 md:p-8">
                    {/* Hero Image */}
                    <div className="h-64 md:h-80 overflow-hidden rounded-xl mb-6">
                      <img 
                        src={selectedWhitepaper.image} 
                        alt={selectedWhitepaper.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                        {selectedWhitepaper.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {selectedWhitepaper.readTime}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {formatDate(selectedWhitepaper.date)}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <BookOpen className="w-3 h-3" /> {selectedWhitepaper.pages} pages
                      </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">{selectedWhitepaper.title}</h1>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 p-4 bg-dark-300/50 rounded-xl mb-8">
                      <img 
                        src={selectedWhitepaper.authorAvatar} 
                        alt={selectedWhitepaper.author}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{selectedWhitepaper.author}</h3>
                        <p className="text-cyan-400 text-sm">{selectedWhitepaper.authorRole}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div 
                      className="prose prose-invert prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: selectedWhitepaper.fullContent }}
                    />

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <h4 className="font-semibold mb-3">Tags:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedWhitepaper.tags.map((tag, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-dark-400 rounded-full text-gray-400">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats & Download */}
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <div className="flex flex-wrap gap-6 items-center justify-between">
                        <div className="flex gap-6">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Eye className="w-4 h-4" />
                            <span>{selectedWhitepaper.views.toLocaleString()} views</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Download className="w-4 h-4" />
                            <span>{selectedWhitepaper.downloads.toLocaleString()} downloads</span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDownload(selectedWhitepaper)}
                          className="px-6 py-3 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition flex items-center gap-2"
                        >
                          <Download className="w-5 h-5" /> Download PDF
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-cyan-600/10 to-indigo-600/10 rounded-2xl p-8 border border-cyan-500/20"
        >
          <h3 className="text-2xl font-bold mb-2">Subscribe for Research Updates</h3>
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