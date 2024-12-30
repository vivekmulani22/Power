import React, { useState, useEffect } from 'react'
import Headr from './components/Headr'
import { Routes, Route } from 'react-router-dom'
import Page1 from './page/page1'
import Page2 from './page/page2'
import Page3 from './page/page3'
import Page4 from './page/page4'
import Residential from './router-dom/residential'
import Commercial from './router-dom/commercial'
import Industrial from './router-dom/industrial'
import ReviewSystem from './page/reivewseteym'
import Footer from './components/Footer'
import ContactUs from './router-dom/ContactUs'
// import Login from './login/Login'
// import SignUp from './login/SignUp'
// import { Logout } from './login/Logout'
import Dashboard from './router-dom/dashbord'
import Error from './page/erorr'
import { useAuth } from './store/auth'
import { useNavigate } from 'react-router-dom'
import UserData from './dashboard/userdata'
import ContactData from './dashboard/contactdata'
import ReviewData from './dashboard/reviewdata'

function App() {
  const navigate = useNavigate();
 

  
  //   // Add loading timeout
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, [ navigate]);


  //   return (
  //     <div id='type' className="h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden">
  //       <div className="relative">
  //         {/* Central sun */}
  //         <div className="w-32 h-32 bg-gradient-to-r from-yellow-300 to-orange-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50">
  //           <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping opacity-75"></div>
  //         </div>

  //         {/* Rotating rings */}
  //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin" style={{animationDuration: '8s'}}>
  //           <div className="absolute top-0 left-1/2 w-2 h-full bg-blue-400/20 rounded-full transform -translate-x-1/2 rotate-45"></div>
  //           <div className="absolute top-0 left-1/2 w-2 h-full bg-blue-400/20 rounded-full transform -translate-x-1/2 -rotate-45"></div>
  //         </div>

  //         {/* Orbiting solar panels */}
  //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 animate-spin" style={{animationDuration: '4s'}}>
  //           {[0, 90, 180, 270].map((rotation, index) => (
  //             <div key={index} className="absolute w-12 h-16" style={{transform: `rotate(${rotation}deg) translateY(-32px)`}}>
  //               <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg shadow-lg transform hover:scale-110 transition-transform">
  //                 <div className="grid grid-cols-2 grid-rows-3 gap-0.5 p-1 h-full">
  //                   {[...Array(6)].map((_, i) => (
  //                     <div key={i} className="bg-blue-300/30 rounded-sm"></div>
  //                   ))}
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>

  //         {/* Energy particles */}
  //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72">
  //           {[...Array(12)].map((_, i) => (
  //             <div
  //               key={i}
  //               className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-float"
  //               style={{
  //                 top: `${Math.random() * 100}%`,
  //                 left: `${Math.random() * 100}%`,
  //                 animationDelay: `${Math.random() * 2}s`,
  //                 animationDuration: `${2 + Math.random() * 2}s`
  //               }}
  //             ></div>
  //           ))}
  //         </div>
  //       </div>
        
  //       {/* Loading text */}
  //       <div className="absolute bottom-1/4 text-center">
  //         <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
  //           Powering Up Solar Solutions
  //         </p>
  //         <div className="mt-4 flex justify-center space-x-2">
  //           {[...Array(3)].map((_, i) => (
  //             <div
  //               key={i}
  //               className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
  //               style={{ animationDelay: `${i * 0.2}s` }}
  //             ></div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
    return (
  
    <div className="min-h-screen flex flex-col">
      <Headr />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Page1 />
              <Page2 />
              <Page3 />
              <Page4 />
              <ReviewSystem />
              <Footer />
            </>
          } />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/contactus" element={<ContactUs />} />
          {/* <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} /> */}
          <Route path="*" element={<Error />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="userdata" element={<UserData />} />
            <Route path="contactdata" element={<ContactData />} />
            <Route path="reviewdata" element={<ReviewData />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App