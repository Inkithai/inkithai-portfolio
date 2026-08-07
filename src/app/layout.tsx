import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | Inkithai`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Inkithai Meiyalagan", url: siteConfig.url }],
  creator: "Inkithai Meiyalagan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "Inkithai Meiyalagan",
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
  },
  icons: {
    icon: "/favicon.svg",
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
    name: "Inkithai Meiyalagan",
    url: siteConfig.url,
    jobTitle: "Full Stack & AI Engineer",
    description: siteConfig.description,
    sameAs: [
      "https://github.com/Inkithai",
      "https://www.linkedin.com/in/inkithai/",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#08090D] text-[#F5F7FA] antialiased selection:bg-[#8B5CF6] selection:text-white font-sans">
        {/* Subtle ambient background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-[#08090D]" />
          <div className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(800px circle at 20% -10%, rgba(139,92,246,0.15), transparent 60%),
                           radial-gradient(600px circle at 80% 0%, rgba(96,165,250,0.08), transparent 60%),
                           radial-gradient(600px circle at 50% 120%, rgba(139,92,246,0.06), transparent 60%)`
            }}
          />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "48px 48px"
            }}
          />
        </div>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
