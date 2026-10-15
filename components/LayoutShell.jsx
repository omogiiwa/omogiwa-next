
"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const isSecondExpression = pathname.startsWith("/second-expression");

  return (
    <>
      {!isSecondExpression && <Navbar />}
      {children}
      {!isSecondExpression && <Footer />}
    </>
  );
}
