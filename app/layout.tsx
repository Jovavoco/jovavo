import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jovavo.com"),

  title: {
    default: "Jovavo | Custom Websites & Digital Experiences",
    template: "%s | Jovavo",
  },

  description:
    "Jovavo designs and develops premium websites for businesses that want to stand out, grow online, and convert more customers.",

  keywords: [
    "Web Design",
    "Website Development",
    "Next.js",
    "UI Design",
    "Branding",
    "SEO",
    "Jovavo",
  ],

  openGraph: {
    title: "Jovavo | Custom Websites & Digital Experiences",
    description:
      "Premium websites designed for ambitious businesses.",
    url: "https://jovavo.com",
    siteName: "Jovavo",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jovavo",
    description:
      "Premium websites designed for ambitious businesses.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>

      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
    </html>
  );
}