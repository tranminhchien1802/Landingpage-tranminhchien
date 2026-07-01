import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/StoreContext";
import { ThemeProvider } from "@/lib/ThemeContext";
import { ToastProvider } from "@/lib/ToastContext";

import Analytics from "@/components/Analytics";
const Chatbot = dynamic(() => import("@/components/Chatbot"));

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("aero_theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ThemeProvider>
          <StoreProvider>
            <ToastProvider>{children}</ToastProvider>
          </StoreProvider>
          <Analytics />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
