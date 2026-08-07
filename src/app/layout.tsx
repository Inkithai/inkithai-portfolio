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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#030712] text-[#F8FAFC] antialiased selection:bg-[#3B82F6] selection:text-white font-sans">
        {/* Animated mesh gradient background */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[#030712]" />

          {/* Floating gradient orbs */}
          <div
            className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.12] blur-[120px]"
            style={{
              background: 'radial-gradient(circle, #3B82F6, transparent 70%)',
              animation: 'meshMove 25s ease-in-out infinite',
            }}
          />
          <div
            className="absolute top-[10%] right-[-15%] w-[600px] h-[600px] rounded-full opacity-[0.1] blur-[120px]"
            style={{
              background: 'radial-gradient(circle, #06B6D4, transparent 70%)',
              animation: 'meshMove 30s ease-in-out infinite reverse',
            }}
          />
          <div
            className="absolute bottom-[-10%] left-[30%] w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[100px]"
            style={{
              background: 'radial-gradient(circle, #14B8A6, transparent 70%)',
              animation: 'meshMove 22s ease-in-out infinite 5s',
            }}
          />
          <div
            className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[80px]"
            style={{
              background: 'radial-gradient(circle, #F59E0B, transparent 70%)',
              animation: 'meshMove 28s ease-in-out infinite 10s',
            }}
          />

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px)`,
              backgroundSize: "60px 60px"
            }}
          />

          {/* Noise texture */}
          <div className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <Navbar />
        <main className="min-h-screen relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
