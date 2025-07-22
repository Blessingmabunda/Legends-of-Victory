"use client";

import React, { useEffect, useState } from 'react';
import Header from './../shared/header';
import Footer from './../shared/footer';

const EventDetailsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    setIsVisible(true);

    // Particle effect
    const createEventParticles = () => {
      const container = document.querySelector('.event-particles-container');
      if (!container) {
        console.log('Particle container not found');
        return;
      }

      container.innerHTML = '';

      for (let i = 0; i < 30; i++) { // Increased to 30 for visibility
        const particle = document.createElement('div');
        particle.className = 'event-particle';

        const size = Math.random() * 8 + 4; // 4–12px
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10; // 10–20s
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
          box-shadow: 0 0 ${size * 2}px ${color}, 0 0 ${size * 3}px ${color}80;
          border-radius: 50%;
          pointer-events: none;
        `;

        particle.style.setProperty('--tx', `${Math.random() * 100 - 50}px`); // Larger range
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
      <Header transparent={true} />

      <section
        className="relative py-32 px-4 overflow-hidden min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.15)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="event-particles-container absolute inset-0 pointer-events-none z-0" />

        {/* Floating icons */}
        <div className="absolute top-32 left-10 animate-float opacity-70">
          <svg className="w-16 h-16 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 animate-float-reverse opacity-70">
          <svg className="w-16 h-16 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-white">
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#ef4444]">
              EVENT DETAILS
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              The ultimate battleground awaits. Are you ready to claim your destiny?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <EventCard
              color="red"
              title="Date & Time"
              detail1="August 10, 2025"
              detail2="6PM SAST"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              }
              isVisible={isVisible}
              delay="0.2s"
            />

            {/* Card 2 */}
            <EventCard
              color="purple"
              title="Location"
              detail1="Online"
              detail2="Streamed live on Twitch"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              }
              isVisible={isVisible}
              delay="0.4s"
            />

            {/* Card 3 */}
            <EventCard
              color="yellow"
              title="Prize Pool"
              detail1="R50,000"
              detail2=""
              icon={
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              }
              isVisible={isVisible}
              delay="0.6s"
            />

            {/* Card 4 */}
            <EventCard
              color="blue"
              title="Format"
              detail1="Round Robin"
              detail2="Double Elimination"
              icon={
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2" />
              }
              isVisible={isVisible}
              delay="0.8s"
            />
          </div>

          <div
            className={`text-center mt-16 transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <button className="relative bg-[#ef4444] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden animate-pulse">
              <span className="relative z-10">Join the Battle</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></span>
            </button>
            <p className="text-white/60 mt-4 text-lg">
              Limited spots available. Register now to secure your place in gaming history.
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
            50% { transform: translateY(-25px) rotate(6deg); opacity: 0.9; }
          }
          @keyframes float-reverse {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
            50% { transform: translateY(25px) rotate(-6deg); opacity: 0.9; }
          }
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes particle-move {
            0% { transform: translate(0, 0); opacity: 0.8; }
            100% { transform: translate(var(--tx), var(--ty)); opacity: 0; }
          }
          @keyframes card-entrance {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
          .animate-shine { animation: shine 1.5s infinite; }
          .event-particle {
            position: absolute;
            animation: particle-move var(--duration) linear infinite;
            will-change: transform, opacity;
          }
          .animate-card-entrance {
            animation: card-entrance 1s ease-out forwards;
            animation-delay: var(--delay);
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
};

const EventCard = ({
  color,
  title,
  detail1,
  detail2,
  icon,
  isVisible,
  delay,
}: {
  color: string;
  title: string;
  detail1: string;
  detail2: string;
  icon: React.ReactNode;
  isVisible: boolean;
  delay: string;
}) => {
  return (
    <div
      className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-${color}-500/30 hover:border-${color}-500/60 transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-${color}-500/20 ${
        isVisible ? 'animate-card-entrance opacity-100' : 'opacity-0 translate-y-8'
      }`}
      style={{ '--delay': delay } as React.CSSProperties}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-${color}-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <div className="relative z-10">
        <div
          className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br from-${color}-500 to-${color}-700 rounded-full mb-4 mx-auto group-hover:animate-pulse`}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 text-center">{title}</h3>
        <p className={`text-${color}-400 font-semibold text-center`}>{detail1}</p>
        {detail2 && <p className="text-white/80 text-center text-sm">{detail2}</p>}
      </div>
    </div>
  );
};

export default EventDetailsSection;