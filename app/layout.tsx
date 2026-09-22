import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
} from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import Schema from "./schema";

import SiteChrome from "@/components/SiteChrome";
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

  title: {
    default: "Jovavo | Web Design & Digital Marketing",
    template: "%s | Jovavo",
  },

  description:
    "Jovavo is a web design and digital marketing company creating custom websites, e-commerce experiences, and digital solutions for businesses.",

  applicationName: "Jovavo",

  authors: [
    {
      name: "Jovavo",
      url: "https://jovavo.com",
    },
  ],

  creator: "Jovavo",
  publisher: "Jovavo",

  keywords: [
    "Jovavo",
    "Jovavo web design",
    "web design",
    "website development",
    "custom websites",
    "e-commerce web design",
    "digital marketing",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Next.js development",
  ],

  alternates: {
    canonical: "/",
  },

  verification: {
    other: {
      "facebook-domain-verification":
        "rbc0rb1i4glgz2gbivc74ek7g3hjut",
    },
  },

  openGraph: {
    title: "Jovavo | Web Design & Digital Marketing",

    description:
      "Jovavo creates custom websites, e-commerce experiences, and digital solutions designed to help businesses grow online.",

    url: "https://jovavo.com",

    siteName: "Jovavo",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jovavo Web Design & Digital Marketing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Jovavo | Web Design & Digital Marketing",

    description:
      "Custom websites, e-commerce experiences, and digital solutions for businesses.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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

        <SiteChrome>{children}</SiteChrome>

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