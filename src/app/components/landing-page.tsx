'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="font-avenir">
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute top-0 right-0 h-auto md:w-1/2 overflow-visible">
          <img 
            src="images/fly-objects.png" 
            alt="Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Header */}
        <header className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/">
                <img src="android-chrome-192x192.png" alt="Custom Khanza, Modifikasi Khanza, Programming, Coding, Java, Javascript, React, Tailwind" className="h-12 mx-6 my-4" />
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <section className="relative z-10 flex min-h-screen">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="px-4">
              <motion.div 
                className="text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-7xl font-black text-carcoal">
                  <a href="/contact">Arwildo</a>
                </h1>
                <p className="text-md text-gray-600 font-normal tracking-widest">
                  <a href="/contact">SOFTWARE</a>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Blinking Scroll Indicator */}
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-0.5 h-7 bg-carcoal animate-bounce rounded-full"></div>
        </div>

      </div>
    </div>
  );
}