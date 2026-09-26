import type { NextConfig } from "next";

const isSitesStaticExport = process.env.SITES_STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isSitesStaticExport
    ? { output: "export" }
    : {
        async redirects() {
          return [
            {
              source: "/:path*",
              has: [{ type: "host", value: "www.syedmubashirali.com" }],
              destination: "https://syedmubashirali.com/:path*",
              permanent: true,
            },
          ];
        },
      }),
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: isSitesStaticExport,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com", // if you use Play Store images
      },
    ],
  },
};

export default nextConfig;
