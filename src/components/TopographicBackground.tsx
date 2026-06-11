"use client";

import { useEffect, useRef, useState } from "react";

const CONFIG = {
  cols: 48,
  levels: 10,
  lineColor: "rgba(20,20,20,0.08)",
  lineWidth: 1,
  highlightColor: "rgba(20,20,20,0.10)",
  highlightWidth: 1.2,
  mouseRadius: 180,
  maxDistortion: 8,
  elevationRadius: 220,
  maxElevationBoost: 0.12,
  highlightRadius: 160,
  ease: 0.04,
  elevationEase: 0.05,
};

const MOBILE_CONFIG = {
  cols: 24,
  levels: 7,
  lineColor: "rgba(20,20,20,0.065)",
  lineWidth: 0.75,
  highlightColor: "rgba(20,20,20,0.08)",
  highlightWidth: 0.95,
  mouseRadius: 120,
  maxDistortion: 4,
  elevationRadius: 140,
  maxElevationBoost: 0.06,
  highlightRadius: 100,
  ease: 0.04,
  elevationEase: 0.05,
};

function noise(nx: number, ny: number, isMobile: boolean): number {
  if (isMobile) {
    // Mobile/tablet configuration:
    // Scale and position adjustment to prevent crowdedness, awkward cropping, and ensure text readability.
    // Decrease the frequency by scaling nx and ny down (so waves are larger).
    const x = nx * 2.4;
    const y = ny * 2.8;

    // Shift the center of the radial flat area slightly up to align with center-aligned hero typography
    const dx = nx - 0.5;
    const dy = ny - 0.48;

    // Make the central readability corridor wide and smooth:
    // dx * dx * 1.8 + dy * dy * 0.9 shapes it as a vertical ellipse, preserving readability of center text.
    const distFromCenter = Math.sqrt(dx * dx * 1.8 + dy * dy * 0.9);
    
    // Increased edgeBoost steepness to ensure lines build up beautifully towards the screen edges without cluttering the center.
    const edgeBoost = 0.32 + distFromCenter * 1.5;

    return (
      (
        Math.sin(x * 1.1 + y * 0.9) * 0.5 +
        Math.sin(x * 0.7 - y * 1.4) * 0.25 +
        Math.sin(x * 2.3 + y * 1.7) * 0.125 +
        0.5
      ) * edgeBoost
    );
  }

  // Desktop configuration (unchanged)
  const x = nx * 4.0;
  const y = ny * 4.0;
  // Radial amplitude: flatter in center, more detail at edges
  const distFromCenter = Math.sqrt((nx - 0.5) ** 2 + (ny - 0.5) ** 2);
  const edgeBoost = 0.35 + distFromCenter * 1.3; // 0.35 at center, ~1.0 at edges

  return (
    (
      Math.sin(x * 1.1 + y * 0.9) * 0.5 +
      Math.sin(x * 0.7 - y * 1.4) * 0.25 +
      Math.sin(x * 2.3 + y * 1.7) * 0.125 +
      0.5
    ) * edgeBoost
  );
}

interface GridPoint {
  ox: number;
  oy: number;
  x: number;
  y: number;
  e: number;
  de: number;
  targetDe: number;
}

export default function TopographicBackground() {
  const pathRef = useRef<SVGPathElement>(null);
  const highlightRef = useRef<SVGPathElement>(null);
  const gridRef = useRef<GridPoint[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const rafRef = useRef(0);
  const dimsRef = useRef({ w: 0, h: 0, rows: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activeConfig = isMobile ? MOBILE_CONFIG : CONFIG;

  useEffect(() => {
    function initGrid() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cols = activeConfig.cols;
      const rows = Math.max(1, Math.round(cols * (h / w)));
      const cellW = w / cols;
      const cellH = h / rows;

      dimsRef.current = { w, h, rows };

      const grid: GridPoint[] = [];
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const nx = c / cols;
          const ny = r / rows;
          const x = c * cellW;
          const y = r * cellH;
          grid.push({
            ox: x,
            oy: y,
            x,
            y,
            e: noise(nx, ny, isMobile),
            de: 0,
            targetDe: 0,
          });
        }
      }
      gridRef.current = grid;
    }

    function lerp(a: number, b: number, t: number): number {
      return a + (b - a) * t;
    }

    function getEdgePoint(
      p1: GridPoint,
      p2: GridPoint,
      threshold: number
    ): [number, number] {
      const v1 = p1.e + p1.de;
      const v2 = p2.e + p2.de;
      const t = (threshold - v1) / (v2 - v1 + 0.00001);
      return [lerp(p1.x, p2.x, t), lerp(p1.y, p2.y, t)];
    }

    function resolveEdges(
      caseIdx: number,
      avgElevation: number,
      threshold: number
    ): number[] {
      const table: Record<number, number[]> = {
        1: [0, 3],
        2: [2, 3],
        3: [0, 2],
        4: [1, 2],
        6: [1, 3],
        7: [0, 1],
        8: [0, 1],
        9: [1, 3],
        11: [1, 2],
        12: [0, 2],
        13: [2, 3],
        14: [0, 3],
      };

      if (caseIdx === 5) return avgElevation > threshold ? [1, 3] : [0, 2];
      if (caseIdx === 10) return avgElevation > threshold ? [0, 3] : [1, 2];
      return table[caseIdx] || [];
    }

    function draw() {
      const { rows } = dimsRef.current;
      const grid = gridRef.current;
      const cols = activeConfig.cols;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const active = mouseRef.current.active;

      if (active) {
        for (let i = 0; i < grid.length; i++) {
          const p = grid[i];
          const dx = p.ox - mx;
          const dy = p.oy - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < activeConfig.elevationRadius) {
            const force = 1 - dist / activeConfig.elevationRadius;
            p.targetDe = force * force * activeConfig.maxElevationBoost;
          } else {
            p.targetDe = 0;
          }
        }
      } else {
        for (let i = 0; i < grid.length; i++) {
          grid[i].targetDe = 0;
        }
      }

      for (let i = 0; i < grid.length; i++) {
        const p = grid[i];
        p.de += (p.targetDe - p.de) * activeConfig.elevationEase;

        let tx = p.ox;
        let ty = p.oy;

        if (active) {
          const dx = p.ox - mx;
          const dy = p.oy - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < activeConfig.mouseRadius) {
            const force = 1 - dist / activeConfig.mouseRadius;
            const eased = force * force;
            const displacement = eased * activeConfig.maxDistortion;
            const angle = Math.atan2(dy, dx);
            tx += Math.cos(angle) * displacement;
            ty += Math.sin(angle) * displacement;
          }
        }

        p.x += (tx - p.x) * activeConfig.ease;
        p.y += (ty - p.y) * activeConfig.ease;
      }

      let d = "";
      let highlightD = "";
      const step = 1 / activeConfig.levels;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = r * (cols + 1) + c;
          const tl = grid[idx];
          const tr = grid[idx + 1];
          const br = grid[idx + 1 + (cols + 1)];
          const bl = grid[idx + (cols + 1)];

          const avg =
            (tl.e + tl.de + tr.e + tr.de + br.e + br.de + bl.e + bl.de) / 4;

          for (let l = 0; l < activeConfig.levels; l++) {
            const threshold = (l + 0.5) * step;

            const caseIdx =
              (tl.e + tl.de > threshold ? 8 : 0) +
              (tr.e + tr.de > threshold ? 4 : 0) +
              (br.e + br.de > threshold ? 2 : 0) +
              (bl.e + bl.de > threshold ? 1 : 0);

            if (caseIdx === 0 || caseIdx === 15) continue;

            const edges = resolveEdges(caseIdx, avg, threshold);
            if (edges.length < 2) continue;

            const get = (e: number): [number, number] => {
              switch (e) {
                case 0:
                  return getEdgePoint(tl, bl, threshold);
                case 1:
                  return getEdgePoint(tl, tr, threshold);
                case 2:
                  return getEdgePoint(tr, br, threshold);
                case 3:
                  return getEdgePoint(bl, br, threshold);
                default:
                  return [0, 0];
              }
            };

            const p1 = get(edges[0]);
            const p2 = get(edges[1]);
            const seg = `M${p1[0].toFixed(1)},${p1[1].toFixed(1)}L${p2[0].toFixed(
              1
            )},${p2[1].toFixed(1)}`;
            d += seg;

            if (active) {
              const midX = (p1[0] + p2[0]) * 0.5;
              const midY = (p1[1] + p2[1]) * 0.5;
              const dist = Math.sqrt((midX - mx) ** 2 + (midY - my) ** 2);
              if (dist < activeConfig.highlightRadius) {
                highlightD += seg;
              }
            }

            if (edges.length === 4) {
              const p3 = get(edges[2]);
              const p4 = get(edges[3]);
              const seg2 = `M${p3[0].toFixed(1)},${p3[1].toFixed(1)}L${p4[0].toFixed(
                1
              )},${p4[1].toFixed(1)}`;
              d += seg2;

              if (active) {
                const midX = (p3[0] + p4[0]) * 0.5;
                const midY = (p3[1] + p4[1]) * 0.5;
                const dist = Math.sqrt((midX - mx) ** 2 + (midY - my) ** 2);
                if (dist < activeConfig.highlightRadius) {
                  highlightD += seg2;
                }
              }
            }
          }
        }
      }

      const path = pathRef.current;
      if (path) path.setAttribute("d", d);

      const highlight = highlightRef.current;
      if (highlight) highlight.setAttribute("d", highlightD);

      rafRef.current = requestAnimationFrame(draw);
    }

    initGrid();
    rafRef.current = requestAnimationFrame(draw);

    const onResize = () => initGrid();
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  // activeConfig changes when isMobile changes, which triggers this effect correctly
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <svg
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        backgroundColor: "#FDFCFA",
        opacity: isMobile ? 0.92 : 1,
      }}
    >
      <path
        ref={pathRef}
        fill="none"
        stroke={activeConfig.lineColor}
        strokeWidth={activeConfig.lineWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        shapeRendering="geometricPrecision"
      />
      <path
        ref={highlightRef}
        fill="none"
        stroke={activeConfig.highlightColor}
        strokeWidth={activeConfig.highlightWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        shapeRendering="geometricPrecision"
      />
    </svg>
  );
}
