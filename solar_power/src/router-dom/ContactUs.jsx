import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer' 
import { useAuth } from '../store/auth'

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.firstName || '',
        email: user.email || '',
        phone: user.phone || '',
        message: ''
      });
    }
  }, [user]);

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // Format phone number to only include digits
      const formattedData = {
        ...formData,
        phone: formData.phone.replace(/\D/g, '')
      };

      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/form/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formattedData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: user?.firstName || '',
          email: user?.email || '',
          phone: user?.phone || '',
          message: ''
        });
        alert('Message sent successfully');
      } else {
        throw new Error(data.message || 'Failed to submit form');
      }
    } catch(error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
      alert(error.message || 'Failed to send message. Please try again.');
    }

    setTimeout(() => {
      setSubmitStatus('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className={`bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border border-slate-700/40 rounded-3xl p-12 shadow-2xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent text-center mb-14">
            Let's Connect
          </h2>

          <div className="grid lg:grid-cols-2 gap-14">
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-semibold text-white mb-5">Ready to Go Solar?</h3>
                <p className="text-slate-300 text-xl leading-relaxed">
                  Transform your energy future with our cutting-edge solar solutions. Our experts are ready to guide you through every step.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center space-x-5 text-slate-300 hover:text-sky-400 transition-colors group">
                  <div className="p-4 bg-slate-800/60 rounded-2xl group-hover:bg-sky-500/20 transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-xl">(555) 123-4567</span>
                </div>

                <div className="flex items-center space-x-5 text-slate-300 hover:text-indigo-400 transition-colors group">
                  <div className="p-4 bg-slate-800/60 rounded-2xl group-hover:bg-indigo-500/20 transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xl">info@solarsolutions.com</span>
                </div>

                <div className="flex items-center space-x-5 text-slate-300 hover:text-emerald-400 transition-colors group">
                  <div className="p-4 bg-slate-800/60 rounded-2xl group-hover:bg-emerald-500/20 transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-xl">123 Solar Street, Sunshine City, SC 12345</span>
                </div>
              </div>

              <div className="w-full h-72 rounded-2xl overflow-hidden shadow-lg">
                <iframe 
                  title="location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709471628!2d72.73989536150472!3d21.15934029854739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1734766180203!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7 bg-slate-800/40 p-10 rounded-2xl backdrop-blur-lg shadow-xl">
              {submitStatus === 'success' && (
                <div className="bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 p-5 rounded-xl">
                  Message sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-400 p-5 rounded-xl">
                  Failed to send message. Please try again.
                </div>
              )}
              <div className="space-y-3">
                <label className="text-slate-300 text-base font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full p-4 bg-slate-800/60 text-slate-200 border ${errors.fullName ? 'border-red-500' : 'border-slate-700/40'} rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300`}
                />
                {errors.fullName && <p className="text-red-400 text-sm mt-2">{errors.fullName}</p>}
              </div>
              <div className="space-y-3">
                <label className="text-slate-300 text-base font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full p-4 bg-slate-800/60 text-slate-200 border ${errors.email ? 'border-red-500' : 'border-slate-700/40'} rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300`}
                />
                {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
              </div>
              <div className="space-y-3">
                <label className="text-slate-300 text-base font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="1234567890"
                  className={`w-full p-4 bg-slate-800/60 text-slate-200 border ${errors.phone ? 'border-red-500' : 'border-slate-700/40'} rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300`}
                />
                {errors.phone && <p className="text-red-400 text-sm mt-2">{errors.phone}</p>}
              </div>
              <div className="space-y-3">
                <label className="text-slate-300 text-base font-medium">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your solar needs..."
                  rows="5"
                  className={`w-full p-4 bg-slate-800/60 text-slate-200 border ${errors.message ? 'border-red-500' : 'border-slate-700/40'} rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none transition-all duration-300`}
                ></textarea>
                {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-xl hover:from-sky-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] font-semibold text-lg shadow-xl hover:shadow-sky-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
