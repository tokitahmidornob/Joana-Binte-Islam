import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import AmbientBackground from "@/components/AmbientBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joana Binte Islam — Forestry & Environment | Academic Portfolio",
  description:
    "Official portfolio of Joana Binte Islam. Undergraduate student in Forestry and Environment at Gazipur Agricultural University, dedicated to biodiversity conservation, sustainable resource management, AI, and coding.",
  keywords: [
    "Joana Binte Islam",
    "Forestry and Environment",
    "Gazipur Agricultural University",
    "Environmental Conservation",
    "Biodiversity",
    "Sustainable Resource Management",
    "Student Portfolio",
    "IAAS",
  ],
  authors: [{ name: "Joana Binte Islam" }],
  openGraph: {
    title: "Joana Binte Islam — Forestry & Environment | Academic Portfolio",
    description:
      "Official portfolio of Joana Binte Islam. Undergraduate student in Forestry and Environment at Gazipur Agricultural University, dedicated to biodiversity conservation, sustainable resource management, AI, and coding.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen relative bg-[var(--background)] text-[var(--foreground)] antialiased flex flex-col font-sans transition-colors duration-500 overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Subtle Ambient Forest Particles & Lighting */}
          <AmbientBackground />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
