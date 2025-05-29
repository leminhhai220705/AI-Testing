/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/agency-marketing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/agency-marketing/' : '',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig 