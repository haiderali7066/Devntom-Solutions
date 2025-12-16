import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://devntomsolutions.com",
      lastModified: new Date(),
    },
    {
      url: "https://devntomsolutions.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://devntomsolutions.com/contact",
      lastModified: new Date(),
    },
  ];
}
