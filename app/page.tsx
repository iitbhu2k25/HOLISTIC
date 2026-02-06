"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Droplets, TrendingUp, Activity, Database, MapPin, Factory, Waves } from 'lucide-react';

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    { src: '/image_9.jpeg', alt: 'Varuna River', title: 'Varuna River' },
    { src: '/river3.png', alt: 'Assi River', title: 'Assi River' },
    { src: '/image_15.png', alt: 'Ganga River', title: 'Ganga River' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const dataAccessSections = [
    {
      title: 'River Stretches',
      description: 'Physical river characteristics and morphological changes across the basin.',
      icon: Waves,
      href: '/river-stretches',
      color: 'bg-blue-600',
      image: '/river1.png'
    },
    {
      title: 'Water Quality',
      description: 'Real-time monitoring of DO, BOD, and pH levels across sampling stations.',
      icon: Droplets,
      href: '/water-quality',
      color: 'bg-cyan-500',
      image: '/image_11.jpeg'
    },
    {
      title: 'Discharge Data',
      description: 'Historical and live flow measurements tracking seasonal discharge trends.',
      icon: Activity,
      href: '/discharge',
      color: 'bg-green-500',
      image: '/river7.png'
    },
    {
      title: 'sewage load',
      description: 'Geospatial inventory of ponds including restoration and health status.',
      icon: MapPin,
      href: '/sewage-load',
      color: 'bg-purple-600',
      image: '/river2.png'
    },
    {
      title: 'STP',
      description: 'Mapping of industrial clusters and effluent discharge compliance tracking.',
      icon: Factory,
      href: '/stp',
      color: 'bg-orange-500',
      image: '/image_9.jpeg'
    },
    {
      title: 'Dashboard',
      description: 'Consolidated analytical views of river health KPI performance and trends.',
      icon: Database,
      href: '/dashboard',
      color: 'bg-indigo-600',
      image: '/dash.png'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative min-h-[900px] lg:h-screen flex items-center overflow-hidden py-20 lg:py-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-blue-950/60" />
          </div>
        ))}

        <div className="relative z-10 w-full">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 items-center">
              
              <div className="text-white lg:col-span-3">
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
                  Holistic <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    River Management
                  </span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 leading-relaxed text-blue-50/90 font-medium max-w-xl">
                  Protecting our river ecosystems through integrated management and data-driven interventions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/about/overview" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl">
                    Learn more
                  </Link>
                  <Link href="/data-access" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl">
                    Access Data
                  </Link>
                </div>
              </div>

              {/* Cards shifted to the right */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:col-span-3">
                {dataAccessSections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <Link
                      key={index}
                      href={section.href}
                      // Colour changed to greyish-black (bg-slate-900)
                      className="group bg-white-100 border border-slate-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-[260px]"
                    >
                      <div className="relative h-[180px] overflow-hidden">
                        <img 
                          src={section.image} 
                          alt={section.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                        />
                        <div className={`absolute bottom-35 left-2 w-7 h-7 rounded-lg ${section.color} flex items-center justify-center text-white shadow-lg z-10`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Reduced area with greyish-black background and lighter text */}
                      <div className="p-2.5 flex flex-col justify-start">
                        <h3 className="text-[13px] font-bold text-cyan-200 leading-tight mb-1 group-hover:text-blue-400">
                          {section.title}
                        </h3>
                        <p className="text-[10px] leading-snug text-slate-300 line-clamp-3">
                          {section.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/75'}`}
            />
          ))}
        </div>
      </section>

      {/* Mission Section Restored */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-blue-900 mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              The Holistic River Management System integrates multiple aspects of river conservation,
              including water quality monitoring, discharge management, sewage treatment, and ecosystem restoration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="text-blue-600 mb-6">
                  <TrendingUp className="w-14 h-14 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">Data-Driven</h3>
                <p className="text-gray-600 text-sm">Evidence-based decision making through comprehensive data collection.</p>
              </div>
              <div className="p-8 bg-green-50 rounded-2xl border border-green-100">
                <div className="text-green-600 mb-6">
                  <Droplets className="w-14 h-14 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-3">Sustainable</h3>
                <p className="text-gray-600 text-sm">Balancing development needs with environmental conservation.</p>
              </div>
              <div className="p-8 bg-purple-50 rounded-2xl border border-purple-100">
                <div className="text-purple-600 mb-6">
                  <Activity className="w-14 h-14 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-3">Integrated</h3>
                <p className="text-gray-600 text-sm">Coordinated approach across departments and stakeholders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;