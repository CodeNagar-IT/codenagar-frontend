// frontend/src/pages/store/ProductDetails.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Star, Heart, Share2, Check, AlertCircle, ChevronLeft, Calendar, Store } from "lucide-react";
import axios from "axios";
import { useCart } from "../../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reserved, setReserved] = useState(false);
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

  const handleReserve = () => {
    addToCart(product);
    setReserved(true);
    setTimeout(() => setReserved(false), 3000);
  };

  if (loading) {
    return (
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
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
          <Link to="/store" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            <ChevronLeft className="w-5 h-5" /> Back to Store
          </Link>
        </div>
      </div>
    );
  }

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
          <Link to="/store" className="text-gray-400 hover:text-blue-400 text-sm flex items-center gap-1">
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
                      ? "border-blue-500 shadow-lg shadow-blue-500/25" 
                      : "border-gray-700 hover:border-blue-500/50"
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
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs flex items-center gap-1">
                  <Store className="w-3 h-3" /> In-Store Only
                </span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs flex items-center gap-1">
                  <Check className="w-3 h-3" /> Available at Muzaffarabad Store
                </span>
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
              <span className="text-4xl md:text-5xl font-bold text-blue-400">PKR {product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">PKR {product.originalPrice}</span>
                  <span className="text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded-lg">
                    Save PKR {(product.originalPrice - product.price).toFixed(2)}
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

            {/* Store Pickup Info */}
            <div className="border-t border-gray-700 pt-4">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                Pickup Information
              </h3>
              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-sm">
                    <Store className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">CodeNagar Store, Muzaffarabad City</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">Mon-Sat: 10AM - 8PM | Sunday: Closed</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300">+92 5822 123456</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button 
                onClick={handleReserve} 
                disabled={product.stock === 0}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <MapPin className="w-5 h-5 group-hover:scale-110 transition" /> 
                {product.stock === 0 ? "Out of Stock" : "Reserve for In-Store Pickup"}
              </button>
              
              {/* Success Message */}
              {reserved && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm text-center flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" /> Reserved! <Link to="/cart" className="text-blue-400 underline">View Reservations</Link>
                </motion.div>
              )}

              <button className="w-full py-3 border border-gray-600 rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5" /> Share Product
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-700 pt-6 space-y-3">
              <h3 className="font-semibold mb-3">Why Reserve From Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Store className="w-5 h-5 text-blue-400" />
                  <span>Reserve now, pay at store</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>48-hour reservation hold</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span>Free product testing</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Star className="w-5 h-5 text-blue-400" />
                  <span>Expert staff assistance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-400" />
            Find Us in Muzaffarabad
          </h2>
          <div className="glass-card overflow-hidden p-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d411.6420718474806!2d73.47095634089504!3d34.372446473469225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e09f76421c02e9%3A0xaeb385ad86c56a8c!2sCodeNagar!5e0!3m2!1sen!2s!4v1779136409725!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="CodeNagar Location"
              className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;