import type { MetadataRoute } from "next";

const baseUrl = "https://syedmubashirali.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/portfolio", "/packages", "/projects", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
