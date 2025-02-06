import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";

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
    type: "website",
    images: '/images/logos/logo-t.svg',
    url: "https://www.tech-vibe.agency",
    siteName: "Tech Vibe Agency",
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
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1E8SZ8BS9M"
          strategy="afterInteractive" //Script starts after first page render
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
