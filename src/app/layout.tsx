import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Editorial display serif for headings — soft optical sizing, a touch of warmth
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Dave Wonnah | Software Engineer",
    template: "%s | Dave Wonnah",
  },
  description:
    "Software engineer building full-stack web apps — clean data models, solid APIs, and interfaces that feel effortless to use.",
  metadataBase: new URL("https://davewonnah.dev"),
  openGraph: {
    title: "Dave Wonnah | Software Engineer",
    description:
      "Software engineer building full-stack web apps — clean data models, solid APIs, and interfaces that feel effortless to use.",
    url: "https://davewonnah.dev",
    siteName: "Dave Wonnah",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dave Wonnah | Software Engineer",
    description:
      "Software engineer building full-stack web apps — clean data models, solid APIs, and interfaces that feel effortless to use.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${fraunces.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
