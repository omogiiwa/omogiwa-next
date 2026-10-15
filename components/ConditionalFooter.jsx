
"use client";

import { usePathname } from "next/navigation";
import footer from "./footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  if (
    pathname === "/second-expression" ||
    pathname.startsWith("/second-expression/")
  ) {
    return null;
  }

  return <footer />;
}
