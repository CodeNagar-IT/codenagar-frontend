// frontend/src/pages/store/ReservationConfirmation.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Store, MapPin, Clock, Phone, User, Mail, ArrowLeft, CheckCircle, AlertCircle, ShoppingBag, Calendar, CreditCard } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const ReservationConfirmation = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [reservationCode, setReservationCode] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
  });

  const total = getCartTotal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    
    try {
      const reservationData = {
        items: cart.map(item => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        total: total,
        customerInfo: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone
        },
        pickupLocation: "CodeNagar Store, Muzaffarabad City",
        status: "pending_pickup"
      };
      
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/reservations`, reservationData);
      setReservationCode(response.data.reservationCode);
      setReservationSuccess(true);
      clearCart();
      setTimeout(() => {
        navigate("/my-reservations");
      }, 5000);
    } catch {
      setError("Failed to create reservation. Please check your information and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (cart.length === 0 && !reservationSuccess) {
    navigate("/store");
    return null;
  }

  if (reservationSuccess) {
    return (
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-green-400" />
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">Reservation Confirmed!</h2>
          <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-400">Your Reservation Code</p>
            <p className="text-2xl font-bold text-blue-400 font-mono">{reservationCode}</p>
          </div>
          <p className="text-gray-400 mb-4">
            We've sent a confirmation to your email. Please visit our store within 48 hours to complete your purchase.
          </p>
          <div className="bg-blue-500/10 rounded-xl p-4 mb-6 text-left">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Store className="w-4 h-4 text-blue-400" />
              Pickup Instructions:
            </h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>📍 CodeNagar Store, Muzaffarabad City</li>
              <li>🕐 Mon-Sat: 10AM - 8PM | Sunday: Closed</li>
              <li>📱 Show this reservation code at the counter</li>
              <li>💰 Pay at store via cash or card</li>
              <li>⏰ Reservation expires in 48 hours</li>
            </ul>
          </div>
          <div className="flex gap-4 justify-center">
            <Link to="/my-reservations" className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">View My Reservations</Link>
            <Link to="/store" className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-white/10 transition">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/cart" className="text-gray-400 hover:text-blue-400 text-sm flex items-center gap-1 mb-4">
            <ArrowLeft className="w-4 h-4" /> Back to Reservations
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Confirm Reservation</h1>
          <p className="text-gray-400">Complete your reservation for in-store pickup</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Confirmation Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500 rounded-xl p-4 flex items-center gap-2 text-red-400"
                >
                  <AlertCircle className="w-5 h-5" />
                  {error}
                </motion.div>
              )}

              {/* Customer Information */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-blue-400" /> 
                  Your Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="text" 
                        required 
                        value={formData.fullName} 
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
                        className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="email" 
                        required 
                        value={formData.email} 
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                        className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone} 
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                        className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Pickup Information */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1 }} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Store className="w-5 h-5 text-blue-400" /> 
                  Pickup Information
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="font-semibold">Store Location</p>
                      <p className="text-sm text-gray-400">CodeNagar Store, Muzaffarabad City</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="font-semibold">Pickup Hours</p>
                      <p className="text-sm text-gray-400">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                      <p className="text-sm text-gray-400">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <p className="font-semibold">Reservation Hold</p>
                      <p className="text-sm text-gray-400">Your items will be held for 48 hours</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <button 
                type="submit" 
                disabled={submitting} 
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2 group"
              >
                {submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5 group-hover:scale-110 transition" />
                    Confirm Reservation • ${total.toFixed(2)}
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By confirming this reservation, you agree to pick up your items within 48 hours. Payment will be made at the store.
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 sticky top-24"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-blue-400" />
                Reservation Summary
              </h2>
              
              <div className="space-y-3 mb-4 max-h-80 overflow-y-auto custom-scrollbar">
                {cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm py-2 border-b border-gray-700 last:border-0">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-gray-400 text-xs ml-1">x{item.quantity}</span>
                    </div>
                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-blue-400">${total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">* Pay at store upon pickup</p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="bg-green-500/10 rounded-lg p-3">
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <CreditCard className="w-3 h-3" /> No online payment required
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Pay with cash or card at our Muzaffarabad store</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationConfirmation;