import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/StoreContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "AeroSpike Pro — AI Sports Performance Band",
    template: "%s | AeroSpike Pro",
  },
  description:
    "AeroSpike Pro is an AI-powered wristband for professional athletes. Track vertical jump, reaction time, swing speed, and landing force in real time.",
  openGraph: {
    title: "AeroSpike Pro — AI Sports Performance Band",
    description:
      "AI-powered wristband for pro athletes. Real-time tracking of jump height, reaction time, speed, and impact force.",
    url: "https://landingpage-tranminhchien.vercel.app",
    siteName: "AeroSpike Pro",
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
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
