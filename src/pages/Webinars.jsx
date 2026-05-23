// frontend/src/pages/Webinars.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, Clock, Users, Video, Play, Download, 
  Sparkles, Search,  CheckCircle,
  Award, TrendingUp,  Bell,
  X, Eye
} from "lucide-react";

const Webinars = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [registerEmail, setRegisterEmail] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [selectedWebinarForReg, setSelectedWebinarForReg] = useState(null);
  const [registrationStatus, setRegistrationStatus] = useState({ type: "", message: "" });

  const webinars = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      description: "Explore how artificial intelligence is transforming the software development lifecycle, from code generation to testing and deployment.",
      category: "Artificial Intelligence",
      speaker: "Ahmed Butt",
      speakerTitle: "CEO & Founder, CodeNagar",
      speakerAvatar: "https://ui-avatars.com/api/?background=0891b2&color=fff&name=Ahmed",
      date: "2025-06-15",
      time: "14:00 EST",
      duration: "60 min",
      attendees: 1240,
      rating: 4.8,
      image: "https://placehold.co/800x450/1e293b/ffffff?text=AI+Webinar",
      recordingUrl: "#",
      slidesUrl: "#",
      tags: ["AI", "Machine Learning", "Development"],
      learningOutcomes: [
        "Understand AI's impact on development workflows",
        "Learn about AI-powered coding assistants",
        "Explore real-world AI integration examples"
      ]
    },
    {
      id: 2,
      title: "Mastering React 19: New Features and Best Practices",
      description: "Deep dive into React 19's latest features including Server Components, Actions, and improved performance optimizations.",
      category: "Web Development",
      speaker: "Khawaja Muzammil Rauf",
      speakerTitle: "Lead Mobile Developer, CodeNagar",
      speakerAvatar: "https://ui-avatars.com/api/?background=7c3aed&color=fff&name=Muzammil",
      date: "2025-06-20",
      time: "11:00 EST",
      duration: "90 min",
      attendees: 890,
      rating: 4.9,
      image: "https://placehold.co/800x450/1e293b/ffffff?text=React+19+Webinar",
      recordingUrl: "#",
      slidesUrl: "#",
      tags: ["React", "Frontend", "JavaScript"],
      learningOutcomes: [
        "Master React 19 Server Components",
        "Implement new performance optimizations",
        "Build modern React applications"
      ]
    },
    {
      id: 3,
      title: "Cloud Security Best Practices for 2025",
      description: "Learn the latest cloud security strategies, compliance requirements, and threat mitigation techniques for AWS, Azure, and GCP.",
      category: "Cloud Computing",
      speaker: "Muhammad Abdullah",
      speakerTitle: "Network Administrator, CodeNagar",
      speakerAvatar: "https://ui-avatars.com/api/?background=ea580c&color=fff&name=Abdullah",
      date: "2025-06-25",
      time: "15:00 EST",
      duration: "75 min",
      attendees: 2100,
      rating: 4.7,
      image: "https://placehold.co/800x450/1e293b/ffffff?text=Cloud+Security",
      recordingUrl: "#",
      slidesUrl: "#",
      tags: ["Cloud", "Security", "AWS", "Azure"],
      learningOutcomes: [
        "Implement zero-trust security models",
        "Master cloud compliance requirements",
        "Learn threat detection techniques"
      ]
    },
    {
      id: 4,
      title: "Building Scalable Mobile Apps with Flutter",
      description: "Best practices for building production-ready Flutter applications that scale with your business needs.",
      category: "Mobile Development",
      speaker: "Khawaja Muzammil Rauf",
      speakerTitle: "Lead Mobile Developer, CodeNagar",
      speakerAvatar: "https://ui-avatars.com/api/?background=7c3aed&color=fff&name=Muzammil",
      date: "2025-07-05",
      time: "10:00 EST",
      duration: "60 min",
      attendees: 560,
      rating: 4.6,
      image: "https://placehold.co/800x450/1e293b/ffffff?text=Flutter+Webinar",
      recordingUrl: "#",
      slidesUrl: "#",
      tags: ["Flutter", "Mobile", "Dart"],
      learningOutcomes: [
        "Architect scalable Flutter apps",
        "Optimize performance for production",
        "Implement state management patterns"
      ]
    },
    {
      id: 5,
      title: "Data Science for Business Leaders",
      description: "A non-technical introduction to data science concepts, analytics strategies, and how to leverage data for business decisions.",
      category: "Data Science",
      speaker: "Ahmed Butt",
      speakerTitle: "CEO & Founder, CodeNagar",
      speakerAvatar: "https://ui-avatars.com/api/?background=0891b2&color=fff&name=Ahmed",
      date: "2025-07-12",
      time: "13:00 EST",
      duration: "50 min",
      attendees: 1870,
      rating: 4.8,
      image: "https://placehold.co/800x450/1e293b/ffffff?text=Data+Science+Webinar",
      recordingUrl: "#",
      slidesUrl: "#",
      tags: ["Data Science", "Analytics", "Business"],
      learningOutcomes: [
        "Understand key data science concepts",
        "Learn to interpret analytics reports",
        "Make data-driven business decisions"
      ]
    },
    {
      id: 6,
      title: "DevOps for Startups: CI/CD on a Budget",
      description: "How early-stage startups can implement professional CI/CD pipelines without breaking the bank.",
      category: "DevOps",
      speaker: "Muhammad Imam Tariq Minhas",
      speakerTitle: "Senior Project Manager, CodeNagar",
      speakerAvatar: "https://ui-avatars.com/api/?background=dc2626&color=fff&name=Imam",
      date: "2025-07-18",
      time: "12:00 EST",
      duration: "55 min",
      attendees: 430,
      rating: 4.5,
      image: "https://placehold.co/800x450/1e293b/ffffff?text=DevOps+Webinar",
      recordingUrl: "#",
      slidesUrl: "#",
      tags: ["DevOps", "CI/CD", "Startups"],
      learningOutcomes: [
        "Set up GitHub Actions for free",
        "Automate testing and deployment",
        "Monitor applications on a budget"
      ]
    }
  ];

  const categories = ["all", "Artificial Intelligence", "Web Development", "Mobile Development", "Cloud Computing", "Data Science", "DevOps"];

  const filteredWebinars = webinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      webinar.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      webinar.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || webinar.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const upcomingWebinars = webinars.filter(w => new Date(w.date) > new Date());
  const pastWebinars = webinars.filter(w => new Date(w.date) <= new Date());

  const handleRegister = (webinar) => {
    setSelectedWebinarForReg(webinar);
    setShowRegisterModal(true);
    setRegistrationStatus({ type: "", message: "" });
  };

  const submitRegistration = () => {
    if (!registerEmail) {
      setRegistrationStatus({ type: "error", message: "Please enter your email address." });
      return;
    }
    setRegistrationStatus({ type: "success", message: `Successfully registered for "${selectedWebinarForReg.title}"! A confirmation email has been sent to ${registerEmail}.` });
    setTimeout(() => {
      setShowRegisterModal(false);
      setRegisterEmail("");
      setRegistrationStatus({ type: "", message: "" });
    }, 3000);
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const WebinarCard = ({ webinar, type }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="glass-card overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={webinar.image} 
          alt={webinar.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {type === "upcoming" && (
          <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            Live Soon
          </div>
        )}
        {type === "past" && (
          <div className="absolute top-4 right-4 bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
            Recording Available
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
            {webinar.category}
          </span>
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Clock className="w-3 h-3" /> {webinar.duration}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
          {webinar.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{webinar.description}</p>
        
        <div className="flex items-center gap-3 mb-3">
          <img src={webinar.speakerAvatar} alt={webinar.speaker} className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-sm font-semibold">{webinar.speaker}</p>
            <p className="text-xs text-gray-500">{webinar.speakerTitle}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(webinar.date).toLocaleDateString()}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {webinar.time}</span>
          <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {webinar.attendees.toLocaleString()}</span>
        </div>

        <div className="flex gap-2">
          {type === "upcoming" ? (
            <button
              onClick={() => handleRegister(webinar)}
              className="flex-1 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition text-sm flex items-center justify-center gap-1"
            >
              <Bell className="w-4 h-4" /> Register Now
            </button>
          ) : (
            <>
              <a href={webinar.recordingUrl} className="flex-1 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition text-sm flex items-center justify-center gap-1">
                <Play className="w-4 h-4" /> Watch Recording
              </a>
              <a href={webinar.slidesUrl} className="px-3 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition">
                <Download className="w-4 h-4" />
              </a>
            </>
          )}
          <button
            onClick={() => setSelectedWebinar(webinar)}
            className="px-3 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );

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
            <Video className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">Live & On-Demand</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Tech <span className="gradient-text">Webinars</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert-led sessions on the latest technology trends, tools, and best practices. Learn from industry leaders.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { value: "50+", label: "Webinars Hosted", icon: Video },
            { value: "10K+", label: "Attendees", icon: Users },
            { value: "4.8★", label: "Average Rating", icon: Award },
            { value: "25+", label: "Expert Speakers", icon: TrendingUp },
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
              placeholder="Search webinars..."
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

        {/* Upcoming Webinars Section */}
        {upcomingWebinars.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              Upcoming Webinars
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingWebinars.filter(w => selectedCategory === "all" || w.category === selectedCategory)
                .filter(w => w.title.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((webinar) => (
                  <WebinarCard key={webinar.id} webinar={webinar} type="upcoming" />
                ))}
            </div>
          </div>
        )}

        {/* Past Webinars Section */}
        {pastWebinars.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Play className="w-6 h-6 text-cyan-400" />
              Recorded Webinars
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastWebinars.filter(w => selectedCategory === "all" || w.category === selectedCategory)
                .filter(w => w.title.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((webinar) => (
                  <WebinarCard key={webinar.id} webinar={webinar} type="past" />
                ))}
            </div>
          </div>
        )}

        {filteredWebinars.length === 0 && (
          <div className="text-center py-20">
            <Video className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">No webinars found matching your criteria.</p>
          </div>
        )}

        {/* Webinar Details Modal */}
        {selectedWebinar && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setSelectedWebinar(null)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-dark-200 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-dark-200 border-b border-white/10 p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">{selectedWebinar.title}</h2>
                  <button onClick={() => setSelectedWebinar(null)} className="hover:text-cyan-400">
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <img src={selectedWebinar.image} alt={selectedWebinar.title} className="w-full h-64 object-cover rounded-lg" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Webinar Details</h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-cyan-400" /> {formatDate(selectedWebinar.date)}</div>
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-cyan-400" /> {selectedWebinar.time} ({selectedWebinar.duration})</div>
                      <div className="flex items-center gap-2"><Users className="w-4 h-4 text-cyan-400" /> {selectedWebinar.attendees.toLocaleString()} attendees</div>
                      <div className="flex items-center gap-2"><Award className="w-4 h-4 text-cyan-400" /> Rating: {selectedWebinar.rating} ★</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Speaker</h3>
                    <div className="flex items-center gap-3">
                      <img src={selectedWebinar.speakerAvatar} alt={selectedWebinar.speaker} className="w-12 h-12 rounded-full" />
                      <div>
                        <p className="font-semibold">{selectedWebinar.speaker}</p>
                        <p className="text-sm text-gray-400">{selectedWebinar.speakerTitle}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-gray-300">{selectedWebinar.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">What You'll Learn</h3>
                  <ul className="space-y-2">
                    {selectedWebinar.learningOutcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" /> {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedWebinar.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-dark-400 rounded-full text-gray-300">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  {new Date(selectedWebinar.date) > new Date() ? (
                    <button
                      onClick={() => {
                        setSelectedWebinar(null);
                        handleRegister(selectedWebinar);
                      }}
                      className="flex-1 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition"
                    >
                      Register Now
                    </button>
                  ) : (
                    <>
                      <a href={selectedWebinar.recordingUrl} className="flex-1 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition text-center">
                        Watch Recording
                      </a>
                      <a href={selectedWebinar.slidesUrl} className="flex-1 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition text-center">
                        Download Slides
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Registration Modal */}
        {showRegisterModal && selectedWebinarForReg && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setShowRegisterModal(false)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-dark-200 rounded-2xl max-w-md w-full border border-cyan-500"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-white/10">
                <h2 className="text-2xl font-bold mb-1">Register for Webinar</h2>
                <p className="text-gray-400 text-sm">{selectedWebinarForReg.title}</p>
              </div>
              <div className="p-6 space-y-4">
                {registrationStatus.message && (
                  <div className={`p-3 rounded-lg text-sm ${registrationStatus.type === "success" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                    {registrationStatus.message}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button onClick={submitRegistration} className="flex-1 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition">
                    Register
                  </button>
                  <button onClick={() => setShowRegisterModal(false)} className="px-4 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition">
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Newsletter CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-cyan-600/10 to-indigo-600/10 rounded-2xl p-8 border border-cyan-500/20"
        >
          <h3 className="text-2xl font-bold mb-2">Never Miss a Webinar</h3>
          <p className="text-gray-400 mb-4">Subscribe to get notified about upcoming webinars and tech events.</p>
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

export default Webinars;