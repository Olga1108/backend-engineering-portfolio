import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "Olha Razvaliaieva — Backend Engineer";
const description = "Backend Engineer with full-stack experience. PHP / Symfony, Go, messaging and reliability. Engineering work on high-traffic systems, APIs and resilient service architecture.";

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: "/icon.svg" },
  openGraph: { title, description, type: "website", locale: "en_US" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
