import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Headr() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const navigate = useNavigate()

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    setIsMenuOpen(false)
    navigate(`/${tab.toLowerCase()}`)
  }

  const handleLogoClick = () => {
    navigate('/')
    setActiveTab('home')
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full h-20 text-white z-50"
    >
      <div className="flex justify-between items-center h-full px-4 md:px-12">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl md:text-3xl font-bold header-logo cursor-pointer"
          onClick={handleLogoClick}
        >
          <motion.span 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-rose-400 inline-block"
          >
            CYBER
          </motion.span>
          <motion.span 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-emerald-400 inline-block"
          >
            VERSE
          </motion.span>
        </motion.h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={handleMenuClick}
            className="p-2 text-fuchsia-300"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="rounded-full p-1">
            <nav className="flex space-x-1">
              {['Residential', 'Commercial', 'Industrial', 'ContactUs'].map((tab, index) => (
                <motion.button
                  key={tab}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTabClick(tab)}
                  className={`nav-item px-6 py-2 rounded-full transition-all duration-300  ${
                    activeTab === tab 
                      ? 'text-rose-300 font-black transform hover:scale-110 transition-all duration-300 border-2 border-fuchsia-500/30'
                      : 'text-teal-200 hover:text-emerald-200 hover:shadow-lg hover:shadow-emerald-500/30 transition-all hover:border hover:border-emerald-500/30'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          initial={false}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0,
            y: isMenuOpen ? 0 : -20
          }}
          transition={{ duration: 0.2 }}
          className={`absolute top-20 left-0 w-full md:hidden bg-slate-900/95 backdrop-blur-lg ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="p-6 space-y-4">
            <div className="flex flex-col space-y-3">
              {['Commercial', 'Industrial', 'Residential', 'ContactUs'].map((tab, index) => (
                <motion.button
                  key={tab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTabClick(tab)}
                  className={`mobile-menu-item p-4 rounded-xl transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-rose-500/20 to-fuchsia-500/20 text-rose-300 font-bold shadow-lg shadow-rose-500/20'
                      : 'hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-teal-500/10 text-emerald-200 hover:text-teal-200'
                  }`} 
                  
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}


export default Headr
