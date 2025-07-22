"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './../shared/header';
import Footer from './../shared/footer';
interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const Sword = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.92 5H5l9 9 1-.94m4.96 6.06l-.84.84a.996.996 0 0 1-1.41 0l-3.12-3.12-2.68 2.66-1.41-1.41 2.68-2.68-3.13-3.13a.996.996 0 0 1 0-1.41l.85-.85L4 4l1.41 1.41L3.29 7.29l1.41 1.41 1.42-1.42 3.17 3.17 3.18-3.18L9.29 4.7 10.7 3.29 12.59 5.2 15.8 2l1.41 1.41-3.18 3.18 3.18 3.18 1.41-1.42-3.18-3.17 1.42-1.42 1.41 1.41 1.42-1.42L20 4l-2.38 2.38z" />
  </svg>
);

const Trophy = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
  </svg>
);

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  const faqData = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2L3 7v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7l-7-5zM8 8a1 1 0 012 0v6a1 1 0 01-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 01-2 0V8z" clipRule="evenodd" />
        </svg>
      ),
      question: "What are the prizes for the Battle Royale Cup?",
      answer: "The total prize pool is $50,000! 🏆 1st Place: $25,000 + Championship Trophy + Gaming Setup Worth $3,000. 2nd Place: $15,000 + Silver Medal + Gaming Chair. 3rd Place: $7,500 + Bronze Medal + Mechanical Keyboard Set. Top 10 finishers also receive exclusive Battle Royale Cup merchandise and recognition in our Hall of Fame!"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      question: "How many players can participate and what are the team requirements?",
      answer: "We welcome up to 1,000 participants! You can compete as a solo player, duo (2 players), or squad (up to 4 players). All skill levels are welcome - from casual gamers to esports professionals. Teams must register together and maintain consistent roster throughout the tournament. Substitutions are only allowed in emergency situations with admin approval."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      question: "When does the tournament take place and what's the format?",
      answer: "The tournament runs over 3 epic weekends: Registration closes August 15th. Qualifiers: August 20-22 (Online). Semi-Finals: August 27-29 (Online). Grand Finals: September 3-5 (Live Event in Los Angeles). Each phase features multiple rounds with elimination brackets. The format includes both Battle Royale matches and special challenge modes for maximum excitement!"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      question: "What games and platforms are supported?",
      answer: "Primary game: Fortnite (PC, PlayStation 5, Xbox Series X/S). Secondary events include: Apex Legends, Call of Duty: Warzone, and PUBG. Cross-platform play is fully supported! All matches will be played on official tournament servers with anti-cheat protection. Custom game modes and special tournament rules will be provided before each phase."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.954 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      question: "Are there age restrictions and what are the eligibility requirements?",
      answer: "Players must be 13+ to participate (13-17 require parental consent). All participants must have a clean gaming record with no recent bans or violations. You'll need a stable internet connection (minimum 25 Mbps) and a Discord account for team communication. International players welcome! Prize distribution follows local tax regulations."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      question: "How do I register and what's included with registration?",
      answer: "Registration is FREE and includes: Tournament access to all phases, exclusive Battle Royale Cup Discord server, digital certificate of participation, and tournament replay access. Simply click 'Register Now', create your profile, verify your gaming accounts, and you're ready to compete! Early registrants get special cosmetic rewards and priority matchmaking."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.15)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
      <Header transparent={true} />
      
            <section className="relative min-h-screen py-20 overflow-hidden">
  
        {/* Animated Background Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 bg-[#ef4444] rounded-full opacity-20"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animation: `float-particle ${particle.duration}s ${particle.delay}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>
  
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-repeat" style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.15)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }} />
        </div>
  
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-[#ef4444]/20 to-[#ef4444]/20 backdrop-blur-sm rounded-full px-8 py-3 border border-[#ef4444]/30">
                <Sword className="w-6 h-6 text-[#ef4444]" />
                <span className="text-[#ef4444] font-semibold tracking-wider uppercase text-sm">Frequently Asked Questions</span>
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] via-gray-300 to-blue-500">
              Everything You Need to Know
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get ready for the ultimate gaming experience! Find answers to all your questions about the most epic Battle Royale tournament of the year.
            </p>
          </div>
  
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="mb-6 bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-[#ef4444]/20 shadow-2xl overflow-hidden transition-all duration-500 hover:border-[#ef4444]/40 hover:shadow-[#ef4444]/20"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-8 text-left flex items-center justify-between group transition-all duration-300 hover:bg-[#ef4444]/10"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-gradient-to-r from-[#ef4444] to-gray-600 text-white shadow-lg' 
                        : 'bg-gray-800/50 text-[#ef4444] group-hover:bg-[#ef4444]/30'
                    }`}>
                      {faq.icon}
                    </div>
                    <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                      activeIndex === index 
                        ? 'text-white' 
                        : 'text-gray-200 group-hover:text-white'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  
                  <svg 
                    className={`w-6 h-6 transition-all duration-300 ${
                      activeIndex === index 
                        ? 'transform rotate-180 text-[#ef4444]' 
                        : 'text-gray-400 group-hover:text-[#ef4444]'
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${
                  activeIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-8 pb-8 pt-0">
                    <div className="ml-16 pr-8">
                      <div className="h-px bg-gradient-to-r from-[#ef4444]/50 to-transparent mb-6"></div>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#ef4444]/10 to-[#ef4444]/10 backdrop-blur-sm rounded-2xl border border-[#ef4444]/30 p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Join the Battle?</h3>
              <p className="text-gray-300 mb-6">
                Still have questions? Join our Discord community for instant support from tournament officials and fellow competitors!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <button className="relative bg-gradient-to-r from-[#ef4444] via-gray-600 to-blue-600 hover:from-[#ef4444] hover:via-gray-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group overflow-hidden">
                  <span className="relative z-10">Join the Battle</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></span>
                </button>
                </Link>
                <button className="border-2 border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444] hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  Join Discord
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes float-particle {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }
          @keyframes shine {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .animate-shine {
            animation: shine 1.5s ease-in-out;
          }
        `}</style>
      </section>
      <Footer/>
    </div>
  );
};

export default FAQSection;