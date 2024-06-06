/** @type {import('next').NextConfig} */
const { createProxyMiddleware } = require('http-proxy-middleware');

const nextConfig = {
 async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://sites.google.com/view/afa-ceip-benadressa/:path*', // Proxy to Backend
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.afabenadressa.org/inicio',
        permanent: false, // or true for a 308 permanent redirect
      },
    ];
  },
}

module.exports = nextConfig
