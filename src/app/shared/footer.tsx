"use client";

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  // Animation variants for footer items
  const footerItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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

  // Social media links (non-functional placeholders)
  const socialLinks = [
    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', href: '#' },
    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', href: '#' },
    { name: 'Instagram', icon: 'M16 2a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6V8a6 6 0 016-6h8m0-2H8a8 8 0 00-8 8v8a8 8 0 008 8h8a8 8 0 008-8V8a8 8 0 00-8-8zm-4 4a4 4 0 110 8 4 4 0 010-8zm0-2a6 6 0 100 12 6 6 0 000-12zm4 1h.01', href: '#' },
    { name: 'Discord', icon: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.375-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.385-.3984-.8745-.6083-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8851 1.515.0699.0699 0 00-.032.0277C.5336 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0311 1.7113 4.3513 2.7039 6.637 3.1081a.0766.0766 0 00.0827-.0508c.1759-.2708.3399-.6066.4378-.9442a.0732.0732 0 00-.0416-.0984c-.3602-.1627-.7176-.3609-1.0498-.5817a.0751.0751 0 01-.0076-.1051c.0707-.0924.1541-.1947.2507-.2969a.0774.0774 0 01.1061-.0119c.6888.5324 1.509.9506 2.4668 1.2344 1.0186.3021 2.0994.4583 3.192.4583 1.0925 0 2.1734-.1562 3.192-.4583.9578-.2838 1.778-.702 2.4668-1.2344a.0776.0776 0 01.1061.0119c.0966.1022.18.2045.2507.2969a.0751.0751 0 01-.0076.1051c-.3322.2208-.6896.419-1.0498.5817a.0736.0736 0 00-.0416.0984c.098.3376.2619.6734.4378.9442a.0766.0766 0 00.0827.0508c2.2857-.4042 4.6059-1.3968 6.637-3.1081a.0761.0761 0 00.0312-.0561c.4289-4.4779-.4247-9.0119-3.8963-13.6882a.0691.0691 0 00-.032-.0277zM8.8274 16.3153c-.6673 0-1.2158-.7233-1.2158-1.615 0-.8916.5485-1.615 1.2158-1.615.6721 0 1.2158.7234 1.2158 1.615 0 .8917-.5437 1.615-1.2158 1.615zm6.3452 0c-.6673 0-1.2158-.7233-1.2158-1.615 0-.8916.5485-1.615 1.2158-1.615.6721 0 1.2158.7234 1.2158 1.615 0 .8917-.5437 1.615-1.2158 1.615z', href: '#' },
  ];

  return (
    <footer className={`bg-black/50 backdrop-blur-sm py-8 px-6 ${className}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo with animation */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 md:mb-0"
        >
          <Link href="/" className="text-white font-bold text-2xl hover:opacity-80 transition-opacity">
            <span className="text-red-500">Mettlestate</span> Esports
          </Link>
        </motion.div>

        {/* Social Links */}
        <div className="flex space-x-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              custom={index}
              variants={footerItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1, color: "#f87171" }}
              className="text-white hover:text-red-400 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
              <span className="sr-only">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom Copyright */}
      <motion.div
        variants={footerItemVariants}
        initial="hidden"
        animate="visible"
        custom={socialLinks.length}
        className="mt-8 text-center text-white/70 text-sm"
      >
        &copy; {new Date().getFullYear()} Mettlestate Esports. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;