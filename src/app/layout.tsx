import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgressIndicator } from "@/components/ui/progress-bar";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.title.split("—")[0].trim(), url: siteConfig.url }],
  creator: siteConfig.title.split("—")[0].trim(),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title.split("—")[0].trim(),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@Inkithai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.title.split("—")[0].trim(),
    url: siteConfig.url,
    jobTitle: "Full Stack & AI Engineer",
    description: siteConfig.description,
    sameAs: [
      "https://github.com/Inkithai",
      "https://www.linkedin.com/in/inkithai/",
      "https://twitter.com/Inkithai",
    ],
    knowsAbout: siteConfig.keywords,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Sri Lanka Institute of Information Technology (SLIIT)",
    },
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`:root{--font-inter:'Inter',system-ui,-apple-system,sans-serif;--font-space-grotesk:'Space Grotesk',system-ui,sans-serif;--font-jetbrains-mono:'JetBrains Mono',monospace;}`}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-zinc-950 text-zinc-100 antialiased selection:bg-violet-500/30 selection:text-white" style={{ fontFamily: "var(--font-inter)" }}>
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(120,119,198,0.12),transparent_60%),radial-gradient(ellipse_80%_80%_at_80%_100%,rgba(236,72,153,0.08),transparent_60%),radial-gradient(ellipse_60%_60%_at_0%_80%,rgba(6,182,212,0.08),transparent_60%)]" />
          <div className="absolute inset-0 grid-pattern opacity-[0.015]" />
        </div>
        <ScrollProgressIndicator />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
