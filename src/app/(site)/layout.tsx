import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Quiet ambient backdrop — charcoal base with restrained electric-blue halos */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#0B0D10]" />
        <div
          className="absolute top-[-15%] left-[-10%] w-[680px] h-[680px] rounded-full opacity-[0.08] blur-[140px] animate-aurora"
          style={{
            background: "radial-gradient(circle, #3B82F6, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-15%] right-[-10%] w-[560px] h-[560px] rounded-full opacity-[0.05] blur-[140px] animate-aurora-slow"
          style={{
            background: "radial-gradient(circle, #60A5FA, transparent 70%)",
          }}
        />

        {/* Faint blueprint grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 148, 158, 0.18) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(139, 148, 158, 0.18) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 75%)",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 75%)",
          }}
        />

        {/* Subtle tactile SVG fractal grain overlay */}
        <div className="absolute inset-0 bg-grain" />
      </div>
      <Navbar />
      <main className="min-h-screen relative z-0">{children}</main>
      <Footer />
    </>
  );
}
