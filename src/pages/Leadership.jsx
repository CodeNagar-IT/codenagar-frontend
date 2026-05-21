// frontend/src/pages/Leadership.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Users, Award, Briefcase, Mail,
  Sparkles, ArrowRight, Code, Palette, Settings, GraduationCap,
  Heart, Target, Globe, Coffee, Rocket
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
const Leadership = () => {
  const leadershipTeam = [
    {
      name: "Ahmed Butt",
      role: "CEO & Founder",
      image: "https://i.ibb.co/5hdfMW9G/20260501-0530-image.png",
      bio: "Visionary tech entrepreneur with 5+ years of full-stack experience across web, mobile, AI, and ML. Previously led engineering teams at top tech companies. Passionate about transforming ideas into scalable digital solutions.",
      education: "BS Computer Science, COMSATS University Islamabad",
      experience: "5+ years",
      expertise: ["Leadership", "Web Development", "Mobile Development", "Machine Learning", "Artificial Intelligence", "Cloud Architecture"],
      social: { linkedin: "https://www.linkedin.com/in/ahmed-butt-at89/",  email: "ahmedbutt1109@gmail.com" }
    },
    {
      name: "Raja Faiz Khan",
      role: "Head of Business Development",
      image: "https://i.ibb.co/XrsmrnGL/Screenshot-2026-05-22-022804.jpg",
      bio: "Leveraging communication expertise to bridge the gap between technical complexity and client understanding. Previously led content strategy at leading tech publications, now driving business growth through exceptional storytelling and client relations.",
      education: "MS English, Islamic International University Islamabad",
      experience: "5+ years",
      expertise: ["Client Relations", "Business Strategy", "Technical Communication", "Partnerships"],
      social: { linkedin: "#",  email: "rajafaizkhan4@gmail.com" }
    },
    {
      name: "Abdul Basit",
      role: "Head of Human Resources",
      image: "https://i.ibb.co/YsN0Tnc/Screenshot-2026-05-22-022936.jpg",
      bio: "BS International Relations graduate bringing unique diplomatic and negotiation skills to HR. Expert in conflict resolution, employee relations, and fostering a positive workplace culture.",
      education: "BS International Relations",
      experience: "5+ years",
      expertise: ["Employee Relations", "Conflict Resolution", "Talent Acquisition", "HR Strategy", "Workplace Culture"],
      social: { linkedin: "#",  email: "basitc106@gmail.com" }
    },
    {
      name: "Muhammad Abdullah",
      role: "Network Administrator",
      image: "https://i.ibb.co/7NQZ1XKm/Screenshot-2026-05-22-023040.jpg",
      bio: "BS Computer Science graduate specializing in network infrastructure and security. Expert in designing, implementing, and maintaining robust network systems that ensure 99.9% uptime.",
      education: "BS Computer Science",
      experience: "7+ years",
      expertise: ["Network Security", "Cloud Infrastructure", "Firewall Management", "System Monitoring", "Disaster Recovery"],
      social: { linkedin: "#",  email: "abdullah@gmail.com" }
    },
    {
      name: "Mashahid Hussain Syed",
      role: "Lead Technical Writer & Research Analyst",
      image: "https://i.ibb.co/CsKcKbF1/Screenshot-2026-05-22-023730.jpg",
      bio: "BS English graduate with exceptional skills in thesis writing, research documentation, and technical reports. Advanced proficiency in MS Office Suite for creating professional documentation and data-driven reports.",
      education: "BS English",
      experience: "6+ years",
      expertise: ["Thesis Writing", "Research Documentation", "Technical Reports", "MS Office Expert", "Excel Data Analysis", "PowerPoint Presentations", "Proposal Writing", "White Papers", "Case Studies"],
      social: { linkedin: "#", email: "mashahidhussain08@gmail.com" }
    },
    {
      name: "Khawaja Muzammil Rauf",
      role: "Lead Mobile Application Developer",
      image: "https://i.ibb.co/Kjxsc9t9/mzml.jpg",
      bio: "BS Computer Science graduate specializing in mobile application development. Expert in building high-performance, user-friendly iOS and Android apps using modern frameworks.",
      education: "BS Computer Science",
      experience: "5+ years",
      expertise: ["React Native", "Flutter", "iOS Development", "Android Development", "Firebase", "REST APIs", "App Store Deployment"],
      social: { linkedin: "#", email: "Kh.muzammil484@gmail.com" }
    },
    {
      name: "Muhammad Imam Tariq Minhas",
      role: "Senior Project Manager",
      image: "https://i.ibb.co/4wrzWRZ7/113d20c2-110d-48b1-9d22-5210123efc7f.jpg",
      bio: "BS Computer Science graduate with expertise in Agile project management. Bridges the gap between technical teams and stakeholders to deliver projects on time and within budget.",
      education: "BS Computer Science",
      experience: "5+ years",
      expertise: ["Agile Methodology", "Scrum Master", "Jira/Trello", "Risk Management", "Client Communication", "Resource Planning"],
      social: { linkedin: "#", email: "imamminhas4@gmail.com" }
    }
  ];

  const departments = [
    { name: "Engineering", count: 25, icon: Code },
    { name: "Design", count: 8, icon: Palette },
    { name: "Training", count: 12, icon: GraduationCap },
    { name: "Sales & Marketing", count: 10, icon: Briefcase },
    { name: "Operations", count: 6, icon: Settings },
    { name: "Customer Success", count: 8, icon: Heart },
  ];

  const values = [
    { icon: Target, title: "Excellence", desc: "We strive for perfection in everything we do" },
    { icon: Heart, title: "Integrity", desc: "Honest and transparent in all dealings" },
    { icon: Users, title: "Collaboration", desc: "Working together to achieve great results" },
    { icon: Rocket, title: "Innovation", desc: "Pushing boundaries with cutting-edge tech" },
    { icon: Globe, title: "Global Impact", desc: "Making a difference worldwide" },
    { icon: Coffee, title: "Work-Life Balance", desc: "Happy team, happy clients" },
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
            <span className="text-cyan-300 text-sm">Our Leadership</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Meet Our <span className="gradient-text">Leadership</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The visionaries and experts driving CodeNagar's mission to transform businesses through technology.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "60+", label: "Team Members", icon: Users },
            { value: "12+", label: "Years Avg Experience", icon: Award },
            { value: "10+", label: "Countries", icon: Globe },
            { value: "500+", label: "Students Trained", icon: GraduationCap },
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

        {/* Leadership Team Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Executive <span className="gradient-text">Leadership</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Meet the leaders shaping our vision and driving our success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card overflow-hidden group"
              >
                <div className="p-6">
                  <div className="relative inline-block mx-auto text-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-cyan-500 group-hover:border-cyan-400 transition-all" 
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold text-center group-hover:text-cyan-400 transition-colors">{member.name}</h3>
                  <p className="text-cyan-400 text-sm text-center mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm text-center mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-center gap-3 pt-3 border-t border-white/10">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-cyan-400 transition">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-cyan-400 transition">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Departments Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Departments</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Meet our talented teams across different functions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-dark-200/30 rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all"
              >
                <dept.icon className="w-10 h-10 text-cyan-400 mb-3" />
                <h3 className="text-xl font-semibold mb-1">{dept.name}</h3>
                <p className="text-gray-400 text-sm">{dept.count} members</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core <span className="gradient-text">Values</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="glass p-6 rounded-xl text-center group hover:border-cyan-500/50 transition-all"
              >
                <value.icon className="w-12 h-12 mx-auto mb-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-cyan-600/10 to-indigo-600/10 rounded-2xl p-12 border border-cyan-500/20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our <span className="gradient-text">Team</span></h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Want to be part of something amazing? We're always looking for talented individuals to join our growing team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/careers" 
              className="inline-flex items-center gap-2 px-8 py-3 btn-primary"
            >
              View Open Positions <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 btn-secondary"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Leadership;