import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
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
      <body className="bg-bg text-primary antialiased">{children}</body>
    </html>
  );
}
