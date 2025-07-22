"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, Variants } from 'framer-motion';

interface HeaderProps {
  transparent?: boolean;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ transparent = true, className = "" }) => {
  const pathname = usePathname(); // Get current route

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const baseClasses = transparent 
    ? "bg-black/50 backdrop-blur-sm" 
    : "bg-black";

  // Animation variants for nav items
  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  // Animation for the logo
  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Animation for the register button
  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 15px rgba(239, 68, 68, 0.5)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  // Navigation items
  const navItems = [
    { href: "/", label: "Home", id: "home" },
    { href: "/eventDetails", label: "Event Details", id: "details" },
    { href: "/register", label: "Register", id: "register" },
    { href: "#", label: "Leaderboard", id: "leaderboard" },
    { href: "/faq", label: "FAQ", id: "faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${baseClasses} py-4 px-6 transition-all duration-300 ${className}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with animation */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <Link href="/" className="text-white font-bold text-2xl hover:opacity-80 transition-opacity">
            <span className="text-red-500">Mettlestate</span> Esports
          </Link>
        </motion.div>

        {/* Desktop nav links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => {
            // Determine if the current item is active based on the pathname
            const isActive = pathname === item.href || (item.href === "/" && pathname === "/");

            return (
              <motion.div
                key={item.label}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, color: "#f87171" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Link href={item.href}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-white hover:text-red-400 transition-colors duration-200 relative ${
                      isActive ? 'text-red-400 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-red-400' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile menu button and register button */}
        <div className="flex items-center space-x-3 md:hidden">
          <Link href="/register">
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200 ${
                pathname === "/register" ? 'ring-2 ring-red-400' : ''
              }`}
            >
              Register
            </motion.button>
          </Link>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.3, ease: "easeOut" } }}
            className="text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Desktop register button */}
        <div className="hidden md:block">
          <Link href="/register">
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className={`bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                pathname === "/register" ? 'ring-2 ring-red-400' : ''
              }`}
            >
              Register Now
            </motion.button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;