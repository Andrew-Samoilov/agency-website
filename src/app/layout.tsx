import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tech-vibe-agency.vercel.app/"),
  title: {
    template: "%s | Tech Vibe agency",
    default: "Tech Vibe agency",
  },
  description: "A website for a Tech Vibe digital agency",
  openGraph: {
    images: '/images/logos/logo-t.svg',
    description: "A website for a Tech Vibe digital agency",
  },
};

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
    </html>
  );
}
