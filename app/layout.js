import "./globals.css";

export const metadata = {
  title: "Omogbolahan Giwa",
  description:
    "Omogbolahan Giwa — multidisciplinary designer and developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
