import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer';

function page2() {
  const [counts, setCounts] = useState({ grants: 0, projects: 0, completed: 0 });
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
 
  useEffect(() => {
    if (inView) {
      const targetCounts = { grants: 127, projects: 89, completed: 234 };
      const duration = 2500; // 2.5 seconds animation
      const steps = 60;
      const interval = duration / steps;
      
      const counter = setInterval(() => {
        setCounts(prevCounts => ({
          grants: prevCounts.grants < targetCounts.grants ? prevCounts.grants + Math.ceil(targetCounts.grants/steps) : targetCounts.grants,
          projects: prevCounts.projects < targetCounts.projects ? prevCounts.projects + Math.ceil(targetCounts.projects/steps) : targetCounts.projects,
          completed: prevCounts.completed < targetCounts.completed ? prevCounts.completed + Math.ceil(targetCounts.completed/steps) : targetCounts.completed
        }));
      }, interval);

      return () => clearInterval(counter);
    }
  }, [inView]);

  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black  text-white py-8 sm:py-12 md:py-16 lg:py-20'>
      <div className='max-w-[90%] sm:max-w-[85%] md:max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8' ref={ref}>
        <h2 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text text-transparent mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Our Impact in Numbers
        </h2>
        
        <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10'>
          <div className={`relative group bg-gradient-to-br from-violet-950/40 to-fuchsia-950/40 p-4 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl border border-violet-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-500 overflow-hidden ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            <div className='absolute inset-0 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <h3 className='text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-violet-300 mb-2 sm:mb-3 md:mb-4'>Total Grants</h3>
            <p className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent'>{counts.grants}</p>
            <p className='text-sm xs:text-base sm:text-lg md:text-xl text-gray-400 mt-2 sm:mt-3 md:mt-4'>Active funding opportunities</p>
          </div>

          <div className={`relative group bg-gradient-to-br from-violet-950/40 to-fuchsia-950/40 p-4 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl border border-violet-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-500 overflow-hidden ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <div className='absolute inset-0 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <h3 className='text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-violet-300 mb-2 sm:mb-3 md:mb-4'>Current Projects</h3>
            <p className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent'>{counts.projects}</p>
            <p className='text-sm xs:text-base sm:text-lg md:text-xl text-gray-400 mt-2 sm:mt-3 md:mt-4'>Ongoing developments</p>
          </div>

          <div className={`relative group bg-gradient-to-br from-violet-950/40 to-fuchsia-950/40 p-4 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl border border-violet-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-500 overflow-hidden ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} xs:col-span-2 lg:col-span-1`} style={{ transitionDelay: '600ms' }}>
            <div className='absolute inset-0 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <h3 className='text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-violet-300 mb-2 sm:mb-3 md:mb-4'>Completed</h3>
            <p className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent'>{counts.completed}</p>
            <p className='text-sm xs:text-base sm:text-lg md:text-xl text-gray-400 mt-2 sm:mt-3 md:mt-4'>Successfully finished projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page2
