import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devntom.com"), // change to your domain

  title: {
    default: "Devntom Solutions | Web, SEO & Software Company",
    template: "%s | Devntom Solutions",
  },

  description:
    "Devntom Solutions is a leading digital software company offering web development, SEO, digital marketing, mobile apps, and custom software solutions worldwide.",

  keywords: [
    "Devntom Solutions",
    "web development company",
    "SEO services",
    "software house",
    "digital marketing agency",
    "app development",
  ],

  authors: [{ name: "Haider Ali" }],
  creator: "Haider Ali",

  openGraph: {
    title: "Devntom Solutions | Digital Growth Experts",
    description:
      "We help businesses grow with web development, SEO, digital marketing, and custom software solutions.",
    url: "https://devntom.com",
    siteName: "Devntom Solutions",
    images: [
      {
        url: "/og-image.jpg", // add this image (1200x630)
        width: 1200,
        height: 630,
        alt: "Devntom Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Devntom Solutions",
    description:
      "Web Development, SEO & Digital Marketing Services by Devntom Solutions.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/i.png", media: "(prefers-color-scheme: light)" },
      { url: "/i.png", media: "(prefers-color-scheme: dark)" },
      { url: "/i.svg", type: "image/svg+xml" },
    ],
    apple: "/a.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
