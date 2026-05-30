// frontend/src/pages/admin/AdminProducts.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Package, Plus, Edit, Trash2, Search, 
  X, CheckCircle, XCircle, RefreshCw, Store, Upload
} from "lucide-react";
import axios from "axios";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    originalPrice: "",
    description: "",
    specs: "",
    stock: "",
    featured: false,
    images: [],
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  const handleImageUrlAdd = () => {
    const url = prompt("Enter image URL:");
    if (url && (url.startsWith("http://") || url.startsWith("https://"))) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, url]
      }));
      if (!imagePreview) setImagePreview(url);
    } else if (url) {
      alert("Please enter a valid image URL (http:// or https://)");
    }
  };

  const removeImage = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, index) => index !== indexToRemove)
    }));
    if (imagePreview === formData.images[indexToRemove]) {
      setImagePreview(formData.images[0] || "");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/products/${editingProduct._id}`, formData);
        alert("Product updated successfully!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/products`, formData);
        alert("Product added successfully!");
      }
      setShowModal(false);
      setEditingProduct(null);
      setFormData({
        name: "",
        category: "",
        price: "",
        originalPrice: "",
        description: "",
        specs: "",
        stock: "",
        featured: false,
        images: [],
      });
      setImagePreview("");
      fetchProducts();
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save product");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/products/${id}`);
        alert("Product deleted successfully!");
        fetchProducts();
      } catch {
        alert("Failed to delete product");
      }
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      originalPrice: product.originalPrice || "",
      description: product.description || "",
      specs: product.specs || "",
      stock: product.stock,
      featured: product.featured || false,
      images: product.images || [],
    });
    setImagePreview(product.images?.[0] || "");
    setShowModal(true);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Manage Products</h1>
            <p className="text-gray-400">Add, edit, and manage your in-store products</p>
          </div>
          <button
            onClick={() => {
              setEditingProduct(null);
              setFormData({
                name: "",
                category: "",
                price: "",
                originalPrice: "",
                description: "",
                specs: "",
                stock: "",
                featured: false,
                images: [],
              });
              setImagePreview("");
              setShowModal(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5" /> Add Product
          </button>
        </div>

        {/* Store Info Banner */}
        <div className="mb-6 bg-blue-500/10 rounded-xl p-3 border border-blue-500/30 flex items-center gap-3">
          <Store className="w-5 h-5 text-blue-400" />
          <p className="text-sm text-gray-300">
            Products displayed here are available for reservation at our <span className="text-blue-400 font-semibold">Muzaffarabad Store</span>. 
            Customers reserve online and pay in-store.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <button onClick={fetchProducts} className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Table */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading products...</p>
          </div>
        ) : (
          <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900 border-b border-gray-700">
                  <tr className="text-left text-gray-400 text-sm">
                    <th className="px-6 py-4">Image</th>
                    <th className="px-6 py-4">Product</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4">Stock</th>
                    <th className="px-6 py-4">Featured</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, idx) => (
                    <motion.tr
                      key={product._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-gray-700 hover:bg-gray-800/50 transition"
                    >
                      <td className="px-6 py-4">
                        {product.images && product.images[0] ? (
                          <img 
                            src={product.images[0]} 
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-2xl">
                            🖥️
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold">{product.name}</p>
                          <p className="text-xs text-gray-500 line-clamp-1">{product.description}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-blue-500/20 rounded-full text-xs">{product.category}</span>
                       </td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-blue-400">PKR {product.price?.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-500 line-through ml-1">PKR {product.originalPrice?.toLocaleString()}</span>
                        )}
                       </td>
                      <td className="px-6 py-4">
                        <span className={product.stock > 0 ? "text-green-400" : "text-red-400"}>
                          {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
                        </span>
                       </td>
                      <td className="px-6 py-4">
                        {product.featured ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-500" />
                        )}
                       </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="p-1 hover:text-blue-400 transition"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="p-1 hover:text-red-400 transition"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                       </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-16 h-16 mx-auto text-gray-600 mb-4" />
                <p className="text-gray-400">No products found</p>
              </div>
            )}
          </div>
        )}

        {/* Add/Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-500"
            >
              <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  {editingProduct ? "Edit Product" : "Add New Product"}
                </h2>
                <button onClick={() => setShowModal(false)} className="hover:text-blue-400">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Product Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Category *</label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Category</option>
                      <option>Chargers</option>
                      <option>Audio</option>
                      <option>Mobile Cases</option>
                      <option>Laptop Bags</option>
                      <option>Accessories</option>
                      <option>Cables</option>
                      <option>Cooling Pads</option>
                      <option>Wearables</option>
                      <option>USB Hubs</option>
                      <option>Mobile Accessories</option>
                      <option>Peripherals</option>
                      <option>Screen Protectors</option>
                      <option>Storage</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Stock Quantity</label>
                    <input
                      type="number"
                      value={formData.stock}
                      onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
                      className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Number of units available"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Price (PKR) *</label>
                    <input
                      type="number"
                      step="1"
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                      className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 3500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Original Price (PKR)</label>
                    <input
                      type="number"
                      step="1"
                      value={formData.originalPrice}
                      onChange={(e) => setFormData({ ...formData, originalPrice: parseFloat(e.target.value) })}
                      className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="For discount display"
                    />
                  </div>
                </div>

                {/* Images Section */}
                <div>
                  <label className="block text-sm font-medium mb-2">Product Images</label>
                  <button
                    type="button"
                    onClick={handleImageUrlAdd}
                    className="mb-3 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition flex items-center gap-2 text-sm"
                  >
                    <Upload className="w-4 h-4" /> Add Image URL
                  </button>
                  
                  {formData.images.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-2">
                      {formData.images.map((img, idx) => (
                        <div key={idx} className="relative">
                          <img 
                            src={img} 
                            alt={`Product ${idx + 1}`}
                            className="w-20 h-20 object-cover rounded-lg border border-gray-600"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(idx)}
                            className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 hover:bg-red-600 transition"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-2">Add image URLs (first image will be the main product image)</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    rows="3"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Product description..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Specifications</label>
                  <textarea
                    rows="2"
                    value={formData.specs}
                    onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Product specifications..."
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="featured" className="text-sm">Feature this product on store page</label>
                </div>

                {/* Store Info Note */}
                <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/30">
                  <p className="text-xs text-blue-400 flex items-center gap-2">
                    <Store className="w-3 h-3" />
                    This product will be available for in-store pickup only at our Muzaffarabad location.
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                  >
                    {editingProduct ? "Update Product" : "Add Product"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProducts;