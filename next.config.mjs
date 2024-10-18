/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'demos.creative-tim.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.allbanglanewspaper.co',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '**',
      },
    ],
  },
  poweredByHeader: false,
  cleanDistDir: true,
  crossOrigin: 'anonymous',
  env: {
    HOSTNAME: 'localhost',
  },
  logging: {
    level: 'info',
  },
  reactStrictMode: false,

};

export default nextConfig;
