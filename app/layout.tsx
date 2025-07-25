import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/animations/PageTransition";
import ErrorBoundary from "@/components/ErrorBoundary";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GR Group - Redefining Lifestyle. Driving Global Change.",
  description: "A multidisciplinary conglomerate specializing in premium exports, signature events, lifestyle ventures, and strategic collaborations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:border focus:border-gray-300 focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <ErrorBoundary>
          <PageTransition>
            {children}
          </PageTransition>
        </ErrorBoundary>
        <Footer />
      </body>
    </html>
  );
}
