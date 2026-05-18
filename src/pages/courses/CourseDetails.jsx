// frontend/src/pages/courses/CourseDetails.jsx
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Award, CheckCircle, Briefcase, BookOpen, Star, Calendar, ChevronLeft, Shield, Zap,  Sparkles, ArrowRight, GraduationCap, Trophy } from "lucide-react";

const CourseDetails = () => {
  const { slug } = useParams();
  
  const courseData = {
    "ms-office": {
      title: "MS Office Mastery",
      duration: "2 Months",
      level: "Beginner",
      students: 150,
      price: 99,
      originalPrice: 199,
      description: "Complete mastery of Microsoft Office suite including Word, Excel, PowerPoint, Outlook, and Access.",
      longDescription: "This comprehensive MS Office course is designed to take you from beginner to expert. You'll learn all the essential features and advanced techniques to boost your productivity.",
      syllabus: ["Word Processing & Document Formatting", "Excel Spreadsheets & Advanced Formulas", "PowerPoint Presentations & Animations", "Outlook Email Management", "Access Database Basics", "Office 365 Cloud Integration"],
      outcomes: ["Create professional business documents", "Analyze data with advanced Excel functions", "Design engaging presentations", "Manage emails and calendars efficiently", "Automate repetitive tasks"],
      instructor: "Sarah Ahmed",
      instructorRole: "Microsoft Certified Trainer",
      rating: 4.8,
      reviews: 142,
      projects: 5,
      certificate: true,
      support: "24/7",
    },
    "web-development": {
      title: "Web Development",
      duration: "6 Months",
      level: "Advanced",
      students: 280,
      price: 499,
      originalPrice: 799,
      description: "Become a full-stack web developer. Learn HTML, CSS, JavaScript, React, Node.js, Express, MongoDB.",
      longDescription: "This intensive web development bootcamp will take you from absolute beginner to job-ready full-stack developer. You'll build real-world projects and learn industry best practices.",
      syllabus: ["HTML5 & CSS3 Fundamentals", "JavaScript & ES6+", "React.js & Redux", "Node.js & Express", "MongoDB & Mongoose", "RESTful APIs", "Authentication & Authorization", "Deployment & DevOps"],
      outcomes: ["Build full-stack web applications", "Create responsive and mobile-first designs", "Work with APIs and databases", "Deploy applications to production", "Master version control with Git"],
      instructor: "Ali Raza",
      instructorRole: "Senior Full-Stack Developer",
      rating: 4.9,
      reviews: 328,
      projects: 8,
      certificate: true,
      support: "24/7",
    },
    "app-development": {
      title: "App Development",
      duration: "6 Months",
      level: "Advanced",
      students: 195,
      price: 549,
      originalPrice: 849,
      description: "Build cross-platform mobile apps using React Native and Flutter.",
      longDescription: "Learn to build production-ready mobile apps for both iOS and Android using React Native and Flutter. Master state management, navigation, and app store deployment.",
      syllabus: ["React Native Basics", "Navigation & Routing", "State Management (Redux)", "Native Modules Integration", "Flutter & Dart Fundamentals", "UI Widgets & Animations", "Firebase Integration", "App Store & Play Store Deployment"],
      outcomes: ["Publish apps to Apple App Store & Google Play", "Build responsive and smooth UIs", "Integrate backend APIs and databases", "Use device features (camera, GPS, etc.)", "Implement push notifications"],
      instructor: "Zain Khan",
      instructorRole: "Mobile App Expert",
      rating: 4.8,
      reviews: 195,
      projects: 6,
      certificate: true,
      support: "24/7",
    },
    "python": {
      title: "Python Programming",
      duration: "4 Months",
      level: "Intermediate",
      students: 210,
      price: 299,
      originalPrice: 499,
      description: "Master Python from basics to advanced with real-world projects.",
      longDescription: "This comprehensive Python course covers everything from basic syntax to advanced concepts like OOP, web scraping, and automation. Perfect for beginners and intermediate programmers.",
      syllabus: ["Python Basics & Syntax", "Data Structures & Algorithms", "Object-Oriented Programming", "File Handling & Exception", "Web Scraping with BeautifulSoup", "API Integration", "Automation Scripts", "Introduction to Django"],
      outcomes: ["Write clean and efficient Python code", "Build automation scripts", "Work with data and APIs", "Create web applications with Django", "Prepare for Python certifications"],
      instructor: "Fatima Hassan",
      instructorRole: "Python Developer",
      rating: 4.7,
      reviews: 210,
      projects: 5,
      certificate: true,
      support: "24/7",
    },
    "data-science": {
      title: "Data Science & ML",
      duration: "8 Months",
      level: "Advanced",
      students: 120,
      price: 799,
      originalPrice: 1299,
      description: "Learn data analysis, visualization, machine learning, and AI.",
      longDescription: "Become a data scientist with this comprehensive program covering statistics, machine learning, deep learning, and AI. Work on real-world datasets and build portfolio projects.",
      syllabus: ["Python for Data Science", "Statistics & Probability", "Data Visualization (Matplotlib, Seaborn)", "Pandas & NumPy", "Machine Learning Algorithms", "Deep Learning (TensorFlow/PyTorch)", "Natural Language Processing", "Computer Vision", "Big Data & Spark"],
      outcomes: ["Analyze and visualize complex data", "Build and deploy ML models", "Work with deep learning frameworks", "Implement NLP and computer vision solutions", "Land a data science job"],
      instructor: "Dr. Usman Chaudhry",
      instructorRole: "AI/ML Expert",
      rating: 4.9,
      reviews: 120,
      projects: 10,
      certificate: true,
      support: "24/7",
    },
    "ui-ux": {
      title: "UI/UX Design",
      duration: "3 Months",
      level: "Beginner",
      students: 175,
      price: 249,
      originalPrice: 399,
      description: "Create beautiful user interfaces with Figma and Adobe XD.",
      longDescription: "Learn the fundamentals of UI/UX design and master industry tools like Figma and Adobe XD. Build a professional portfolio and learn design thinking methodology.",
      syllabus: ["Design Principles & Theory", "Figma Mastery", "Adobe XD Fundamentals", "Wireframing & Prototyping", "User Research & Testing", "Information Architecture", "Visual Hierarchy & Typography", "Portfolio Development"],
      outcomes: ["Create professional UI designs", "Build interactive prototypes", "Conduct user research and testing", "Master Figma and Adobe XD", "Build a stunning design portfolio"],
      instructor: "Ayesha Malik",
      instructorRole: "Senior Product Designer",
      rating: 4.8,
      reviews: 175,
      projects: 4,
      certificate: true,
      support: "24/7",
    },
  };

  const course = courseData[slug];

  if (!course) {
    return (
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold mb-2">Course Not Found</h2>
          <p className="text-gray-400 mb-6">The course you're looking for doesn't exist.</p>
          <Link to="/courses" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
            <ChevronLeft className="w-5 h-5" /> Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/courses" className="text-gray-400 hover:text-purple-400 text-sm flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" /> All Courses
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-3 py-1 mb-4">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-xs">Best Seller</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <span className="text-gray-400">({course.reviews} reviews)</span>
                <span className="text-green-400 text-sm ml-2 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> {course.students}+ students enrolled</span>
              </div>
              
              {/* Course Meta */}
              <div className="flex flex-wrap gap-4 mb-6 pb-4 border-b border-gray-700">
                <span className="flex items-center gap-2 text-gray-300"><Clock className="w-5 h-5 text-purple-400" /> {course.duration}</span>
                <span className="flex items-center gap-2 text-gray-300"><Award className="w-5 h-5 text-purple-400" /> {course.level}</span>
                <span className="flex items-center gap-2 text-gray-300"><Calendar className="w-5 h-5 text-purple-400" /> Flexible Schedule</span>
              </div>
              
              {/* Description */}
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">{course.longDescription || course.description}</p>
            </motion.div>
            
            {/* What You'll Learn */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-purple-400" />
                What You'll Learn
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {course.syllabus.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-2 p-2 bg-gray-800/30 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Career Outcomes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-purple-400" />
                Career Outcomes
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {course.outcomes.map((outcome, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-2 p-2 bg-gray-800/30 rounded-lg"
                  >
                    <Zap className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{outcome}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Instructor */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/30 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                Your Instructor
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">
                  {course.instructor.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-lg">{course.instructor}</p>
                  <p className="text-sm text-gray-400">{course.instructorRole}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.9 Instructor Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar - Pricing Card */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 sticky top-24"
            >
              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-4xl font-bold text-purple-400">${course.price}</span>
                  {course.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                  )}
                </div>
                <p className="text-xs text-green-400 mt-1">Save ${course.originalPrice - course.price} (Limited Time)</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">📚 Live Classes</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">📝 {course.projects}+ Projects</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">🎓 Certificate of Completion</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">💼 Job Placement Support</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">🛡️ Lifetime Access</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">💬 {course.support} Support</span>
                  <span className="text-green-400">✓</span>
                </div>
              </div>

              {/* Buttons */}
              <Link 
                to={`/courses/${slug}/apply`} 
                className="block text-center py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all mb-3 group"
              >
                Enroll Now <ArrowRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
              </Link>
              <Link 
                to="/contact" 
                className="block text-center py-3 border border-gray-600 rounded-xl hover:bg-white/10 transition-all"
              >
                Contact Advisor
              </Link>

              {/* Guarantee */}
              <div className="mt-6 pt-4 border-t border-gray-700 text-center">
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </motion.div>

            {/* What's Included Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 bg-gray-800/30 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-purple-400" />
                What's Included
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">🎥 Video Hours</span>
                  <span className="font-semibold">40+ hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">📋 Articles</span>
                  <span className="font-semibold">25+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">📥 Downloadable Resources</span>
                  <span className="font-semibold">Yes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">🎖️ Certificate</span>
                  <span className="font-semibold">Yes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;