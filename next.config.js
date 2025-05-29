/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/AI-Testing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/AI-Testing/' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig 