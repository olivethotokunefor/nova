import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Heart, Share2, Star, Zap, Shield, Truck } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-24 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Product not found</h2>
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-medium"
            >
              Back to Shop
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const benefits = [
    { icon: Zap, text: 'Free shipping on orders over $100' },
    { icon: Shield, text: '2-year warranty included' },
    { icon: Truck, text: 'Express delivery available' }
  ];

  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Shop</span>
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            
            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <Heart className="h-5 w-5 text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <Share2 className="h-5 w-5 text-white" />
              </motion.button>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Category Badge */}
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm text-purple-300 rounded-full border border-purple-500/30">
                {product.category}
              </span>
            </div>

            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-white/70 ml-2">(4.9 out of 5)</span>
              </div>
            </div>

            {/* Price */}
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ${product.price.toLocaleString()}
            </div>

            {/* Description */}
            <p className="text-lg text-white/80 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-white/80"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-sm text-white/60">{key}</div>
                    <div className="text-white font-medium">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-3 text-white/80"
                >
                  <benefit.icon className="h-5 w-5 text-green-400" />
                  <span>{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              <ShoppingCart className="h-6 w-6" />
              <span>Add to Cart</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}