import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  metadataBase: new URL("https://tech-vibe-agency.vercel.app/"),
  title: {
    template: "%s | Tech Vibe agency",
    default: "Tech Vibe agency",
  },
  icons: {
    icon: '/images/logos/logo-t.svg',
  },
  description: "A Tech Vibe digital agency. We offer various types of digital services.",
  openGraph: {
    images: '/images/logos/logo-t.svg',
    description: "A Tech Vibe digital agency. We offer various types of digital services.",
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0369a1' },
    { media: '(prefers-color-scheme: dark)', color: '#0369a1' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-ERHLGFG83B" />
    </html>
  );
}
