import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARTLY AI - The Training Layer for Physical AI",
  description: "Artly's proprietary AI platform lets robots learn real-world skills in just 30 minutes.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Work+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {children}
        {/* Google tag (GT-PJNQ8LQG + Google Ads AW-465362743) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-PJNQ8LQG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GT-PJNQ8LQG');
          gtag('config', 'AW-465362743');
        `}</Script>
      </body>
    </html>
  );
}
