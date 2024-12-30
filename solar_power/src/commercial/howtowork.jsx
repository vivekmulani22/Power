import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Howtowork() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-amber-950/30 to-black text-white py-20">
      <div className="w-[95%] sm:w-[90%] max-w-[1400px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-6">
            Commercial Solar Journey
          </h2>
          <p className="text-amber-200/80 text-lg md:text-xl max-w-3xl mx-auto">
            Transform your business with our innovative solar solutions through our proven implementation process
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600 hidden lg:block" />

          {/* Step 1 */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col lg:flex-row items-center gap-8 mb-20"
          >
            <div className="w-full lg:w-1/2 p-6">
              <div className="bg-black/50 backdrop-blur-lg rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-bold text-amber-400">01</span>
                  <h3 className="text-2xl font-bold text-amber-300">Initial Consultation & Assessment</h3>
                </div>
                <ul className="space-y-4 text-lg text-amber-100/90">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">•</span>
                    <span>Comprehensive energy consumption analysis and pattern study</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">•</span>
                    <span>Advanced satellite mapping and roof structural evaluation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">•</span>
                    <span>Detailed financial modeling with ROI projections</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="./rb_167.png" alt="Assessment" className="rounded-3xl shadow-2xl shadow-amber-500/20 w-full" />
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col lg:flex-row-reverse items-center gap-8 mb-20"
          >
            <div className="w-full lg:w-1/2 p-6">
              <div className="bg-black/50 backdrop-blur-lg rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-bold text-amber-400">02</span>
                  <h3 className="text-2xl font-bold text-amber-300">Custom Design & Engineering</h3>
                </div>
                <ul className="space-y-4 text-lg text-amber-100/90">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">•</span>
                    <span>AI-powered system design optimization for maximum efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">•</span>
                    <span>3D modeling with shade analysis and panel placement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">•</span>
                    <span>Smart inverter selection and monitoring system integration</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="./rb_2343.png" alt="Design" className="rounded-3xl shadow-2xl shadow-amber-500/20 w-full" />
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            <div className="w-full lg:w-1/2 p-6">
              <div className="bg-black/50 backdrop-blur-lg rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-bold text-amber-400">03</span>
                  <h3 className="text-2xl font-bold text-amber-300">Installation & Activation</h3>
                </div>
                <ul className="space-y-4 text-lg text-amber-100/90">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">•</span>
                    <span>Zero-downtime installation process during off-peak hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">•</span>
                    <span>Real-time performance monitoring system setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-2xl">•</span>
                    <span>Comprehensive staff training and maintenance protocols</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              
              <img src="./environmental-impact.png" alt="Installation" className="rounded-3xl shadow-2xl shadow-amber-500/20 w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Howtowork;




