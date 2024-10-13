'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductsSection from './products-section';

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
      <section className="relative overflow-hidden min-h-screen flex">
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
        
        <div className="hidden md:block w-1/2 absolute top-0 right-0 h-full">
          <img 
            src="images/fly-objects.png" 
            alt="Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
      <ProductsSection />
    </div>
  );
}