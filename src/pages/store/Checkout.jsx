// frontend/src/pages/store/Checkout.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CreditCard, Truck, MapPin, Phone, Mail, User, Lock, ArrowLeft, CheckCircle, AlertCircle, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "Pakistan",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    
    try {
      const orderData = {
        items: cart.map(item => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        total: total,
        shippingAddress: {
          street: formData.address,
          city: formData.city,
          zipCode: formData.zipCode,
          country: formData.country
        }
      };
      
      await axios.post(`${import.meta.env.VITE_API_URL}/api/orders`, orderData);
      setOrderSuccess(true);
      clearCart();
      setTimeout(() => {
        navigate("/orders");
      }, 3000);
    } catch  {
      setError("Failed to place order. Please check your information and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (cart.length === 0 && !orderSuccess) {
    navigate("/store");
    return null;
  }

  if (orderSuccess) {
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
          <h2 className="text-2xl font-bold mb-2">Order Placed Successfully!</h2>
          <p className="text-gray-400 mb-6">Thank you for your purchase. You will receive a confirmation email shortly.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/orders" className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">View Orders</Link>
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
            <ArrowLeft className="w-4 h-4" /> Back to Cart
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Checkout</h1>
          <p className="text-gray-400">Complete your purchase securely</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
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

              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-6">
                {["Cart", "Checkout", "Payment"].map((step, idx) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      idx === 1 ? "bg-blue-600 text-white" : idx < 1 ? "bg-green-500 text-white" : "bg-gray-700 text-gray-400"
                    }`}>
                      {idx < 1 ? <CheckCircle className="w-4 h-4" /> : idx + 1}
                    </div>
                    <span className={`ml-2 text-sm ${idx === 1 ? "text-blue-400" : "text-gray-400"}`}>{step}</span>
                    {idx < 2 && <div className="w-16 h-px bg-gray-700 mx-4"></div>}
                  </div>
                ))}
              </div>

              {/* Shipping Information */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-blue-400" /> 
                  Shipping Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
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
                    <label className="block text-sm font-medium mb-1">Email *</label>
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
                    <label className="block text-sm font-medium mb-1">Phone *</label>
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
                  <div>
                    <label className="block text-sm font-medium mb-1">Address *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="text" 
                        required 
                        value={formData.address} 
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })} 
                        className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                        placeholder="Street, building, apartment"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">City *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.city} 
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })} 
                      className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                      placeholder="Karachi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">ZIP Code *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.zipCode} 
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })} 
                      className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                      placeholder="12345"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Payment Information */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1 }} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-400" /> 
                  Payment Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Card Number *</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="text" 
                        required 
                        placeholder="1234 5678 9012 3456" 
                        value={formData.cardNumber} 
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })} 
                        className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Expiry Date *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="MM/YY" 
                        value={formData.expiryDate} 
                        onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })} 
                        className="w-full px-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">CVV *</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                          type="password" 
                          required 
                          placeholder="123" 
                          value={formData.cvv} 
                          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })} 
                          className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Security Note */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Your payment information is encrypted and secure
                  </p>
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
                    <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition" />
                    Place Order • ${total.toFixed(2)}
                  </>
                )}
              </button>
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
                Order Summary
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
              
              <div className="border-t border-gray-700 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Tax (5%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-700 pt-3 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-blue-400">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Shipping Info Note */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <Truck className="w-3 h-3" /> Free shipping on orders over $100
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;