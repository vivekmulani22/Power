import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ResidentialType() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div className="w-full min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-gray-900 to-black text-white py-4 sm:py-8 md:py-12 lg:py-16">
      <div className="w-[95%] sm:w-[90%] max-w-[1400px] mx-auto" ref={ref}>
        <motion.h2 
          initial={{ y: -100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="relative font-black text-center mb-8 sm:mb-12 md:mb-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span className="absolute blur-2xl opacity-50 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Solar Panel Mounting Solutions
          </span>
          <span className="relative bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Solar Panel Mounting Solutions
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10">
          {/* Pitched Roof Mount */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative bg-black/40 backdrop-blur-sm rounded-[2rem] p-6 hover:bg-amber-900/20 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            <div className="relative h-52 sm:h-64 md:h-72 mb-6 overflow-hidden rounded-2xl">
              <img 
                src="./pitched-roof.png" 
                alt="Pitched Roof Mount"
                className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl sm:text-3xl font-black text-amber-400">
                Pitched Roof Mount
              </h3>
            </div>
            <div className="relative space-y-4">
              <p className="text-amber-100/90 text-lg font-medium">
                Ideal for traditional sloped roofs, our pitched roof mounting system provides:
              </p>
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Adjustable tilt angles for optimal sun exposure
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Weather-sealed mounting points
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Distributed weight load system
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Wind and snow load resistance
                </motion.li>
              </ul>
            </div>
          </motion.div>

          {/* Flat Roof Mount */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative bg-black/40 backdrop-blur-sm rounded-[2rem] p-6 hover:bg-amber-900/20 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            <div className="relative h-52 sm:h-64 md:h-72 mb-6 overflow-hidden rounded-2xl">
              <img 
                src="./Flat-Roof.png" 
                alt="Flat Roof Mount"
                className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl sm:text-3xl font-black text-amber-400">
                Flat Roof Mount
              </h3>
            </div>
            <div className="relative space-y-4">
              <p className="text-amber-100/90 text-lg font-medium">
                Specialized solutions for flat roof installations featuring:
              </p>
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Ballasted mounting system
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Non-penetrating options
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Aerodynamic design
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Easy maintenance access
                </motion.li>
              </ul>
            </div>
          </motion.div>

          {/* Ground Mount */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group relative bg-black/40 backdrop-blur-sm rounded-[2rem] p-6 hover:bg-amber-900/20 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            <div className="relative h-52 sm:h-64 md:h-72 mb-6 overflow-hidden rounded-2xl">
              <img 
                src="./ground-mount.png" 
                alt="Ground Mount"
                className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl sm:text-3xl font-black text-amber-400">
                Ground Mount
              </h3>
            </div>
            <div className="relative space-y-4">
              <p className="text-amber-100/90 text-lg font-medium">
                Perfect for properties with available land space, offering:
              </p>
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Maximum sun tracking capability
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Robust foundation systems
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Scalable design
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Easy panel access for cleaning
                </motion.li>
              </ul>
            </div>
          </motion.div>

          {/* Charging Station */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="group relative bg-black/40 backdrop-blur-sm rounded-[2rem] p-6 hover:bg-amber-900/20 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            <div className="relative h-52 sm:h-64 md:h-72 mb-6 overflow-hidden rounded-2xl">
              <img 
                src="./charging-station.jpeg" 
                alt="EV Charging Station"
                className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl sm:text-3xl font-black text-amber-400">
                EV Charging Station
              </h3>
            </div>
            <div className="relative space-y-4">
              <p className="text-amber-100/90 text-lg font-medium">
                Integrated solar-powered charging solutions including:
              </p>
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Level 2 AC charging
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Smart power management
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Mobile app connectivity
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-300 hover:text-amber-300 transition-colors"
                  whileHover={{ x: 10, scale: 1.05 }}
                >
                  <span className="text-amber-500 mr-3">⚡</span>
                  Weather-resistant design
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ResidentialType;
