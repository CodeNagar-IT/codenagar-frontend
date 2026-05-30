// frontend/src/pages/CaseStudies.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Sparkles, TrendingUp, Users, Clock, 
  CheckCircle, Rocket, Award, Briefcase, Search, 
  Star, Zap, Target
} from "lucide-react";

// Import local images for JahanSaaS and Dynamics 360
import jahanSaaSLogo from "../assets/jahan-saas-logo.png";
import dynamics360Logo from "../assets/dynamics360-logo.png";

const CaseStudies = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const caseStudies = [
    {
      id: 1,
      title: "School Management System Transformation",
      client: "JahanSaaS",
      logo: jahanSaaSLogo,
      industry: "Education",
      challenge: "Schools were struggling with fragmented systems for attendance, grading, fee collection, and parent communication. Manual processes led to errors, delays, and frustrated parents.",
      solution: "Developed a comprehensive school management platform with modules for student information, attendance tracking, online fee collection, gradebook, parent portal, and real-time notifications. The system integrates SMS and email for instant parent communication.",
      results: [
        "80% reduction in administrative workload",
        "99.9% fee collection efficiency",
        "Real-time parent-teacher communication",
        "Zero data loss with automated backups",
        "200+ schools onboarded within first year"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Twilio", "Stripe"],
      duration: "6 months",
      teamSize: "8 developers",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
      testimonial: {
        quote: "CodeNagar completely revolutionized how we manage schools. The platform has saved countless hours of manual work and improved parent satisfaction dramatically.",
        author: "Basit Ali Jahan",
        role: "CEO, JahanSaaS"
      },
      featured: true
    },
    {
      id: 2,
      title: "ERP Modernization for Manufacturing Enterprise",
      client: "Dynamics 360",
      logo: dynamics360Logo,
      industry: "Manufacturing",
      challenge: "A large manufacturing company was running on outdated ERP systems causing production delays, inventory mismatches, and poor financial reporting. Legacy systems couldn't scale with business growth.",
      solution: "Implemented a modern ERP solution with modules for inventory management, production planning, supply chain, financial accounting, and business intelligence. Real-time dashboards provide visibility across all operations.",
      results: [
        "40% reduction in inventory costs",
        "35% improvement in production efficiency",
        "Real-time financial reporting",
        "95% reduction in manual data entry",
        "Seamless integration with existing systems"
      ],
      technologies: [".NET Core", "React", "SQL Server", "Azure", "Power BI"],
      duration: "10 months",
      teamSize: "12 developers",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa",
      testimonial: {
        quote: "The new ERP system has transformed our operations. We now have real-time visibility into every aspect of our business, from inventory to finances.",
        author: "Syed Saqlain Sajjad",
        role: "Jr. ERP Consultant, Dynamics 360"
      },
      featured: true
    },
    {
      id: 3,
      title: "AI-Powered Customer Support Automation",
      client: "FinServe Bank",
      industry: "Finance",
      challenge: "Customer support costs were skyrocketing with long wait times and repetitive queries overwhelming human agents.",
      solution: "Implemented an AI chatbot with NLP capabilities handling 85% of customer queries automatically. The system learns from interactions and escalates complex issues to human agents.",
      results: [
        "65% reduction in support costs",
        "30-second average response time",
        "92% customer satisfaction rate",
        "24/7 availability",
        "100K+ automated conversations monthly"
      ],
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Redis"],
      duration: "5 months",
      teamSize: "6 developers",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      testimonial: {
        quote: "The AI chatbot has revolutionized our customer service. Response times have dropped dramatically and customer satisfaction is at an all-time high.",
        author: "Ahmed Raza",
        role: "CTO, FinServe Bank"
      },
      featured: false
    },
    {
      id: 4,
      title: "E-commerce Platform Scaling for Fashion Retailer",
      client: "FashionHub.pk",
      industry: "E-commerce",
      challenge: "Existing platform crashed during flash sales, losing millions in potential revenue. Checkout abandonment was at 70% due to poor performance.",
      solution: "Built a scalable microservices architecture on AWS with auto-scaling, CDN, and optimized database queries. Implemented one-click checkout and abandoned cart recovery.",
      results: [
        "500% increase in concurrent users supported",
        "45% decrease in checkout abandonment",
        "300% increase in Black Friday sales",
        "99.99% uptime during peak events",
        "40% faster page load times"
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "AWS", "Redis", "Stripe"],
      duration: "4 months",
      teamSize: "7 developers",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      testimonial: {
        quote: "The new platform handles our biggest sales events without a hitch. Revenue has skyrocketed and customers love the seamless experience.",
        author: "Sarah Ahmed",
        role: "CEO, FashionHub.pk"
      },
      featured: false
    },
    {
      id: 5,
      title: "Healthcare Telemedicine Platform",
      client: "MediCare Plus",
      industry: "Healthcare",
      challenge: "Patients faced long wait times for appointments. Rural areas had limited access to specialists.",
      solution: "Developed a HIPAA-compliant telemedicine platform with video consultations, e-prescriptions, patient records, and appointment scheduling. Integrated with pharmacy delivery partners.",
      results: [
        "80% reduction in patient wait times",
        "50K+ monthly virtual consultations",
        "Access to specialists for rural patients",
        "95% patient satisfaction rate",
        "Fully HIPAA compliant"
      ],
      technologies: ["React", "Django", "PostgreSQL", "WebRTC", "AWS", "Twilio"],
      duration: "7 months",
      teamSize: "9 developers",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
      testimonial: {
        quote: "CodeNagar delivered a platform that has transformed patient care. We're now reaching patients who previously had no access to specialists.",
        author: "Dr. Fatima Khan",
        role: "Director, MediCare Plus"
      },
      featured: true
    },
    {
      id: 6,
      title: "Real Estate AR Property Viewer",
      client: "PropertyFinder",
      industry: "Real Estate",
      challenge: "Online property listings didn't give buyers enough confidence to make decisions without physical visits.",
      solution: "Created a cross-platform mobile app with AR property viewing, virtual staging, and AI-powered property recommendations based on user preferences.",
      results: [
        "600% increase in app downloads",
        "4x user engagement",
        "50% fewer physical visits needed",
        "35% faster sales cycles",
        "300K+ monthly active users"
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "MapBox", "ARCore"],
      duration: "6 months",
      teamSize: "6 developers",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      testimonial: {
        quote: "The AR feature has completely changed how people buy property. Buyers can now visualize homes without visiting in person.",
        author: "Usman Chaudhry",
        role: "CEO, PropertyFinder"
      },
      featured: false
    },
    {
      id: 7,
      title: "Logistics Route Optimization AI",
      client: "FastTrack Logistics",
      industry: "Logistics",
      challenge: "Delivery fleet was inefficient with high fuel costs and missed delivery windows.",
      solution: "Implemented AI-powered route optimization that considers traffic, weather, delivery windows, and vehicle capacity. Real-time tracking for customers.",
      results: [
        "35% reduction in fuel costs",
        "28% faster delivery times",
        "99% on-time delivery rate",
        "Real-time customer notifications",
        "$2M annual savings"
      ],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Google Maps API", "Redis"],
      duration: "5 months",
      teamSize: "5 developers",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      testimonial: {
        quote: "The route optimization has saved us millions. Our drivers now deliver more packages in less time with lower fuel costs.",
        author: "Ali Raza",
        role: "COO, FastTrack Logistics"
      },
      featured: false
    },
    {
      id: 8,
      title: "Smart Pharmacy Inventory Management",
      client: "HealthCare Pharmacy Chain",
      industry: "Healthcare",
      challenge: "Pharmacies faced stockouts of critical medicines while overstocking slow-moving items. Expiry management was manual and error-prone.",
      solution: "Built an AI-powered inventory system that predicts demand, automates reordering, tracks expiry dates, and optimizes stock levels across 50+ locations.",
      results: [
        "60% reduction in stockouts",
        "40% decrease in expired medicines",
        "25% improvement in inventory turnover",
        "Automated ordering saves 20 hours weekly",
        "Real-time visibility across all locations"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "TensorFlow", "Docker"],
      duration: "8 months",
      teamSize: "7 developers",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
      testimonial: {
        quote: "The system has transformed how we manage inventory. We never run out of critical medicines now and expiry losses have dropped dramatically.",
        author: "Dr. Hassan Ali",
        role: "Operations Director"
      },
      featured: false
    },
    {
      id: 9,
      title: "EdTech Gamified Learning Platform",
      client: "LearnSmart",
      industry: "Education",
      challenge: "Student engagement was low with only 30% course completion rates. Users found the platform boring and uninspiring.",
      solution: "Created a gamified learning experience with points, badges, leaderboards, and AI-powered personalized learning paths. Added social features for peer learning.",
      results: [
        "75% course completion rate",
        "250% increase in daily active users",
        "4.9★ app store rating",
        "1M+ courses completed",
        "45% improvement in test scores"
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "WebRTC", "Socket.io"],
      duration: "7 months",
      teamSize: "8 developers",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      testimonial: {
        quote: "Students love the gamified experience. Our completion rates have more than doubled and engagement is through the roof.",
        author: "Sara Khan",
        role: "Founder, LearnSmart"
      },
      featured: true
    },
    {
      id: 10,
      title: "Restaurant Management & Delivery Platform",
      client: "FoodieBay",
      industry: "Food & Beverage",
      challenge: "Restaurants struggled with order management, delivery logistics, and customer retention. No unified platform for online ordering.",
      solution: "Built a complete ecosystem with restaurant onboarding, customer ordering app, delivery partner app, and admin dashboard. Integrated with payment gateways and loyalty programs.",
      results: [
        "500+ restaurants onboarded",
        "1M+ orders processed monthly",
        "30-minute average delivery time",
        "65% customer retention rate",
        "40% revenue growth for partner restaurants"
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "Redis", "Firebase", "Stripe"],
      duration: "9 months",
      teamSize: "10 developers",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      testimonial: {
        quote: "FoodieBay has transformed our business. The platform handles everything from order management to delivery tracking seamlessly.",
        author: "Tariq Mehmood",
        role: "CEO, FoodieBay"
      },
      featured: false
    }
  ];

  const industries = ["all", "Education", "Manufacturing", "Finance", "E-commerce", "Healthcare", "Real Estate", "Logistics", "Food & Beverage"];

  const filteredStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === "all" || study.industry === selectedIndustry;
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  const getIndustryColor = (industry) => {
    const colors = {
      "Education": "from-blue-500 to-cyan-500",
      "Manufacturing": "from-slate-500 to-gray-500",
      "Finance": "from-emerald-500 to-teal-500",
      "E-commerce": "from-purple-500 to-pink-500",
      "Healthcare": "from-rose-500 to-red-500",
      "Real Estate": "from-orange-500 to-amber-500",
      "Logistics": "from-indigo-500 to-blue-500",
      "Food & Beverage": "from-yellow-500 to-orange-500"
    };
    return colors[industry] || "from-cyan-500 to-blue-500";
  };

  // Featured case studies (first 2)
  const featuredStudies = filteredStudies.filter(s => s.featured);
  const otherStudies = filteredStudies.filter(s => !s.featured);

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
            { value: "100+", label: "Projects Delivered", icon: Briefcase },
            { value: "98%", label: "Client Satisfaction", icon: Award },
            { value: "45%", label: "Avg. Cost Reduction", icon: TrendingUp },
            { value: "4x", label: "Avg. Growth Rate", icon: Rocket },
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
              <option key={ind} value={ind}>{ind === "all" ? "All Industries" : ind}</option>
            ))}
          </select>
        </div>

        {/* Featured Case Studies Badge */}
        {featuredStudies.length > 0 && searchTerm === "" && selectedIndustry === "all" && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <h2 className="text-xl font-semibold">Featured Success Stories</h2>
            </div>
          </div>
        )}

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {/* Featured Studies */}
          {featuredStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card overflow-hidden border border-cyan-500/30 relative"
            >
              {study.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" /> Featured
                  </span>
                </div>
              )}
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
                    <div className="flex items-center gap-3 mb-2">
                      {study.logo && (
                        <img 
                          src={study.logo} 
                          alt={study.client} 
                          className="w-12 h-12 object-contain rounded-lg bg-white/10 p-2"
                        />
                      )}
                      <span className={`inline-block text-xs px-3 py-1 bg-gradient-to-r ${getIndustryColor(study.industry)} rounded-full text-white`}>
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{study.title}</h3>
                    <p className="text-cyan-400 text-sm">{study.client}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-red-400 flex items-center gap-1">
                      <Target className="w-4 h-4" /> Challenge
                    </h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-green-400 flex items-center gap-1">
                      <Zap className="w-4 h-4" /> Solution
                    </h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-cyan-400 flex items-center gap-1">
                      <Rocket className="w-4 h-4" /> Key Results
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.slice(0, 4).map((result, i) => (
                        <div key={i} className="flex items-center gap-1 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-xs">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 5).map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-dark-400 rounded-full text-gray-300">{tech}</span>
                    ))}
                    {study.technologies.length > 5 && (
                      <span className="text-xs px-2 py-1 bg-dark-400 rounded-full text-gray-300">+{study.technologies.length - 5}</span>
                    )}
                  </div>
                  <div className="bg-dark-400/50 rounded-lg p-3 mb-4 border-l-2 border-cyan-400">
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

          {/* Other Studies */}
          {otherStudies.map((study, idx) => (
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
                    <p className="text-gray-300 text-sm">{study.challenge.substring(0, 150)}...</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-green-400">Solution</h4>
                    <p className="text-gray-300 text-sm">{study.solution.substring(0, 150)}...</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-cyan-400">Key Results</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.slice(0, 3).map((result, i) => (
                        <div key={i} className="flex items-center gap-1 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-xs">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-dark-400 rounded-full text-gray-300">{tech}</span>
                    ))}
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

        {filteredStudies.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No case studies found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

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