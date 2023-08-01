/** @type {import('next').NextConfig} */
const apiUrl = process.env.API_URL;
const nextConfig = {
  publicRuntimeConfig: {
    apiBaseUrl: process.env.API_URL,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
