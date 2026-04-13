'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getGalleryBySlug, galleries } from '../../../data/collections';

interface GalleryPageProps {
  params: {
    gallery: string;
  };
}

const GalleryPage = ({ params }: GalleryPageProps) => {
  const gallery = getGalleryBySlug(params.gallery);

  if (!gallery) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-thin mb-4">Galerie non trouvée</h1>
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

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
              href="/galleries" 
              className="flex items-center space-x-2 text-sm font-light tracking-wide hover:text-gray-300 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>RETOUR AUX GALERIES</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Gallery Header */}
      <section className="pt-24 pb-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-thin tracking-widest mb-4">
              {gallery.name}
            </h1>
            <div className="w-24 h-px bg-white mx-auto mb-6" />
            <p className="text-lg font-light leading-relaxed text-gray-200 max-w-3xl mx-auto mb-4">
              {gallery.description}
            </p>
            <p className="text-sm tracking-wide text-gray-400">
              {gallery.subCollections.length} Collections disponibles
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Collections Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.subCollections.map((subCollection) => (
              <Link 
                key={subCollection.id} 
                href={`/galleries/${gallery.slug}/${subCollection.slug}`}
                className="group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={subCollection.mainImage}
                    alt={subCollection.name}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-thin tracking-widest mb-2">{subCollection.name}</h3>
                      <p className="text-sm tracking-wide text-gray-300 mb-3">{subCollection.images.length} Images</p>
                      <p className="text-base font-light leading-relaxed">{subCollection.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Gallery */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin tracking-widest mb-4">DÉCOUVRIR AUSSI</h2>
            <div className="w-16 h-px bg-white mx-auto" />
          </div>
          <div className="grid grid-cols-1 gap-6">
            {galleries
              .filter(g => g.id !== gallery.id)
              .map((otherGallery) => (
                <Link 
                  key={otherGallery.id} 
                  href={`/galleries/${otherGallery.slug}`}
                  className="group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={otherGallery.coverImage}
                      alt={otherGallery.name}
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="text-3xl font-thin tracking-widest mb-2">{otherGallery.name}</h3>
                        <p className="text-lg font-light">{otherGallery.subCollections.length} Collections</p>
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

export default GalleryPage;
