import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "jake slone | dev",
  description: "Jake Slone - Fullstack Developer. My portfolio showcasing my work and experience",
  keywords: [
    "Jake Slone",
    "fullstack developer",
    "web developer",
    "frontend developer",
    "Slone",
    "freelance developer",
  ],
  authors: [{ name: "Jake Slone", url: "https://www.jakeslone.com" }],
  creator: "Jake Slone",
  publisher: "Jake Slone",
  metadataBase: new URL("https://www.jakeslone.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jake Slone - Fullstack Developer",
    description: "Jake Slone - Fullstack Developer. My portfolio showcasing my work and experience",
    url: "https://www.jakeslone.com",
    siteName: "Jake Slone",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "jake slone | dev",
    description: "Jake Slone - Fullstack Developer. My portfolio showcasing my work and experience",
    creator: "@jslone98",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
