'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProductsSection from './products-section'

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="bg-madewhite font-avenir">
      <section className="relative overflow-hidden min-h-screen flex items-center">
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center max-w-3xl mx-auto mb-8">
            <div className="md:w-1/2 text-center md:text-left flex flex-col items-center">
              <motion.h1 
                className="text-7xl xl:text-8xl font-black text-carcoal" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a href="/contact">
                  Arwildo
                </a>
              </motion.h1>
              <motion.p 
                className="text-md text-gray-600 font-normal tracking-widest"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a href="/contact">
                  SOFTWARE 
                </a>
              </motion.p>
            </div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <pre className="text-sm overflow-x-auto">
                <div className="text-center">
                  <img src="images/modifikasi-simrskhanza.png" alt="Modifikasi SIMKes Khanza" className="mx-auto" />
                </div>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      <ProductsSection />
    </div>
  )
}