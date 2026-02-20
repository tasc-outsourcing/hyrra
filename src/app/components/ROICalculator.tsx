import { useState, useMemo, useRef, useEffect } from "react";
import SectionLabel from "./SectionLabel";
import AnimateIn from "./AnimateIn";

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [displayed, setDisplayed] = useState(0);
  const prevRef = useRef(0);

  useEffect(() => {
    const start = prevRef.current;
    const diff = value - start;
    const duration = 600;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(start + diff * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        prevRef.current = value;
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return (
    <span>
      {prefix}
      {displayed.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function ROICalculator() {
  const [hires, setHires] = useState(500);
  const [recruiters, setRecruiters] = useState(10);
  const [recruiterCost, setRecruiterCost] = useState(60000);
  const [costPerHire, setCostPerHire] = useState(4000);

  const results = useMemo(() => {
    const currentRecruiterCost = recruiters * recruiterCost;
    const currentHiringSpend = hires * costPerHire;
    const totalCurrentCost = currentRecruiterCost + currentHiringSpend;

    const projectedCostPerHire = Math.round(costPerHire * 0.7);
    const projectedHiringSpend = hires * projectedCostPerHire;
    const projectedRecruiterEffort = Math.round(currentRecruiterCost * 0.4);
    const totalProjectedCost = projectedRecruiterEffort + projectedHiringSpend;

    const annualSavings = totalCurrentCost - totalProjectedCost;
    const recruiterCapacityFreed = Math.round(recruiters * 0.6);

    return {
      annualSavings,
      recruiterCapacityFreed,
      projectedCostPerHire,
    };
  }, [hires, recruiters, recruiterCost, costPerHire]);

  const inputFields = [
    { label: "Number of hires per year", value: hires, setter: setHires },
    { label: "Number of recruiters", value: recruiters, setter: setRecruiters },
    { label: "Average recruiter annual cost (USD)", value: recruiterCost, setter: setRecruiterCost },
    { label: "Average cost per hire (USD)", value: costPerHire, setter: setCostPerHire },
  ];

  return (
    <section id="calculator" className="w-full flex flex-col items-center bg-[#fafbfc] relative overflow-hidden">
      <div className="relative w-full max-w-[1440px] px-6 md:px-16 py-24 md:py-40">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24">
          <AnimateIn>
            <SectionLabel text="ROI Calculator" />
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <h2
              className="font-['Inter',sans-serif] text-[32px] md:text-[48px] text-[#0a0a1a] tracking-[-2px] md:tracking-[-2.5px] leading-[0.95]"
              style={{ fontWeight: 800 }}
            >
              Model Your Hiring Cost Reduction
            </h2>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.1}>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Inputs */}
            <div className="lg:flex-1 flex flex-col gap-6">
              {inputFields.map((field) => (
                <div key={field.label} className="flex flex-col gap-2">
                  <label
                    className="font-['Roboto_Mono',monospace] text-[10px] text-[#9ca3af] tracking-[1px] uppercase"
                    style={{ fontWeight: 500 }}
                  >
                    {field.label}
                  </label>
                  <input
                    type="number"
                    value={field.value}
                    onChange={(e) => field.setter(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full px-5 py-4 rounded-xl border border-[#e5e7eb] bg-white font-['Inter',sans-serif] text-[16px] text-[#0a0a1a] tracking-[-0.2px] focus:outline-none focus:border-[#2563eb]/40 focus:ring-3 focus:ring-[#2563eb]/8 transition-all"
                    style={{ fontWeight: 600 }}
                  />
                </div>
              ))}
            </div>

            {/* Results */}
            <div className="lg:flex-1 flex flex-col gap-6">
              {/* Big savings */}
              <div className="bg-[#0a0a1a] rounded-2xl p-8 md:p-10 flex flex-col gap-3">
                <p
                  className="font-['Roboto_Mono',monospace] text-[10px] text-white/40 tracking-[1px] uppercase"
                  style={{ fontWeight: 500 }}
                >
                  Projected Annual Savings
                </p>
                <p
                  className="font-['Inter',sans-serif] text-[40px] md:text-[56px] text-white tracking-[-3px] leading-none"
                  style={{ fontWeight: 800 }}
                >
                  <AnimatedNumber value={results.annualSavings} prefix="$" />
                </p>
              </div>

              {/* Sub metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl border border-[#e5e7eb] p-6 flex flex-col gap-2">
                  <p
                    className="font-['Roboto_Mono',monospace] text-[9px] text-[#9ca3af] tracking-[1px] uppercase"
                    style={{ fontWeight: 500 }}
                  >
                    Recruiters Freed
                  </p>
                  <p
                    className="font-['Inter',sans-serif] text-[32px] text-[#2563eb] tracking-[-2px] leading-none"
                    style={{ fontWeight: 800 }}
                  >
                    ~<AnimatedNumber value={results.recruiterCapacityFreed} />
                  </p>
                </div>
                <div className="bg-white rounded-xl border border-[#e5e7eb] p-6 flex flex-col gap-2">
                  <p
                    className="font-['Roboto_Mono',monospace] text-[9px] text-[#9ca3af] tracking-[1px] uppercase"
                    style={{ fontWeight: 500 }}
                  >
                    New Cost Per Hire
                  </p>
                  <p
                    className="font-['Inter',sans-serif] text-[32px] text-[#2563eb] tracking-[-2px] leading-none"
                    style={{ fontWeight: 800 }}
                  >
                    <AnimatedNumber value={results.projectedCostPerHire} prefix="$" />
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#demo"
                  className="bg-[#2563eb] cursor-pointer flex items-center justify-center px-6 py-3.5 rounded-lg hover:bg-[#1d4ed8] transition-all hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]"
                >
                  <span
                    className="font-['Inter',sans-serif] text-[13px] text-white tracking-[-0.1px]"
                    style={{ fontWeight: 600 }}
                  >
                    Calculate My ROI Now
                  </span>
                </a>
                <a
                  href="#demo"
                  className="bg-white cursor-pointer flex items-center justify-center px-6 py-3.5 rounded-lg border border-[#e5e7eb] hover:border-[#2563eb]/30 transition-all"
                >
                  <span
                    className="font-['Inter',sans-serif] text-[13px] text-[#374151] tracking-[-0.1px]"
                    style={{ fontWeight: 600 }}
                  >
                    Request Custom Enterprise Model
                  </span>
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
