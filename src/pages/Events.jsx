// frontend/src/pages/Events.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, Users, Ticket, Sparkles, Award, X, CheckCircle, AlertCircle } from "lucide-react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registrationStatus, setRegistrationStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events`);
        setEvents(response.data);
      } catch (err) {
        console.error("Failed to fetch events", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const registerForEvent = async (eventId, registrationData) => {
    setSubmitting(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/events/${eventId}/register`, registrationData);
      setRegistrationStatus({ type: "success", message: "Successfully registered! Check your email for confirmation." });
      setTimeout(() => {
        setSelectedEvent(null);
        setRegistrationStatus({ type: "", message: "" });
      }, 2000);
    } catch  {
      setRegistrationStatus({ type: "error", message: "Registration failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm">Join Our Community</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Upcoming <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Events</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our workshops, hackathons, and networking events to grow your skills and connect with industry experts.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading exciting events...</p>
          </div>
        ) : events.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 bg-gray-800/30 rounded-2xl border border-gray-700"
          >
            <Calendar className="w-20 h-20 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg mb-2">No upcoming events at the moment.</p>
            <p className="text-gray-500">Check back soon for exciting workshops and hackathons!</p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                {/* Event Image or Gradient Placeholder */}
                <div className="relative h-48 overflow-hidden">
                  {event.image ? (
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600/30 to-indigo-600/30 flex items-center justify-center">
                      <Award className="w-16 h-16 text-blue-400/50" />
                    </div>
                  )}
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm rounded-lg px-3 py-1 text-center">
                    <div className="text-2xl font-bold leading-tight">{new Date(event.date).getDate()}</div>
                    <div className="text-xs uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{event.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2 text-sm">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Calendar className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{new Date(event.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Users className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{event.seats - (event.registrations?.length || 0)} seats left</span>
                    </div>
                    {event.price > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <Ticket className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="font-bold text-blue-400">${event.price}</span>
                      </div>
                    )}
                    {event.price === 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <Sparkles className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-green-400 font-semibold">Free Event</span>
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Registration Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => {
                setSelectedEvent(null);
                setRegistrationStatus({ type: "", message: "" });
              }}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                className="bg-gray-800 rounded-2xl max-w-md w-full border border-blue-500 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-700">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                      Register for {selectedEvent.title}
                    </h3>
                    <button 
                      onClick={() => {
                        setSelectedEvent(null);
                        setRegistrationStatus({ type: "", message: "" });
                      }}
                      className="p-1 hover:bg-gray-700 rounded-lg transition"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Fill in your details to secure your spot</p>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                  {registrationStatus.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mb-4 p-3 rounded-lg flex items-center gap-2 text-sm ${
                        registrationStatus.type === "success" 
                          ? "bg-green-500/20 text-green-400 border border-green-500" 
                          : "bg-red-500/20 text-red-400 border border-red-500"
                      }`}
                    >
                      {registrationStatus.type === "success" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                      {registrationStatus.message}
                    </motion.div>
                  )}

                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    registerForEvent(selectedEvent._id, {
                      name: formData.get("name"),
                      email: formData.get("email"),
                      phone: formData.get("phone"),
                    });
                  }} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        placeholder="Enter your full name" 
                        className="w-full px-4 py-2.5 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition"
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="you@example.com" 
                        className="w-full px-4 py-2.5 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition"
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        placeholder="+92 300 1234567" 
                        className="w-full px-4 py-2.5 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition"
                        required 
                      />
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <button 
                        type="submit" 
                        disabled={submitting}
                        className="flex-1 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                      >
                        {submitting ? "Processing..." : "Complete Registration"}
                      </button>
                      <button 
                        type="button" 
                        onClick={() => {
                          setSelectedEvent(null);
                          setRegistrationStatus({ type: "", message: "" });
                        }}
                        className="px-4 py-2.5 border border-gray-600 rounded-lg hover:bg-gray-700 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Events;