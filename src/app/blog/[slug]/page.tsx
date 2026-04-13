'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { getBlogPostBySlug, blogPosts } from '../../../data/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-thin mb-4">Article non trouvé</h1>
          <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (other posts, excluding current one)
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

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
              href="/blog" 
              className="flex items-center space-x-2 text-sm font-light tracking-wide hover:text-gray-300 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>RETOUR AU BLOG</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <section className="pt-20">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
              <div className="text-white">
                <span className="inline-block bg-white text-black text-xs tracking-wide px-3 py-1 mb-4">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-thin tracking-wide mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-gray-200 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-center space-x-4">
              <Tag size={16} className="text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-sm text-gray-400 border border-gray-700 px-3 py-1 hover:border-gray-500 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-thin tracking-widest mb-4">ARTICLES SIMILAIRES</h2>
              <div className="w-16 h-px bg-white mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="relative overflow-hidden mb-6">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/70 text-white text-xs tracking-wide px-3 py-1">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-white">
                    <p className="text-sm tracking-wide text-gray-400 mb-2">{relatedPost.date}</p>
                    <h3 className="text-xl font-light tracking-wide mb-3 group-hover:text-gray-300 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-300 font-light leading-relaxed">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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

export default BlogPostPage;
