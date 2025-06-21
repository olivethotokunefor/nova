import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-24 px-4 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-8">
            <ShoppingCart className="h-24 w-24 text-white/30 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Your cart is empty</h2>
            <p className="text-white/70 text-lg">Add some amazing products to get started</p>
          </div>
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              Continue Shopping
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Shopping Cart
          </h1>
          <p className="text-white/70 text-lg">{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-white truncate">{item.name}</h3>
                      <p className="text-white/60 text-sm">{item.category}</p>
                      <p className="text-purple-400 font-bold text-lg">${item.price}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Minus className="h-4 w-4 text-white" />
                      </motion.button>
                      
                      <span className="text-white font-medium min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Plus className="h-4 w-4 text-white" />
                      </motion.button>
                    </div>

                    {/* Remove Button */}
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 bg-red-500/20 rounded-lg hover:bg-red-500/30 transition-colors"
                    >
                      <Trash2 className="h-4 w-4 text-red-400" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Clear Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={clearCart}
              className="w-full p-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
            >
              Clear All Items
            </motion.button>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl h-fit sticky top-24"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-white/80">
                <span>Subtotal</span>
                <span>${total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Tax</span>
                <span>${(total * 0.08).toLocaleString()}</span>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span>${(total * 1.08).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <Link to="/checkout">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300 mb-4"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>

            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-3 text-white/70 hover:text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Continue Shopping
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}