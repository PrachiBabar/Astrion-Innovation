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
        // destination: "https://api.astrioninnovation.com/api/blog",
        destination: "http://localhost:5000/api/blog",
      },
      {
        source: "/admin/api/:path*",
        // destination: "https://api.astrioninnovation.com/api/blog/:path*",
        destination: "http://localhost:5000/api/blog/:path*",

      },
    ];
  },
};

module.exports = nextConfig;
