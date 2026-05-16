// 6. src/components/Hardware.jsx
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Computer, Headphones, Smartphone, Keyboard, Mouse, Monitor, Watch, Printer } from "lucide-react";

const products = [
  { icon: Computer, name: "Gaming PC", price: "$899", category: "Computers", specs: "RTX 3060, i7, 16GB RAM", inStock: true },
  { icon: Monitor, name: "4K Monitor", price: "$349", category: "Displays", specs: "27-inch, 144Hz, IPS", inStock: true },
  { icon: Keyboard, name: "Mechanical Keyboard", price: "$89", category: "Peripherals", specs: "RGB, Blue Switches", inStock: true },
  { icon: Mouse, name: "Gaming Mouse", price: "$49", category: "Peripherals", specs: "16K DPI, RGB", inStock: true },
  { icon: Headphones, name: "Wireless Headset", price: "$129", category: "Audio", specs: "7.1 Surround, Noise Cancelling", inStock: true },
  { icon: Smartphone, name: "Phone Case", price: "$19", category: "Mobile", specs: "Shockproof, Slim", inStock: true },
  { icon: Watch, name: "Smart Watch", price: "$199", category: "Wearables", specs: "GPS, Heart Rate", inStock: true },
  { icon: Printer, name: "All-in-One Printer", price: "$149", category: "Office", specs: "Scan, Copy, Print", inStock: false },
];

const Hardware = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    if (product.inStock) {
      setCart([...cart, product]);
      alert(`${product.name} added to cart!`);
    }
  };

  return (
    <section id="hardware" ref={ref} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hardware <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Store</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Premium computer & mobile accessories at competitive prices
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowCart(true)}
            className="mt-4 px-6 py-2 bg-purple-600 rounded-lg inline-flex items-center gap-2"
          >
            🛒 Cart ({cart.length} items)
          </motion.button>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all"
            >
              <div className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                  <product.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-center mb-1">{product.name}</h3>
                <p className="text-sm text-gray-400 text-center mb-2">{product.category}</p>
                <p className="text-xs text-gray-500 text-center mb-3">{product.specs}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-purple-400">{product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                      product.inStock
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-gray-600 cursor-not-allowed"
                    }`}
                  >
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shopping Cart Modal */}
        {showCart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowCart(false)}
          >
            <motion.div
              initial={{ scale: 0.9, x: -100 }}
              animate={{ scale: 1, x: 0 }}
              className="bg-gray-800 rounded-2xl max-w-lg w-full p-6 border border-purple-500"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">Your Cart ({cart.length})</h3>
              {cart.length === 0 ? (
                <p className="text-gray-400">Cart is empty</p>
              ) : (
                <>
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b border-gray-700">
                      <span>{item.name}</span>
                      <span className="text-purple-400">{item.price}</span>
                    </div>
                  ))}
                  <div className="flex justify-between mt-4 pt-4 border-t border-gray-700 font-bold">
                    <span>Total:</span>
                    <span className="text-purple-400">
                      ${cart.reduce((sum, item) => sum + parseInt(item.price.slice(1)), 0)}
                    </span>
                  </div>
                </>
              )}
              <button
                onClick={() => setShowCart(false)}
                className="w-full mt-6 py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hardware;