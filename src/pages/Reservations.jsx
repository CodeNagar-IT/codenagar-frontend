// frontend/src/pages/Reservations.jsx (replace Orders.jsx)
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Package, ChevronDown, ChevronUp, CheckCircle, Clock, ShoppingBag, MapPin, Calendar, Store, AlertCircle, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedReservation, setExpandedReservation] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/reservations/my`);
        setReservations(response.data);
      } catch (err) {
        console.error("Failed to fetch reservations", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReservations();
  }, []);

  const getStatusIcon = (status) => {
    switch(status) {
      case "completed": return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "ready_for_pickup": return <Store className="w-5 h-5 text-blue-400" />;
      case "pending_pickup": return <Clock className="w-5 h-5 text-yellow-400" />;
      case "expired": return <AlertCircle className="w-5 h-5 text-red-400" />;
      default: return <Package className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "completed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "ready_for_pickup": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "pending_pickup": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "expired": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case "completed": return "Completed";
      case "ready_for_pickup": return "Ready for Pickup";
      case "pending_pickup": return "Pending Pickup";
      case "expired": return "Expired";
      default: return status;
    }
  };

  if (loading) {
    return (
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your reservations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            My <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Reservations</span>
          </h1>
          <p className="text-gray-400">Track and manage your in-store pickup reservations</p>
        </motion.div>

        {reservations.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-gray-800/30 rounded-2xl border border-gray-700"
          >
            <ShoppingBag className="w-20 h-20 mx-auto text-gray-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2">No reservations yet</h2>
            <p className="text-gray-400 mb-6">Looks like you haven't reserved any items</p>
            <Link 
              to="/store" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
            >
              <ShoppingBag className="w-5 h-5" /> Browse Products
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {reservations.map((reservation, idx) => (
              <motion.div
                key={reservation._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Reservation Header */}
                <div 
                  className="p-6 bg-gray-800/30 cursor-pointer hover:bg-gray-800/50 transition-all duration-200"
                  onClick={() => setExpandedReservation(expandedReservation === reservation._id ? null : reservation._id)}
                >
                  <div className="flex flex-wrap justify-between items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Package className="w-4 h-4 text-blue-400" />
                        <p className="text-sm font-mono font-bold text-blue-400">{reservation.reservationCode}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(reservation.createdAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric'
                        })}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      {/* Status Badge */}
                      <div className="flex items-center gap-2">
                        {getStatusIcon(reservation.status)}
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(reservation.status)}`}>
                          {getStatusText(reservation.status)}
                        </span>
                      </div>
                      
                      {/* Total */}
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-400">${reservation.total?.toFixed(2)}</p>
                        <p className="text-xs text-gray-400">{reservation.items?.length || 0} item(s)</p>
                      </div>
                      
                      {/* Expand Icon */}
                      <div className="text-gray-400">
                        {expandedReservation === reservation._id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reservation Details - Expanded */}
                {expandedReservation === reservation._id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-700 p-6 bg-gray-900/30"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Items List */}
                      <div>
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                          <ShoppingBag className="w-4 h-4 text-blue-400" />
                          Reserved Items
                        </h3>
                        <div className="space-y-3">
                          {reservation.items?.map((item, i) => (
                            <div key={i} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0">
                              <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                              </div>
                              <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                          ))}
                        </div>
                        
                        {/* Total */}
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <div className="flex justify-between font-bold text-lg">
                            <span>Total to Pay at Store</span>
                            <span className="text-blue-400">${reservation.total?.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Pickup Information */}
                      <div>
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-400" />
                          Pickup Information
                        </h3>
                        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                          <p className="font-semibold text-blue-400 mb-2">Store Location</p>
                          <p className="text-gray-300">CodeNagar Store, Muzaffarabad City</p>
                          <p className="text-gray-300 text-sm mt-2">🕐 Mon-Sat: 10AM - 8PM</p>
                          <p className="text-gray-300 text-sm">Sunday: Closed</p>
                        </div>

                        {/* Payment Note */}
                        <div className="mt-4 bg-green-500/10 rounded-xl p-4 border border-green-500/30">
                          <p className="text-sm text-green-400 flex items-center gap-2">
                            <CreditCard className="w-4 h-4" />
                            Payment at Store
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Pay with cash or card when you pick up your items
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex gap-3">
                          <button 
                            onClick={() => {
                              navigator.clipboard.writeText(reservation.reservationCode);
                              alert("Reservation code copied!");
                            }}
                            className="flex-1 px-4 py-2 bg-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all"
                          >
                            Copy Code
                          </button>
                          <a 
                            href="https://www.google.com/maps?q=CodeNagar+Muzaffarabad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-gray-700 transition-all"
                          >
                            Directions
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservations;