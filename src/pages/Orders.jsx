import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Package, ChevronDown, ChevronUp, Truck, CheckCircle, Clock, ShoppingBag, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/orders`);
        setOrders(response.data);
      } catch (err) {
        console.error("Failed to fetch orders", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const getStatusIcon = (status) => {
    switch(status) {
      case "delivered": return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "shipped": return <Truck className="w-5 h-5 text-blue-400" />;
      case "processing": return <Clock className="w-5 h-5 text-yellow-400" />;
      default: return <Package className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "delivered": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "shipped": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "processing": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case "delivered": return "Delivered";
      case "shipped": return "Shipped";
      case "processing": return "Processing";
      default: return "Pending";
    }
  };

  if (loading) {
    return (
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your orders...</p>
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
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Orders</span>
          </h1>
          <p className="text-gray-400">Track and manage all your purchases</p>
        </motion.div>

        {orders.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-gray-800/30 rounded-2xl border border-gray-700"
          >
            <ShoppingBag className="w-20 h-20 mx-auto text-gray-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2">No orders yet</h2>
            <p className="text-gray-400 mb-6">Looks like you haven't placed any orders</p>
            <Link 
              to="/store" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              <ShoppingBag className="w-5 h-5" /> Start Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {orders.map((order, idx) => (
              <motion.div
                key={order._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Order Header - Clickable */}
                <div 
                  className="p-6 bg-gray-800/30 cursor-pointer hover:bg-gray-800/50 transition-all duration-200"
                  onClick={() => setExpandedOrder(expandedOrder === order._id ? null : order._id)}
                >
                  <div className="flex flex-wrap justify-between items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Package className="w-4 h-4 text-purple-400" />
                        <p className="text-sm font-mono text-gray-300">#{order._id.slice(-8).toUpperCase()}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(order.createdAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      {/* Status Badge */}
                      <div className="flex items-center gap-2">
                        {getStatusIcon(order.status)}
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.status)}`}>
                          {getStatusText(order.status)}
                        </span>
                      </div>
                      
                      {/* Total & Items */}
                      <div className="text-right">
                        <p className="text-2xl font-bold text-purple-400">${order.total?.toFixed(2)}</p>
                        <p className="text-xs text-gray-400">{order.items?.length || 0} item(s)</p>
                      </div>
                      
                      {/* Expand Icon */}
                      <div className="text-gray-400">
                        {expandedOrder === order._id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Details - Expanded */}
                {expandedOrder === order._id && (
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
                          <ShoppingBag className="w-4 h-4 text-purple-400" />
                          Order Items
                        </h3>
                        <div className="space-y-3">
                          {order.items?.map((item, i) => (
                            <div key={i} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-0">
                              <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                              </div>
                              <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                          ))}
                        </div>
                        
                        {/* Price Breakdown */}
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Subtotal</span>
                              <span>${(order.total - 10 - (order.total * 0.05)).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Shipping</span>
                              <span>$10.00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Tax (5%)</span>
                              <span>${(order.total * 0.05).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-700">
                              <span>Total</span>
                              <span className="text-purple-400">${order.total?.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Shipping Information */}
                      <div>
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-400" />
                          Shipping Information
                        </h3>
                        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                          <p className="font-semibold text-purple-400 mb-2">Delivery Address</p>
                          <p className="text-gray-300">{order.shippingAddress?.street}</p>
                          <p className="text-gray-300">{order.shippingAddress?.city}, {order.shippingAddress?.zipCode}</p>
                          <p className="text-gray-300">{order.shippingAddress?.country}</p>
                        </div>

                        {/* Order Timeline */}
                        <div className="mt-6">
                          <h3 className="font-bold mb-4 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-purple-400" />
                            Order Timeline
                          </h3>
                          <div className="relative pl-6 space-y-4">
                            <div className="relative">
                              <div className="absolute left-0 top-1 w-3 h-3 bg-green-400 rounded-full"></div>
                              <div className="absolute left-1 top-4 w-0.5 h-12 bg-gray-700"></div>
                              <div>
                                <p className="font-semibold text-sm">Order Placed</p>
                                <p className="text-xs text-gray-400">{new Date(order.createdAt).toLocaleString()}</p>
                              </div>
                            </div>
                            
                            {order.status !== "pending" && (
                              <div className="relative">
                                <div className="absolute left-0 top-1 w-3 h-3 bg-blue-400 rounded-full"></div>
                                <div className="absolute left-1 top-4 w-0.5 h-12 bg-gray-700"></div>
                                <div>
                                  <p className="font-semibold text-sm">Order Confirmed</p>
                                  <p className="text-xs text-gray-400">Within 24 hours</p>
                                </div>
                              </div>
                            )}
                            
                            {order.status === "shipped" && (
                              <div className="relative">
                                <div className="absolute left-0 top-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                                <div>
                                  <p className="font-semibold text-sm">Out for Delivery</p>
                                  <p className="text-xs text-gray-400">Estimated 2-3 days</p>
                                </div>
                              </div>
                            )}
                            
                            {order.status === "delivered" && (
                              <div className="relative">
                                <div className="absolute left-0 top-1 w-3 h-3 bg-green-400 rounded-full"></div>
                                <div>
                                  <p className="font-semibold text-sm">Delivered</p>
                                  <p className="text-xs text-gray-400">Thank you for shopping!</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex gap-3">
                          <button className="flex-1 px-4 py-2 bg-purple-600 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-all">
                            Track Order
                          </button>
                          {order.status === "delivered" && (
                            <button className="px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-gray-700 transition-all">
                              Write Review
                            </button>
                          )}
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

export default Orders;