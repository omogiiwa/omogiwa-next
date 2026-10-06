import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  metadataBase: new URL("https://omogiwa.com"),

  alternates: {

    canonical: "/",

  },

  title: {
    default: "Omogbolahan Giwa | Multidisciplinary Designer & Software Engineer",
    template: "%s | Omogbolahan Giwa",
  },

  description:
    "Omogbolahan Giwa is a multidisciplinary designer and software engineer working across web design, development, branding, graphic design and visual communication.",

  authors: [
    {
      name: "Omogbolahan Giwa",
      url: "https://omogiwa.com",
    },
  ],

  creator: "Omogbolahan Giwa",
  publisher: "Omogbolahan Giwa",

  keywords: [
    "Omogbolahan Giwa",
    "multidisciplinary designer",
    "software engineer",
    "web designer",
    "web developer",
    "graphic designer",
    "brand designer",
    "illustrator",
  ],

  icons: {
    icon: "/logo.svg",
  },

  openGraph: {
    twitter: {
  card: "summary_large_image",
  title:
    "Omogbolahan Giwa | Multidisciplinary Designer & Software Engineer",
  description:
    "The portfolio of Omogbolahan Giwa, working across design, technology, branding and visual communication.",
},
    type: "website",
    url: "https://omogiwa.com",
    siteName: "Omogbolahan Giwa",
    title:
      "Omogbolahan Giwa | Multidisciplinary Designer & Software Engineer",
    description:
      "The portfolio of Omogbolahan Giwa, working across design, technology, branding and visual communication.",
    locale: "en_NG",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.variable}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}