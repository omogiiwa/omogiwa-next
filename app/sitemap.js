const BASE_URL = "https://omogiwa.com";

export default function sitemap() {
  const routes = [
    // Main pages
    "",
    "/about",
    "/contact",
    "/hire",
    "/ai",

    // Portfolio
    "/portfolio",
    "/portfolio/brand-design",

    // Tools
    "/tools/frame-picker",
    "/tools/svg-to-png",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority:
      route === ""
        ? 1
        : ["/about", "/portfolio", "/contact"].includes(route)
          ? 0.8
          : 0.7,
  }));
}