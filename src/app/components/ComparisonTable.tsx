import SectionLabel from "./SectionLabel";
import AnimateIn from "./AnimateIn";

const comparisonData = [
  { capability: "Hiring Model", traditional: "Recruiter driven workflow", hyrra: "Autonomous AI driven workflow" },
  { capability: "Role of AI", traditional: "Assists recruiters", hyrra: "Executes recruitment lifecycle" },
  { capability: "Sourcing", traditional: "Manual search or suggestions", hyrra: "Autonomous multi channel AI sourcing" },
  { capability: "Screening", traditional: "Keyword filtering", hyrra: "Contextual skill and behavior intelligence" },
  { capability: "Interviews", traditional: "Manual or third party tool", hyrra: "Built in AI voice, video, and technical interviews" },
  { capability: "Candidate Scoring", traditional: "Subjective rating", hyrra: "Structured bias controlled scoring" },
  { capability: "Workflow Movement", traditional: "Manual updates", hyrra: "AI auto progression across stages" },
  { capability: "GCC Compliance Logic", traditional: "Generic global rules", hyrra: "Visa cycles, Saudization, UAE labor logic embedded" },
  { capability: "Localization Readiness", traditional: "Not region specific", hyrra: "Built for GCC complexity" },
  { capability: "Human Escalation", traditional: "Software only", hyrra: "Integrated access to TASC recruiter network" },
  { capability: "High Volume Hiring", traditional: "Requires recruiter expansion", hyrra: "AI scales without increasing headcount" },
  { capability: "Ownership of Process", traditional: "Tool supports process", hyrra: "AI operates process end to end" },
  { capability: "Data Foundation", traditional: "Product usage data", hyrra: "Built on real enterprise hiring operations" },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none">
      <rect width="16" height="16" rx="4" fill="#2563eb" fillOpacity="0.1" />
      <path d="M4.5 8.2L6.8 10.2L11.5 5.8" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none">
      <rect width="16" height="16" rx="4" fill="#f3f4f6" />
      <line x1="5" y1="8" x2="11" y2="8" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ComparisonTable() {
  return (
    <section id="comparison" className="w-full flex flex-col items-center bg-white">
      <div className="w-full max-w-[1440px] px-6 md:px-16 py-24 md:py-40">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 pb-16 md:pb-24 text-center">
          <AnimateIn>
            <SectionLabel text="Comparison" />
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <h2
              className="font-['Inter',sans-serif] text-[32px] md:text-[48px] text-[#0a0a1a] tracking-[-2px] md:tracking-[-2.5px] leading-[0.95]"
              style={{ fontWeight: 800 }}
            >
              How Hyrra Is Structurally Different
            </h2>
          </AnimateIn>
        </div>

        {/* Table */}
        <AnimateIn delay={0.1}>
          <div className="w-full overflow-x-auto rounded-2xl border border-[#e5e7eb]">
            <table className="w-full min-w-[700px] border-collapse">
              {/* Header */}
              <thead>
                <tr className="bg-[#fafbfc]">
                  <th className="px-6 py-4 text-left border-b border-r border-[#e5e7eb] w-[28%]">
                    <span
                      className="font-['Roboto_Mono',monospace] text-[10px] text-[#9ca3af] tracking-[1px] uppercase"
                      style={{ fontWeight: 600 }}
                    >
                      Capability
                    </span>
                  </th>
                  <th className="px-6 py-4 text-left border-b border-r border-[#e5e7eb] w-[36%]">
                    <span
                      className="font-['Inter',sans-serif] text-[13px] text-[#9ca3af] tracking-[-0.1px]"
                      style={{ fontWeight: 500 }}
                    >
                      Traditional ATS
                    </span>
                  </th>
                  <th className="px-6 py-4 text-left border-b border-[#e5e7eb] bg-[#2563eb]/[0.03] w-[36%]">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-[#2563eb] flex items-center justify-center">
                        <span className="text-white text-[9px]" style={{ fontWeight: 800 }}>H</span>
                      </div>
                      <span
                        className="font-['Inter',sans-serif] text-[14px] text-[#2563eb] tracking-[-0.3px]"
                        style={{ fontWeight: 700 }}
                      >
                        Hyrra.ai
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              {/* Body */}
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.capability} className={i % 2 === 0 ? "bg-white" : "bg-[#fafbfc]/50"}>
                    <td className="px-6 py-4 border-r border-[#f3f4f6] align-middle">
                      <span
                        className="font-['Inter',sans-serif] text-[13px] text-[#0a0a1a] tracking-[-0.1px]"
                        style={{ fontWeight: 600 }}
                      >
                        {row.capability}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-r border-[#f3f4f6] align-middle">
                      <div className="flex items-center gap-3">
                        <MinusIcon />
                        <span
                          className="font-['Inter',sans-serif] text-[12px] text-[#9ca3af] tracking-[-0.1px] leading-[1.5]"
                          style={{ fontWeight: 400 }}
                        >
                          {row.traditional}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 bg-[#2563eb]/[0.02] align-middle">
                      <div className="flex items-center gap-3">
                        <CheckIcon />
                        <span
                          className="font-['Inter',sans-serif] text-[12px] text-[#0a0a1a] tracking-[-0.1px] leading-[1.5]"
                          style={{ fontWeight: 500 }}
                        >
                          {row.hyrra}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateIn>

        {/* Bottom */}
        <AnimateIn delay={0.2}>
          <p
            className="font-['Inter',sans-serif] text-[16px] md:text-[20px] text-[#0a0a1a] tracking-[-0.5px] leading-[1.3] text-center mt-16 md:mt-24"
            style={{ fontWeight: 700 }}
          >
            This is structural change, not feature improvement.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
