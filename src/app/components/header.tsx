'use client'

import { useState } from 'react'
import Link from 'next/link'


export default function Header() {
  return (
    <header className="bg-madewhite shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <img src="android-chrome-192x192.png" alt="Custom Khanza, Modifikasi Khanza, Programming, Coding, Java, Javascript, React, Tailwind" className="h-12 mx-6 my-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}