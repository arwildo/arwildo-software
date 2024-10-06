'use client'

import { useState } from 'react'
import Image from 'next/image'

const customers = [
  { name: 'Company A', logo: '/placeholder.svg?height=80&width=200' },
  { name: 'Company B', logo: '/placeholder.svg?height=80&width=200' },
  { name: 'Company C', logo: '/placeholder.svg?height=80&width=200' },
  { name: 'Company D', logo: '/placeholder.svg?height=80&width=200' },
  { name: 'Company E', logo: '/placeholder.svg?height=80&width=200' },
  { name: 'Company F', logo: '/placeholder.svg?height=80&width=200' },
  { name: 'Company G', logo: '/placeholder.svg?height=80&width=200' },
  { name: 'Company H', logo: '/placeholder.svg?height=80&width=200' },
  { name: 'Company I', logo: '/placeholder.svg?height=80&width=200' },
]

const CustomerLogo = ({ name, logo, size }: { name: string; logo: string; size: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        width={size}
        height={size / 2.5}
        className={`transition-all duration-300 ${isHovered ? 'filter-none' : 'filter grayscale'}`}
      />
    </div>
  )
}

export default function CustomerSection() {
  return (
    <section className="bg-white py-16 relative">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk3YzJmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSAyNSAwIEwgMjUgMTAwIE0gNTAgMCBMIDUwIDEwMCBNIDc1IDAgTCA3NSAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UyZWVmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSAwIDI1IEwgMTAwIDI1IE0gMCA1MCBMIDM1IDUwIE0gMCA3NSBMIDM1IDc1IiBmaWxsPSJub25lIiBzdHJva2U9IiNlMmVlZmYiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">Dipercaya oleh</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center">
          {customers.slice(0, 5).map((customer, index) => (
            <CustomerLogo key={customer.name} {...customer} size={120} />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center mt-8">
          {customers.slice(5, 8).map((customer, index) => (
            <CustomerLogo key={customer.name} {...customer} size={100} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <CustomerLogo {...customers[8]} size={80} />
        </div>
      </div>
    </section>
  )
}