import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap", // SEO + performance
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devntom.com"),

  title: {
    default: "Devntom Solutions | Web, SEO & Software Company",
    template: "%s | Devntom Solutions",
  },

  description:
    "Devntom Solutions is a digital software company offering web development, SEO, digital marketing, mobile apps, and custom software solutions.",

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
  publisher: "Devntom Solutions",

  alternates: {
    canonical: "https://devntom.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    title: "Devntom Solutions | Digital Growth Experts",
    description:
      "We help businesses grow with web development, SEO, digital marketing, and custom software solutions.",
    url: "https://devntom.com",
    siteName: "Devntom Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devntom Solutions – Web & Software Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Devntom Solutions | Web & SEO Experts",
    description:
      "Web Development, SEO & Digital Marketing Services by Devntom Solutions.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/letter-d.png",
    apple: "/apple-touch-icon.png",
  },

  category: "Technology",
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
        <Header />
        <main role="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
