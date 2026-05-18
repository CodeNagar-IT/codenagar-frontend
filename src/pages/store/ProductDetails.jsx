import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw, Star, Heart, Share2, Check, AlertCircle, ChevronLeft } from "lucide-react";
import axios from "axios";
import { useCart } from "../../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Failed to fetch product", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  if (loading) {
    return (
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <AlertCircle className="w-16 h-16 mx-auto text-gray-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
          <p className="text-gray-400 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/store" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
            <ChevronLeft className="w-5 h-5" /> Back to Store
          </Link>
        </div>
      </div>
    );
  }

  // Mock images - in production, use product.images array
  const productImages = [
    { id: 1, icon: "🖥️", label: "Front View" },
    { id: 2, icon: "💻", label: "Side View" },
    { id: 3, icon: "⌨️", label: "Accessories" },
  ];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/store" className="text-gray-400 hover:text-purple-400 text-sm flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" /> Back to Store
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 flex items-center justify-center min-h-[400px]">
              <div className="text-9xl transform transition-transform duration-500 hover:scale-110">
                {productImages[activeImage]?.icon || "🖥️"}
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex gap-3 justify-center">
              {productImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 bg-gray-800/50 rounded-xl border-2 flex items-center justify-center text-3xl transition-all ${
                    activeImage === idx 
                      ? "border-purple-500 shadow-lg shadow-purple-500/25" 
                      : "border-gray-700 hover:border-purple-500/50"
                  }`}
                >
                  {img.icon}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Title and Brand */}
            <div>
              <div className="flex items-start justify-between">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
                <button className="p-2 hover:bg-gray-800 rounded-full transition">
                  <Heart className="w-6 h-6 text-gray-400 hover:text-red-400 transition" />
                </button>
              </div>
              <p className="text-gray-400 text-sm">by CodeNagar</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-5 h-5 text-gray-400" />
              </div>
              <span className="text-gray-400 text-sm">(128 customer reviews)</span>
              <span className="text-green-400 text-sm flex items-center gap-1 ml-2">
                <Check className="w-4 h-4" /> In Stock
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl md:text-5xl font-bold text-purple-400">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                  <span className="text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded-lg">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <div className="border-t border-gray-700 pt-4">
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-gray-300 leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications */}
            {product.specs && (
              <div className="border-t border-gray-700 pt-4">
                <h3 className="font-semibold mb-2">Specifications</h3>
                <p className="text-gray-300 text-sm">{product.specs}</p>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="border-t border-gray-700 pt-4">
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-gray-800 rounded-xl px-4 py-2 border border-gray-700">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="hover:text-purple-400 transition p-1"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="hover:text-purple-400 transition p-1"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-400">
                  {product.stock > 0 ? `${product.stock}+ items available` : "Out of stock"}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button 
                onClick={handleAddToCart} 
                disabled={product.stock === 0}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition" /> 
                {product.stock === 0 ? "Out of Stock" : `Add to Cart - $${(product.price * quantity).toFixed(2)}`}
              </button>
              
              {/* Success Message */}
              {addedToCart && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm text-center flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" /> Added to cart! <Link to="/cart" className="text-purple-400 underline">View Cart</Link>
                </motion.div>
              )}

              <button className="w-full py-3 border border-gray-600 rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5" /> Share Product
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-700 pt-6 space-y-3">
              <h3 className="font-semibold mb-3">Why Buy From Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Truck className="w-5 h-5 text-purple-400" />
                  <span>Free shipping over $100</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Shield className="w-5 h-5 text-purple-400" />
                  <span>2-year warranty</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <RotateCcw className="w-5 h-5 text-purple-400" />
                  <span>30-day easy returns</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-400" />
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((_, idx) => (
              <Link key={idx} to="/store" className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition-all text-center group">
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">🖥️</div>
                <p className="text-sm font-semibold group-hover:text-purple-400 transition">Related Product</p>
                <p className="text-purple-400 font-bold text-sm">$99</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;