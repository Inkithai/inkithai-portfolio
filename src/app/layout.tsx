import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/data/content";

/* Self-hosted variable fonts (no external requests) */
const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const jetbrainsMono = localFont({
  src: "../../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: "100 800",
});

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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-primary antialiased">
        <Navbar />
        <main className="min-h-screen relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
