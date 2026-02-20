import SectionLabel from "./SectionLabel";
import AnimateIn from "./AnimateIn";

export default function HumanReinforcement() {
  return (
    <section className="w-full flex flex-col items-center bg-[#fafbfc]">
      <div className="w-full max-w-[1440px] px-6 md:px-16 py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div className="flex flex-col gap-8">
            <AnimateIn>
              <SectionLabel text="Human Reinforcement" />
            </AnimateIn>
            <AnimateIn delay={0.05}>
              <h2
                className="font-['Inter',sans-serif] text-[32px] md:text-[44px] text-[#0a0a1a] tracking-[-2px] leading-[0.95]"
                style={{ fontWeight: 800 }}
              >
                When complexity increases, Hyrra integrates with TASC recruiter network.
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="flex items-baseline gap-4 flex-wrap">
                <span
                  className="font-['Inter',sans-serif] text-[48px] md:text-[64px] text-[#2563eb] tracking-[-3px] leading-none"
                  style={{ fontWeight: 800 }}
                >
                  300+
                </span>
                <span
                  className="font-['Inter',sans-serif] text-[16px] text-[#6b7280] tracking-[-0.1px] leading-[1.5]"
                  style={{ fontWeight: 500 }}
                >
                  recruiters inside the same ecosystem
                </span>
              </div>
            </AnimateIn>
          </div>

          {/* Right — Visual */}
          <AnimateIn delay={0.15} direction="right" className="w-full">
            <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 md:p-12 relative overflow-hidden">
              <div className="flex flex-col items-center gap-6 relative z-10">
                {/* AI Engine node */}
                <div className="relative flex flex-col items-center">
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#2563eb] flex items-center justify-center"
                    style={{ boxShadow: "0 0 40px -8px rgba(37,99,235,0.3)" }}
                  >
                    <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                    </svg>
                  </div>
                  <span
                    className="mt-2 font-['Roboto_Mono',monospace] text-[9px] text-[#2563eb] tracking-[1px] uppercase"
                    style={{ fontWeight: 500 }}
                  >
                    AI Engine
                  </span>
                </div>

                {/* Connection line */}
                <div className="w-px h-8 bg-gradient-to-b from-[#2563eb]/30 to-[#e5e7eb]" />

                {/* Human recruiter nodes */}
                <div className="grid grid-cols-3 gap-x-6 gap-y-4 w-full max-w-[280px]">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div key={n} className="flex flex-col items-center gap-1.5">
                      <div
                        className="w-10 h-10 rounded-full bg-[#f3f4f6] border-2 border-white flex items-center justify-center"
                        style={{ boxShadow: "0 2px 8px -2px rgba(0,0,0,0.08)" }}
                      >
                        <svg className="w-4 h-4 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                      <span
                        className="font-['Roboto_Mono',monospace] text-[8px] text-[#d1d5db] tracking-[0.5px] uppercase"
                        style={{ fontWeight: 500 }}
                      >
                        Recruiter
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                  backgroundImage: "radial-gradient(#2563eb 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
