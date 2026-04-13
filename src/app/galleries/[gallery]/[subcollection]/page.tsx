'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowLeft, X } from 'lucide-react';
import { getSubCollectionBySlug, getGalleryBySlug, getAllSubCollections } from '../../../../data/collections';

interface SubCollectionPageProps {
  params: {
    gallery: string;
    subcollection: string;
  };
}

const SubCollectionPage = ({ params }: SubCollectionPageProps) => {
  const gallery = getGalleryBySlug(params.gallery);
  const subCollection = getSubCollectionBySlug(params.gallery, params.subcollection);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!gallery || !subCollection) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-thin mb-4">Collection non trouvée</h1>
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === subCollection.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? subCollection.images.length - 1 : prev - 1
    );
  };

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
              href={`/galleries/${gallery.slug}`} 
              className="flex items-center space-x-2 text-sm font-light tracking-wide hover:text-gray-300 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>RETOUR À {gallery.name}</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Collection Header */}
      <section className="pt-24 pb-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-sm tracking-wide text-gray-400 mb-2">
              {gallery.name}
            </div>
            <h1 className="text-5xl md:text-6xl font-thin tracking-widest mb-4">
              {subCollection.name}
            </h1>
            <div className="w-24 h-px bg-white mx-auto mb-6" />
            <p className="text-lg font-light leading-relaxed text-gray-200 max-w-3xl mx-auto mb-4">
              {subCollection.description}
            </p>
            <p className="text-sm tracking-wide text-gray-400">
              {subCollection.images.length} Images dans cette collection
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subCollection.images.map((image, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={`${subCollection.name} - Image ${index + 1}`}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                      <div className="text-2xl mb-2">🔍</div>
                      <p className="text-sm tracking-wide">VOIR EN GRAND</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Previous button */}
            {subCollection.images.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronLeft size={48} />
              </button>
            )}

            {/* Next button */}
            {subCollection.images.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronRight size={48} />
              </button>
            )}

            {/* Image */}
            <img
              src={subCollection.images[currentImageIndex]}
              alt={`${subCollection.name} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image counter */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {currentImageIndex + 1} / {subCollection.images.length}
            </div>
          </div>
        </div>
      )}

      {/* Related Collections */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-thin tracking-widest mb-4">AUTRES COLLECTIONS</h2>
            <div className="w-16 h-px bg-white mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.subCollections
              .filter(sc => sc.id !== subCollection.id)
              .map((otherSubCollection) => (
                <Link 
                  key={otherSubCollection.id} 
                  href={`/galleries/${gallery.slug}/${otherSubCollection.slug}`}
                  className="group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={otherSubCollection.mainImage}
                      alt={otherSubCollection.name}
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-end p-4">
                      <div className="text-white">
                        <h3 className="text-lg font-thin tracking-wider mb-1">{otherSubCollection.name}</h3>
                        <p className="text-xs text-gray-300">{otherSubCollection.images.length} Images</p>
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

export default SubCollectionPage;
