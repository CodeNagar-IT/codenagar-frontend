// frontend/src/pages/store/Store.jsx
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Filter, Sparkles, Star, X, MapPin, Clock, Phone } from "lucide-react";
import axios from "axios";
import { useCart } from "../../context/CartContext";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("default");
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
        setProducts(response.data);
        const uniqueCategories = [...new Set(response.data.map(p => p.category))];
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return filtered;
  }, [products, selectedCategory, searchQuery, sortBy]);

  const clearFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSortBy("default");
  };

  const hasActiveFilters = selectedCategory !== "all" || searchQuery !== "" || sortBy !== "default";

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm">In-Store Only • Muzaffarabad</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hardware <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Store</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Premium computer and mobile accessories • Reserve online, pay at our store in Muzaffarabad
          </p>
        </motion.div>

        {/* Store Info Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-4 border border-blue-500/30"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="font-semibold">Visit Our Store</p>
                <p className="text-sm text-gray-400">Muzaffarabad City • Reserve now, pay in-store</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 10AM - 8PM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+92 5822 123456</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters Bar */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search products by name..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              className="w-full pl-10 pr-4 py-3 bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
            />
          </div>
          
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-3 bg-gray-800 rounded-xl flex items-center gap-2 hover:bg-gray-700 transition-all border border-gray-700"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>
          
          {hasActiveFilters && (
            <button 
              onClick={clearFilters}
              className="px-4 py-3 bg-gray-800 rounded-xl flex items-center gap-2 hover:bg-red-600/20 hover:text-red-400 transition-all border border-gray-700"
            >
              <X className="w-5 h-5" />
              Clear All
            </button>
          )}
        </div>

        {/* Expanded Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 overflow-hidden"
            >
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select 
                      value={selectedCategory} 
                      onChange={(e) => setSelectedCategory(e.target.value)} 
                      className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                    >
                      <option value="all">All Categories</option>
                      {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Sort By</label>
                    <select 
                      value={sortBy} 
                      onChange={(e) => setSortBy(e.target.value)} 
                      className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
                    >
                      <option value="default">Default</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name">Name: A to Z</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Count */}
        {!loading && (
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-400">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <p className="text-xs text-blue-400">✓ Reserve online • Pay in-store</p>
          </div>
        )}

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-gray-800/30 rounded-2xl">
            <Search className="w-20 h-20 mx-auto text-gray-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2">No products found</h2>
            <p className="text-gray-400 mb-4">Try adjusting your search or filter criteria</p>
            <button 
              onClick={clearFilters}
              className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                    🖥️
                  </div>
                  {product.featured && (
                    <div className="absolute top-2 left-2 bg-gradient-to-r from-blue-600 to-indigo-600 px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" /> Featured
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="absolute top-2 right-2 bg-green-600/90 px-2 py-1 rounded-lg text-xs font-semibold">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2 bg-blue-600/90 px-2 py-1 rounded-lg text-xs font-semibold">
                    In-Store Only
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-blue-400 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2">{product.category}</p>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-2xl font-bold text-blue-400">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-500 line-through ml-2">${product.originalPrice}</span>
                      )}
                    </div>
                    {product.stock > 0 ? (
                      <span className="text-xs text-green-400">In Stock</span>
                    ) : (
                      <span className="text-xs text-red-400">Out of Stock</span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => addToCart(product)} 
                      disabled={product.stock === 0}
                      className="flex-1 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                      <MapPin className="w-4 h-4" /> Reserve for Pickup
                    </button>
                    <Link 
                      to={`/store/product/${product._id}`} 
                      className="px-3 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition-all flex items-center justify-center"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-400" />
            Visit Our Store in Muzaffarabad
          </h2>
          <div className="glass-card overflow-hidden p-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411.6420718474806!2d73.47095634089504!3d34.372446473469225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e09f76421c02e9%3A0xaeb385ad86c56a8c!2sCodeNagar!5e0!3m2!1sen!2s!4v1779136409725!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="CodeNagar Location"
              className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
          <div className="mt-4 text-center text-gray-400 text-sm">
            <p>📍 CodeNagar Store, Muzaffarabad City</p>
            <p>🕐 Monday - Saturday: 10:00 AM - 8:00 PM | Sunday: Closed</p>
            <p>📞 +92 5822 123456 | ✉️ store@codenagar.com</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Store;