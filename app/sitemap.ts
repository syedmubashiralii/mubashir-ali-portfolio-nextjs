import type { MetadataRoute } from "next";
import { siteUrl } from "@/app/data/seo";

const routes = ["", "/portfolio", "/packages", "/projects", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" ? 0.9 : 0.8,
  }));
}
