import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Schema from "./schema";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetaPixel from "@/components/MetaPixel";

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

  verification: {
    other: {
      "facebook-domain-verification": "rbc0rb1i4glgz2gbivc74ek7g3hjut",
    },
  },

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
      "Premium websites designed and developed for ambitious businesses.",
    url: "https://jovavo.com",
    siteName: "Jovavo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jovavo social preview image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jovavo | Custom Websites & Digital Experiences",
    description:
      "Premium websites designed and developed for ambitious businesses.",
    images: ["/og-image.png"],
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
      <body className="flex min-h-full flex-col">
        <Schema />

        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />

        <MetaPixel />
      </body>

      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        />
      ) : null}
    </html>
  );
}