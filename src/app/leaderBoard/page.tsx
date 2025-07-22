"use client";

import React, { useState, useEffect } from 'react';
import { fetchUsers } from './../api/utils/api';
import { Player } from './../api/types/models'; // Only import Player
import Header from '../shared/header';
import Footer from './../shared/footer';

// Local type for particles with color
interface ParticleWithColor {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  color: string;
}

const Trophy = ({ className, rank }: { className?: string; rank: number }) => {
  const colors = {
    1: "text-yellow-400",
    2: "text-gray-300",
    3: "text-yellow-600",
  };

  return (
    <svg className={`${className} ${colors[rank as keyof typeof colors] || 'text-gray-500'}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
    </svg>
  );
};

const Crown = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Leaderboard = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [particles, setParticles] = useState<ParticleWithColor[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    setIsVisible(true);

    // Create particles
    const createParticles = () => {
      const newParticles: ParticleWithColor[] = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 5,
          duration: Math.random() * 10 + 10,
          color: ['#ef4444', '#8b5cf6', '#f59e0b'][Math.floor(Math.random() * 3)],
        });
      }
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        setLoading(true);
        const users = await fetchUsers();
        
        // Transform users into players with mock gaming data
        const transformedPlayers: Player[] = users.map((user, index) => ({
          id: user.id,
          gamerTag: user.username,
          points: Math.floor(Math.random() * 5000) + 1000 + (10 - index) * 500,
          rank: index + 1
        }));

        // Sort by points descending and update ranks
        const sortedPlayers = transformedPlayers.sort((a, b) => b.points - a.points);
        const finalPlayers = sortedPlayers.map((player, index) => ({
          ...player,
          rank: index + 1
        }));

        setPlayers(finalPlayers);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboardData();
  }, []);

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "from-yellow-400/20 to-yellow-600/10 border-yellow-400/40 shadow-yellow-400/20";
      case 2:
        return "from-gray-300/20 to-gray-500/10 border-gray-300/40 shadow-gray-300/20";
      case 3:
        return "from-yellow-600/20 to-yellow-800/10 border-yellow-600/40 shadow-yellow-600/20";
      default:
        return "from-gray-900/50 to-gray-800/30 border-[#ef4444]/20 shadow-[#ef4444]/20";
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank <= 3) {
      return <Trophy className="w-8 h-8 animate-pulse" rank={rank} />;
    }
    return (
      <div className="w-8 h-8 rounded-full bg-[#ef4444]/20 flex items-center justify-center">
        <span className="text-[#ef4444] font-bold">{rank}</span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#ef4444] mb-4"></div>
          <p className="text-white text-xl">Loading Leaderboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <p className="text-red-500 text-xl mb-4">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-[#ef4444] text-white px-6 py-2 rounded-lg hover:bg-[#ef4444]/80 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.15)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Header transparent={true} />

      <section className="relative min-h-screen py-20 overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-3 h-3 rounded-full opacity-70 animate-particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                background: particle.color,
                animation: `particle-move ${particle.duration}s ${particle.delay}s infinite linear`,
                boxShadow: `0 0 8px ${particle.color}, 0 0 12px ${particle.color}80`,
                '--tx': `${Math.random() * 100 - 50}px`,
                '--ty': `${Math.random() * 100 - 50}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 animate-float opacity-70">
          <Trophy className="w-12 h-12" rank={1} />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-reverse opacity-70">
          <Crown className="w-12 h-12 text-yellow-400" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-[#ef4444]/20 to-[#ef4444]/20 backdrop-blur-sm rounded-full px-8 py-3 border border-[#ef4444]/30">
                <Crown className="w-6 h-6 text-yellow-400 animate-pulse" />
                <span className="text-[#ef4444] font-semibold tracking-wider uppercase text-sm">
                  Tournament Leaderboard
                </span>
                <Trophy className="w-6 h-6 animate-pulse" rank={1} />
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] via-gray-300 to-blue-500 animate-pulse-slow">
              Top Gaming Warriors
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Witness the elite competitors dominating the Battle Royale Cup! These legendary players have proven their skills in the ultimate gaming arena.
            </p>
          </div>

          {/* Leaderboard */}
          <div className="max-w-4xl mx-auto">
            {players.map((player, index) => (
              <div
                key={player.id}
                className={`mb-6 bg-gradient-to-r backdrop-blur-sm rounded-2xl border shadow-2xl transition-all duration-500 hover:scale-105 transform ${getRankStyle(
                  player.rank
                )} animate-card-entrance`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8 flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center justify-center">
                      {getRankIcon(player.rank)}
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3
                          className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                            player.rank <= 3 ? 'text-white' : 'text-gray-200'
                          }`}
                        >
                          {player.gamerTag}
                        </h3>
                        {player.rank === 1 && (
                          <Crown className="w-6 h-6 text-yellow-400 animate-pulse" />
                        )}
                      </div>

                      <div className="flex items-center space-x-4">
                        <span
                          className={`text-sm font-medium ${
                            player.rank <= 3 ? 'text-gray-300' : 'text-gray-400'
                          }`}
                        >
                          Rank #{player.rank}
                        </span>
                        {player.rank <= 3 && (
                          <span className="bg-gradient-to-r from-[#ef4444] to-yellow-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                            TOP 3
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div
                      className={`text-3xl md:text-4xl font-bold ${
                        player.rank === 1
                          ? 'text-yellow-400'
                          : player.rank === 2
                          ? 'text-gray-300'
                          : player.rank === 3
                          ? 'text-yellow-600'
                          : 'text-[#ef4444]'
                      }`}
                    >
                      {player.points.toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">POINTS</div>
                  </div>
                </div>

                {player.rank <= 3 && (
                  <div
                    className={`h-1 bg-gradient-to-r ${
                      player.rank === 1
                        ? 'from-yellow-400 to-yellow-600'
                        : player.rank === 2
                        ? 'from-gray-300 to-gray-500'
                        : 'from-yellow-600 to-yellow-800'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className={`text-center mt-16 transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <div className="bg-gradient-to-r from-[#ef4444]/10 to-[#ef4444]/10 backdrop-blur-sm rounded-2xl border border-[#ef4444]/30 p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4 animate-pulse-slow">
                Think You Can Compete?
              </h3>
              <p className="text-gray-300 mb-6">
                Join the battle and climb your way to the top! Register now and show these champions what you&apos;re made of.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="relative bg-gradient-to-r from-[#ef4444] via-gray-600 to-blue-600 hover:from-[#ef4444] hover:via-gray-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group overflow-hidden animate-pulse">
                  <span className="relative z-10">Join Tournament</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine"></span>
                </button>
                <button className="border-2 border-[#ef4444] text-[#ef4444] hover:bg-[#ef4444] hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 animate-pulse">
                  View Rules
                </button>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes particle-move {
            0% {
              transform: translate(0, 0);
              opacity: 0.7;
            }
            100% {
              transform: translate(var(--tx), var(--ty));
              opacity: 0;
            }
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.7;
            }
            50% {
              transform: translateY(-25px) rotate(6deg);
              opacity: 0.9;
            }
          }
          @keyframes float-reverse {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.7;
            }
            50% {
              transform: translateY(25px) rotate(-6deg);
              opacity: 0.9;
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
          @keyframes pulse-slow {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          @keyframes card-entrance {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-particle {
            animation: particle-move var(--duration) linear infinite;
            will-change: transform, opacity;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-reverse {
            animation: float-reverse 7s ease-in-out infinite;
          }
          .animate-shine {
            animation: shine 1.5s ease-in-out;
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
          .animate-card-entrance {
            animation: card-entrance 1s ease-out forwards;
          }
        `}</style>
      </section>
      <Footer />
    </div>
  );
};

export default Leaderboard;