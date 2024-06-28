/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'satisfying-card-005f74ce36.media.strapiapp.com',
        port: '',
      },
    ],
  },
}

export default nextConfig
