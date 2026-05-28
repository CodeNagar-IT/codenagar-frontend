// frontend/src/components/PortfolioModal.jsx
import { motion } from "framer-motion";
import { X,  CheckCircle,  } from "lucide-react";

const PortfolioModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-dark-200 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-dark-200 border-b border-white/10 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <button onClick={onClose} className="hover:text-cyan-400">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-lg" />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Project Details</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p><span className="text-cyan-400">Client:</span> {item.client}</p>
                <p><span className="text-cyan-400">Category:</span> {item.category}</p>
                <p><span className="text-cyan-400">Completed:</span> {new Date(item.completedDate).toLocaleDateString()}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {item.technologies?.map((tech, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-dark-400 rounded-full text-gray-300">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Challenge</h3>
            <p className="text-gray-300">{item.challenge}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Solution</h3>
            <p className="text-gray-300">{item.solution}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Key Results</h3>
            <ul className="space-y-2">
              {item.results?.map((result, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" /> {result}
                </li>
              ))}
            </ul>
          </div>    
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioModal;