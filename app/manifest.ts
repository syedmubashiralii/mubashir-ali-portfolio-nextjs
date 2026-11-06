import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Syed Mubashir Ali",
    short_name: "Mubashir Ali",
    description: "Senior Flutter and AI-native product engineer.",
    start_url: "/",
    display: "browser",
    background_color: "#08201b",
    theme_color: "#08201b",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
