const BASE_URL = "https://omogiwa.com";

export default function sitemap() {
  const routes = [
    // Main pages
    "",
    "/about",
    "/contact",
    "/hire",
    "/ai",

    // Collections
    "/tools",
    "/blogs",

    // Portfolio
    "/portfolio",
    "/portfolio/brand-design",

    // Tools
    "/tools/frame-picker",
    "/tools/svg-to-png",

    // Articles and journal
    "/blogs/relationship-between-anatomy-and-design",
    "/blogs/building-across-disciplines",
    "/blogs/making-ideas-tangible",
    "/blogs/help-my-sister-become-a-doctor",
    "/journal/from-ododo-to-giwa",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority:
      route === ""
        ? 1
        : ["/about", "/portfolio", "/contact", "/tools", "/blogs"].includes(route)
          ? 0.8
          : 0.7,
  }));
}
