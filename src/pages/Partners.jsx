// frontend/src/pages/Partners.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Sparkles, Handshake,  Globe, Award, Users, 
  TrendingUp, Shield, ArrowRight, 
MapPin, Briefcase
} from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "TechSolutions Inc.",
      logo: "https://placehold.co/200x100/1e293b/ffffff?text=TechSolutions",
      description: "Leading provider of enterprise software solutions",
      category: "Technology Partner",
      since: "2023",
      website: "#",
      partnershipType: "Strategic Alliance"
    },
    {
      name: "CloudMasters",
      logo: "https://placehold.co/200x100/1e293b/ffffff?text=CloudMasters",
      description: "AWS & Azure cloud consulting experts",
      category: "Cloud Partner",
      since: "2024",
      website: "#",
      partnershipType: "Technology Partner"
    },
    {
      name: "InnovateHub",
      logo: "https://placehold.co/200x100/1e293b/ffffff?text=InnovateHub",
      description: "Startup accelerator and venture capital",
      category: "Investment Partner",
      since: "2023",
      website: "#",
      partnershipType: "Strategic Investment"
    },
    {
      name: "GlobalEd",
      logo: "https://placehold.co/200x100/1e293b/ffffff?text=GlobalEd",
      description: "International education and training network",
      category: "Education Partner",
      since: "2024",
      website: "#",
      partnershipType: "Training Alliance"
    },
    {
      name: "DataStream",
      logo: "https://placehold.co/200x100/1e293b/ffffff?text=DataStream",
      description: "Big data and analytics platform",
      category: "Data Partner",
      since: "2023",
      website: "#",
      partnershipType: "Integration Partner"
    },
    {
      name: "SecureNet",
      logo: "https://placehold.co/200x100/1e293b/ffffff?text=SecureNet",
      description: "Cybersecurity and compliance solutions",
      category: "Security Partner",
      since: "2024",
      website: "#",
      partnershipType: "Security Alliance"
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
                className="glass-card p-6 hover:border-cyan-500 transition-all"
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
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

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