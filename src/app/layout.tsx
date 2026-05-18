import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { DisclaimerModal } from "@/components/disclaimer-modal";
import { ThemeProvider } from "@/components/theme-provider";
import { CommandPalette } from "@/components/command-palette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anesthesia Hub — Clinical reference, calculators & AI for anesthesiologists",
  description:
    "A modern clinical companion for interns, residents, and attending anesthesiologists. Drug database, dose calculators, subspecialty guides, question bank, and an AI plan assistant.",
  keywords: [
    "anesthesia",
    "anesthesiology",
    "clinical calculator",
    "drug reference",
    "MAC",
    "induction",
    "regional",
    "OB",
    "cardiac",
    "pediatric anesthesia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <DisclaimerModal />
          <CommandPalette />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
