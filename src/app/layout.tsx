import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AuraSync — Smart Home AI Hub",
    template: "%s | AuraSync",
  },
  description:
    "AuraSync is the next-generation AI-powered smart home hub. Control your home with voice, automate routines, and monitor energy usage in real time.",
  openGraph: {
    title: "AuraSync — Smart Home AI Hub",
    description:
      "The next-generation AI-powered smart home hub. Voice control, smart automation, real-time energy monitoring.",
    url: "https://landingpage-tranminhchien.vercel.app",
    siteName: "AuraSync",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
