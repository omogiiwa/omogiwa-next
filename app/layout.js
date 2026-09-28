import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
export const metadata = {
  title: "Omogbolahan Giwa",
  description:
    "Omogbolahan Giwa — multidisciplinary designer and developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
        
        <Footer />
      </body>
    </html>
  );
}
