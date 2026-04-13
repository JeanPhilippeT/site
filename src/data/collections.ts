// JPT Fashion Website - Gallery and Sub-Collections Data Structure

export interface SubCollection {
  id: string;
  name: string;
  slug: string;
  images: string[];
  description: string;
  mainImage: string;
}

export interface Gallery {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  subCollections: SubCollection[];
}

// DIFFUSION Gallery Sub-Collections
const diffusionSubCollections: SubCollection[] = [
  {
    id: 'black-swan',
    name: 'Black Swan',
    slug: 'black-swan',
    description: 'Une collection mystérieuse où les paillettes noires créent un jeu de lumière fascinant, incarnant l\'élégance nocturne absolue.',
    mainImage: '/images/galleries/diffusion/black-swan/caftan-couture-sequins-black-swan-5.webp',
    images: [
      '/images/galleries/diffusion/black-swan/black-sequins-caftan-4.webp',
      '/images/galleries/diffusion/black-swan/caftan-couture-sequins-black-swan-1.webp',
      '/images/galleries/diffusion/black-swan/caftan-couture-sequins-black-swan-2jpg.webp',
      '/images/galleries/diffusion/black-swan/caftan-couture-sequins-black-swan-3.webp',
      '/images/galleries/diffusion/black-swan/caftan-couture-sequins-black-swan-5.webp'
    ]
  },
  {
    id: 'bold-shadow',
    name: 'Bold Shadow',
    slug: 'bold-shadow',
    description: 'Une fusion audacieuse entre le noir profond et le bleu roi sur soie organza, créant une silhouette sophistiquée et moderne.',
    mainImage: '/images/galleries/diffusion/bold-shadow/caftan-couture-black-blue-orgaza-silk-1.webp',
    images: [
      '/images/galleries/diffusion/bold-shadow/caftan-couture-black-blue-orgaza-silk-1.webp',
      '/images/galleries/diffusion/bold-shadow/caftan-couture-black-blue-orgaza-silk-2.webp',
      '/images/galleries/diffusion/bold-shadow/caftan-couture-black-blue-orgaza-silk-3.webp',
      '/images/galleries/diffusion/bold-shadow/caftan-couture-black-blue-orgaza-silk-4.webp'
    ]
  }
];

// COUTURE Gallery Sub-Collections
const coutureSubCollections: SubCollection[] = [
  {
    id: 'queen-of-satin',
    name: 'Queen of Satin',
    slug: 'queen-of-satin',
    description: 'Satin bleu nuit enrichi de broderies dorées et de cristaux Swarovski, incarnant le raffinement ultime.',
    mainImage: '/images/galleries/couture/queen-of-satin/caftan-couture-night-blue-satin-silk-handmade-swarovski-embroidery-1.webp',
    images: [
      '/images/galleries/couture/queen-of-satin/caftan-couture-night-blue-satin-silk-handmade-gold-embroidery-2.webp',
      '/images/galleries/couture/queen-of-satin/caftan-couture-night-blue-satin-silk-handmade-swarovski-embroidery-1.webp'
    ]
  },
  {
    id: 'reflet-dor',
    name: 'Reflet d\'Or',
    slug: 'reflet-dor',
    description: 'Broderies artisanales sur soie dorée, alliant tradition marocaine et sophistication contemporaine.',
    mainImage: '/images/galleries/couture/reflet-dor/caftan-couture-gold-silk-handmaid-embroidery-1.webp',
    images: [
      '/images/galleries/couture/reflet-dor/caftan-couture-gold-silk-handmaid-embroidery-1.webp',
      '/images/galleries/couture/reflet-dor/caftan-couture-gold-silk-handmaid-sequins-embroidery-2.webp',
      '/images/galleries/couture/reflet-dor/caftan-couture-gold-silk-handmaid-sequins-embroidery-3.webp',
      '/images/galleries/couture/reflet-dor/caftan-couture-gold-silk-handmaid-sequins-embroidery-4.webp'
    ]
  },
  {
    id: 'silvery-night',
    name: 'Silvery Night',
    slug: 'silvery-night',
    description: 'Broderies argentées sur soie noire, évoquant la beauté mystérieuse d\'une nuit étoilée.',
    mainImage: '/images/galleries/couture/silvery-night/gandoura-couture-silvery-night-black-silk-handmade-embroidery-1.webp',
    images: [
      '/images/galleries/couture/silvery-night/gandoura-couture-silvery-night-black-silk-handmade-embroidery-1.webp',
      '/images/galleries/couture/silvery-night/gandoura-couture-silvery-night-black-silk-handmade-embroidery-2.webp',
      '/images/galleries/couture/silvery-night/gandoura-couture-silvery-night-black-silk-handmade-embroidery-3.webp',
      '/images/galleries/couture/silvery-night/gandoura-couture-silvery-night-black-silk-handmade-embroidery-4.webp'
    ]
  }
];

// Main Galleries
export const galleries: Gallery[] = [
  {
    id: 'diffusion',
    name: 'DIFFUSION Gallery',
    slug: 'diffusion',
    description: 'Une collection accessible qui démocratise l\'excellence artisanale, offrant l\'élégance JPT à un public plus large.',
    coverImage: '/images/galleries/diffusion/black-swan/caftan-couture-sequins-black-swan-5.webp',
    subCollections: diffusionSubCollections
  },
  {
    id: 'couture',
    name: 'COUTURE Gallery',
    slug: 'couture',
    description: 'L\'excellence de la haute couture parisienne, où chaque pièce est une œuvre d\'art créée sur mesure.',
    coverImage: '/images/galleries/couture/queen-of-satin/caftan-couture-night-blue-satin-silk-handmade-swarovski-embroidery-1.webp',
    subCollections: coutureSubCollections
  }
];

// Helper functions
export const getGalleryBySlug = (slug: string): Gallery | undefined => {
  return galleries.find(gallery => gallery.slug === slug);
};

export const getSubCollectionBySlug = (gallerySlug: string, subCollectionSlug: string): SubCollection | undefined => {
  const gallery = getGalleryBySlug(gallerySlug);
  return gallery?.subCollections.find(subCollection => subCollection.slug === subCollectionSlug);
};

export const getAllGallerySlugs = (): string[] => {
  return galleries.map(gallery => gallery.slug);
};

export const getAllSubCollectionSlugs = (gallerySlug: string): string[] => {
  const gallery = getGalleryBySlug(gallerySlug);
  return gallery?.subCollections.map(subCollection => subCollection.slug) || [];
};

export const getAllSubCollections = (): SubCollection[] => {
  return galleries.flatMap(gallery => gallery.subCollections);
};
