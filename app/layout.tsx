import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dhruv Khanna — Software Engineer",
  description:
    "Python Developer and Digital Innovator, pursuing CSE from IIIT Gwalior. Focused on digital spaces, working remotely from India.",
  generator: "Next.js",
  applicationName: "Dhruv Khanna",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "india",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Dhruv Khanna — Software Engineer",
    description:
      "Python Developer and Digital Innovator, pursuing CSE from IIIT Gwalior. Focused on digital spaces, working remotely from India.",
    url: "https://www.victorwilliams.me/",
    // siteName: "www.victorwilliams.me",
    images: [
      {
        url: "https://ibb.co/wNts4n1p",
        width: 1200,
        height: 630,
        alt: "Dhruv Khanna — Software Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
