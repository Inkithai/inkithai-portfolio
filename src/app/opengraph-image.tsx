import { ImageResponse } from "next/og";
import { personal } from "@/data/content";

export const alt = "Inkithai Meiyalagan — Full Stack & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview card, rendered from the same tokens as the site
 * (charcoal #0B0D10 surfaces, #252B34 hairlines, electric blue #3B82F6 accent).
 * Satori only supports flexbox + a CSS subset, so the layout stays simple.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0B0D10",
          backgroundImage: "linear-gradient(140deg, #12161C 0%, #0B0D10 62%)",
          padding: 44,
        }}
      >
        {/* Blue halo, top-right */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -160,
            width: 620,
            height: 620,
            display: "flex",
            borderRadius: 620,
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.30) 0%, rgba(59,130,246,0) 70%)",
          }}
        />

        {/* Inner frame */}
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid #252B34",
            borderRadius: 24,
            padding: "64px 72px",
          }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: 30, height: 2, background: "#3B82F6", display: "flex" }} />
            <div
              style={{
                display: "flex",
                marginLeft: 14,
                fontSize: 21,
                letterSpacing: 5,
                color: "#7D8590",
              }}
            >
              FULL-STACK SOFTWARE ENGINEER
            </div>
          </div>

          {/* Identity */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 78,
                fontWeight: 700,
                letterSpacing: -2.5,
                lineHeight: 1.05,
                color: "#F5F7FA",
              }}
            >
              {personal.name}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 18,
                fontSize: 34,
                fontWeight: 600,
                color: "#3B82F6",
              }}
            >
              {personal.title}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 26,
                fontSize: 27,
                lineHeight: 1.5,
                color: "#8B949E",
                maxWidth: 820,
              }}
            >
              AI-powered products, scalable backends, and modern frontends — from
              prototype to production.
            </div>
          </div>

          {/* Meta row */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", fontSize: 22, color: "#7D8590" }}>
              {personal.location}
            </div>
            <div style={{ display: "flex", margin: "0 14px", fontSize: 22, color: "#323A45" }}>
              ·
            </div>
            <div style={{ display: "flex", fontSize: 22, color: "#7D8590" }}>
              {personal.email}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
