import { siteConfig } from "@/data/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
