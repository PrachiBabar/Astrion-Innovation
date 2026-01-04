/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "i.pinimg.com",
      "cdn.pixabay.com",
      "in.pinterest.com",
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/**',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/admin/api/blog",
        destination: "http://69.62.84.113:5001/api/blog",
      },
      {
        source: "/admin/api/:path*",
        destination: "http://69.62.84.113:5001/api/blog/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
