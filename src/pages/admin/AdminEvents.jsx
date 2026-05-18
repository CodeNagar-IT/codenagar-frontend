// frontend/src/pages/admin/AdminEvents.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, Plus, Edit, Trash2, Search,
  X, Users, MapPin, Clock, DollarSign, 
} from "lucide-react";
import axios from "axios";

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    price: "",
    seats: "",
    image: "",
  });

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events`);
      setEvents(response.data);
    } catch (error) {
      console.error("Failed to fetch events", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchEvents();
  }, []);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingEvent) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/events/${editingEvent._id}`, formData);
        alert("Event updated successfully!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/events`, formData);
        alert("Event created successfully!");
      }
      setShowModal(false);
      setEditingEvent(null);
      setFormData({
        title: "",
        description: "",
        date: "",
        location: "",
        price: "",
        seats: "",
        image: "",
      });
      fetchEvents();
    } catch  {
      alert("Failed to save event");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/events/${id}`);
        alert("Event deleted successfully!");
        fetchEvents();
      } catch  {
        alert("Failed to delete event");
      }
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description,
      date: event.date?.split('T')[0],
      location: event.location,
      price: event.price,
      seats: event.seats,
      image: event.image || "",
    });
    setShowModal(true);
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const upcomingEvents = events.filter(e => new Date(e.date) > new Date()).length;
  const totalAttendees = events.reduce((sum, e) => sum + (e.registrations?.length || 0), 0);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Manage Events</h1>
            <p className="text-gray-400">Create and manage your events</p>
          </div>
          <div className="flex gap-3">
            <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
              <p className="text-2xl font-bold text-purple-400">{upcomingEvents}</p>
              <p className="text-xs text-gray-400">Upcoming</p>
            </div>
            <div className="bg-gray-800 rounded-lg px-4 py-2 text-center">
              <p className="text-2xl font-bold text-purple-400">{totalAttendees}</p>
              <p className="text-xs text-gray-400">Total Attendees</p>
            </div>
            <button
              onClick={() => {
                setEditingEvent(null);
                setFormData({
                  title: "",
                  description: "",
                  date: "",
                  location: "",
                  price: "",
                  seats: "",
                  image: "",
                });
                setShowModal(true);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
              <Plus className="w-5 h-5" /> Add Event
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Events Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading events...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(event)} className="text-gray-400 hover:text-purple-400">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button onClick={() => handleDelete(event._id)} className="text-gray-400 hover:text-red-400">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{event.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span>{new Date(event.date).toLocaleTimeString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-4 h-4 text-purple-400" />
                      <span>{event.seats - (event.registrations?.length || 0)} seats left</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <DollarSign className="w-4 h-4 text-purple-400" />
                      <span>{event.price > 0 ? `$${event.price}` : "Free"}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="w-full mt-4 py-2 bg-gray-700 rounded-lg hover:bg-purple-600 transition text-sm"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filteredEvents.length === 0 && !loading && (
          <div className="text-center py-20">
            <Calendar className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400">No events found</p>
          </div>
        )}

        {/* Add/Edit Event Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-purple-500"
            >
              <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  {editingEvent ? "Edit Event" : "Create New Event"}
                </h2>
                <button onClick={() => setShowModal(false)} className="hover:text-purple-400">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Event Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description *</label>
                  <textarea
                    rows="3"
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Location *</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Price ($)</label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                      className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Total Seats *</label>
                    <input
                      type="number"
                      required
                      value={formData.seats}
                      onChange={(e) => setFormData({ ...formData, seats: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Image URL (Optional)</label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="https://..."
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
                  >
                    {editingEvent ? "Update Event" : "Create Event"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Event Details Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-purple-500"
            >
              <div className="p-6 border-b border-gray-700">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Event Details</h2>
                  <button onClick={() => setSelectedEvent(null)} className="hover:text-purple-400 text-2xl">&times;</button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{selectedEvent.title}</h3>
                <p className="text-gray-300">{selectedEvent.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Date & Time</p>
                    <p className="font-semibold">{new Date(selectedEvent.date).toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Location</p>
                    <p>{selectedEvent.location}</p>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Price</p>
                    <p>{selectedEvent.price > 0 ? `$${selectedEvent.price}` : "Free"}</p>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <p className="text-gray-400 text-sm">Seats Available</p>
                    <p>{selectedEvent.seats - (selectedEvent.registrations?.length || 0)} of {selectedEvent.seats}</p>
                  </div>
                </div>

                {selectedEvent.registrations?.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-3">Registered Attendees ({selectedEvent.registrations.length})</h3>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {selectedEvent.registrations.map((reg, i) => (
                        <div key={i} className="bg-gray-900 rounded-lg p-3">
                          <p className="font-semibold">{reg.name}</p>
                          <p className="text-sm text-gray-400">{reg.email}</p>
                          <p className="text-sm text-gray-400">{reg.phone}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminEvents;