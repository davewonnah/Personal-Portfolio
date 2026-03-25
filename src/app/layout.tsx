import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dave Wonnah | Software Engineer",
    template: "%s | Dave Wonnah",
  },
  description:
    "Software engineer passionate about building exceptional digital experiences.",
  metadataBase: new URL("https://davewonnah.dev"),
  openGraph: {
    title: "Dave Wonnah | Software Engineer",
    description:
      "Software engineer passionate about building exceptional digital experiences.",
    url: "https://davewonnah.dev",
    siteName: "Dave Wonnah",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dave Wonnah | Software Engineer",
    description:
      "Software engineer passionate about building exceptional digital experiences.",
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
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
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
