import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth.jsx';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '', 
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(`http://localhost:3000/api/auth/register`,{
        method: 'POST',
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(formData)
      });
      if(response.ok){
        const res_data = await response.json();
        console.log("res_data",res_data);
        storeTokenInLS(res_data.token);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        navigate('/');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[url('/deep-space.jpg')] bg-cover bg-center">
      {/* Spiral Galaxy Animation Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/95 via-[#112240]/90 to-[#233554]/95"></div>
        
        {/* Spiral Stars */}
        <div className="stars absolute inset-0">
          {[...Array(400)].map((_, i) => (
            <div
              key={i}
              className="star absolute rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                background: `rgb(${200 + Math.random() * 55}, ${220 + Math.random() * 35}, ${100 + Math.random() * 155})`,
                animation: `twinkle ${Math.random() * 6 + 3}s infinite`,
                animationDelay: `${Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Nebula Effects */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff9d]/20 rounded-full filter blur-3xl animate-nebula"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-[#4ade80]/20 rounded-full filter blur-3xl animate-nebula-reverse"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#22d3ee]/20 rounded-full filter blur-3xl animate-nebula-slow"></div>
        </div>

        <style jsx>{`
          @keyframes twinkle {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(0.7); }
          }
          @keyframes nebula {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.8); }
            100% { transform: rotate(360deg) scale(1); }
          }
          @keyframes nebula-reverse {
            0% { transform: rotate(360deg) scale(1.4); }
            50% { transform: rotate(180deg) scale(0.9); }
            100% { transform: rotate(0deg) scale(1.4); }
          }
          @keyframes nebula-slow {
            0% { transform: rotate(0deg) scale(0.9); }
            50% { transform: rotate(-180deg) scale(1.5); }
            100% { transform: rotate(-360deg) scale(0.9); }
          }
        `}</style>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Welcome Message */}
            <div className="hidden lg:flex flex-col gap-10 p-10">
              <div className="text-center space-y-6">
                <h1 className="text-7xl font-black">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] via-[#4ade80] to-[#22d3ee] animate-text-shimmer">
                    Welcome
                  </span>
                </h1>
                <div className="flex justify-center">
                  <div className="w-40 h-40 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4ade80] to-[#22d3ee] rounded-full animate-pulse opacity-20"></div>
                    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-r from-[#00ff9d] to-[#4ade80] rounded-full shadow-lg shadow-[#22d3ee]/30">
                      <span className="text-7xl">☀️</span>
                    </div>
                  </div>
                </div>
                <p className="text-2xl text-[#a8b2d1]/60 mt-8 font-light leading-relaxed">
                  Join our solar community
                </p>
              </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-full max-w-xl mx-auto">
              <div className="relative backdrop-blur-3xl bg-[#112240]/40 rounded-3xl p-8 lg:p-10 border border-[#22d3ee]/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff9d]/10 to-[#22d3ee]/10 rounded-3xl"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-[#22d3ee]">
                    Sign Up
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      {['firstName', 'lastName'].map((field) => (
                        <div key={field}>
                          <label className="block text-sm font-medium text-[#a8b2d1]/60 mb-2">
                            {field === 'firstName' ? 'First Name' : 'Last Name'}
                          </label>
                          <input
                            type="text"
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="w-full bg-[#0a192f]/50 border border-[#22d3ee]/20 rounded-lg px-4 py-3 text-[#a8b2d1] placeholder-[#a8b2d1]/30 focus:border-[#00ff9d]/50 focus:ring-2 focus:ring-[#00ff9d]/20 transition-all duration-300"
                            required
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#a8b2d1]/60 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#0a192f]/50 border border-[#22d3ee]/20 rounded-lg px-4 py-3 text-[#a8b2d1] placeholder-[#a8b2d1]/30 focus:border-[#00ff9d]/50 focus:ring-2 focus:ring-[#00ff9d]/20 transition-all duration-300"
                        required
                      />
                    </div>

                    {['password', 'confirmPassword'].map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-[#a8b2d1]/60 mb-2">
                          {field === 'password' ? 'Password' : 'Confirm Password'}
                        </label>
                        <div className="relative">
                          <input
                            type={field === 'password' ? (showPassword ? 'text' : 'password') : (showConfirmPassword ? 'text' : 'password')}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="w-full bg-[#0a192f]/50 border border-[#22d3ee]/20 rounded-lg px-4 py-3 text-[#a8b2d1] placeholder-[#a8b2d1]/30 focus:border-[#00ff9d]/50 focus:ring-2 focus:ring-[#00ff9d]/20 transition-all duration-300"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => field === 'password' ? setShowPassword(!showPassword) : setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#00ff9d]/70 hover:text-[#00ff9d] transition-colors"
                          >
                            {(field === 'password' ? showPassword : showConfirmPassword) ? '👁️' : '👁️‍🗨️'}
                          </button>
                        </div>
                      </div>
                    ))}

                    <button
                      type="submit"
                      className="w-full relative overflow-hidden group bg-gradient-to-r from-[#00ff9d] via-[#4ade80] to-[#22d3ee] text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-[#00ff9d]/30 transition-all duration-300"
                    >
                      <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                      <span className="relative">Create Account ☀️</span>
                    </button>
                  </form>

                  <div className="mt-8 text-center">
                    <p className="text-[#a8b2d1]/40">
                      Already have an account?{' '}
                      <button
                        onClick={() => navigate('/login')}
                        className="text-[#00ff9d] hover:text-[#4ade80] font-semibold transition-colors"
                      >
                        Sign In ☀️
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
