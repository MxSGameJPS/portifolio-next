/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [100, 90, 75, 60],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "saulopavanello.com.br" }],
        destination: "https://www.saulopavanello.com.br/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|css|js)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
