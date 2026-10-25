import "./about.css";
import "./about-experience.css";
import AboutExperience from "./AboutExperience";

export const metadata = {
  title: "About — Omogbolahan Giwa",
  description:
    "Learn more about Omogbolahan Giwa — a multidisciplinary designer, software engineer, scientist, and creative exploring the intersection of art, design, technology, and human potential.",
  keywords: [
    "Omogbolahan Giwa",
    "Omogbolahan",
    "multidisciplinary designer",
    "software engineer",
    "web designer",
    "graphic designer",
    "brand identity designer",
    "illustrator",
    "AI developer",
    "Human Anatomy",
    "creative designer Nigeria",
    "Nigerian designer",
  ],
  alternates: {
    canonical: "https://omogiwa.com/about",
  },
  openGraph: {
    title: "About — Omogbolahan Giwa",
    description:
      "A multidisciplinary designer, software engineer, scientist and creative exploring the intersection of art, design and technology.",
    url: "https://omogiwa.com/about",
    siteName: "Omogbolahan Giwa",
    type: "profile",
    images: [
      {
        url: "https://omogiwa.com/logo.svg",
        width: 400,
        height: 400,
        alt: "Omogbolahan Giwa logo",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutExperience />;
}
