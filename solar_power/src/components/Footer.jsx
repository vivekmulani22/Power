import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text text-transparent">CYBERVERSE</h3>
            <p className="text-gray-400">
              Pioneering the future of sustainable energy with cutting-edge solar technology and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                <i className="fab fa-facebook text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-violet-300">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/residential" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 flex items-center group">
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">Residential</span>
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 flex items-center group">
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">Commercial</span>
                </Link>
              </li>
              <li>
                <Link to="/industrial" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 flex items-center group">
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">Industrial</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-violet-300">Get in Touch</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt text-emerald-400"></i>
                <span>123 Innovation Drive, Tech Valley, TV 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-emerald-400"></i>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-emerald-400"></i>
                <span>contact@cyberverse.tech</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} CYBERVERSE. All rights reserved. | 
            <a href="#" className="text-emerald-400 hover:text-emerald-300 ml-2">Privacy Policy</a> |
            <a href="#" className="text-emerald-400 hover:text-emerald-300 ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
