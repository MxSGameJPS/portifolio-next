/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [100, 90, 75, 60],
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

import withSimpleAnalytics from "@simpleanalytics/next/plugin";

export default withSimpleAnalytics(nextConfig, {
  hostname: "saulopavanello.com.br",
});
