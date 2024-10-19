'use client';

import { useState, useEffect } from 'react';

const FlyingNav = () => {
  const [activeSection, setActiveSection] = useState('landing');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['landing', 'products', 'customer', 'about'];
      const scrollPosition = window.scrollY;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 && 
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-8">
        {[
          { id: 'landing', label: 'Home' },
          { id: 'products', label: 'Products' },
          { id: 'customer', label: 'Customers' },
          { id: 'about', label: 'About' }
        ].map(({ id, label }) => (
          <div key={id} className="group flex items-center gap-4 cursor-pointer" onClick={() => scrollToSection(id)}>
            <div className="relative">
              <div className={`h-[8px] bg-gray-300 hover:bg-blue-500 transition-all duration-300 rounded-xl ${
                activeSection === id ? 'w-4' : 'w-2'
              } ${activeSection === id ? 'bg-blue-500' : ''}`} />
              <span className="absolute left-full ml-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default FlyingNav;