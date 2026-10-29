import type { Metadata } from "next";

// Self-hosted type — display / grotesque / hand / mono
import "@fontsource/anton/400.css";
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/500.css";
import "@fontsource/archivo/600.css";
import "@fontsource/archivo/700.css";
import "@fontsource/archivo/800.css";
import "@fontsource/caveat/600.css";
import "@fontsource/caveat/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";

import "./concept.css";

export const metadata: Metadata = {
  title: "Archival Press — Design Direction",
  description:
    "A design-direction prototype for Inkithai Meiyalagan: cream paper, condensed display type, and a technical archive rendered as a physical dossier.",
  robots: { index: false, follow: false },
};

export default function ConceptLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="ap">{children}</div>;
}
