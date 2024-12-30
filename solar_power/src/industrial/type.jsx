import React from 'react';
import { motion } from 'framer-motion';

function IndustrialTypes() {
    const types = [
        {
            title: "Manufacturing Facilities",
            description: "Custom solar solutions for large manufacturing plants, featuring high-capacity systems that offset massive energy consumption and reduce operational costs.",
            icon: "🏭"
        },
        {
            title: "Warehouses & Distribution",
            description: "Extensive rooftop installations optimized for warehouse structures, providing sustainable power for logistics operations and climate control systems.",
            icon: "📦"
        },
        {
            title: "Agricultural Processing",
            description: "Specialized solar installations for food processing facilities and agricultural operations, supporting energy-intensive processing equipment.",
            icon: "🌾"
        },
        {
            title: "Data Centers",
            description: "High-reliability solar power systems with integrated backup solutions, ensuring consistent power supply for critical computing operations.",
            icon: "💻"
        },
        {
            title: "Chemical Plants",
            description: "Safety-compliant solar installations designed for hazardous environments, providing clean energy for chemical processing operations.",
            icon: "⚗️"
        },
        {
            title: "Mining Operations",
            description: "Robust solar solutions for remote mining sites, reducing dependency on diesel generators and lowering operational costs.",
            icon: "⛏️"
        },
        {
            title: "Textile Industries",
            description: "Energy solutions for textile manufacturing, supporting heavy machinery and climate-controlled environments.",
            icon: "🧵"
        },
        {
            title: "Automotive Plants",
            description: "Large-scale solar installations for automotive manufacturing facilities, powering assembly lines and robotic systems.",
            icon: "🚗"
        }
    ];

    return (
        <div className="min-h-screen bg-black py-20 px-4">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto"
            >
                <h2 className="text-3xl md:text-4xl font-['Audiowide'] text-center mb-12 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                    Industrial Applications
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {types.map((type, index) => (
                        <motion.div
                            key={type.title}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-gradient-to-b from-zinc-900 to-black p-6 rounded-xl border border-zinc-800 hover:border-amber-400/50 transition-colors duration-300 hover:shadow-lg hover:shadow-amber-400/10"
                        >
                            <div className="text-4xl mb-4">{type.icon}</div>
                            <h3 className="text-xl font-['Rajdhani'] text-amber-400 mb-3">
                                {type.title}
                            </h3>
                            <p className="text-gray-400 font-['Rajdhani'] text-sm">
                                {type.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export default IndustrialTypes;

