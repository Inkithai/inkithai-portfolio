"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

type CapabilityId =
  | "ai"
  | "fullstack"
  | "realtime"
  | "ml"
  | "ui"
  | "endtoend";

interface WebNode {
  id: string;
  title: string;
  subtitle: string;
  screenshot: string;
  badge: string;
  isLive?: boolean;
  isClient?: boolean;
  href: string;
  external: boolean;
  tech: [string, string];
  capabilities: CapabilityId[];
  /** Center position on the 1200 x 700 SVG coordinate stage */
  cx: number;
  cy: number;
  /** Pin coordinate where the SVG curve attaches to the card */
  pinX: number;
  pinY: number;
  /** Pin coordinate where the SVG curve leaves the central developer hub */
  hubX: number;
  hubY: number;
  /** Cubic Bezier path from hub -> card pin */
  path: string;
}

const CAPABILITIES: {
  id: CapabilityId;
  label: string;
}[] = [
  { id: "ai", label: "AI & LLM Pipelines" },
  { id: "fullstack", label: "Full-Stack + APIs" },
  { id: "realtime", label: "Voice & Real-Time" },
  { id: "ml", label: "ML & Data Systems" },
  { id: "ui", label: "Next.js Product UI" },
  { id: "endtoend", label: "Ships End-to-End" },
];

const WEB_NODES: WebNode[] = [
  {
    id: "eduflow",
    title: "EduFlow",
    subtitle: "AI LMS & Voice Q&A",
    screenshot: "/screenshots/EduFlow.png",
    badge: "Client Work",
    isClient: true,
    href: "https://www.mortgageaitoolkit.com/products/eduflow",
    external: true,
    tech: ["Next.js", "Gemini + TTS"],
    capabilities: ["ai", "fullstack", "realtime", "ui", "endtoend"],
    cx: 162,
    cy: 126,
    pinX: 277,
    pinY: 154,
    hubX: 522,
    hubY: 326,
    path: "M 522 326 C 442 292, 362 178, 277 154",
  },
  {
    id: "draftlee",
    title: "Draftlee",
    subtitle: "AI Inbox & Calendar",
    screenshot: "/screenshots/Draftlee.png",
    badge: "Client Work",
    isClient: true,
    href: "https://www.mortgageaitoolkit.com/products/draftlee",
    external: true,
    tech: ["Next.js 14", "Gemini 2.0"],
    capabilities: ["ai", "fullstack", "realtime", "ui", "endtoend"],
    cx: 600,
    cy: 102,
    pinX: 600,
    pinY: 175,
    hubX: 600,
    hubY: 278,
    path: "M 600 278 C 584 242, 616 210, 600 175",
  },
  {
    id: "oyster360",
    title: "Oyster360",
    subtitle: "Mushroom Farm SaaS",
    screenshot: "/screenshots/Oyster360.png",
    badge: "Full Stack",
    href: "https://github.com/Inkithai/Oyster360",
    external: true,
    tech: ["FastAPI", "Next.js 16"],
    capabilities: ["fullstack", "ui", "endtoend"],
    cx: 1038,
    cy: 126,
    pinX: 923,
    pinY: 154,
    hubX: 678,
    hubY: 326,
    path: "M 678 326 C 758 292, 838 178, 923 154",
  },
  {
    id: "medimind",
    title: "MediMind",
    subtitle: "Anonymous Medical AI",
    screenshot: "/screenshots/medimind.png",
    badge: "Live Demo",
    isLive: true,
    href: "https://medimind-murex-nu.vercel.app/",
    external: true,
    tech: ["FastAPI", "React + ML"],
    capabilities: ["ai", "ml", "fullstack", "endtoend"],
    cx: 144,
    cy: 378,
    pinX: 259,
    pinY: 378,
    hubX: 510,
    hubY: 382,
    path: "M 510 382 C 425 352, 345 408, 259 378",
  },
  {
    id: "routeiq",
    title: "RouteIQ",
    subtitle: "Transit Telemetry SaaS",
    screenshot: "/screenshots/RouteIQ.png",
    badge: "AI + Backend",
    href: "https://github.com/Inkithai/RouteIQ",
    external: true,
    tech: ["Node.js", "React"],
    capabilities: ["fullstack", "ml", "endtoend"],
    cx: 1056,
    cy: 378,
    pinX: 941,
    pinY: 378,
    hubX: 690,
    hubY: 382,
    path: "M 690 382 C 775 352, 855 408, 941 378",
  },
  {
    id: "ygc",
    title: "YGC",
    subtitle: "Medical Report AI",
    screenshot: "/screenshots/YGC.png",
    badge: "AI + ML",
    href: "https://github.com/Inkithai/YGC",
    external: true,
    tech: ["Python", "FastAPI"],
    capabilities: ["ai", "ml", "fullstack", "endtoend"],
    cx: 214,
    cy: 594,
    pinX: 329,
    pinY: 574,
    hubX: 524,
    hubY: 452,
    path: "M 524 452 C 460 515, 398 568, 329 574",
  },
  {
    id: "liya",
    title: "Liya",
    subtitle: "Kapruka MCP Assistant",
    screenshot: "/screenshots/Liya.png",
    badge: "Live Demo",
    isLive: true,
    href: "https://liya-ten.vercel.app/",
    external: true,
    tech: ["Next.js 15", "TypeScript"],
    capabilities: ["ai", "realtime", "ui", "endtoend"],
    cx: 986,
    cy: 594,
    pinX: 871,
    pinY: 574,
    hubX: 676,
    hubY: 452,
    path: "M 676 452 C 740 515, 802 568, 871 574",
  },
];

/** Subtle outer perimeter mesh arcs between adjacent nodes so the graph reads as a true net */
const PERIMETER_MESH: { from: string; to: string; d: string }[] = [
  { from: "eduflow", to: "draftlee", d: "M 277 154 Q 438 118 600 175" },
  { from: "draftlee", to: "oyster360", d: "M 600 175 Q 762 118 923 154" },
  { from: "eduflow", to: "medimind", d: "M 277 154 Q 238 266 259 378" },
  { from: "oyster360", to: "routeiq", d: "M 923 154 Q 962 266 941 378" },
  { from: "medimind", to: "ygc", d: "M 259 378 Q 272 482 329 574" },
  { from: "routeiq", to: "liya", d: "M 941 378 Q 928 482 871 574" },
  { from: "ygc", to: "liya", d: "M 329 574 Q 600 638 871 574" },
];

export function WhatIBringWebSection() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [activeCap, setActiveCap] = useState<CapabilityId | null>(null);
  const [hoveredCap, setHoveredCap] = useState<CapabilityId | null>(null);

  const effectiveCap = hoveredCap ?? activeCap;

  const isNodeHighlighted = (node: WebNode) => {
    if (hoveredNodeId) return node.id === hoveredNodeId;
    if (effectiveCap) return node.capabilities.includes(effectiveCap);
    return true;
  };

  const hasActiveFilter = Boolean(hoveredNodeId || effectiveCap);
  const activeCount = WEB_NODES.filter(isNodeHighlighted).length;

  return (
    <section id="what-i-bring" className="section-y relative">
      <div className="container-max section-padding">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7">
            <div className="label-eyebrow mb-5 flex items-center">
              <span className="eyebrow-bar" />
              <span>What I Bring</span>
            </div>
            <h2 className="heading-section max-w-[580px]">
              One engineer,{" "}
              <span className="text-accent text-gradient-blue">
                connected across the stack.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="body-default max-w-[440px]">
              Hover a product window or tap a capability below to trace how AI
              pipelines, backend APIs, and modern frontends connect across what
              I&apos;ve shipped.
            </p>
          </div>
        </div>

        {/* Main perforated net stage */}
        <div className="relative rounded-[24px] border border-border-subtle bg-bg-surface/90 overflow-hidden shadow-[0_28px_70px_-30px_rgba(0,0,0,0.85)]">
          {/* 7x7px halftone dot-mesh ("net") stage backdrop */}
          <div
            className="absolute inset-0 pointer-events-none bg-net-mesh mask-net-stage opacity-80"
            aria-hidden="true"
          />
          {/* Electric-blue tinted mesh glow around center hub */}
          <div
            className="absolute inset-0 pointer-events-none bg-net-mesh-blue opacity-70"
            style={{
              WebkitMaskImage:
                "radial-gradient(circle 340px at 50% 52%, #000 0%, transparent 82%)",
              maskImage:
                "radial-gradient(circle 340px at 50% 52%, #000 0%, transparent 82%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full opacity-[0.11] blur-[110px] pointer-events-none"
            style={{
              background: "radial-gradient(circle, #3B82F6, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* Top bar metadata */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-5 sm:px-7 py-3.5 border-b border-border-subtle/80 bg-bg/50 backdrop-blur-sm">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.85)]" />
              <span className="body-mono uppercase tracking-[0.16em] text-[10.5px] text-secondary">
                Systems Topology · Builder → Shipped Products
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="body-mono text-[11px] text-muted">
                <span className="text-accent font-semibold">{activeCount}</span>
                /{WEB_NODES.length} nodes active
              </span>
              {activeCap && (
                <button
                  type="button"
                  onClick={() => setActiveCap(null)}
                  className="body-mono text-[10.5px] text-accent hover:text-accent-soft transition-colors cursor-pointer"
                >
                  Reset ×
                </button>
              )}
            </div>
          </div>

          {/* ================================================================
              DESKTOP INTERACTIVE NODE-LINK WEB (lg+)
              Coordinate-locked 1200 x 700 SVG + percentage card anchors
          ================================================================ */}
          <div className="hidden lg:block relative w-full aspect-[1200/700] select-none">
            {/* SVG Connector Web Layer */}
            <svg
              viewBox="0 0 1200 700"
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              aria-hidden="true"
            >
              <defs>
                <filter
                  id="netGlow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <radialGradient id="hubHalo" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.28" />
                  <stop offset="65%" stopColor="#3B82F6" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Concentric radar / orbital net rings around central hub */}
              <circle cx="600" cy="382" r="185" fill="url(#hubHalo)" />
              <circle
                cx="600"
                cy="382"
                r="142"
                fill="none"
                stroke="rgba(96, 165, 250, 0.16)"
                strokeWidth="1"
                strokeDasharray="4 7"
              />
              <circle
                cx="600"
                cy="382"
                r="210"
                fill="none"
                stroke="rgba(139, 148, 158, 0.1)"
                strokeWidth="1"
              />

              {/* Subtle outer perimeter mesh threads connecting neighbor apps */}
              {PERIMETER_MESH.map((edge) => {
                const n1 = WEB_NODES.find((n) => n.id === edge.from)!;
                const n2 = WEB_NODES.find((n) => n.id === edge.to)!;
                const bothActive =
                  isNodeHighlighted(n1) && isNodeHighlighted(n2);
                return (
                  <path
                    key={`${edge.from}-${edge.to}`}
                    d={edge.d}
                    fill="none"
                    stroke={
                      bothActive && hasActiveFilter
                        ? "rgba(96, 165, 250, 0.34)"
                        : "rgba(139, 148, 158, 0.14)"
                    }
                    strokeWidth={bothActive && hasActiveFilter ? "1.35" : "1"}
                    strokeDasharray="3 7"
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Primary curved threads from central developer hub -> each shipped product */}
              {WEB_NODES.map((node) => {
                const active = isNodeHighlighted(node);
                const emphasized = active && hasActiveFilter;
                return (
                  <g key={node.id} className="transition-opacity duration-300">
                    {/* Base structural curve */}
                    <path
                      d={node.path}
                      fill="none"
                      stroke={
                        active
                          ? emphasized
                            ? "#60A5FA"
                            : "rgba(59, 130, 246, 0.58)"
                          : "rgba(139, 148, 158, 0.14)"
                      }
                      strokeWidth={emphasized ? "2.6" : active ? "1.9" : "1.2"}
                      strokeLinecap="round"
                      filter={emphasized ? "url(#netGlow)" : undefined}
                      className="transition-all duration-300"
                    />

                    {/* Animated signal flow pulse along active threads */}
                    {active && (
                      <path
                        d={node.path}
                        fill="none"
                        stroke="#93C5FD"
                        strokeWidth={emphasized ? "2.4" : "1.6"}
                        strokeLinecap="round"
                        strokeDasharray="8 32"
                        opacity={emphasized ? 0.95 : 0.65}
                        className="animate-net-flow"
                      />
                    )}

                    {/* Origin socket pin at central hub */}
                    <circle
                      cx={node.hubX}
                      cy={node.hubY}
                      r={emphasized ? 4.5 : 3.5}
                      fill={active ? "#3B82F6" : "#252B34"}
                      stroke="#0B0D10"
                      strokeWidth="1.5"
                    />

                    {/* Destination anchor pin at project card */}
                    <circle
                      cx={node.pinX}
                      cy={node.pinY}
                      r={emphasized ? 5.5 : 4.2}
                      fill={active ? "#60A5FA" : "#323A45"}
                      stroke="#0B0D10"
                      strokeWidth="1.8"
                      filter={active ? "url(#netGlow)" : undefined}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Central Developer Hub Card */}
            <div
              style={{
                left: `${(600 / 1200) * 100}%`,
                top: `${(382 / 700) * 100}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[15.2%] z-20"
            >
              {/* Spinning dashed ring */}
              <div
                className="absolute -inset-3.5 rounded-[24px] border border-dashed border-accent/35 pointer-events-none animate-orbit-spin"
                aria-hidden="true"
              />
              <div className="relative rounded-[18px] bg-[#0D1117]/95 border border-accent/50 p-2.5 shadow-[0_0_40px_-8px_rgba(59,130,246,0.45)] backdrop-blur-md">
                <div className="relative aspect-[4/4.3] rounded-[12px] overflow-hidden border border-border-subtle bg-bg-elevated">
                  <Image
                    src="/images/inkithai.jpg"
                    alt="Inkithai Meiyalagan"
                    width={360}
                    height={400}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent pt-8 pb-2 px-2.5">
                    <div className="font-mono text-[9.5px] tracking-wider text-accent-soft uppercase">
                      &lt;IM /&gt;
                    </div>
                    <div className="text-[12px] font-semibold text-primary leading-tight">
                      Inkithai M.
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between px-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-secondary">
                    Core Hub
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[9px] text-success">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-soft" />
                    Shipped
                  </span>
                </div>
              </div>
            </div>

            {/* 7 Connected Shipped Product Window Cards */}
            {WEB_NODES.map((node) => {
              const active = isNodeHighlighted(node);
              const isDirectHover = hoveredNodeId === node.id;
              return (
                <a
                  key={node.id}
                  href={node.href}
                  target={node.external ? "_blank" : undefined}
                  rel={node.external ? "noopener noreferrer" : undefined}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onFocus={() => setHoveredNodeId(node.id)}
                  onBlur={() => setHoveredNodeId(null)}
                  style={{
                    left: `${(node.cx / 1200) * 100}%`,
                    top: `${(node.cy / 700) * 100}%`,
                  }}
                  className={`group absolute -translate-x-1/2 -translate-y-1/2 w-[19.2%] rounded-[13px] bg-[#0E1319]/95 backdrop-blur-md border transition-all duration-300 overflow-hidden z-20 ${
                    isDirectHover
                      ? "border-accent scale-[1.04] z-30 shadow-[0_0_32px_-6px_rgba(59,130,246,0.55)]"
                      : active && hasActiveFilter
                      ? "border-accent/70 scale-[1.02] shadow-[0_0_24px_-8px_rgba(59,130,246,0.42)]"
                      : active
                      ? "border-border-strong/90 hover:border-accent/70 shadow-[0_18px_36px_-16px_rgba(0,0,0,0.85)]"
                      : "border-border-subtle/50 opacity-35 scale-[0.98]"
                  }`}
                >
                  {/* Mini window bar */}
                  <div className="flex items-center justify-between gap-1.5 px-2.5 py-1.5 border-b border-border-subtle/80 bg-bg/80">
                    <div className="flex items-center gap-1 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]/75 shrink-0" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]/75 shrink-0" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#28CA42]/75 shrink-0" />
                      <span className="ml-1 text-[11px] font-semibold text-primary truncate group-hover:text-accent-soft transition-colors">
                        {node.title}
                      </span>
                    </div>
                    <span
                      className={`font-mono text-[8.5px] px-1.5 py-0.5 rounded-full border shrink-0 ${
                        node.isClient
                          ? "border-accent/30 bg-accent/10 text-accent-soft"
                          : node.isLive
                          ? "border-success/30 bg-success/10 text-success"
                          : "border-border-subtle bg-bg-elevated text-muted"
                      }`}
                    >
                      {node.badge}
                    </span>
                  </div>

                  {/* Real Project Screenshot */}
                  <div className="relative aspect-[16/8.2] overflow-hidden bg-bg-elevated">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={node.screenshot}
                      alt={`${node.title} interface preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-1.5 left-2.5 right-2.5 flex items-center justify-between gap-2">
                      <span className="text-[10px] text-primary/90 font-medium truncate">
                        {node.subtitle}
                      </span>
                      {node.isClient || node.isLive ? (
                        <ExternalLink className="w-3 h-3 text-accent-soft shrink-0 opacity-80 group-hover:opacity-100" />
                      ) : (
                        <GithubIcon className="w-3 h-3 text-secondary shrink-0 opacity-80 group-hover:opacity-100" />
                      )}
                    </div>
                  </div>

                  {/* Tech micro-footer */}
                  <div className="px-2.5 py-1.5 flex items-center justify-between gap-1 bg-[#0B0E13]">
                    <div className="flex items-center gap-1 truncate">
                      {node.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[8.5px] text-secondary bg-bg-elevated/90 border border-border-subtle px-1.5 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-muted group-hover:text-accent transition-colors shrink-0" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* ================================================================
              MOBILE & TABLET CONNECTED HUB-AND-SPOKE LAYOUT (< lg)
          ================================================================ */}
          <div className="lg:hidden relative z-10 px-5 py-7 sm:px-7">
            {/* Compact central hub node */}
            <div className="relative mx-auto max-w-[270px] rounded-[16px] bg-[#0D1117]/95 border border-accent/45 p-3 shadow-[0_0_30px_-10px_rgba(59,130,246,0.45)] flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-[12px] overflow-hidden border border-border-subtle shrink-0">
                <Image
                  src="/images/inkithai.jpg"
                  alt="Inkithai Meiyalagan"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[10px] text-accent-soft uppercase tracking-wider">
                  &lt;IM /&gt; · Core Hub
                </div>
                <div className="text-[14px] font-semibold text-primary truncate">
                  Inkithai Meiyalagan
                </div>
                <div className="text-[11.5px] text-secondary">
                  7 connected builds ↓
                </div>
              </div>
            </div>

            {/* Vertical connector stem */}
            <div className="mx-auto w-px h-7 bg-gradient-to-b from-accent via-accent/60 to-accent/20 relative">
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(59,130,246,0.9)]" />
            </div>

            {/* Connected cards grid */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              {WEB_NODES.map((node) => {
                const active = isNodeHighlighted(node);
                return (
                  <a
                    key={node.id}
                    href={node.href}
                    target={node.external ? "_blank" : undefined}
                    rel={node.external ? "noopener noreferrer" : undefined}
                    className={`group relative rounded-[14px] bg-[#0E1319]/95 border overflow-hidden transition-all duration-300 ${
                      active && hasActiveFilter
                        ? "border-accent/80 shadow-[0_0_22px_-8px_rgba(59,130,246,0.45)]"
                        : active
                        ? "border-border-subtle hover:border-accent/60"
                        : "border-border-subtle/50 opacity-40"
                    }`}
                  >
                    <div className="flex items-center justify-between px-3 py-2 border-b border-border-subtle/80 bg-bg/70">
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            active
                              ? "bg-accent shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                              : "bg-border-strong"
                          }`}
                        />
                        <span className="text-[13px] font-semibold text-primary truncate">
                          {node.title}
                        </span>
                      </div>
                      <span className="font-mono text-[9.5px] text-muted shrink-0">
                        {node.badge}
                      </span>
                    </div>
                    <div className="relative aspect-[16/8.5] overflow-hidden bg-bg-elevated">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={node.screenshot}
                        alt={`${node.title} screenshot`}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <span className="absolute bottom-2 left-3 text-[11.5px] text-primary/90 font-medium">
                        {node.subtitle}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================================================================
              INTERACTIVE CAPABILITY PILLS (Bottom bar — inspired by .wa-props)
          ================================================================ */}
          <div className="relative z-20 px-5 sm:px-7 py-5 border-t border-border-subtle/80 bg-bg/65 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {CAPABILITIES.map((cap) => {
                const isSelected = activeCap === cap.id;
                const isHovered = hoveredCap === cap.id;
                const lit = isSelected || isHovered;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() =>
                      setActiveCap((prev) => (prev === cap.id ? null : cap.id))
                    }
                    onMouseEnter={() => setHoveredCap(cap.id)}
                    onMouseLeave={() => setHoveredCap(null)}
                    aria-pressed={isSelected}
                    className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.06em] border transition-all duration-200 cursor-pointer ${
                      lit
                        ? "bg-accent/15 border-accent text-primary shadow-[0_0_20px_-6px_rgba(59,130,246,0.55)] -translate-y-0.5"
                        : "bg-bg-elevated/70 border-border-subtle text-secondary hover:border-border-strong hover:text-primary"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        lit
                          ? "bg-accent-soft shadow-[0_0_8px_#60A5FA]"
                          : "bg-accent/75"
                      }`}
                    />
                    {cap.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3.5 border-t border-border-subtle/50 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                Click or hover any capability tag to isolate its connected builds
              </span>
              <Link
                href="/work"
                className="text-secondary hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                Explore full case studies <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
