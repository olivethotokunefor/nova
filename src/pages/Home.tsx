import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Shield, Cpu, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ParallaxSection from '../components/ParallaxSection';
import { products } from '../data/products';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -400]);

  const features = [
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Experience the future with our revolutionary products that push the boundaries of innovation.'
    },
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'Every product is crafted with meticulous attention to detail and uncompromising quality standards.'
    },
    {
      icon: Cpu,
      title: 'Smart Integration',
      description: 'Seamlessly integrate with your digital lifestyle through intelligent, connected experiences.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-600/20"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"
        />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="inline-block mb-6"
            >
              <Sparkles className="h-16 w-16 text-purple-400" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent"
          >
            Future is
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Now
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Discover cutting-edge lifestyle products that seamlessly blend advanced technology 
            with elegant design. Welcome to tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold text-lg flex items-center space-x-2 hover:shadow-2xl transition-all duration-300"
              >
                <span>Explore Products</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.button>
            </Link>

            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Floating Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </section>

      {/* Features Section */}
      <ParallaxSection className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Why Choose Nova
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We're pioneering the next generation of lifestyle technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-500"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl mb-6"
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Featured Products */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover our most innovative and popular products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                View All Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}