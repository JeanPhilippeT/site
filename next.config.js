/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
