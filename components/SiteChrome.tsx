"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isPreview =
    pathname === "/preview" ||
    pathname.startsWith("/preview/");

  if (isPreview) {
    return (
      <main className="min-h-screen">
        {children}
      </main>
    );
  }

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </>
  );
}