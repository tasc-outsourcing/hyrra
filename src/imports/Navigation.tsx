import svgPaths from "./svg-okt1xo16gs";

function Arrow() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0 w-[7px]" data-name="Arrow">
      <div className="h-[6.011px] relative shrink-0 w-[6px]" data-name="↗">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6.01131">
          <path d={svgPaths.p2c9abe00} fill="var(--fill-0, white)" id="â" />
        </svg>
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="content-stretch flex h-[148px] items-center justify-between max-w-[1500px] pb-[80px] pt-[20px] relative shrink-0 w-full" data-name="Navigation">
      <a className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[30px] text-black tracking-[-1.5px] whitespace-nowrap" href="https://www.figma.com/design/lbO5s7KHf7jMF1R2PeqPz2?node-id=0-3" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        <p className="cursor-pointer leading-[1.2]">Area</p>
      </a>
      <a className="bg-[#485c11] content-stretch cursor-pointer flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0" data-name="Button linkout" href="https://www.figma.com/sites">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
          Learn More
        </p>
        <div className="flex flex-row items-center self-stretch">
          <Arrow />
        </div>
      </a>
    </div>
  );
}

export default function Navigation() {
  return (
    <nav className="content-stretch flex flex-col items-center relative size-full" data-name="Navigation">
      <Navigation1 />
    </nav>
  );
}