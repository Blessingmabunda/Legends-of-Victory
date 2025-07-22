"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from './shared/header';
import Footer from './shared/footer';

const HeroSection = () => {
  useEffect(() => {
    // Particle effect for magic
    const createParticles = () => {
      const container = document.querySelector('.particles-container');
      if (!container) return;
      
      // Clear existing particles
      container.innerHTML = '';

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        const color = `hsl(${Math.random() * 60 + 350}, 100%, 50%)`;
        
        particle.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          left: ${posX}%;
          top: ${posY}%;
          background: ${color};
          animation-delay: ${delay}s;
          animation-duration: ${duration}s;
          box-shadow: 0 0 ${size}px ${size/2}px ${color};
        `;
        
        // Set random movement
        particle.style.setProperty('--tx', `${Math.random() * 200 - 100}px`);
        particle.style.setProperty('--ty', `${Math.random() * 200 - 100}px`);
        
        container.appendChild(particle);
      }
    };

    createParticles();

    // Cleanup function
    return () => {
      const container = document.querySelector('.particles-container');
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Use the global Header component */}
      <Header transparent={true} />

      <section 
        className="relative flex-grow flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.15)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
        id="home"
      >
        {/* Magic particles container */}
        <div className="particles-container absolute inset-0 pointer-events-none"></div>
        
        {/* Animated floating swords */}
        <div className="absolute left-10 top-1/4 animate-float">
          <svg className="w-20 h-20 text-red-500 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 22v-8m0 0V2l5 5-5 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="absolute right-10 bottom-1/4 animate-float-reverse">
          <svg className="w-20 h-20 text-blue-500 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 22v-8m0 0V2l5 5-5 5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Glowing text container */}
        <div className="text-center px-4 z-10 relative">
          {/* Animated title with gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Legends of Victory:</span>{' '}
            <span className="text-[#ef4444]">Battle Royale Cup</span>
          </h1>
          
          {/* Glowing subtitle */}
          <h2 className="text-2xl md:text-3xl mb-8 text-white/90 tracking-wider animate-pulse">
            <span className="text-shadow">Compete for glory.</span>{' '}
            <span className="text-red-400 text-shadow-red">Only one can win.</span>
          </h2>
          
          {/* Epic button with hover effects */}
          <Link href="/register">
            <button className="relative bg-[#ef4444] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden">
              <span className="relative z-10">Register Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></span>
            </button>
          </Link>
          
          {/* Floating crown icon */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-16 h-16 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V6H8a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1H8a1 1 0 110-2h1v-1a1 1 0 011-1zM5 9a1 1 0 100-2H4a1 1 0 100 2h1zm10 0a1 1 0 100-2h-1a1 1 0 100 2h1zM5 15a1 1 0 100-2H4a1 1 0 100 2h1zm10 0a1 1 0 100-2h-1a1 1 0 100 2h1z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Use the global Footer component */}
      <Footer />
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
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
        @keyframes particle-move {
          0% { transform: translate(0, 0); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)); opacity: 0; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
        .animate-gradient-x { 
          background-size: 200% auto;
          animation: gradient-x 3s linear infinite; 
        }
        .animate-shine { animation: shine 1.5s infinite; }
        .text-shadow { text-shadow: 0 0 8px rgba(255,255,255,0.5); }
        .text-shadow-red { text-shadow: 0 0 10px rgba(239,68,68,0.7); }
        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: particle-move var(--duration) linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;