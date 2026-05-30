// frontend/src/pages/admin/AdminReservations.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ShoppingBag, Eye, Search, RefreshCw, Store, 
  CheckCircle, Clock, MapPin, Calendar, User,
  XCircle, AlertCircle, Phone, Mail, Copy, Check
} from "lucide-react";
import axios from "axios";

const AdminReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [copiedCode, setCopiedCode] = useState(null);

  const fetchReservations = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/reservations/all`);
      setReservations(response.data);
    } catch (error) {
      console.error("Failed to fetch reservations", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchReservations();
  }, []);

  const updateReservationStatus = async (reservationId, newStatus) => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/reservations/${reservationId}/status`, { status: newStatus });
      fetchReservations();
      alert(`Reservation status updated to ${newStatus.replace(/_/g, ' ')}`);
    } catch {
      alert("Failed to update reservation status");
    }
  };

  const copyReservationCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const filteredReservations = reservations.filter(reservation => {
    const matchesSearch = reservation.reservationCode?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.customerInfo?.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.customerInfo?.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || reservation.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status) => {
    switch(status) {
      case "completed": return <CheckCircle className="w-4 h-4" />;
      case "ready_for_pickup": return <Store className="w-4 h-4" />;
      case "pending_pickup": return <Clock className="w-4 h-4" />;
      case "expired": return <AlertCircle className="w-4 h-4" />;
      case "cancelled": return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "completed": return "bg-green-500/20 text-green-400";
      case "ready_for_pickup": return "bg-blue-500/20 text-blue-400";
      case "pending_pickup": return "bg-yellow-500/20 text-yellow-400";
      case "expired": return "bg-red-500/20 text-red-400";
      case "cancelled": return "bg-gray-500/20 text-gray-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case "completed": return "Completed";
      case "ready_for_pickup": return "Ready for Pickup";
      case "pending_pickup": return "Pending Pickup";
      case "expired": return "Expired";
      case "cancelled": return "Cancelled";
      default: return status;
    }
  };

  const getStatusOptions = (currentStatus) => {
    const options = ["pending_pickup", "ready_for_pickup", "completed", "cancelled"];
    const currentIndex = options.indexOf(currentStatus);
    if (currentIndex === -1) return ["pending_pickup", "ready_for_pickup", "completed"];
    return options.slice(currentIndex + 1);
  };

  const getTimeRemaining = (expiryDate) => {
    if (!expiryDate) return "N/A";
    const now = new Date();
    const expiry = new Date(expiryDate);
    const diff = expiry - now;
    
    if (diff <= 0) return "Expired";
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} left`;
    return `${hours} hour${hours > 1 ? 's' : ''} left`;
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Manage Reservations</h1>
            <p className="text-gray-400">View and manage customer in-store pickup reservations</p>
          </div>
          <button onClick={fetchReservations} className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            <RefreshCw className="w-5 h-5" /> Refresh
          </button>
        </div>

        {/* Store Info Banner */}
        <div className="mb-6 bg-blue-500/10 rounded-xl p-3 border border-blue-500/30 flex items-center gap-3">
          <Store className="w-5 h-5 text-blue-400" />
          <p className="text-sm text-gray-300">
            All reservations are for pickup at <span className="text-blue-400 font-semibold">CodeNagar Store, Muzaffarabad City</span>. 
            Customers pay when they pick up their items.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by reservation code or customer name/email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="pending_pickup">Pending Pickup</option>
            <option value="ready_for_pickup">Ready for Pickup</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
            <option value="expired">Expired</option>
          </select>
        </div>

        {/* Reservations Table */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading reservations...</p>
          </div>
        ) : (
          <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 border-b border-gray-700">
                  <tr className="text-left text-gray-400 text-sm">
                    <th className="px-6 py-4">Reservation Code</th>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Items</th>
                    <th className="px-6 py-4">Total</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReservations.map((reservation, idx) => (
                    <motion.tr
                      key={reservation._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-gray-700 hover:bg-gray-800/50 transition cursor-pointer"
                      onClick={() => setSelectedReservation(reservation)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-bold text-blue-400">{reservation.reservationCode}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyReservationCode(reservation.reservationCode);
                            }}
                            className="p-1 hover:text-blue-400 transition"
                            title="Copy code"
                          >
                            {copiedCode === reservation.reservationCode ? (
                              <Check className="w-3 h-3 text-green-400" />
                            ) : (
                              <Copy className="w-3 h-3 text-gray-500" />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <div>
                            <p className="font-semibold text-sm">{reservation.customerInfo?.fullName || "N/A"}</p>
                            <p className="text-xs text-gray-500">{reservation.customerInfo?.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {new Date(reservation.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm">{reservation.items?.length || 0} items</td>
                      <td className="px-6 py-4 font-bold text-blue-400">PKR {reservation.total?.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(reservation.status)}`}>
                          {getStatusIcon(reservation.status)} {getStatusText(reservation.status)}
                        </span>
                        {reservation.reservationExpiry && reservation.status === "pending_pickup" && (
                          <p className="text-xs text-gray-500 mt-1">{getTimeRemaining(reservation.reservationExpiry)}</p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-blue-400 hover:text-blue-300">
                          <Eye className="w-5 h-5" />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredReservations.length === 0 && (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 mx-auto text-gray-600 mb-4" />
                <p className="text-gray-400">No reservations found</p>
              </div>
            )}
          </div>
        )}

        {/* Reservation Details Modal */}
        {selectedReservation && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-500"
            >
              <div className="p-6 border-b border-gray-700 sticky top-0 bg-gray-800 z-10">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Reservation Details</h2>
                  <button onClick={() => setSelectedReservation(null)} className="hover:text-blue-400 text-2xl">&times;</button>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-gray-400 font-mono">{selectedReservation.reservationCode}</p>
                  <button
                    onClick={() => copyReservationCode(selectedReservation.reservationCode)}
                    className="p-1 hover:text-blue-400 transition"
                  >
                    {copiedCode === selectedReservation.reservationCode ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Customer Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-xl p-4">
                    <h3 className="font-semibold mb-2 flex items-center gap-2"><User className="w-4 h-4 text-blue-400" /> Customer Information</h3>
                    <p className="font-medium">{selectedReservation.customerInfo?.fullName || "N/A"}</p>
                    <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                      <Mail className="w-3 h-3" /> {selectedReservation.customerInfo?.email || "N/A"}
                    </p>
                    <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                      <Phone className="w-3 h-3" /> {selectedReservation.customerInfo?.phone || "N/A"}
                    </p>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <h3 className="font-semibold mb-2 flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-400" /> Reservation Info</h3>
                    <p>Created: {new Date(selectedReservation.createdAt).toLocaleString()}</p>
                    {selectedReservation.reservationExpiry && (
                      <p className="text-sm text-yellow-400 mt-1">
                        Expires: {new Date(selectedReservation.reservationExpiry).toLocaleString()}
                      </p>
                    )}
                  </div>
                </div>

                {/* Pickup Location */}
                <div className="bg-gray-900 rounded-xl p-4">
                  <h3 className="font-semibold mb-2 flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" /> Pickup Location</h3>
                  <p>CodeNagar Store, Muzaffarabad City</p>
                  <p className="text-sm text-gray-400 mt-1">🕐 Mon-Sat: 10AM - 8PM | Sunday: Closed</p>
                </div>

                {/* Items */}
                <div>
                  <h3 className="font-semibold mb-3">Reserved Items</h3>
                  <div className="space-y-2">
                    {selectedReservation.items?.map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-bold">PKR {(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Total */}
                <div className="bg-gray-900 rounded-xl p-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total to Pay at Store</span>
                    <span className="text-blue-400">PKR {selectedReservation.total?.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">* Customer will pay at pickup</p>
                </div>

                {/* Update Status */}
                <div>
                  <h3 className="font-semibold mb-2">Update Status</h3>
                  <div className="flex flex-wrap gap-2">
                    {getStatusOptions(selectedReservation.status).map(status => (
                      <button
                        key={status}
                        onClick={() => updateReservationStatus(selectedReservation._id, status)}
                        className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-sm"
                      >
                        Mark as {status.replace(/_/g, ' ')}
                      </button>
                    ))}
                    {selectedReservation.status === "pending_pickup" && (
                      <button
                        onClick={() => updateReservationStatus(selectedReservation._id, "cancelled")}
                        className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition text-sm"
                      >
                        Cancel Reservation
                      </button>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-700">
                  <button
                    onClick={() => {
                      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${selectedReservation.customerInfo?.email}&su=Your Reservation ${selectedReservation.reservationCode} is Ready&body=Dear ${selectedReservation.customerInfo?.fullName},%0A%0AYour reservation ${selectedReservation.reservationCode} is ready for pickup at our Muzaffarabad store.%0A%0AStore Address: CodeNagar Store, Muzaffarabad City%0APickup Hours: Mon-Sat 10AM-8PM%0A%0APlease bring this reservation code with you.%0A%0AThank you for choosing CodeNagar!`, '_blank');
                    }}
                    className="flex-1 px-4 py-2 bg-green-600 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
                  >
                    Email Customer
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminReservations;