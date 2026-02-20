import SectionLabel from "./SectionLabel";
import AnimateIn from "./AnimateIn";
import AIBrainNetwork from "./AIBrainNetwork";

const stats = [
  { value: "80%", label: "Reduction in recruiter workload" },
  { value: "40%", label: "Faster hiring cycles" },
  { value: "30–50%", label: "Lower hiring costs" },
];

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center relative overflow-hidden bg-white" id="demo">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Top gradient wash */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#eff6ff]/40 to-transparent pointer-events-none" />

      <div className="relative w-full max-w-[1440px] px-6 md:px-16 pt-8 md:pt-12 pb-16 md:pb-24">
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <AnimateIn>
              <SectionLabel text="AI Recruitment Engine" />
            </AnimateIn>

            <AnimateIn delay={0.05}>
              <h1
                className="font-['Inter',sans-serif] text-[36px] md:text-[52px] lg:text-[64px] text-[#0a0a1a] tracking-[-2.5px] md:tracking-[-3.5px] leading-[0.95]"
                style={{ fontWeight: 800 }}
              >
                The AI Recruitment Engine Built from Real Enterprise Hiring
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <p
                className="font-['Inter',sans-serif] text-[16px] md:text-[18px] text-[#6b7280] tracking-[-0.2px] leading-[1.7] max-w-[520px]"
                style={{ fontWeight: 400 }}
              >
                Autonomous recruitment infrastructure built inside live GCC hiring operations.
              </p>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn delay={0.15}>
              <div className="flex flex-wrap gap-8 md:gap-10 pt-2">
                {stats.map((stat) => (
                  <div key={stat.value} className="flex flex-col gap-1.5">
                    <p
                      className="font-['Inter',sans-serif] text-[32px] md:text-[40px] text-[#2563eb] tracking-[-2px] leading-none"
                      style={{ fontWeight: 800 }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="font-['Inter',sans-serif] text-[13px] text-[#9ca3af] tracking-[-0.1px] leading-[1.4] max-w-[140px]"
                      style={{ fontWeight: 500 }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn delay={0.2}>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#demo"
                  className="bg-[#2563eb] cursor-pointer flex items-center justify-center px-7 py-3.5 rounded-lg hover:bg-[#1d4ed8] transition-all hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]"
                >
                  <span
                    className="font-['Inter',sans-serif] text-[14px] text-white tracking-[-0.2px]"
                    style={{ fontWeight: 600 }}
                  >
                    Book Enterprise Demo
                  </span>
                </a>
                <a
                  href="#calculator"
                  className="bg-white cursor-pointer flex items-center justify-center px-7 py-3.5 rounded-lg border border-[#e5e7eb] hover:border-[#2563eb]/30 hover:bg-[#f8fafc] transition-all"
                >
                  <span
                    className="font-['Inter',sans-serif] text-[14px] text-[#374151] tracking-[-0.2px]"
                    style={{ fontWeight: 600 }}
                  >
                    See Cost Impact Now
                  </span>
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* Right column — AI Brain Network */}
          <AnimateIn delay={0.15} direction="scale" className="w-full">
            <div className="w-full h-[360px] md:h-[440px] lg:h-[520px]">
              <AIBrainNetwork />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}