import { useEffect, useRef } from "react";
import "../../styles/scroll-grid.css";

export default function ScrollGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const layerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let raf = 0;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      const total = Math.max(rect.height - viewH, 1);
      const progress = Math.min(Math.max((viewH - rect.top) / total, 0), 1);

      container.style.setProperty("--grid-opacity", String(Math.min(progress * 1.2, 1)));

      layerRefs.current.forEach((layer, index) => {
        const depth = (index + 1) / layerRefs.current.length;
        const drift = (progress - 0.5) * 90 * depth;
        const rotate = (progress - 0.5) * 6 * depth;
        const scale = 1 + depth * 0.03;
        layer.style.transform = `translate3d(${drift}px, ${drift * 0.6}px, 0) rotate(${rotate}deg) scale(${scale})`;
      });

      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="grid-container" aria-hidden="true">
      <div className="grid-sticky">
        <div className="grid" ref={containerRef}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="gridLayer"
              ref={(el) => {
                if (el) layerRefs.current[i] = el;
              }}
            >
              <div className="gridBlock" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
