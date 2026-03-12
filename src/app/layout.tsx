import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "تصويت | أفضل قارئ للقرآن الكريم",
  description: "صوّت لأفضل قارئ للقرآن الكريم - منصة تصويت تفاعلية لمحبي القرآن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
