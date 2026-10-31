import PortfolioExperience from "./PortfolioExperience";

export const metadata = {
  title: "Portfolio — Brand, Web & Digital Design",
  description:
    "Explore the design portfolio of Omogbolahan Giwa, a multidisciplinary designer and software engineer working across brand and visual design, web and digital design, and digital strategy.",
  keywords: [
    "Omogbolahan Giwa portfolio",
    "design portfolio",
    "brand design portfolio",
    "visual design portfolio",
    "graphic design portfolio",
    "web design portfolio",
    "digital design portfolio",
    "digital strategy portfolio",
    "brand identity designer",
    "web designer",
    "multidisciplinary designer",
  ],
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio — Omogbolahan Giwa",
    description:
      "A selection of work across brand and visual design, web and digital design, and digital strategy by Omogbolahan Giwa.",
    url: "https://omogiwa.com/portfolio",
    siteName: "Omogbolahan Giwa",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Omogbolahan Giwa",
    description:
      "Explore Omogbolahan Giwa's work across brand and visual design, web and digital design, and digital strategy.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function PortfolioPage() {
  return <PortfolioExperience />;
}
