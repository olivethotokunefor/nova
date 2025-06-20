import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award, Zap, Globe, Heart } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, creating products that define the future.'
    },
    {
      icon: Heart,
      title: 'Human-Centered',
      description: 'Every product is designed with people at the heart, enhancing daily life experiences.'
    },
    {
      icon: Globe,
      title: 'Sustainable Future',
      description: 'We\'re committed to creating technology that respects our planet and its resources.'
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Chief Innovation Officer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading breakthrough technologies in neural interfaces and quantum computing.'
    },
    {
      name: 'Maya Patel',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creating intuitive experiences that bridge the gap between human and machine.'
    },
    {
      name: 'Jordan Kim',
      role: 'Sustainability Director',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ensuring our innovations contribute to a better, more sustainable world.'
    }
  ];

  const achievements = [
    { number: '50M+', label: 'Lives Enhanced' },
    { number: '200+', label: 'Patents Filed' },
    { number: '15', label: 'Countries Served' },
    { number: '99.8%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8"
          >
            <Zap className="h-20 w-20 text-purple-400" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Shaping Tomorrow,
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Today
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            We're not just building products – we're crafting the future of human experience 
            through revolutionary technology and thoughtful design.
          </p>
        </motion.div>

        {/* Background Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-40"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          />
        ))}
      </section>

      {/* Mission Section */}
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
              Our Mission
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              To democratize access to cutting-edge technology that enhances human potential 
              and creates a more connected, sustainable future for all.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
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
                  <value.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Achievements Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              Our Impact
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Numbers that represent the lives we've touched and the future we're building
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <div className="text-white/80 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Visionaries
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The brilliant minds behind Nova's revolutionary products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group text-center"
              >
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-cyan-500 p-1"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                <p className="text-white/70 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            Join the Future
          </h2>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Be part of the revolution. Experience tomorrow's technology today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            Explore Our Products
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}