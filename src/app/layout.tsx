import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "@/components/header_footer/header";
import Footer from "@/components/header_footer/footer";
import BackToTop from "@/components/ui/BackToTop/BackToTop";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hokutofes26.github.io"),
  title: {
    default: "北斗祭2026 | 富山高専",
    template: "%s | 北斗祭2026",
  },
  applicationName: "北斗祭2026",
  description: "富山高専で行われる北斗祭2026に関する情報を来場者・関係者に提供します。",
  openGraph: {
    siteName: "北斗祭2026",
  },
  icons: {
    icon: [
      { url: "/img/common/favicon.ico" },
      { url: "/img/common/apple-touch-icon.png", sizes: "256x256", type: "image/png" },
    ],
    apple: "/img/common/apple-touch-icon.png",
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "富山高専 第18回 北斗祭",
    url: "https://hokutofes26.github.io",
  };

  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&family=Zen+Old+Mincho:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <Script src={"/js/main.js"} strategy="afterInteractive" />
      </body>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      )}
    </html>
  );
}
