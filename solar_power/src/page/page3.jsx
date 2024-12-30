import React from 'react'
import { useInView } from 'react-intersection-observer';

function page3() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black  text-white py-8 sm:py-12 md:py-16'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6' ref={ref}>
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text text-transparent mb-8 sm:mb-10 md:mb-12 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          Next-Gen Solar Solutions
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10'>
          <div className={`relative group bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 overflow-hidden ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`} style={{ transitionDelay: '200ms' }}>
            <div className='absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <img src="./5386336.jpg" alt="Solar Integration" className="w-full h-48 sm:h-52 md:h-56 object-cover" />
            <div className="p-6 sm:p-7 md:p-8">
              <h3 className='text-xl sm:text-2xl font-bold text-gray-200 mb-3'>Solar Integration</h3>
              <p className='text-gray-400 text-sm sm:text-base'>
                High-efficiency panels with dynamic tracking for maximum solar absorption throughout the day.
              </p>
            </div>
          </div>

          <div className={`relative group bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 overflow-hidden ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`} style={{ transitionDelay: '400ms' }}>
            <div className='absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <img src="./32420.jpg" alt="EV Charging" className="w-full h-48 sm:h-52 md:h-56 object-cover" />
            <div className="p-6 sm:p-7 md:p-8">
              <h3 className='text-xl sm:text-2xl font-bold text-gray-200 mb-3'>EV Charging</h3>
              <p className='text-gray-400 text-sm sm:text-base'>
                Integrated charging station powered by solar energy for sustainable transportation.
              </p>
            </div>
          </div>

          <div className={`relative group bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 overflow-hidden ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`} style={{ transitionDelay: '600ms' }}>
            <div className='absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <img src="./8917633_44896.jpg" alt="Energy Storage" className="w-full h-48 sm:h-52 md:h-56 object-cover" />
            <div className="p-6 sm:p-7 md:p-8">
              <h3 className='text-xl sm:text-2xl font-bold text-gray-200 mb-3'>Energy Storage</h3>
              <p className='text-gray-400 text-sm sm:text-base'>
                Advanced battery system for reliable power storage and optimal energy management.
              </p>
            </div>
          </div>

          <div className={`relative group bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl border border-gray-700/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 overflow-hidden ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`} style={{ transitionDelay: '800ms' }}>
            <div className='absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <img src="./11257388_417.jpg" alt="Smart Grid" className="w-full h-48 sm:h-52 md:h-56 object-cover" />
            <div className="p-6 sm:p-7 md:p-8">
              <h3 className='text-xl sm:text-2xl font-bold text-gray-200 mb-3'>Smart Grid</h3>
              <p className='text-gray-400 text-sm sm:text-base'>
                Intelligent power distribution system for efficient energy usage and sharing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page3
