// frontend/src/pages/CoursesComingSoon.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Calendar, Clock, Code, Smartphone, Brain, Database, 
   Shield, Cloud, Users, ArrowRight, 
  Bell, CheckCircle,  Award, 
  GraduationCap,  Laptop, Rocket, Sparkles,
   Target, 
} from "lucide-react";

const CoursesComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const targetDate = new Date("2026-07-01T00:00:00");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  const courses = [
    {
      icon: Code,
      title: "Full Stack Web Development",
      duration: "6 Months",
      level: "Beginner to Advanced",
      features: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Next.js"],
      seats: 30,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      duration: "5 Months",
      level: "Intermediate",
      features: ["React Native", "Flutter", "Firebase", "iOS/Android", "App Store Deployment"],
      seats: 25,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      duration: "7 Months",
      level: "Advanced",
      features: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP"],
      seats: 20,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud Computing & DevOps",
      duration: "5 Months",
      level: "Intermediate to Advanced",
      features: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
      seats: 25,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      duration: "6 Months",
      level: "Intermediate to Advanced",
      features: ["Python", "Pandas", "SQL", "Power BI", "Machine Learning"],
      seats: 25,
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      duration: "4 Months",
      level: "Intermediate",
      features: ["Network Security", "Ethical Hacking", "Cryptography", "Security Audits"],
      seats: 25,
      color: "from-red-500 to-rose-500"
    }
  ];

  const features = [
    { icon: Users, title: "Live Interactive Classes", desc: "Learn with industry experts in real-time" },
    { icon: Laptop, title: "Hands-on Projects", desc: "Build real-world applications" },
    { icon: Award, title: "Industry Certification", desc: "Get certified upon completion" },
    { icon: Users, title: "Career Support", desc: "Job placement assistance" },
    { icon: Clock, title: "Flexible Schedule", desc: "Weekend & evening batches" },
    { icon: Users, title: "Community Access", desc: "Join our alumni network" }
  ];

  const faqs = [
    {
      q: "When do the courses start?",
      a: "All courses will start on July 1st, 2026. Early bird registration is open now!"
    },
    {
      q: "What is the class schedule?",
      a: "Classes are held on weekends (Saturday & Sunday) and weekday evenings to accommodate working professionals."
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, you will receive an industry-recognized certificate upon successful completion of the course."
    },
    {
      q: "Is there any prerequisite?",
      a: "Basic computer literacy is recommended. Specific prerequisites vary by course - check individual course details."
    },
    {
      q: "Do you offer job placement?",
      a: "Yes, we provide career support including resume building, interview preparation, and job placement assistance."
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500/20 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm">Coming Soon - July 1st, 2026</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            New Batch <span className="gradient-text">Starting Soon!</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Level up your skills with industry-leading courses taught by experts. 
            Limited seats available - register now to secure your spot!
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl p-8 mb-16 border border-blue-500/30"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Courses Starting In</h2>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Calendar className="w-5 h-5" />
              <span>July 1st, 2026</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="bg-dark-400 rounded-xl p-4">
                <div className="text-4xl md:text-5xl font-bold text-blue-400">{timeLeft.days}</div>
                <div className="text-xs text-gray-400 mt-1">Days</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-dark-400 rounded-xl p-4">
                <div className="text-4xl md:text-5xl font-bold text-blue-400">{timeLeft.hours}</div>
                <div className="text-xs text-gray-400 mt-1">Hours</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-dark-400 rounded-xl p-4">
                <div className="text-4xl md:text-5xl font-bold text-blue-400">{timeLeft.minutes}</div>
                <div className="text-xs text-gray-400 mt-1">Minutes</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-dark-400 rounded-xl p-4">
                <div className="text-4xl md:text-5xl font-bold text-blue-400">{timeLeft.seconds}</div>
                <div className="text-xs text-gray-400 mt-1">Seconds</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Early Bird CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-6 mb-16 border border-green-500/30"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Rocket className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-400">Early Bird Registration Open!</h3>
                <p className="text-gray-400 text-sm">Register before June 15th to secure your seat + get free learning kit</p>
              </div>
            </div>
            <Link 
              to="/contact" 
              className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all flex items-center gap-2"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Courses We're <span className="gradient-text">Offering</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose from our comprehensive range of courses designed to make you industry-ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${course.color} p-[1px] rounded-xl overflow-hidden`}
              >
                <div className="bg-dark-200 rounded-xl p-6 h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${course.color} flex items-center justify-center mb-4`}>
                    <course.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</span>
                    <span className="flex items-center gap-1"><Target className="w-3 h-3" /> {course.level}</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {course.seats} seats</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-dark-400 rounded-full text-gray-300">{feature}</span>
                    ))}
                    {course.features.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-dark-400 rounded-full text-gray-500">+{course.features.length - 3}</span>
                    )}
                  </div>
                  <Link 
                    to="/contact" 
                    className="block text-center py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all text-sm mt-2"
                  >
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Learn With <span className="gradient-text">Us</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide the best learning experience to help you achieve your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 text-center hover:border-blue-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about our courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-5 hover:border-blue-500/30 transition-all"
              >
                <h3 className="font-semibold text-cyan-400 mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl p-8 border border-blue-500/20"
          >
            <Bell className="w-12 h-12 mx-auto text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Get Notified When Registration Opens</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Subscribe to get updates about course launches, early bird discounts, and more!
            </p>
            <form onSubmit={handleSubscribe} className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 bg-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10"
                required
              />
              <button type="submit" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all whitespace-nowrap">
                Notify Me
              </button>
            </form>
            {subscribed && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-sm mt-3"
              >
                <CheckCircle className="w-4 h-4 inline mr-1" /> Thanks! We'll notify you soon.
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/20"
        >
          <GraduationCap className="w-16 h-16 mx-auto text-blue-400 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to learn from industry experts and advance your career.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2 group"
            >
              Enquire Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Talk to Advisor
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursesComingSoon;