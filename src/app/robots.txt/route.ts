import { type MetadataRoute } from "next";

export function GET(): Response {
  const robots: MetadataRoute.Robots = {
    rules: [
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://jerzymachowski.com.pl/sitemap.xml",
    host: "https://jerzymachowski.com.pl",
  };

  const robotsText = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Sitemap location
Sitemap: https://jerzymachowski.com.pl/sitemap.xml

# Host preference
Host: https://jerzymachowski.com.pl`;

  return new Response(robotsText, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}