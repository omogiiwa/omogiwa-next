import "./brand-design.css";
import BrandTimeline from "./BrandTimeline";

export const metadata = {
  title: "Mings Brand Identity | Omogbolahan Giwa",
  description: "A visual identity project for Mings, presented through its core identity and real-world brand applications.",
  keywords: ["Mings brand identity", "Mings branding", "brand identity design", "visual identity", "brand design", "Omogbolahan Giwa"],
  authors: [{ name: "Omogbolahan Giwa", url: "https://omogiwa.com" }],
  creator: "Omogbolahan Giwa",
  publisher: "Omogbolahan Giwa",
  alternates: { canonical: "https://omogiwa.com/portfolio/brand-design" },
  openGraph: {
    type: "article",
    url: "https://omogiwa.com/portfolio/brand-design",
    siteName: "Omogbolahan Giwa",
    locale: "en_NG",
    title: "Mings Brand Identity | Omogbolahan Giwa",
    description: "A visual identity project for Mings, presented as a visual timeline.",
  },
};

export default function BrandDesignPage() {
  return <BrandTimeline />;
}
