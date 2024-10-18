'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

const products = [
  {
    title: 'Akunter',
    description: 'Full-stack DRRM (Django, React, Redux, MySQL) application to handle accounting and databases of small businesses.',
    images: ['/images/projects/akunter.png'],
    link: 'https://arwildo.com/akunter',
  },
  {
    title: 'SpaceV',
    description: 'React app to explore space objects like the moon, mars, and the night sky through an interactive map view. Built with NASA and Google APIs.',
    images: ['/images/projects/space-view.png'],
    link: 'https://arwildo.com/space-view',
  },
  {
    title: 'BlueO',
    description: 'Portfolio website to showcase personal projects. Driven by a clean UI theme, design with Figma built with React.',
    images: ['/images/projects/blue-bubble-portfolio.png'],
    link: 'https://arwildo.com/blue-bubble',
  },
  {
    title: 'TexTul',
    description: 'Web App for text manipulation. Design with Figma builds with React.',
    images: ['/images/projects/textul.jpg'],
    link: 'https://arwildo.com/textul',
  },
]

interface Product {
  title: string;
  description: string;
  images: string[];
  link: string; // Added link property
}

function ProductCard({ product }: { product: Product }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out h-full border border-gray-200">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {product.images.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <img src={image} alt={`${product.title} - Image ${index + 1}`} className="w-full h-62 object-cover" />
              </div>
            ))}
          </div>
        </div>
        {product.images.length > 1 && (
          <>
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-blue-600 p-1 rounded-full transition duration-200 shadow-md"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-blue-600 p-1 rounded-full transition duration-200 shadow-md"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-400 hover:text-blue-700 transition duration-200">
          Get <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  return (
    <section className="bg-white text-gray-900 py-18 relative">
      <div className="container mx-auto px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}