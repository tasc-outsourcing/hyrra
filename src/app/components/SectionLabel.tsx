interface SectionLabelProps {
  text: string;
  variant?: "light" | "dark";
}

export default function SectionLabel({ text, variant = "light" }: SectionLabelProps) {
  const isLight = variant === "light";

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border backdrop-blur-sm ${
        isLight
          ? "bg-[#2563eb]/[0.04] border-[#2563eb]/10 text-[#2563eb]"
          : "bg-white/[0.04] border-white/10 text-[#93c5fd]"
      }`}
    >
      <div
        className={`w-1.5 h-1.5 rounded-full ${
          isLight ? "bg-[#2563eb]" : "bg-[#60a5fa]"
        }`}
        style={{ boxShadow: isLight ? "0 0 6px #2563eb60" : "0 0 6px #60a5fa60" }}
      />
      <span
        className="font-['Roboto_Mono',monospace] text-[11px] tracking-[1.5px] leading-[1.4] uppercase"
        style={{ fontWeight: 500 }}
      >
        {text}
      </span>
    </div>
  );
}
