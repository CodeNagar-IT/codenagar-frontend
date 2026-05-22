// frontend/src/pages/Partners.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Sparkles, Handshake, Globe, Award, Users, 
  TrendingUp, Shield, ArrowRight, MapPin, Briefcase,
  X, CheckCircle
} from "lucide-react";
import { useState } from "react";

// Using placeholder images from placeholder service with company-specific colors
const partnerLogos = {
  "NexGen Solutions": "https://placehold.co/400x200/1e3a5f/ffffff?text=NG&font=montserrat",
  "CloudScale": "https://placehold.co/400x200/0891b2/ffffff?text=CS&font=montserrat",
  "VentureSpark": "https://placehold.co/400x200/7c3aed/ffffff?text=VS&font=montserrat",
  "EduFuture": "https://placehold.co/400x200/059669/ffffff?text=EF&font=montserrat",
  "DataFusion": "https://placehold.co/400x200/ea580c/ffffff?text=DF&font=montserrat",
  "SecureShield": "https://placehold.co/400x200/dc2626/ffffff?text=SS&font=montserrat",
};

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  const partners = [
    {
      id: 1,
      name: "NexGen Solutions",
      logo: partnerLogos["NexGen Solutions"],
      description: "Pioneering digital transformation across South Asia",
      category: "Technology Partner",
      since: "2023",
      partnershipType: "Strategic Alliance",
      fullDescription: "NexGen Solutions is a leading digital transformation company with a presence in 5 countries. Together with CodeNagar, we've delivered over 30 successful enterprise projects, combining their industry expertise with our technical excellence.",
      achievements: [
        "30+ joint enterprise projects",
        "Expanded to 3 new markets",
        "Shared revenue growth of 150%"
      ],
      website: "#",
      logoBg: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "CloudScale",
      logo: partnerLogos["CloudScale"],
      description: "Cloud infrastructure and DevOps specialists",
      category: "Cloud Partner",
      since: "2024",
      partnershipType: "Technology Partner",
      fullDescription: "CloudScale brings enterprise-grade cloud solutions to mid-market businesses. Our partnership enables clients to leverage AWS, Azure, and GCP with confidence, reducing infrastructure costs by up to 40%.",
      achievements: [
        "40% average cost reduction",
        "99.99% uptime achieved",
        "50+ successful migrations"
      ],
      website: "#",
      logoBg: "from-cyan-500 to-blue-500"
    },
    {
      id: 3,
      name: "VentureSpark",
      logo: partnerLogos["VentureSpark"],
      description: "Startup accelerator and growth capital",
      category: "Investment Partner",
      since: "2023",
      partnershipType: "Strategic Investment",
      fullDescription: "VentureSpark invests in early-stage tech startups with high growth potential. Through our partnership, CodeNagar portfolio companies receive preferential terms and dedicated mentorship from industry veterans.",
      achievements: [
        "$5M+ in joint investments",
        "15 portfolio companies",
        "3 successful exits"
      ],
      website: "#",
      logoBg: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      name: "EduFuture",
      logo: partnerLogos["EduFuture"],
      description: "Global education and professional training",
      category: "Education Partner",
      since: "2024",
      partnershipType: "Training Alliance",
      fullDescription: "EduFuture connects learners with industry-relevant skills. Together with CodeNagar, we've developed certification programs that have trained over 500 professionals in cutting-edge technologies.",
      achievements: [
        "500+ professionals trained",
        "85% job placement rate",
        "12 certification programs"
      ],
      website: "#",
      logoBg: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      name: "DataFusion",
      logo: partnerLogos["DataFusion"],
      description: "Big data analytics and AI solutions",
      category: "Data Partner",
      since: "2023",
      partnershipType: "Integration Partner",
      fullDescription: "DataFusion specializes in turning raw data into actionable insights. Our partnership delivers end-to-end data solutions, from ingestion to visualization, helping clients make data-driven decisions.",
      achievements: [
        "100+ data pipelines built",
        "50TB+ data processed",
        "Real-time analytics"
      ],
      website: "#",
      logoBg: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      name: "SecureShield",
      logo: partnerLogos["SecureShield"],
      description: "Cybersecurity and compliance experts",
      category: "Security Partner",
      since: "2024",
      partnershipType: "Security Alliance",
      fullDescription: "SecureShield provides enterprise-grade security solutions. Our partnership ensures that all CodeNagar projects meet the highest security standards, including ISO 27001 and SOC 2 compliance.",
      achievements: [
        "Zero security breaches",
        "ISO 27001 certified",
        "24/7 security monitoring"
      ],
      website: "#",
      logoBg: "from-red-500 to-rose-500"
    }
  ];

  const benefits = [
    { icon: Handshake, title: "Strategic Collaboration", desc: "Joint ventures and co-innovation" },
    { icon: Users, title: "Network Access", desc: "Connect with industry leaders" },
    { icon: TrendingUp, title: "Growth Opportunities", desc: "Expand market reach" },
    { icon: Shield, title: "Trusted Partnership", desc: "Reliable and transparent" },
  ];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm">Our Partners</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Trusted <span className="gradient-text">Partners</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with industry-leading organizations to deliver exceptional value to our clients.
          </p>
        </motion.div>

        {/* Partner Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "15+", label: "Global Partners", icon: Globe },
            { value: "8+", label: "Countries", icon: MapPin },
            { value: "100+", label: "Joint Projects", icon: Briefcase },
            { value: "5+", label: "Years Average Partnership", icon: Award },
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

        {/* Why Partner With Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With <span className="gradient-text">CodeNagar</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Join our ecosystem of innovation and growth</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-6 rounded-xl text-center group hover:border-cyan-500/50 transition-all"
              >
                <benefit.icon className="w-12 h-12 mx-auto mb-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Partners</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Collaborating with the best in the industry</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 hover:border-cyan-500 transition-all cursor-pointer"
                onClick={() => setSelectedPartner(partner)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-dark-400 rounded-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{partner.name}</h3>
                    <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full">
                      {partner.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3">{partner.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Partner since {partner.since}</span>
                  <span className="text-cyan-400">{partner.partnershipType}</span>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <button className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Details Modal */}
        {selectedPartner && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setSelectedPartner(null)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-dark-200 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-cyan-500"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-white/10 sticky top-0 bg-dark-200">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-dark-400 rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src={selectedPartner.logo} 
                        alt={selectedPartner.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{selectedPartner.name}</h2>
                      <p className="text-cyan-400 text-sm">{selectedPartner.partnershipType}</p>
                    </div>
                  </div>
                  <button onClick={() => setSelectedPartner(null)} className="hover:text-cyan-400">
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-5">
                <div>
                  <h3 className="text-lg font-semibold mb-2">About the Partnership</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedPartner.fullDescription}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
                  <div className="space-y-2">
                    {selectedPartner.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <a 
                    href={selectedPartner.website} 
                    className="flex-1 text-center py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition"
                  >
                    Visit Website
                  </a>
                  <Link 
                    to="/contact" 
                    className="flex-1 text-center py-2 border border-white/10 rounded-lg hover:bg-white/5 transition"
                    onClick={() => setSelectedPartner(null)}
                  >
                    Inquire About Partnership
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Become a Partner CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-cyan-600/10 to-indigo-600/10 rounded-2xl p-12 border border-cyan-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Become a <span className="gradient-text">Partner</span></h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Join our growing network of partners and unlock new opportunities for growth and innovation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 btn-primary"
            >
              Partner With Us <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 btn-secondary"
            >
              Request Information
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;