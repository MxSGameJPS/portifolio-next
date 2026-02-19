/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
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

export default withSimpleAnalytics(nextConfig);
