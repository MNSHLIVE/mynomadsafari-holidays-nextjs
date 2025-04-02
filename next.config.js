/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,  // Required for static export
    domains: ['localhost'],
  },
  // Optimize development performance
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  typescript: {
    ignoreBuildErrors: true
  },
  swcMinify: false,
  experimental: {
    workerThreads: false,
    cpus: 1
  }
}

module.exports = nextConfig 