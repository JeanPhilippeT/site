'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { galleries } from '../data/collections';
import { getRecentBlogPosts } from '../data/blog';

const FashionWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const heroSlides = [
    {
      image: "/images/hero-image.webp",
      title: "JEAN PHILIPPE TOURIGNY",
      subtitle: "Haute Couture Parisienne"
    },
    {
      image: "/images/hero-image.webp",
      title: "NOUVELLE COLLECTION",
      subtitle: "Automne/Hiver 2025"
    },
    {
      image: "/images/hero-image.webp",
      title: "ÉLÉGANCE MODERNE",
      subtitle: "Sophistication & Style"
    }
  ];

  const blogPosts = getRecentBlogPosts(3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex-shrink-0">
              <img 
                src="/images/logo.webp" 
                alt="Jean Philippe Tourigny Logo" 
                className="h-16 md:h-20 w-auto"
              />
            </Link>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-sm font-light tracking-wide hover:text-gray-300 transition-colors">ACCUEIL</a>
              <a href="#about" className="text-sm font-light tracking-wide hover:text-gray-300 transition-colors">À PROPOS</a>
              <a href="#galleries" className="text-sm font-light tracking-wide hover:text-gray-300 transition-colors">GALERIES</a>
              <Link href="/galleries" className="text-sm font-light tracking-wide hover:text-gray-300 transition-colors">GALERIES</Link>
              <a href="#blog" className="text-sm font-light tracking-wide hover:text-gray-300 transition-colors">BLOG</a>
              <a href="#contact" className="text-sm font-light tracking-wide hover:text-gray-300 transition-colors">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt="Jean Philippe Tourigny Fashion Photography"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-6xl md:text-8xl font-thin tracking-widest mb-4">
              {heroSlides[currentSlide].title}
            </h2>
            <p className="text-xl md:text-2xl font-light tracking-wide text-gray-200">
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronLeft size={48} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronRight size={48} />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <section id="about" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/images/author.webp"
                alt="Jean Philippe Tourigny"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-thin tracking-widest mb-8">JEAN PHILIPPE TOURIGNY</h2>
                <div className="w-24 h-px bg-white mb-8" />
              </div>
              <div className="space-y-6 text-lg font-light leading-relaxed text-gray-300">
                <p>
                  Visionnaire de la mode contemporaine, Jean Philippe Tourigny redéfinit l&apos;élégance avec une approche 
                  moderne et audacieuse. Formé dans les ateliers parisiens les plus prestigieux.
                </p>
                <p>
                  Ses créations allient savoir-faire traditionnel et innovation technique, créant des pièces intemporelles 
                  qui transcendent les tendances.
                </p>
              </div>
              <div className="pt-6">
                <Link 
                  href="/interview"
                  className="inline-block px-8 py-3 border border-white text-white font-light tracking-wide hover:bg-white hover:text-black transition-colors duration-300"
                >
                  LIRE L&apos;INTERVIEW COMPLÈTE
                </Link>
              </div>
              <div className="pt-8">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="text-3xl font-thin">15+</h3>
                    <p className="text-sm tracking-wide text-gray-400">ANNÉES</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-thin">50+</h3>
                    <p className="text-sm tracking-wide text-gray-400">COLLECTIONS</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-thin">200+</h3>
                    <p className="text-sm tracking-wide text-gray-400">CRÉATIONS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="galleries" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-thin tracking-widest mb-8">GALERIES</h2>
            <div className="w-24 h-px bg-white mx-auto mb-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleries.map((gallery, index) => (
              <Link 
                key={gallery.id} 
                href={`/galleries/${gallery.slug}`}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={gallery.coverImage}
                    alt={gallery.name}
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-3xl font-thin tracking-widest mb-2">{gallery.name}</h3>
                      <p className="text-sm tracking-wide text-gray-300 mb-4">{gallery.subCollections.length} Collections</p>
                      <p className="text-lg font-light leading-relaxed">{gallery.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/galleries"
              className="inline-block px-8 py-3 border border-white text-white font-light tracking-wide hover:bg-white hover:text-black transition-colors duration-300"
            >
              EXPLORER TOUTES LES GALERIES
            </Link>
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-thin tracking-widest mb-8">BLOG</h2>
            <div className="w-24 h-px bg-white mx-auto mb-8" />
            <p className="text-lg font-light leading-relaxed text-gray-200 max-w-3xl mx-auto">
              Découvrez l&apos;univers de la haute couture, nos inspirations et les coulisses de nos créations exclusives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="text-white">
                  <p className="text-sm tracking-wide text-gray-400 mb-2">{post.date}</p>
                  <h3 className="text-xl font-light tracking-wide mb-3 group-hover:text-gray-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="inline-block px-8 py-3 border border-white text-white font-light tracking-wide hover:bg-white hover:text-black transition-colors duration-300"
            >
              LIRE TOUS LES ARTICLES
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-thin tracking-widest mb-8">CONTACT</h2>
              <div className="w-24 h-px bg-white mb-12" />
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <MapPin className="w-6 h-6 mt-1 text-gray-400" />
                  <div>
                    <h3 className="text-xl font-light mb-2">ATELIER PRINCIPAL</h3>
                    <p className="text-gray-300 font-light leading-relaxed">
                      123 Rue Saint-Honoré<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <Phone className="w-6 h-6 mt-1 text-gray-400" />
                  <div>
                    <h3 className="text-xl font-light mb-2">WHATSAPP</h3>
                    <p className="text-gray-300 font-light">+33 6 81 61 32 99</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <Mail className="w-6 h-6 mt-1 text-gray-400" />
                  <div>
                    <h3 className="text-xl font-light mb-2">INSTAGRAM</h3>
                    <a href="https://instagram.com/jeanphiliptourigny" target="_blank" rel="noopener noreferrer" className="text-gray-300 font-light hover:text-white transition-colors">
                      @jeanphiliptourigny
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-light mb-6">NOUS CONTACTER</h3>
                <div className="flex space-x-6">
                  <a href="https://instagram.com/jeanphiliptourigny" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://wa.me/33681613299" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Phone size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-black p-8 lg:p-12">
              <h3 className="text-2xl font-light mb-8">CONTACT DIRECT</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-lg font-light mb-4">WhatsApp</h4>
                  <a 
                    href="https://wa.me/33681613299"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-4 bg-green-600 text-white font-light tracking-wide hover:bg-green-700 transition-colors"
                  >
                    CONTACTER PAR WHATSAPP
                  </a>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-light mb-4">Instagram</h4>
                  <a 
                    href="https://instagram.com/jeanphiliptourigny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-light tracking-wide hover:from-purple-600 hover:to-pink-600 transition-colors"
                  >
                    SUIVRE SUR INSTAGRAM
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default FashionWebsite;