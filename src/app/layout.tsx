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
      "https://medium.com/@inkithai",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-primary antialiased">
        {/* Quiet ambient backdrop — charcoal base with restrained electric-blue halos */}
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-[#0B0D10]" />
          <div
            className="absolute top-[-15%] left-[-10%] w-[680px] h-[680px] rounded-full opacity-[0.08] blur-[140px] animate-aurora"
            style={{ background: 'radial-gradient(circle, #3B82F6, transparent 70%)' }}
          />
          <div
            className="absolute bottom-[-15%] right-[-10%] w-[560px] h-[560px] rounded-full opacity-[0.05] blur-[140px] animate-aurora-slow"
            style={{ background: 'radial-gradient(circle, #60A5FA, transparent 70%)' }}
          />

          {/* Faint blueprint grid */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(139, 148, 158, 0.18) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(139, 148, 158, 0.18) 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
              WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 75%)",
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 75%)",
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
