import type { MetadataRoute } from "next";
import { siteUrl } from "@/app/data/seo";

export const dynamic = "force-static";

const routes = ["", "/portfolio", "/packages", "/projects", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" ? 0.9 : 0.8,
  }));
}
