"use client";

import React, { useEffect } from 'react';
import Header from './../shared/header';

const EventDetailsSection = () => {
  useEffect(() => {
    // Create floating particles effect
    const createEventParticles = () => {
      const container = document.querySelector('.event-particles-container');
      if (!container) return;
      
      container.innerHTML = '';

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'event-particle';
        
        const size = Math.random() * 8 + 3;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 15 + 15;
        const colors = ['#ef4444', '#8b5cf6', '#f59e0b', '#06b6d4'];
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
        
        particle.style.setProperty('--tx', `${Math.random() * 100 - 50}px`);
        particle.style.setProperty('--ty', `${Math.random() * 100 - 50}px`);
        
        container.appendChild(particle);
      }
    };

    createEventParticles();

    return () => {
      const container = document.querySelector('.event-particles-container');
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <>
      {/* Header */}
      <Header transparent={true} />
      
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
           backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.15)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}></div>
      </div>

      {/* Event particles container */}
      <div className="event-particles-container absolute inset-0 pointer-events-none"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 animate-float opacity-30">
        <svg className="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 animate-float-reverse opacity-30">
        <svg className="w-16 h-16 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#ef4444]">
          EVENT DETAILS
        </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            The ultimate battleground awaits. Are you ready to claim your destiny?
          </p>
        </div>

        {/* Event details grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Date & Time Card */}
          <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full mb-4 mx-auto group-hover:animate-pulse">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Date & Time</h3>
              <p className="text-red-400 font-semibold text-center text-lg">August 10, 2025</p>
              <p className="text-white/80 text-center">6PM SAST</p>
            </div>
          </div>

          {/* Location Card */}
          <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mb-4 mx-auto group-hover:animate-pulse">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Location</h3>
              <p className="text-purple-400 font-semibold text-center">Online</p>
              <p className="text-white/80 text-center text-sm">Streamed live on Twitch</p>
            </div>
          </div>

          {/* Prize Pool Card */}
          <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full mb-4 mx-auto group-hover:animate-bounce">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Prize Pool</h3>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 text-center animate-pulse">R50,000</p>
            </div>
          </div>

          {/* Format Card */}
          <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mb-4 mx-auto group-hover:animate-pulse">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Format</h3>
              <p className="text-blue-400 font-semibold text-center text-sm">Round Robin</p>
              <p className="text-white/80 text-center text-sm">Double Elimination</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="relative inline-block">
          <button className="relative bg-[#ef4444] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group overflow-hidden">
  <span className="relative z-10">Join the Battle</span>
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></span>
</button>

          </div>
          <p className="text-white/60 mt-4 text-lg">
            Limited spots available. Register now to secure your place in gaming history.
          </p>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-3deg); }
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes particle-drift {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) rotate(360deg); opacity: 0; }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 9s ease-in-out infinite; }
        .animate-gradient-x { 
          background-size: 200% auto;
          animation: gradient-x 4s linear infinite; 
        }
        .animate-shine { animation: shine 1.5s infinite; }
        .event-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: particle-drift var(--duration) linear infinite;
        }
      `}</style>
    </section>
    </>
  );
};

export default EventDetailsSection;