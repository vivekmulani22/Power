import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

function sectormain() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    // Smooth scroll setup
    const smoothScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    };

    // GSAP animations
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
        duration: 1
      }
    });

    if (inView) {
      tl.fromTo('.sector-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo('.sector-card',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.3 },
        '-=0.5'
      )
      .fromTo('.sector-video',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.3 },
        '-=1'
      )
      .fromTo('.sector-text',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, stagger: 0.3 },
        '-=1'
      )
      .fromTo('.sector-button',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.3 },
        '-=0.8'
      );
    }
  }, [inView]);

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black  text-white py-8 sm:py-12 md:py-16'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6' ref={ref}>
        <h2 className={`sector-title text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text text-transparent mb-8 sm:mb-10 md:mb-12 text-center transition-all duration-700`}>
          Solar Sectors
        </h2>

        <div className='space-y-8 sm:space-y-12'>
          <div 
            className='sector-card flex flex-col md:flex-row gap-8 items-center transform transition-all duration-300 hover:scale-[1.02]'
          >
            <div className='sector-video w-full md:w-1/2'>
              <video autoPlay loop muted className="w-full h-[300px] object-cover rounded-2xl shadow-lg">
                <source src="./9875909-uhd_3840_2160_30fps.mp4" type="video/mp4" />
              </video>
            </div>
            <div className='w-full md:w-1/2 space-y-4'>
              <h3 className='sector-text text-2xl sm:text-3xl font-bold text-violet-300'>Residential Solar</h3>
              <p className='sector-text text-gray-400'>Transform your home with our cutting-edge residential solar solutions. Our systems are designed to maximize energy efficiency while reducing your carbon footprint and electricity bills.</p>
              <button className="sector-button px-6 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg transition-colors duration-300 text-white font-semibold"
               onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/residential');
              }}>Learn More</button>
            </div>
          </div>

          <div 
            className='sector-card flex flex-col md:flex-row-reverse gap-8 items-center transform transition-all duration-300 hover:scale-[1.02]'
          >
            <div className='sector-video w-full md:w-1/2'>
              <video autoPlay loop muted className="w-full h-[300px] object-cover rounded-2xl shadow-lg">
                <source src="./video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className='w-full md:w-1/2 space-y-4'>
              <h3 className='sector-text text-2xl sm:text-3xl font-bold text-violet-300'>Commercial Solar</h3>
              <p className='sector-text text-gray-400'>Power your business sustainably with our commercial solar installations. We provide customized solutions that meet your energy demands while offering significant cost savings.</p>
              <button className="sector-button px-6 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg transition-colors duration-300 text-white font-semibold"
               onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/commercial');
              }}>Learn More</button>
            </div>
          </div>

          <div 
            className='sector-card flex flex-col md:flex-row gap-8 items-center transform transition-all duration-300 hover:scale-[1.02]'
          >
            <div className='sector-video w-full md:w-1/2'>
              <video autoPlay loop muted className="w-full h-[300px] object-cover rounded-2xl shadow-lg">
                <source src="./12194941_1920_1080_60fps.mp4" type="video/mp4" />
              </video>
            </div>
            <div className='w-full md:w-1/2 space-y-4'>
              <h3 className='sector-text text-2xl sm:text-3xl font-bold text-violet-300'>Industrial Solar</h3>
              <p className='sector-text text-gray-400'>Scale your industrial operations with our high-capacity solar solutions. Our industrial-grade systems are built to handle heavy power requirements while ensuring reliability.</p>
              <button className="sector-button px-6 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg transition-colors duration-300 text-white font-semibold" onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/industrial');
              }}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sectormain
