'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { galleries } from '../../data/collections';

const AllGalleriesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex-shrink-0">
              <img 
                src="/images/logo.webp" 
                alt="Jean Philippe Tourigny Logo" 
                className="h-16 md:h-20 w-auto"
              />
            </Link>
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-sm font-light tracking-wide hover:text-gray-300 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>RETOUR</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-thin tracking-widest mb-4">
              NOS GALERIES
            </h1>
            <div className="w-24 h-px bg-white mx-auto mb-6" />
            <p className="text-lg font-light leading-relaxed text-gray-200 max-w-3xl mx-auto">
              Découvrez nos deux univers créatifs : DIFFUSION pour l&apos;élégance accessible et COUTURE pour l&apos;excellence sur mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Galleries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {galleries.map((gallery) => (
              <Link 
                key={gallery.id} 
                href={`/galleries/${gallery.slug}`}
                className="group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={gallery.coverImage}
                    alt={gallery.name}
                    className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-4xl font-thin tracking-widest mb-3">{gallery.name}</h3>
                      <p className="text-sm tracking-wide text-gray-300 mb-4">
                        {gallery.subCollections.length} Collections
                      </p>
                      <p className="text-lg font-light leading-relaxed mb-4">
                        {gallery.description}
                      </p>
                      <div className="inline-block px-6 py-2 border border-white text-white text-sm font-light tracking-wide">
                        EXPLORER
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="/images/logo.webp" 
              alt="Jean Philippe Tourigny Logo" 
              className="h-20 md:h-24 w-auto mx-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              © 2025 Jean Philippe Tourigny. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AllGalleriesPage;
