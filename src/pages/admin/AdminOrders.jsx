// frontend/src/pages/admin/AdminOrders.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ShoppingBag, Eye, Search, RefreshCw, Truck, 
  CheckCircle, Clock, MapPin, Calendar, User
} from "lucide-react";
import axios from "axios";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/orders/all`);
      setOrders(response.data);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchOrders();
  }, []);

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/orders/${orderId}`, { status: newStatus });
      fetchOrders();
      alert(`Order status updated to ${newStatus}`);
    } catch  {
      alert("Failed to update order status");
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (order.userId?.name || "Guest").toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status) => {
    switch(status) {
      case "delivered": return <CheckCircle className="w-4 h-4" />;
      case "shipped": return <Truck className="w-4 h-4" />;
      case "processing": return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "delivered": return "bg-green-500/20 text-green-400";
      case "shipped": return "bg-blue-500/20 text-blue-400";
      case "processing": return "bg-yellow-500/20 text-yellow-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  const getStatusOptions = (currentStatus) => {
    const options = ["pending", "processing", "shipped", "delivered"];
    const currentIndex = options.indexOf(currentStatus);
    return options.slice(currentIndex + 1);
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Manage Orders</h1>
            <p className="text-gray-400">View and manage customer orders</p>
          </div>
          <button onClick={fetchOrders} className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            <RefreshCw className="w-5 h-5" /> Refresh
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by order ID or customer name..."
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
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>

        {/* Orders Table */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading orders...</p>
          </div>
        ) : (
          <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 border-b border-gray-700">
                  <tr className="text-left text-gray-400 text-sm">
                    <th className="px-6 py-4">Order ID</th>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Items</th>
                    <th className="px-6 py-4">Total</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order, idx) => (
                    <motion.tr
                      key={order._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-gray-700 hover:bg-gray-800/50 transition cursor-pointer"
                      onClick={() => setSelectedOrder(order)}
                    >
                      <td className="px-6 py-4 font-mono text-sm">#{order._id.slice(-8).toUpperCase()}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span>{order.userId?.name || "Guest"}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm">{order.items?.length || 0} items</td>
                      <td className="px-6 py-4 font-bold text-blue-400">${order.total?.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)} {order.status}
                        </span>
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
            {filteredOrders.length === 0 && (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 mx-auto text-gray-600 mb-4" />
                <p className="text-gray-400">No orders found</p>
              </div>
            )}
          </div>
        )}

        {/* Order Details Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-500"
            >
              <div className="p-6 border-b border-gray-700">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Order Details</h2>
                  <button onClick={() => setSelectedOrder(null)} className="hover:text-blue-400 text-2xl">&times;</button>
                </div>
                <p className="text-gray-400 font-mono">#{selectedOrder._id}</p>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Order Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-xl p-4">
                    <h3 className="font-semibold mb-2 flex items-center gap-2"><User className="w-4 h-4" /> Customer</h3>
                    <p>{selectedOrder.userId?.name || "Guest"}</p>
                    <p className="text-sm text-gray-400">{selectedOrder.userId?.email}</p>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <h3 className="font-semibold mb-2 flex items-center gap-2"><Calendar className="w-4 h-4" /> Order Date</h3>
                    <p>{new Date(selectedOrder.createdAt).toLocaleString()}</p>
                  </div>
                </div>

                {/* Shipping Address */}
                {selectedOrder.shippingAddress && (
                  <div className="bg-gray-900 rounded-xl p-4">
                    <h3 className="font-semibold mb-2 flex items-center gap-2"><MapPin className="w-4 h-4" /> Shipping Address</h3>
                    <p>{selectedOrder.shippingAddress.street}</p>
                    <p>{selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.zipCode}</p>
                    <p>{selectedOrder.shippingAddress.country}</p>
                  </div>
                )}

                {/* Items */}
                <div>
                  <h3 className="font-semibold mb-3">Order Items</h3>
                  <div className="space-y-2">
                    {selectedOrder.items?.map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Totals */}
                <div className="bg-gray-900 rounded-xl p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${(selectedOrder.total - 10 - (selectedOrder.total * 0.05)).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Shipping</span>
                      <span>$10.00</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Tax (5%)</span>
                      <span>${(selectedOrder.total * 0.05).toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-700 pt-2 mt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-blue-400">${selectedOrder.total?.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Update Status */}
                <div>
                  <h3 className="font-semibold mb-2">Update Status</h3>
                  <div className="flex gap-2">
                    {getStatusOptions(selectedOrder.status).map(status => (
                      <button
                        key={status}
                        onClick={() => updateOrderStatus(selectedOrder._id, status)}
                        className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition text-sm"
                      >
                        Mark as {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;