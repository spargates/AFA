/** @type {import('next').NextConfig} */
const { createProxyMiddleware } = require('http-proxy-middleware');

const nextConfig = {
 async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://spargates.github.io/AFAweb/:path*', // Proxy to Backend
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.afabenadressa.org/index.html',
        permanent: false, // or true for a 308 permanent redirect
      },
    ];
  },
}

module.exports = nextConfig
