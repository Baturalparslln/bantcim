import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/kvkk-aydinlatma-metni",
        destination: "/kvkk",
        permanent: true,
      },
      {
        source: "/kullanim-kosullari",
        destination: "/kullanim-sartlari",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
