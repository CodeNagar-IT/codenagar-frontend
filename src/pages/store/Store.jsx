import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Filter, Sparkles, Star, ChevronRight, X } from "lucide-react";
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

  // Use useMemo instead of useEffect for filtering
  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    
    // Sort products
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
          <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">Premium Quality</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hardware <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Store</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Premium computer and mobile accessories at competitive prices
          </p>
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
              className="w-full pl-10 pr-4 py-3 bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 transition-all"
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
                      className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700"
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
                      className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700"
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
            {hasActiveFilters && (
              <p className="text-xs text-purple-400">Filters applied</p>
            )}
          </div>
        )}

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-gray-800/30 rounded-2xl">
            <Search className="w-20 h-20 mx-auto text-gray-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2">No products found</h2>
            <p className="text-gray-400 mb-4">Try adjusting your search or filter criteria</p>
            <button 
              onClick={clearFilters}
              className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
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
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                    🖥️
                  </div>
                  {product.featured && (
                    <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-pink-600 px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" /> Featured
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="absolute top-2 right-2 bg-red-600/90 px-2 py-1 rounded-lg text-xs font-semibold">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-purple-400 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-2">{product.category}</p>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-2xl font-bold text-purple-400">${product.price}</span>
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
                      className="flex-1 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ShoppingCart className="w-4 h-4" /> Add
                    </button>
                    <Link 
                      to={`/store/product/${product._id}`} 
                      className="px-3 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition-all flex items-center justify-center"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;