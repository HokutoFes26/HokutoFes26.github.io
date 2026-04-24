import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header_footer/header";
import Footer from "@/components/header_footer/footer";
import getConfig from "next/config";
import Script from "next/script";
import { getPath } from "@/constants/paths";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "北斗祭2026 | 富山高専",
    description: "富山高専で行われる北斗祭2026に関する情報を来場者・関係者に提供します。",
    icons: {
        icon: getPath("/img/common/favicon.ico"),
        apple: getPath("/img/common/apple-touch-icon.png"),
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
            <head>
                <meta charSet="utf-8" />
                <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&family=Zen+Old+Mincho:wght@400&display=swap" rel="stylesheet" />
            </head>

            <body>
                <Header />
                {children}
                <Footer />
                <Script src={getPath("/js/main.js")} strategy="afterInteractive" />
            </body>
        </html>
    );
}
