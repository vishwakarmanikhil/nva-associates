const BASE_URL = "https://www.nvaassociates.com";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/services",
    "/about",
    "/contact",
    "/privacy-policy",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  /**
   * Example: service detail pages
   * If later you create routes like /services/gst-filing
   */
  const serviceSlugs = [
    "accounting-bookkeeping",
    "gst-registration-filing",
    "income-tax-returns",
    "tds-compliance",
    "msme-udyam-registration",
    "pan-dsc-services",
  ];

  const servicePages = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}