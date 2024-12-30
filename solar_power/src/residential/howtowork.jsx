import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ResidentialHowToWork() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div className="w-full min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-gray-900 to-black text-white py-4 sm:py-8 md:py-12 lg:py-16">
      <div className="w-[95%] sm:w-[90%] max-w-[1400px] mx-auto" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative font-black text-center mb-8 sm:mb-12 md:mb-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span className="absolute blur-2xl opacity-50 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Your Solar Power Journey
          </span>
          <span className="relative bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Your Solar Power Journey
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video rounded-[2rem] overflow-hidden mb-12"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./solar-installation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </motion.div>

        <div className="flex flex-col gap-8">
          {/* Initial Assessment */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative bg-black/40 backdrop-blur-sm rounded-[2rem] p-8 hover:bg-amber-900/20 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 text-[120px] font-black text-amber-500/10">01</div>
            <h3 className="text-3xl font-bold text-amber-400 mb-6">Initial Assessment</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="h-20 w-20 bg-amber-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🏠</span>
                </div>
                <h4 className="text-xl font-semibold text-amber-300">Site Survey</h4>
                <p className="text-gray-300">Professional evaluation of your property's solar potential and structural integrity</p>
              </div>
              <div className="space-y-4">
                <div className="h-20 w-20 bg-amber-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">📊</span>
                </div>
                <h4 className="text-xl font-semibold text-amber-300">Energy Analysis</h4>
                <p className="text-gray-300">Detailed assessment of your current energy consumption patterns</p>
              </div>
              <div className="space-y-4">
                <div className="h-20 w-20 bg-amber-500/20 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">💡</span>
                </div>
                <h4 className="text-xl font-semibold text-amber-300">Custom Design</h4>
                <p className="text-gray-300">Tailored solar solution design based on your specific needs</p>
              </div>
            </div>
          </motion.div>

          {/* System Installation */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative bg-black/40 backdrop-blur-sm rounded-[2rem] p-8 hover:bg-amber-900/20 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 text-[120px] font-black text-amber-500/10">02</div>
            <h3 className="text-3xl font-bold text-amber-400 mb-6">Professional Installation</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/30 rounded-xl p-6 hover:bg-amber-900/30 transition-colors">
                <h4 className="text-xl font-semibold text-amber-300 mb-4">Pre-Installation</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="text-amber-500 mr-3">✓</span>
                    Permit acquisition
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-amber-500 mr-3">✓</span>
                    Equipment procurement
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-amber-500 mr-3">✓</span>
                    Safety preparations
                  </li>
                </ul>
              </div>
              <div className="bg-black/30 rounded-xl p-6 hover:bg-amber-900/30 transition-colors">
                <h4 className="text-xl font-semibold text-amber-300 mb-4">Installation Day</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="text-amber-500 mr-3">✓</span>
                    Professional mounting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-amber-500 mr-3">✓</span>
                    Electrical integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-amber-500 mr-3">✓</span>
                    Safety testing
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Ongoing Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="group relative bg-black/40 backdrop-blur-sm rounded-[2rem] p-8 hover:bg-amber-900/20 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 text-[120px] font-black text-amber-500/10">03</div>
            <h3 className="text-3xl font-bold text-amber-400 mb-6">Long-Term Benefits</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h4 className="text-lg font-semibold text-amber-300">Cost Savings</h4>
                <p className="text-sm text-gray-300 mt-2">Reduced energy bills</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌱</div>
                <h4 className="text-lg font-semibold text-amber-300">Eco-Friendly</h4>
                <p className="text-sm text-gray-300 mt-2">Lower carbon footprint</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📈</div>
                <h4 className="text-lg font-semibold text-amber-300">Property Value</h4>
                <p className="text-sm text-gray-300 mt-2">Increased home worth</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h4 className="text-lg font-semibold text-amber-300">Energy Security</h4>
                <p className="text-sm text-gray-300 mt-2">Power independence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ResidentialHowToWork;
