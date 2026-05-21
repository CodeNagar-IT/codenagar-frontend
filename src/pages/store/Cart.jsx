// frontend/src/pages/store/Cart.jsx
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag,  Truck, CreditCard, Sparkles } from "lucide-react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

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
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-400 mb-6">Looks like you haven't added any items yet</p>
          <Link 
            to="/store" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" /> 
            Start Shopping
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
            Shopping Cart
          </h1>
          <p className="text-gray-400">Review and manage your items before checkout</p>
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
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                            className="p-1 hover:text-blue-400 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-sm text-gray-400">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 sticky top-24"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Order Summary
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
              
              {/* Price Breakdown */}
              <div className="border-t border-gray-700 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 flex items-center gap-1">
                    <Truck className="w-3 h-3" /> Shipping
                  </span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Tax (5%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                {/* Free Shipping Progress */}
                {subtotal < 100 && subtotal > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <p className="text-xs text-blue-400 mb-2">
                      Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                        style={{ width: `${(subtotal / 100) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                <div className="border-t border-gray-700 pt-3 mt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-blue-400">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <Link 
                  to="/checkout" 
                  className="block text-center py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all group"
                >
                  <span className="flex items-center justify-center gap-2">
                    <CreditCard className="w-5 h-5 group-hover:scale-110 transition" />
                    Proceed to Checkout
                  </span>
                </Link>
                <Link 
  to="/store" 
  className="flex items-center justify-center gap-2 text-center py-3 border border-gray-600 rounded-xl hover:bg-white/10 transition-all group"
>
  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />
  Continue Shopping
</Link>
              </div>
              
              {/* Secure Checkout Note */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                  🔒 Secure checkout guaranteed
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