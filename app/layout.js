import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});
export const metadata = {
  title: "Omogbolahan Giwa",
  description:
    "Omogbolahan Giwa — multidisciplinary designer and developer.",
    icons: {
    icon: "/icon2.png",
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
