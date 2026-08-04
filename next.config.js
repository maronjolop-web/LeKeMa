/**
 * Next.js configuration for LeKeMa
 * - Enables App Router (appDir)
 * - Allows common external image hosts used by placeholders
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.ibb.co',
      'i.postimg.cc',
      'imgur.com',
      'images.unsplash.com',
      'i.ibb.co'
    ]
  }
}

module.exports = nextConfig;
