/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['vercel.com'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  poweredByHeader: false,
}

export default nextConfig