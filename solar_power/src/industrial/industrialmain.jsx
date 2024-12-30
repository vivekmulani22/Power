import React from 'react';
import { motion } from 'framer-motion';

function IndustrialMain() {
    const scrollToNextSection = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };
    
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen text-white"
        >
            <div className="relative w-full min-h-screen">
                {/* Full screen video background */}
                <video
                    className="background-video absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="./12194941_1920_1080_60fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
    
                {/* Overlay gradient */}
                <div className="overlay-gradient absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
                    {/* Main content */}
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="relative h-screen flex items-start justify-start pl-10 pt-52"
                    >
                        <div className="container px-4 text-left">
                            <div className="space-y-4">
                                <motion.h1 
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="cyber-title text-4xl md:text-6xl font-black tracking-tighter font-['Audiowide']"
                                >
                                    <span className="inline-block bg-[linear-gradient(45deg,theme(colors.amber.400),theme(colors.yellow.400),theme(colors.amber.400))] bg-clip-text text-transparent">
                                        SOLAR
                                    </span>
                                    <span className="inline-block bg-[linear-gradient(45deg,theme(colors.green.400),theme(colors.emerald.400),theme(colors.green.400))] bg-clip-text text-transparent">
                                        INDUSTRIAL
                                    </span>
                                </motion.h1>
                                
                                <motion.p 
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                    className="content-paragraph text-xl md:text-3xl font-light text-gray-300 leading-relaxed max-w-3xl font-['Rajdhani']"
                                >
                                    Industrial-Scale Solar Power Solutions
                                </motion.p>
                                
                                <motion.p
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.9, duration: 0.8 }}
                                    className="content-paragraph text-base md:text-lg text-gray-400 max-w-2xl font-['Rajdhani']"
                                >
                                    Transform your industrial facility with our high-capacity solar solutions. Maximize energy independence, reduce operational costs, and lead the way in sustainable manufacturing.
                                </motion.p>
    
                                <motion.div 
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1.1, duration: 0.8 }}
                                    className="flex flex-wrap gap-4"
                                >
                                    <button 
                                        onClick={scrollToNextSection}
                                        className="action-button group relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 p-0.5 cursor-pointer hover:scale-105 transition-transform duration-300"
                                    >
                                        <span className="block rounded-[15px] bg-black/50 backdrop-blur-sm px-6 py-3 font-medium text-sm font-['Orbitron']">
                                            Explore Solutions
                                        </span>
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default IndustrialMain;
