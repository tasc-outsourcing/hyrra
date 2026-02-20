import { useEffect, useRef } from "react";

const agentNodes = [
  { label: "Data Intelligence", angle: -90 },
  { label: "Screening", angle: -45 },
  { label: "Matching", angle: 0 },
  { label: "Communication", angle: 45 },
  { label: "Workflow", angle: 90 },
  { label: "AI Interview", angle: 135 },
  { label: "Recruiter Support", angle: 180 },
  { label: "Talent Insight", angle: -135 },
];

export default function AIBrainNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let time = 0;

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.3;

      // Outer ring pulses
      for (let r = 0; r < 3; r++) {
        const ringR = radius + 24 + r * 20 + Math.sin(time * 0.6 + r) * 6;
        ctx.beginPath();
        ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(37, 99, 235, ${0.04 - r * 0.012})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Connections between adjacent nodes
      agentNodes.forEach((node, i) => {
        const nextNode = agentNodes[(i + 1) % agentNodes.length];
        const a1 = (node.angle * Math.PI) / 180;
        const a2 = (nextNode.angle * Math.PI) / 180;
        const x1 = cx + Math.cos(a1) * radius;
        const y1 = cy + Math.sin(a1) * radius;
        const x2 = cx + Math.cos(a2) * radius;
        const y2 = cy + Math.sin(a2) * radius;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(37, 99, 235, 0.05)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Spokes + particles + nodes
      agentNodes.forEach((node, i) => {
        const angle = (node.angle * Math.PI) / 180;
        const nx = cx + Math.cos(angle) * radius;
        const ny = cy + Math.sin(angle) * radius;

        // Spoke line
        const grad = ctx.createLinearGradient(cx, cy, nx, ny);
        grad.addColorStop(0, "rgba(37, 99, 235, 0.14)");
        grad.addColorStop(1, "rgba(37, 99, 235, 0.03)");
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Animated particle
        const t = ((time * 0.25 + i * 0.35) % 1);
        const px = cx + (nx - cx) * t;
        const py = cy + (ny - cy) * t;
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${0.6 - t * 0.4})`;
        ctx.fill();

        // Node glow
        const glowSize = 20 + Math.sin(time * 1.2 + i * 0.8) * 4;
        const glowGrad = ctx.createRadialGradient(nx, ny, 0, nx, ny, glowSize);
        glowGrad.addColorStop(0, "rgba(37, 99, 235, 0.1)");
        glowGrad.addColorStop(1, "rgba(37, 99, 235, 0)");
        ctx.beginPath();
        ctx.arc(nx, ny, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // Node circle
        const ns = 4.5 + Math.sin(time * 1.5 + i) * 0.8;
        ctx.beginPath();
        ctx.arc(nx, ny, ns, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(37, 99, 235, 0.65)";
        ctx.fill();

        // Node bright center
        ctx.beginPath();
        ctx.arc(nx, ny, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "#93c5fd";
        ctx.fill();
      });

      // Center orchestrator glow
      const cGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 44);
      cGlow.addColorStop(0, "rgba(37, 99, 235, 0.18)");
      cGlow.addColorStop(0.5, "rgba(37, 99, 235, 0.04)");
      cGlow.addColorStop(1, "rgba(37, 99, 235, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 44, 0, Math.PI * 2);
      ctx.fillStyle = cGlow;
      ctx.fill();

      // Center main dot
      const cp = 12 + Math.sin(time * 1.8) * 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, cp, 0, Math.PI * 2);
      ctx.fillStyle = "#2563eb";
      ctx.fill();

      // Center inner bright
      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#93c5fd";
      ctx.fill();

      time += 0.016;
      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
      {/* Labels */}
      <div className="absolute inset-0 pointer-events-none">
        {agentNodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const dist = 42;
          const left = 50 + Math.cos(rad) * dist;
          const top = 50 + Math.sin(rad) * dist;

          return (
            <div
              key={node.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <span
                className="font-['Roboto_Mono',monospace] text-[8px] md:text-[10px] text-[#6b7280] tracking-[0.5px] uppercase whitespace-nowrap"
                style={{ fontWeight: 500 }}
              >
                {node.label}
              </span>
            </div>
          );
        })}
        {/* Center label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-5">
          <span
            className="font-['Inter',sans-serif] text-[10px] md:text-[12px] text-[#2563eb] tracking-[-0.2px] whitespace-nowrap"
            style={{ fontWeight: 600 }}
          >
            Orchestrator
          </span>
        </div>
      </div>
    </div>
  );
}
