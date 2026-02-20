import { useState } from "react";
import SectionLabel from "./SectionLabel";
import AnimateIn from "./AnimateIn";

const agents = [
  {
    id: "data",
    name: "Data Intelligence",
    description: "Structures candidate data and removes inconsistencies.",
    impact: "Clean pipelines and improved screening accuracy.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    id: "screening",
    name: "Screening Intelligence",
    description: "Analyzes context, skill depth, and experience progression.",
    impact: "Faster and higher quality shortlisting.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
  },
  {
    id: "matching",
    name: "Matching & Ranking",
    description: "Applies skills first and blind scoring logic.",
    impact: "Objective and defensible ranking.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    id: "communication",
    name: "Communication",
    description: "Engages candidates and schedules interviews automatically.",
    impact: "Lower drop offs and consistent experience.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    id: "workflow",
    name: "Workflow Automation",
    description: "Moves candidates across stages autonomously.",
    impact: "Eliminates coordination delays.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: "interview",
    name: "AI Interview",
    description: "Conducts structured voice, video, and technical interviews.",
    impact: "Scalable and bias controlled evaluation.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25z" />
      </svg>
    ),
  },
  {
    id: "recruiter",
    name: "Recruiter Support",
    description: "Generates job descriptions and dashboards.",
    impact: "Recruiters focus on strategic alignment.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    id: "talent",
    name: "Talent Insight",
    description: "Predicts hiring demand and tracks talent trends.",
    impact: "Proactive workforce planning.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function AIAgents() {
  const [activeAgent, setActiveAgent] = useState<string | null>(null);
  const active = agents.find((a) => a.id === activeAgent);

  return (
    <section id="agents" className="w-full flex flex-col items-center bg-[#0a0a1a] relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_#2563eb08_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative w-full max-w-[1440px] px-6 md:px-16 py-24 md:py-40">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-24">
          <AnimateIn>
            <SectionLabel text="Architecture" variant="dark" />
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <h2
              className="font-['Inter',sans-serif] text-[32px] md:text-[48px] text-white tracking-[-2px] md:tracking-[-2.5px] leading-[0.95] max-w-[800px]"
              style={{ fontWeight: 800 }}
            >
              Eight AI Agents Operating as One Recruitment Brain
            </h2>
          </AnimateIn>
        </div>

        {/* Agent card grid + detail panel */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Cards */}
          <div className="lg:flex-1">
            <AnimateIn delay={0.1}>
              {/* Center orchestrator callout */}
              <div className="flex items-center justify-center gap-3 mb-8 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center shrink-0"
                  style={{ boxShadow: "0 0 20px -4px rgba(37,99,235,0.4)" }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <div>
                  <p className="font-['Inter',sans-serif] text-[14px] text-white tracking-[-0.2px]" style={{ fontWeight: 600 }}>
                    Hyrra Orchestrator
                  </p>
                  <p className="font-['Roboto_Mono',monospace] text-[10px] text-white/40 tracking-[0.5px]" style={{ fontWeight: 400 }}>
                    Agent coordination · Workflow progression · Compliance logic · Audit visibility
                  </p>
                </div>
              </div>

              {/* Agent grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {agents.map((agent) => (
                  <button
                    key={agent.id}
                    className={`flex flex-col items-center gap-3 p-4 md:p-5 rounded-xl cursor-pointer transition-all text-center ${
                      activeAgent === agent.id
                        ? "bg-[#2563eb]/10 border border-[#2563eb]/25 shadow-[0_0_24px_-6px_rgba(37,99,235,0.2)]"
                        : "bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1]"
                    }`}
                    onClick={() => setActiveAgent(activeAgent === agent.id ? null : agent.id)}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        activeAgent === agent.id
                          ? "bg-[#2563eb] text-white"
                          : "bg-white/[0.04] text-[#60a5fa]"
                      }`}
                    >
                      {agent.icon}
                    </div>
                    <span
                      className={`font-['Inter',sans-serif] text-[11px] md:text-[12px] tracking-[-0.1px] leading-[1.3] transition-colors ${
                        activeAgent === agent.id ? "text-white" : "text-white/50"
                      }`}
                      style={{ fontWeight: 500 }}
                    >
                      {agent.name}
                    </span>
                  </button>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Detail panel */}
          <AnimateIn delay={0.2} direction="right" className="lg:w-[380px] shrink-0">
            <div className="sticky top-32">
              {active ? (
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#2563eb]/10 flex items-center justify-center text-[#60a5fa]">
                      {active.icon}
                    </div>
                    <h3
                      className="font-['Inter',sans-serif] text-[20px] text-white tracking-[-0.5px]"
                      style={{ fontWeight: 700 }}
                    >
                      {active.name}
                    </h3>
                  </div>
                  <p
                    className="font-['Inter',sans-serif] text-[15px] text-white/60 tracking-[-0.1px] leading-[1.7] mb-6"
                    style={{ fontWeight: 400 }}
                  >
                    {active.description}
                  </p>
                  <div className="border-t border-white/[0.06] pt-6">
                    <p
                      className="font-['Roboto_Mono',monospace] text-[10px] text-[#60a5fa] tracking-[1px] uppercase mb-2"
                      style={{ fontWeight: 500 }}
                    >
                      Business Impact
                    </p>
                    <p
                      className="font-['Inter',sans-serif] text-[15px] text-white/80 tracking-[-0.1px] leading-[1.6]"
                      style={{ fontWeight: 500 }}
                    >
                      {active.impact}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-white/[0.02] border border-dashed border-white/[0.06] rounded-2xl p-8 flex flex-col items-center justify-center min-h-[260px]">
                  <svg className="w-8 h-8 text-white/10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                  </svg>
                  <p
                    className="font-['Inter',sans-serif] text-[13px] text-white/25 tracking-[-0.1px] text-center leading-[1.6]"
                    style={{ fontWeight: 400 }}
                  >
                    Select an agent to explore its capabilities and business impact.
                  </p>
                </div>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
