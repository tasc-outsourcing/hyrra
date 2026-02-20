import SectionLabel from "./SectionLabel";
import AnimateIn from "./AnimateIn";

const challenges = [
  "Visa cycles",
  "Saudization mandates",
  "Localization audits",
  "Offer drop offs",
  "Multi stakeholder approvals",
  "Seasonal hiring surges",
];

export default function GCCComplexity() {
  return (
    <section
      id="how-it-works"
      className="w-full flex flex-col items-center bg-[#fafbfc] relative overflow-hidden"
    >
      <div className="relative w-full max-w-[1440px] px-6 md:px-16 py-24 md:py-40">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 max-w-[720px] mx-auto mb-16 md:mb-24">
          <AnimateIn>
            <SectionLabel text="The Problem" />
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <h2
              className="font-['Inter',sans-serif] text-[32px] md:text-[48px] text-[#0a0a1a] tracking-[-2px] md:tracking-[-2.5px] leading-[0.95]"
              style={{ fontWeight: 800 }}
            >
              Recruitment in GCC Is Operationally Complex
            </h2>
          </AnimateIn>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-[800px] mx-auto">
          {challenges.map((challenge, index) => (
            <AnimateIn key={challenge} delay={0.08 * index + 0.1}>
              <div className="group px-6 py-3.5 md:px-8 md:py-4 rounded-full border border-[#e5e7eb] bg-white hover:border-[#2563eb]/30 hover:shadow-[0_4px_20px_-6px_rgba(37,99,235,0.12)] transition-all cursor-default">
                <span
                  className="font-['Inter',sans-serif] text-[14px] md:text-[15px] text-[#374151] tracking-[-0.2px] group-hover:text-[#2563eb] transition-colors"
                  style={{ fontWeight: 500 }}
                >
                  {challenge}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom statement */}
        <AnimateIn delay={0.15}>
          <div className="flex flex-col items-center text-center gap-3 mt-16 md:mt-24 max-w-[560px] mx-auto">
            <p
              className="font-['Inter',sans-serif] text-[16px] text-[#9ca3af] tracking-[-0.1px] leading-[1.6]"
              style={{ fontWeight: 400 }}
            >
              Global hiring platforms optimize for averages.
            </p>
            <p
              className="font-['Inter',sans-serif] text-[20px] md:text-[24px] text-[#0a0a1a] tracking-[-0.8px] leading-[1.15]"
              style={{ fontWeight: 700 }}
            >
              Hyrra was built inside regional realities.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}