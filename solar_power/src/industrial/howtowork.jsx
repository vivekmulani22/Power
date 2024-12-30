import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HowToWorkIndustrial() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const steps = [
    {
      title: "Initial Consultation",
      description: "Our experts assess your facility's energy needs, structural requirements, and site conditions to develop a customized industrial solar solution.",
      icon: "🤝"
    },
    {
      title: "Engineering & Design", 
      description: "We create detailed technical plans, considering factors like load requirements, available space, and integration with existing systems.",
      icon: "📐"
    },
    {
      title: "Permits & Approvals",
      description: "We handle all necessary industrial permits, utility interconnection agreements, and regulatory compliance requirements.",
      icon: "📋"
    },
    {
      title: "Installation",
      description: "Our specialized teams execute the installation with minimal disruption to your operations, following strict safety protocols.",
      icon: "🏗️"
    },
    {
      title: "System Integration",
      description: "We seamlessly integrate the solar system with your facility's power infrastructure and monitoring systems.",
      icon: "🔌"
    },
    {
      title: "Testing & Commissioning",
      description: "Rigorous testing ensures optimal performance and compliance with all industrial safety standards.",
      icon: "✅"
    }
  ];

  const benefits = [
    {
      title: "Reduced Operating Costs",
      description: "Significantly lower electricity bills and maintenance costs through efficient solar power generation.",
      icon: "💰"
    },
    {
      title: "Energy Independence",
      description: "Decrease reliance on the grid and protect against rising energy costs with your own power generation.",
      icon: "🔋"
    },
    {
      title: "Environmental Leadership",
      description: "Demonstrate corporate responsibility by reducing carbon footprint and supporting sustainable practices.",
      icon: "🌱"
    },
    {
      title: "Tax Incentives",
      description: "Take advantage of federal and state tax benefits, grants, and accelerated depreciation.",
      icon: "📊"
    },
    {
      title: "Enhanced Reliability",
      description: "Ensure consistent power supply and reduce downtime with integrated backup solutions.",
      icon: "⚡"
    },
    {
      title: "Scalable Solutions",
      description: "Flexible system designs that can grow with your facility's increasing energy demands.",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black py-20 px-4">
      <div className="container mx-auto" ref={ref}>
        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-['Audiowide'] text-center mb-16 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent"
        >
          How We Implement Industrial Solar
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-b from-zinc-900 to-black p-8 rounded-xl border border-zinc-800 hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10 group"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-['Rajdhani'] text-amber-400 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-400 font-['Rajdhani']">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.h2 
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-['Audiowide'] text-center mb-16 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent"
        >
          Benefits of Industrial Solar
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-b from-zinc-900 to-black p-8 rounded-xl border border-zinc-800 hover:border-amber-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10 group"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-['Rajdhani'] text-amber-400 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-400 font-['Rajdhani']">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowToWorkIndustrial;
