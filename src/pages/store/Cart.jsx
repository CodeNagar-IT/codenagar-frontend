// frontend/src/pages/store/Cart.jsx
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, MapPin, ShoppingBag, Clock, Store, ChevronRight } from "lucide-react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const total = getCartTotal();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <ShoppingBag className="w-12 h-12 text-gray-600" />
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">No reservations yet</h2>
          <p className="text-gray-400 mb-6">Browse our products and reserve items for pickup</p>
          <Link 
            to="/store" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all group"
          >
            Browse Products <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center gap-3">
            <ShoppingBag className="w-10 h-10 text-blue-400" />
            My Reservations
          </h1>
          <p className="text-gray-400">Review your reserved items before confirming</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {cart.map((item, idx) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30, transition: { duration: 0.2 } }}
                  transition={{ delay: idx * 0.05 }}
                  layout
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center text-4xl group-hover:scale-105 transition-transform duration-300">
                      🖥️
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-400">by CodeNagar</p>
                          <p className="text-blue-400 font-bold text-xl mt-1">
                            ${item.price}
                          </p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item._id)}
                          className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center gap-2 bg-gray-900 rounded-lg px-3 py-1.5 border border-gray-700">
                          <button 
                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                            className="p-1 hover:text-blue-400 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                            className="p-1 hover:text-blue-400 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-sm text-gray-400">
                          Total: ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Reservation Summary */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 sticky top-24"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Store className="w-5 h-5 text-blue-400" />
                Reservation Summary
              </h2>
              
              {/* Items List */}
              <div className="space-y-2 mb-4 max-h-60 overflow-y-auto custom-scrollbar">
                {cart.map(item => (
                  <div key={item._id} className="flex justify-between text-sm py-2 border-b border-gray-700 last:border-0">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-gray-400 text-xs ml-1">x{item.quantity}</span>
                    </div>
                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              {/* Total */}
              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-blue-400">${total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">* Pay at store when you pick up</p>
              </div>
              
              {/* Pickup Info */}
              <div className="mt-4 p-3 bg-blue-500/10 rounded-xl border border-blue-500/30">
                <div className="flex items-center gap-2 text-sm mb-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold">Pickup Location:</span>
                </div>
                <p className="text-xs text-gray-300 ml-6">CodeNagar Store, Muzaffarabad City</p>
                <div className="flex items-center gap-2 text-sm mt-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold">Pickup Hours:</span>
                </div>
                <p className="text-xs text-gray-300 ml-6">Mon-Sat: 10AM - 8PM | Sunday: Closed</p>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <Link 
                  to="/checkout" 
                  className="block text-center py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Confirm Reservation
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                  </span>
                </Link>
                <Link 
                  to="/store" 
                  className="flex items-center justify-center gap-2 text-center py-3 border border-gray-600 rounded-xl hover:bg-white/10 transition-all group"
                >
                  Continue Shopping
                </Link>
              </div>
              
              {/* Note */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-500 text-center">
                  📌 Your reservation will be held for 48 hours. Please visit our store to complete your purchase.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;