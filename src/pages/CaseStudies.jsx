// frontend/src/pages/CaseStudies.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Sparkles, TrendingUp, Users, Clock, 
  CheckCircle, Rocket, Award,
 Briefcase, Search
} from "lucide-react";

const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Transformation",
      client: "FashionHub.pk",
      industry: "E-commerce",
      challenge: "Legacy platform unable to handle 50,000+ daily users during peak seasons",
      solution: "Built a scalable microservices architecture with React, Node.js, and MongoDB",
      results: [
        "300% increase in sales within 6 months",
        "99.99% uptime during peak seasons",
        "50% faster page load times",
        "40% reduction in bounce rate"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Redis"],
      duration: "4 months",
      teamSize: "6 developers",
      image: "https://placehold.co/800x500/1e293b/ffffff?text=E-commerce+Case+Study",
      testimonial: {
        quote: "CodeNagar transformed our online presence. The new platform handles peak traffic effortlessly and our sales have skyrocketed.",
        author: "Sarah Ahmed",
        role: "CEO, FashionHub.pk"
      }
    },
    {
      id: 2,
      title: "AI-Powered Customer Support System",
      client: "FinServe Bank",
      industry: "Finance",
      challenge: "High customer support costs and long response times",
      solution: "Implemented an AI chatbot with NLP capabilities for 24/7 automated support",
      results: [
        "60% reduction in support costs",
        "45-second average response time",
        "85% of queries resolved automatically",
        "92% customer satisfaction rate"
      ],
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      duration: "6 months",
      teamSize: "4 developers",
      image: "https://placehold.co/800x500/1e293b/ffffff?text=AI+Case+Study",
      testimonial: {
        quote: "The AI chatbot has revolutionized our customer service. Our team can now focus on complex issues while AI handles routine queries.",
        author: "Ahmed Raza",
        role: "CTO, FinServe Bank"
      }
    },
    {
      id: 3,
      title: "Healthcare Management Platform",
      client: "MediCare Plus",
      industry: "Healthcare",
      challenge: "Fragmented patient data across multiple systems",
      solution: "Unified healthcare platform with secure data integration and real-time analytics",
      results: [
        "75% reduction in data entry errors",
        "50% faster patient processing",
        "HIPAA compliant system",
        "Real-time analytics dashboard"
      ],
      technologies: ["React", "Django", "PostgreSQL", "Docker", "AWS"],
      duration: "8 months",
      teamSize: "8 developers",
      image: "https://placehold.co/800x500/1e293b/ffffff?text=Healthcare+Case+Study",
      testimonial: {
        quote: "CodeNagar delivered a game-changing solution. Our operations have never been more efficient.",
        author: "Dr. Fatima Khan",
        role: "Director, MediCare Plus"
      }
    },
    {
      id: 4,
      title: "Real Estate Mobile App",
      client: "PropertyFinder",
      industry: "Real Estate",
      challenge: "Outdated mobile experience with low user engagement",
      solution: "Cross-platform mobile app with AR property viewing and AI recommendations",
      results: [
        "500% increase in app downloads",
        "3x user engagement",
        "40% faster property search",
        "250K+ monthly active users"
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "MapBox"],
      duration: "5 months",
      teamSize: "5 developers",
      image: "https://placehold.co/800x500/1e293b/ffffff?text=Real+Estate+Case+Study",
      testimonial: {
        quote: "The AR feature has been a game-changer. Users can now visualize properties before visiting.",
        author: "Usman Chaudhry",
        role: "CEO, PropertyFinder"
      }
    },
    {
      id: 5,
      title: "Logistics Optimization System",
      client: "FastTrack Logistics",
      industry: "Logistics",
      challenge: "Inefficient route planning and delivery delays",
      solution: "AI-powered route optimization and real-time tracking system",
      results: [
        "30% reduction in fuel costs",
        "25% faster delivery times",
        "Real-time fleet tracking",
        "98% on-time delivery rate"
      ],
      technologies: ["Python", "React", "PostgreSQL", "GraphQL", "Google Maps API"],
      duration: "6 months",
      teamSize: "6 developers",
      image: "https://placehold.co/800x500/1e293b/ffffff?text=Logistics+Case+Study",
      testimonial: {
        quote: "Our operational efficiency has improved dramatically. The route optimization alone has saved us millions.",
        author: "Ali Raza",
        role: "COO, FastTrack Logistics"
      }
    },
    {
      id: 6,
      title: "EdTech Learning Platform",
      client: "LearnSmart",
      industry: "Education",
      challenge: "Poor student engagement and completion rates",
      solution: "Gamified learning platform with AI-powered personalized recommendations",
      results: [
        "75% course completion rate",
        "200% increase in daily active users",
        "4.8★ app store rating",
        "500K+ courses completed"
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "WebRTC"],
      duration: "7 months",
      teamSize: "7 developers",
      image: "https://placehold.co/800x500/1e293b/ffffff?text=EdTech+Case+Study",
      testimonial: {
        quote: "Students love the gamified experience. Our engagement metrics have exceeded all expectations.",
        author: "Sara Khan",
        role: "Founder, LearnSmart"
      }
    }
  ];

  const industries = ["all", "E-commerce", "Finance", "Healthcare", "Real Estate", "Logistics", "Education"];

  const filteredStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === "all" || study.industry === selectedIndustry;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  const getIndustryColor = (industry) => {
    const colors = {
      "E-commerce": "from-blue-500 to-cyan-500",
      "Finance": "from-emerald-500 to-teal-500",
      "Healthcare": "from-rose-500 to-red-500",
      "Real Estate": "from-purple-500 to-pink-500",
      "Logistics": "from-orange-500 to-red-500",
      "Education": "from-green-500 to-emerald-500"
    };
    return colors[industry] || "from-cyan-500 to-blue-500";
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
            <span className="text-cyan-300 text-sm">Success Stories</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Case Studies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world success stories showcasing how we've helped businesses transform through technology.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { value: "50+", label: "Projects Delivered", icon: Briefcase },
            { value: "95%", label: "Client Satisfaction", icon: Award },
            { value: "40%", label: "Avg. Cost Reduction", icon: TrendingUp },
            { value: "3x", label: "Avg. Growth Rate", icon: Rocket },
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
              placeholder="Search case studies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
            />
          </div>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="px-4 py-2.5 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-white/10"
          >
            {industries.map(ind => (
              <option key={ind} value={ind}>{ind.charAt(0).toUpperCase() + ind.slice(1)}</option>
            ))}
          </select>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {filteredStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className={`inline-block text-xs px-3 py-1 bg-gradient-to-r ${getIndustryColor(study.industry)} rounded-full text-white mb-2`}>
                      {study.industry}
                    </span>
                    <h3 className="text-2xl font-bold mb-1">{study.title}</h3>
                    <p className="text-cyan-400 text-sm">{study.client}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-red-400">Challenge</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-green-400">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-cyan-400">Key Results</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-1 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-dark-400 rounded-full text-gray-300">{tech}</span>
                    ))}
                  </div>
                  <div className="bg-dark-400/50 rounded-lg p-3 mb-4">
                    <p className="text-gray-300 italic text-sm">"{study.testimonial.quote}"</p>
                    <p className="text-cyan-400 text-sm mt-1">— {study.testimonial.author}, {study.testimonial.role}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {study.duration}</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {study.teamSize}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-cyan-600/10 to-indigo-600/10 rounded-2xl p-8 border border-cyan-500/20"
        >
          <h3 className="text-2xl font-bold mb-2">Ready to Be Our Next Success Story?</h3>
          <p className="text-gray-400 mb-4">Let's discuss how we can help transform your business.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;