import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  const handleLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
      <header className="relative bg-gradient-to-r from-[#1e293b] to-[#0f172a] border-b border-indigo-500/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-12">
            <h1 className="text-5xl font-extrabold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Solar Dashboard
              </span>
            </h1>
            <div className="mt-4">
              <p className="text-indigo-300 text-lg">Manage Your Solar Power System</p>
            </div>
          </div>
          
          <nav className="transform translate-y-1/2">
            <ul className="flex justify-center gap-8">
              <li>
                <Link 
                  to="/dashboard/userdata" 
                  className="group relative block p-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="ml-3 font-medium text-gray-100 group-hover:text-gray-50">Users</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/contactdata"
                  className="group relative block p-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-3 font-medium text-gray-100 group-hover:text-gray-50">Contacts</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/reviewdata"
                  className="group relative block p-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="ml-3 font-medium text-gray-100 group-hover:text-gray-50">Reviews</span>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 mt-20">
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-lg rounded-xl shadow-2xl p-8 border border-gray-700">
          <div className="animate-fadeIn">
            <Outlet />
          </div>
        </div>
      </main>

      <div className="fixed bottom-8 right-8">
        <button className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative px-4 py-4 bg-black rounded-full leading-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
