import "./brand-design.css";
import BrandTimeline from "./BrandTimeline";

export const metadata = {
  title: "Brand Design Case Studies | Omogbolahan Giwa",
  description: "Selected brand identity projects, including Mings and Ododo Bloom, presented through their visual systems and applications.",
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
    title: "Brand Design Case Studies | Omogbolahan Giwa",
    description: "Brand identity case studies by Omogbolahan Giwa, including Mings and Ododo Bloom.",
  },
};

export default function BrandDesignPage() {
  return <BrandTimeline />;
}
