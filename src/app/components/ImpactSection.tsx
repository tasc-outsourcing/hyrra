import SectionLabel from "./SectionLabel";
import AnimateIn from "./AnimateIn";

const metrics = [
  {
    value: "80",
    suffix: "%",
    label: "Reduction in manual recruiter workload",
    description: "AI agents handle sourcing, screening, scheduling, and progression autonomously.",
  },
  {
    value: "40",
    suffix: "%",
    label: "Faster hiring cycles",
    description: "Parallel agent execution compresses every stage of the recruitment pipeline.",
  },
  {
    value: "30–50",
    suffix: "%",
    label: "Lower hiring costs",
    description: "Reduced recruiter dependency, fewer drop-offs, and optimized cost per hire.",
  },
];

export default function ImpactSection() {
  return (
    <section className="w-full flex flex-col items-center bg-[#0a0a1a] relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, #2563eb 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Radial glow behind stats */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,_#2563eb06_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative w-full max-w-[1440px] px-6 md:px-16 py-24 md:py-40">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24">
          <AnimateIn>
            <SectionLabel text="Impact" variant="dark" />
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <h2
              className="font-['Inter',sans-serif] text-[32px] md:text-[48px] text-white tracking-[-2px] md:tracking-[-2.5px] leading-[0.95]"
              style={{ fontWeight: 800 }}
            >
              Measurable Enterprise Impact
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <p
              className="font-['Inter',sans-serif] text-[16px] text-white/40 tracking-[-0.1px] leading-[1.6] max-w-[480px]"
              style={{ fontWeight: 400 }}
            >
              Numbers derived from live enterprise recruitment operations across the GCC region.
            </p>
          </AnimateIn>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 max-w-[1080px] mx-auto">
          {metrics.map((metric, index) => (
            <AnimateIn key={metric.value} delay={0.1 + 0.08 * index}>
              <div
                className={`flex flex-col items-center text-center px-6 md:px-10 py-8 md:py-0 ${
                  index < metrics.length - 1
                    ? "md:border-r md:border-white/[0.06]"
                    : ""
                }`}
              >
                {/* Number */}
                <div className="flex items-baseline gap-0 whitespace-nowrap">
                  <span
                    className="font-['Inter',sans-serif] text-[64px] md:text-[80px] lg:text-[96px] text-white tracking-[-4px] md:tracking-[-6px] leading-none"
                    style={{ fontWeight: 900 }}
                  >
                    {metric.value}
                  </span>
                  <span
                    className="font-['Inter',sans-serif] text-[32px] md:text-[40px] text-[#2563eb] tracking-[-2px] leading-none"
                    style={{ fontWeight: 800 }}
                  >
                    {metric.suffix}
                  </span>
                </div>

                {/* Accent line */}
                <div className="w-8 h-[2px] bg-[#2563eb] rounded-full mt-5 mb-5" />

                {/* Label */}
                <p
                  className="font-['Inter',sans-serif] text-[15px] text-white/80 tracking-[-0.2px] leading-[1.3] mb-3"
                  style={{ fontWeight: 600 }}
                >
                  {metric.label}
                </p>

                {/* Description */}
                <p
                  className="font-['Inter',sans-serif] text-[13px] text-white/30 tracking-[-0.1px] leading-[1.6] max-w-[280px]"
                  style={{ fontWeight: 400 }}
                >
                  {metric.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom proof line */}
        <AnimateIn delay={0.35}>
          <div className="flex items-center justify-center gap-3 mt-20 md:mt-28">
            <div className="h-px w-8 bg-white/[0.08]" />
            <p
              className="font-['Roboto_Mono',monospace] text-[10px] text-white/20 tracking-[1.5px] uppercase"
              style={{ fontWeight: 500 }}
            >
              Modeled on live enterprise recruitment operations
            </p>
            <div className="h-px w-8 bg-white/[0.08]" />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}