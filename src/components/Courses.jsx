// 5. src/components/Courses.jsx
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Monitor, Smartphone, FileText, Code, Database, Figma, Award, Clock, Users } from "lucide-react";

const courses = [
  { icon: FileText, title: "MS Office Mastery", duration: "2 Months", level: "Beginner", students: 150, price: "$99", color: "from-blue-500 to-cyan-500" },
  { icon: Monitor, title: "Web Development", duration: "6 Months", level: "Advanced", students: 280, price: "$499", color: "from-purple-500 to-pink-500" },
  { icon: Smartphone, title: "App Development", duration: "6 Months", level: "Advanced", students: 195, price: "$549", color: "from-green-500 to-emerald-500" },
  { icon: Code, title: "Python Programming", duration: "4 Months", level: "Intermediate", students: 210, price: "$299", color: "from-yellow-500 to-orange-500" },
  { icon: Database, title: "Data Science & ML", duration: "8 Months", level: "Advanced", students: 120, price: "$799", color: "from-red-500 to-rose-500" },
  { icon: Figma, title: "UI/UX Design", duration: "3 Months", level: "Beginner", students: 175, price: "$249", color: "from-indigo-500 to-purple-500" },
];

const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section id="courses" ref={ref} className="py-24 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-4 py-2 mb-4">
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Certified Courses</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            IT <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Industry-ready training with hands-on projects and certification
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCourse(course)}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-purple-500"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${course.color} p-3 mb-4`}>
                <course.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
                <span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.students}+ students</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-purple-400">{course.price}</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">{course.level}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Course Modal */}
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-gray-800 rounded-2xl max-w-md w-full p-8 border border-purple-500"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedCourse.color} p-3 mb-4`}>
                <selectedCourse.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{selectedCourse.title}</h3>
              <div className="space-y-3 mb-6">
                <p><strong>Duration:</strong> {selectedCourse.duration}</p>
                <p><strong>Level:</strong> {selectedCourse.level}</p>
                <p><strong>Students Enrolled:</strong> {selectedCourse.students}+</p>
                <p><strong>Price:</strong> <span className="text-purple-400 text-xl">{selectedCourse.price}</span></p>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="w-full py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Courses;