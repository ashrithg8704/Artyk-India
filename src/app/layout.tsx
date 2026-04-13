import type { Metadata } from "next";
import { Jost, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageTransition } from "@/components/ui/PageTransition";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://artykindia.com"),
  title: {
    default: "Artyk India",
    template: "%s | Artyk India",
  },
  description:
    "Artyk India is a 25,000 sq.ft. European furniture experience centre in Jubilee Hills, Hyderabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <body className="bg-ivory text-onyx">
        <Header />
        <div className="mt-20">
          <DevelopmentNotice />
        </div>
        <PageTransition>{children}</PageTransition>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  );
}