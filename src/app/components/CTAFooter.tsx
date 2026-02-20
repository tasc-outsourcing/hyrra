import hyrraLogo from "../../assets/Hyrra Logo final.png";
import AnimateIn from "./AnimateIn";

export default function CTAFooter() {
  return (
    <section className="w-full flex flex-col items-center bg-[#0a0a1a] relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,_#2563eb0a_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative w-full max-w-[1440px] px-6 md:px-16 py-24 md:py-40">
        {/* Main CTA */}
        <AnimateIn>
          <div className="flex flex-col items-center text-center gap-8 max-w-[720px] mx-auto">
            <h2
              className="font-['Inter',sans-serif] text-[36px] md:text-[56px] text-white tracking-[-2.5px] md:tracking-[-3px] leading-[0.95]"
              style={{ fontWeight: 800 }}
            >
              Build Autonomous Recruitment Infrastructure
            </h2>

            <div className="flex flex-col gap-2">
              <p
                className="font-['Inter',sans-serif] text-[16px] text-white/40 tracking-[-0.1px] leading-[1.6]"
                style={{ fontWeight: 400 }}
              >
                Continue managing hiring manually.
              </p>
              <p
                className="font-['Inter',sans-serif] text-[16px] text-white/70 tracking-[-0.1px] leading-[1.6]"
                style={{ fontWeight: 500 }}
              >
                Or operate it autonomously.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="#demo"
                className="bg-[#2563eb] cursor-pointer flex items-center justify-center px-8 py-4 rounded-lg hover:bg-[#1d4ed8] transition-all hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.4)]"
              >
                <span
                  className="font-['Inter',sans-serif] text-[14px] text-white tracking-[-0.2px]"
                  style={{ fontWeight: 600 }}
                >
                  Request Enterprise Walkthrough
                </span>
              </a>
              <a
                href="#calculator"
                className="bg-white/[0.04] cursor-pointer flex items-center justify-center px-8 py-4 rounded-lg border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all"
              >
                <span
                  className="font-['Inter',sans-serif] text-[14px] text-white/70 tracking-[-0.2px]"
                  style={{ fontWeight: 600 }}
                >
                  See Your Cost Simulation
                </span>
              </a>
            </div>
          </div>
        </AnimateIn>

        {/* Footer */}
        <footer className="border-t border-white/[0.06] mt-24 md:mt-32 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src={hyrraLogo}
              alt="Hyrra.ai logo"
              className="h-9 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <p
              className="font-['Inter',sans-serif] text-[13px] text-white/30 tracking-[-0.1px]"
              style={{ fontWeight: 400 }}
            >
              The digital extension of TASC's recruitment infrastructure.
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="font-['Inter',sans-serif] text-[12px] text-white/25 tracking-[-0.1px] hover:text-white/50 transition-colors"
                  style={{ fontWeight: 500 }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
