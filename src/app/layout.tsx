import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "h0neyb0t",
  description: "Web3 & Blockchain Portfolio",
  icons: {
    icon: "/favicon.ico",
    apple: "/h0neyb0t-avatar.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${inter.variable}`} style={{ backgroundColor: "#050505" }}>
      <body className="font-sans antialiased bg-background text-foreground" style={{ backgroundColor: "#050505", color: "#ffffff" }}>
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
