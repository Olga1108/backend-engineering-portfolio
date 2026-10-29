import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "Olha Razvaliaieva — Backend Engineer";
const siteUrl = "https://backend-engineering-portfolio-sigma.vercel.app";
const description = "Backend Engineer with full-stack experience. PHP / Symfony, Go, messaging and reliability. Engineering work on high-traffic systems, APIs and resilient service architecture.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  openGraph: { title, description, url: "/", type: "website", locale: "en_US" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
