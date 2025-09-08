import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jerzymachowski.net.pl";
  const currentDate = new Date();
  
  return [
    { 
      url: `${base}/`, 
      lastModified: currentDate, 
      changeFrequency: "monthly", 
      priority: 1.0 
    },
    { 
      url: `${base}/#o-mnie`, 
      lastModified: currentDate, 
      changeFrequency: "monthly", 
      priority: 0.8 
    },
    { 
      url: `${base}/#opinie`, 
      lastModified: currentDate, 
      changeFrequency: "weekly", 
      priority: 0.7 
    },
    { 
      url: `${base}/#kontakt`, 
      lastModified: currentDate, 
      changeFrequency: "monthly", 
      priority: 0.9 
    },
  ];
}
