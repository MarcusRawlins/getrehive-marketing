import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";

import { ScrollManager } from "@/components/scroll-manager";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getrehive.com"),
  title: {
    default: "ReHive | Custom Development for Small Businesses",
    template: "%s | ReHive",
  },
  description:
    "ReHive builds custom websites, automations, and software for small businesses that have outgrown off-the-shelf tools.",
  keywords: [
    "custom development for small business",
    "small business web development",
    "custom software development services",
    "small business automation",
    "service business website design",
    "booking platform customization",
    "ecommerce custom development",
  ],
  openGraph: {
    title: "ReHive | Custom Development for Small Businesses",
    description:
      "Custom websites, automations, and software systems built for operators who have outgrown generic tools.",
    url: "https://getrehive.com",
    siteName: "ReHive",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReHive | Custom Development for Small Businesses",
    description:
      "Custom websites, automations, and software systems built for operators who have outgrown generic tools.",
  },
  alternates: {
    canonical: "https://getrehive.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body>
        <ScrollManager />
        {children}
      </body>
    </html>
  );
}
