'use client'

import { useState } from 'react'
import Image from 'next/image'

const customers = [
  { name: 'Bunda Pengharapan Hospital', logo: '/images/clients/bunda-pengharapan-hopital.png' },
  { name: 'Harmoni Clinic', logo: '/images/clients/harmoni-clinic.png' },
  { name: 'Heart & Surgery Hospital', logo: '/images/clients/heart-surgery-hospital.png' },
  { name: 'Santa Lusia Clinic', logo: '/images/clients/santa-lusia-clinic.png' },
  { name: 'Santa Elisabeth Pharmacy', logo: '/images/clients/santa-elisabeth-pharmacy.png' },
  { name: 'Doctor Adolf Practice\'s', logo: '/images/clients/doctor-adolf-practice.png' },
  { name: 'Mitra Keluarga Clinic', logo: '/images/clients/mitra-clinic.png' },
  { name: 'Other Hospital and Clinic', logo: '/images/clients/other-hospital-clinic.png' },
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
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">Clients</h2>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 mb-8">
          {customers.slice(0, 4).map((customer) => (
            <CustomerLogo key={customer.name} {...customer} size={60} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
          {customers.slice(4, 8).map((customer) => (
            <CustomerLogo key={customer.name} {...customer} size={40} />
          ))}
        </div>
      </div>
    </section>
  )
}