/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  // Optimize development performance
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true
  }
}

module.exports = nextConfig 