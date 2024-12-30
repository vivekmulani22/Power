import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function CommercialType() {
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
            Benefits of Commercial Solar
          </span>
          <span className="relative bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            Benefits of Commercial Solar
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-10">
          {/* Cost Savings */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative bg-black/40 backdrop-blur-sm rounded-[2rem] p-6 hover:bg-amber-900/20 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            <div className="relative h-52 sm:h-64 md:h-72 mb-6 overflow-hidden rounded-2xl">
              <img 
                src="./rb_167.png" 
                alt="Cost Szavings"
                className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl sm:text-3xl font-black text-amber-400">
                Cost Savings
              </h3>
            </div>
            <div className="relative space-y-4">
              <p className="text-amber-100/90 text-lg font-medium">
                Significantly reduce operational costs with:
                • Lower electricity bills
                • Tax incentives
                • Reduced maintenance costs
              </p>
            </div>
          </motion.div>

          {/* Environmental Impact */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative bg-black/40 backdrop-blur-sm rounded-[2rem] p-6 hover:bg-amber-900/20 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            <div className="relative h-52 sm:h-64 md:h-72 mb-6 overflow-hidden rounded-2xl">
              <img 
                src="./environmental-impact.png " 
                alt="Environmental Impact"
                className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl sm:text-3xl font-black text-amber-400">
                Environmental Impact
              </h3>
            </div>
            <div className="relative space-y-4">
              <p className="text-amber-100/90 text-lg font-medium">
                Make a positive environmental impact:
                • Reduce carbon footprint
                • Support sustainability goals
                • Clean energy generation
              </p>
            </div>
          </motion.div>

          {/* Energy Independence */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group relative bg-black/40 backdrop-blur-sm rounded-[2rem] p-6 hover:bg-amber-900/20 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            <div className="relative h-52 sm:h-64 md:h-72 mb-6 overflow-hidden rounded-2xl">
              <img 
                src="./rb_2343.png" 
                alt="Energy Independence"
                className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl sm:text-3xl font-black text-amber-400">
                Energy Independence
              </h3>
            </div>
            <div className="relative space-y-4">
              <p className="text-amber-100/90 text-lg font-medium">
                Gain energy independence with:
                • Reduced grid reliance
                • Protection from rate hikes
                • Backup power options
              </p>
            </div>
          </motion.div>

          {/* Brand Enhancement */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="group relative bg-black/40 backdrop-blur-sm rounded-[2rem] p-6 hover:bg-amber-900/20 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
            <div className="relative h-52 sm:h-64 md:h-72 mb-6 overflow-hidden rounded-2xl">
              <img 
                src="./freepik-export-20241213094407itUV.jpeg" 
                alt="Brand Enhancement"
                className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
              <h3 className="absolute bottom-4 left-4 right-4 text-2xl sm:text-3xl font-black text-amber-400">
                Brand Enhancement
              </h3>
            </div>
            <div className="relative space-y-4">
              <p className="text-amber-100/90 text-lg font-medium">
                Enhance your brand image with:
                • Green credentials
                • Corporate responsibility
                • Market differentiation
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default CommercialType;
