import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6 py-24">
      <div className="text-center">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
          404
        </h1>
        
        <h2 className="mt-6 text-3xl font-semibold text-white">
          Page Not Found
        </h2>
        
        <p className="mt-4 text-lg text-slate-400">
          Oops! The page you're looking for seems to have gone off-grid.
        </p>

        <div className="mt-10 flex justify-center space-x-4">
          <Link 
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium rounded-xl hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-sky-500/25"
          >
            Return Home
          </Link>
          
          <Link
            to="/contactus"
            className="px-6 py-3 bg-slate-800 text-slate-200 font-medium rounded-xl hover:bg-slate-700 transition-all duration-300 border border-slate-700"
          >
            Contact Support
          </Link>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-24 h-24 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full animate-spin-slow opacity-75 blur-lg"></div>
            <div className="absolute inset-2 bg-slate-900 rounded-full"></div>
            <div className="absolute inset-5 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
