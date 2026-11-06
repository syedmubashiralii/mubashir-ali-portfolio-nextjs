import type { NextConfig } from "next";

const isSitesStaticExport = process.env.SITES_STATIC_EXPORT === "1";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
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
        async headers() {
          return [
            { source: "/:path*", headers: securityHeaders },
            {
              // Experience letters stay viewable from the site but out of search results.
              source: "/:file(Experience-Letter-.+\\.pdf|KP-Experience-Letter\\.jpg)",
              headers: [{ key: "X-Robots-Tag", value: "noindex" }],
            },
          ];
        },
      }),
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: isSitesStaticExport,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
