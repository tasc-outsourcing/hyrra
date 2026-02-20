import { useState, useEffect } from "react";
import hyrraLogo from "../../assets/Hyrra Logo final.png";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Comparison", href: "#comparison" },
    { label: "AI Agents", href: "#agents" },
    { label: "ROI", href: "#calculator" },
  ];

  return (
    <nav
      className={`w-full flex flex-col items-center sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "bg-white"
      }`}
    >
      <div className="w-full max-w-[1440px] flex items-center justify-between px-6 md:px-16 py-4">
        <a href="#" className="flex items-center gap-2">
          <img
            src={hyrraLogo}
            alt="Hyrra.ai logo"
            className="h-[44px] md:h-[52px] w-auto object-contain"
          />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-['Inter',sans-serif] text-[13px] text-[#6b7280] tracking-[-0.1px] hover:text-[#0a0a1a] transition-colors"
              style={{ fontWeight: 500 }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#"
            className="font-['Inter',sans-serif] text-[13px] text-[#6b7280] tracking-[-0.1px] hover:text-[#0a0a1a] transition-colors px-3 py-2"
            style={{ fontWeight: 500 }}
          >
            Log in
          </a>
          <a
            href="#demo"
            className="bg-[#0a0a1a] cursor-pointer flex items-center justify-center px-5 py-2.5 rounded-lg hover:bg-[#1a1a2e] transition-all"
          >
            <span
              className="font-['Inter',sans-serif] text-[13px] text-white tracking-[-0.1px]"
              style={{ fontWeight: 600 }}
            >
              Book Demo
            </span>
          </a>
        </div>

        <button
          className="lg:hidden cursor-pointer relative shrink-0 size-6"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="#0a0a1a"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" stroke="#0a0a1a" strokeWidth="1.5" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="#0a0a1a" strokeWidth="1.5" />
                <line x1="3" y1="17" x2="21" y2="17" stroke="#0a0a1a" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white/95 backdrop-blur-2xl border-t border-black/5">
          <div className="flex flex-col px-6 pb-6 pt-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-4 border-b border-black/5 font-['Inter',sans-serif] text-[14px] text-[#0a0a1a] tracking-[-0.1px]"
                style={{ fontWeight: 500 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#demo"
              className="mt-4 bg-[#0a0a1a] cursor-pointer flex items-center justify-center px-5 py-3 rounded-lg self-start"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span
                className="font-['Inter',sans-serif] text-[13px] text-white tracking-[-0.1px]"
                style={{ fontWeight: 600 }}
              >
                Book Enterprise Demo
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
