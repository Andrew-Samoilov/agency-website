import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
// import { GoogleAnalytics } from '@next/third-parties/google';

const GA_MEASUREMENT_ID = "G-1E8SZ8BS9M";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tech-vibe.agency/"),
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
        {/* Підключення GA */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
      {/* <GoogleAnalytics gaId="G-1E8SZ8BS9M" /> */}
    </html>
  );
}
