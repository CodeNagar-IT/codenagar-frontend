import { motion } from "framer-motion";
import { Monitor, Smartphone, FileText } from "lucide-react";

const courses = [
  { icon: FileText, title: "MS Office", duration: "2 Months", level: "Beginner" },
  { icon: Monitor, title: "Web Development", duration: "6 Months", level: "Advanced" },
  { icon: Smartphone, title: "App Development", duration: "6 Months", level: "Advanced" },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Computer Courses
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl"
            >
              <course.icon className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-400">Duration: {course.duration}</p>
              <p className="text-gray-400">Level: {course.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;