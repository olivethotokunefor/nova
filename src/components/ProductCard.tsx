import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-2xl bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-purple-500/20">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
            
            {/* Overlay Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <Heart className="h-5 w-5 text-white" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
              >
                <Eye className="h-5 w-5 text-white" />
              </motion.button>
            </motion.div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/80 to-cyan-500/80 backdrop-blur-sm text-white rounded-full">
                {product.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
              {product.name}
            </h3>
            <p className="text-white/70 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                ${product.price}
              </span>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Add</span>
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}