/** @type {import('next').NextConfig} */
const nextConfig = {
 async redirects() {
    return [
      {
        source: '/',
        destination: 'https://test.afabenadressa.org',
        permanent: false, // or true for a 308 permanent redirect
      },
    ];
  },
}

module.exports = nextConfig
