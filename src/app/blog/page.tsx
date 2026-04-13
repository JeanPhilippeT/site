'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../../data/blog';

const AllBlogPage = () => {
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
              BLOG
            </h1>
            <div className="w-24 h-px bg-white mx-auto mb-6" />
            <p className="text-lg font-light leading-relaxed text-gray-200 max-w-3xl mx-auto">
              Plongez dans l&apos;univers de la haute couture JPT. Découvrez nos inspirations, 
              techniques et l&apos;histoire derrière chaque création.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white text-xs tracking-wide px-3 py-1">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="text-white">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm tracking-wide text-gray-400">{post.date}</p>
                    <p className="text-xs tracking-wide text-gray-500">{post.author}</p>
                  </div>
                  <h3 className="text-xl font-light tracking-wide mb-3 group-hover:text-gray-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs text-gray-500 border border-gray-700 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Integration Notice */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-thin tracking-widest mb-4">BIENTÔT PLUS D&apos;ARTICLES</h2>
            <div className="w-16 h-px bg-white mx-auto mb-6" />
            <p className="text-lg font-light leading-relaxed text-gray-200 max-w-2xl mx-auto">
              Ce blog sera prochainement connecté à notre système de gestion de contenu 
              pour vous offrir encore plus d&apos;articles sur l&apos;univers JPT.
            </p>
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

export default AllBlogPage;
