"use client";

import React, { useState, useEffect } from 'react';
import Header from './../shared/header';

interface FormData {
  fullName: string;
  gamerTag: string;
  email: string;
  favoriteGame: string;
}

interface FormErrors {
  fullName?: string;
  gamerTag?: string;
  email?: string;
  favoriteGame?: string;
}

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    gamerTag: '',
    email: '',
    favoriteGame: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Create floating particles effect
    const createParticles = () => {
      const container = document.querySelector('.particles-bg');
      if (!container) return;
      
      container.innerHTML = '';

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        const size = Math.random() * 8 + 4;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 15 + 20;
        const colors = ['#ef4444', '#8b5cf6', '#06b6d4', '#f59e0b'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          left: ${posX}%;
          top: ${posY}%;
          background: ${color};
          animation-delay: ${delay}s;
          animation-duration: ${duration}s;
          box-shadow: 0 0 ${size * 2}px ${color};
        `;
        
        particle.style.setProperty('--move-x', `${Math.random() * 200 - 100}px`);
        particle.style.setProperty('--move-y', `${Math.random() * 200 - 100}px`);
        
        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Gamer Tag validation
    if (!formData.gamerTag.trim()) {
      newErrors.gamerTag = 'Gamer tag is required';
    } else if (formData.gamerTag.trim().length < 3) {
      newErrors.gamerTag = 'Gamer tag must be at least 3 characters';
    } else if (!/^[a-zA-Z0-9_-]+$/.test(formData.gamerTag.trim())) {
      newErrors.gamerTag = 'Gamer tag can only contain letters, numbers, hyphens, and underscores';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Favorite Game validation
    if (!formData.favoriteGame.trim()) {
      newErrors.favoriteGame = 'Favorite game title is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <Header transparent={true} />
        <div className="particles-bg absolute inset-0 pointer-events-none"></div>
        
        <div className="flex-grow flex items-center justify-center z-10 relative">
          <div className="text-center">
            <div className="animate-bounce mb-8">
              <svg className="w-24 h-24 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              Registration Complete!
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Welcome to the arena, <span className="text-red-400 font-bold">{formData.gamerTag}</span>! 
              Your registration has been confirmed. Get ready for the ultimate battle royale experience.
            </p>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-white mb-4">Registration Details:</h3>
              <div className="space-y-2 text-left">
                <p className="text-gray-300"><span className="text-red-400">Name:</span> {formData.fullName}</p>
                <p className="text-gray-300"><span className="text-red-400">Gamer Tag:</span> {formData.gamerTag}</p>
                <p className="text-gray-300"><span className="text-red-400">Email:</span> {formData.email}</p>
                <p className="text-gray-300"><span className="text-red-400">Favorite Game:</span> {formData.favoriteGame}</p>
              </div>
            </div>
            
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ fullName: '', gamerTag: '', email: '', favoriteGame: '' });
              }}
              className="mt-8 bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Register Another Player
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes float-particle {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
            50% { transform: translate(var(--move-x), var(--move-y)) scale(1.2); opacity: 1; }
          }
          .floating-particle {
            position: absolute;
            border-radius: 50%;
            pointer-events: none;
            animation: float-particle var(--duration) ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <Header transparent={true} />
      {/* Floating particles background */}
      <div className="particles-bg absolute inset-0 pointer-events-none"></div>
      
      {/* Animated gaming icons */}
      <div className="absolute top-20 left-10 animate-pulse">
        <svg className="w-16 h-16 text-red-500/30" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2L3 7v11h4v-8h6v8h4V7l-7-5z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce">
        <svg className="w-16 h-16 text-purple-500/30" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
        </svg>
      </div>

      <div className="flex-grow flex items-center justify-center z-10 relative">
        <div className="max-w-md w-full mx-4">
          {/* Form Header */}
          <div className="text-center mb-8">
            <div className="animate-pulse mb-4">
              <svg className="w-20 h-20 text-yellow-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#ef4444]">
              Join the Battle
            </h1>

            <p className="text-gray-300 text-lg">
              Register for the ultimate gaming experience
            </p>
          </div>

          {/* Registration Form */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-2xl">
            {/* Full Name */}
            <div className="mb-6">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.fullName 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-600 focus:border-purple-500 focus:ring-purple-500'
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-2 text-sm text-red-400 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Gamer Tag */}
            <div className="mb-6">
              <label htmlFor="gamerTag" className="block text-sm font-medium text-gray-300 mb-2">
                Gamer Tag *
              </label>
              <input
                type="text"
                id="gamerTag"
                name="gamerTag"
                value={formData.gamerTag}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.gamerTag 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-600 focus:border-purple-500 focus:ring-purple-500'
                }`}
                placeholder="Your epic gamer tag"
              />
              {errors.gamerTag && (
                <p className="mt-2 text-sm text-red-400 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  {errors.gamerTag}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.email 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-600 focus:border-purple-500 focus:ring-purple-500'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Favorite Game */}
            <div className="mb-8">
              <label htmlFor="favoriteGame" className="block text-sm font-medium text-gray-300 mb-2">
                Favorite Game Title *
              </label>
              <input
                type="text"
                id="favoriteGame"
                name="favoriteGame"
                value={formData.favoriteGame}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  errors.favoriteGame 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-600 focus:border-purple-500 focus:ring-purple-500'
                }`}
                placeholder="e.g., Fortnite, Apex Legends, Valorant"
              />
              {errors.favoriteGame && (
                <p className="mt-2 text-sm text-red-400 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  {errors.favoriteGame}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
  type="button"
  disabled={isSubmitting}
  onClick={handleSubmit}
  className="w-full relative bg-[#ef4444] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
>
  <span className="relative z-10 flex items-center justify-center">
    {isSubmitting ? (
      <>
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Registering...
      </>
    ) : (
      'Enter the Arena'
    )}
  </span>
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-sweep"></span>
</button>

          </div>

          {/* Footer note */}
          <p className="text-center text-gray-400 text-sm mt-6">
            By registering, you agree to compete with honor and respect for all players.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(var(--move-x), var(--move-y)) scale(1.2); opacity: 1; }
        }
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .floating-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: float-particle var(--duration) ease-in-out infinite;
        }
        .animate-sweep { animation: sweep 1.5s infinite; }
      `}</style>
    </div>
  );
}