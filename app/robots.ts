import type { MetadataRoute } from "next";

const siteUrl = "https://optivirads.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/private/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}