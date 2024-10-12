'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

const products = [
  {
    title: 'Components',
    description: 'Pre-built, accessible components for rapid UI development.',
    images: ['/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300'],
  },
  {
    title: 'Composable',
    description: 'Compose components together to build complex interfaces.',
    images: ['/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300'],
  },
  {
    title: 'Performance',
    description: 'Optimized for speed and efficiency in your applications.',
    images: ['/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300'],
  },
  {
    title: 'Customizable',
    description: 'Easily adapt components to match your brand and design system.',
    images: ['/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300'],
  },
  {
    title: 'Accessible',
    description: 'Built with accessibility in mind for inclusive user experiences.',
    images: ['/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300'],
  },
  {
    title: 'Responsive',
    description: 'Designs that look great on any device or screen size.',
    images: ['/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300'],
  },
  {
    title: 'Themeable',
    description: 'Easy-to-use theming system for consistent styling.',
    images: ['/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300'],
  },
  {
    title: 'Developer-friendly',
    description: 'Intuitive APIs and excellent documentation for smooth development.',
    images: ['/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300'],
  },
  {
    title: 'Extensible',
    description: 'Flexible architecture allowing for easy customization and extension.',
    images: ['/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300', '/placeholder.svg?height=200&width=300'],
  },
]

function ProductCard({ product }) {
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
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out h-full border border-gray-200">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {product.images.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <img src={image} alt={`${product.title} - Image ${index + 1}`} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
        </div>
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
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition duration-200">
          Learn more <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  return (
    <section className="bg-white text-gray-900 py-18 relative">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk3YzJmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSAyNSAwIEwgMjUgMTAwIE0gNTAgMCBMIDUwIDEwMCBNIDc1IDAgTCA3NSAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UyZWVmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSAwIDI1IEwgMTAwIDI1IE0gMCA1MCBMIDM1IDUwIE0gMCA3NSBMIDM1IDc1IiBmaWxsPSJub25lIiBzdHJva2U9IiNlMmVlZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-8 md:px-12 relative z-10">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
         Produk
        </motion.h2>
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