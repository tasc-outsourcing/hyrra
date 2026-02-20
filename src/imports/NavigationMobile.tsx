import svgPaths from "./svg-rd7ijtl8yo";

export default function NavigationMobile() {
  return (
    <nav className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-bl-[20px] rounded-br-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] size-full" data-name="Navigation mobile">
      <div className="bg-white relative shrink-0 w-full" data-name="Nav top">
        <div className="content-stretch flex items-start justify-between pb-[50px] pt-[20px] px-[20px] relative w-full">
          <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[30px] text-black tracking-[-2.4px] whitespace-nowrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>
            <p className="leading-[1.2]">Area</p>
          </div>
          <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="Menu icon">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Menu icon">
                <path d={svgPaths.p15189980} fill="var(--fill-0, black)" id="Vector" />
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Dropdown content">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[50px] items-start justify-center pb-[32px] pt-[8px] px-[20px] relative w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Menu Items">
              <div className="content-stretch flex items-center py-[30px] relative shrink-0 w-full" data-name="List Item">
                <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
                <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-black text-center tracking-[-0.35px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
                  Benefits
                </p>
              </div>
              <div className="content-stretch flex items-center py-[30px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
                <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-black text-center tracking-[-0.35px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
                  Specifications
                </p>
              </div>
              <div className="content-stretch flex items-center py-[30px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
                <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-black text-center tracking-[-0.35px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
                  How-to
                </p>
              </div>
              <div className="content-stretch flex items-center py-[30px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
                <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-black text-center tracking-[-0.35px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
                  Contact Us
                </p>
              </div>
            </div>
            <a className="bg-[#485c11] content-stretch cursor-pointer flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0" data-name="Button linkout" href="https://www.figma.com/sites">
              <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
                Learn More
              </p>
              <div className="flex flex-row items-center self-stretch">
                <div className="content-stretch flex h-full items-center relative shrink-0 w-[7px]" data-name="Arrow">
                  <div className="h-[6.011px] relative shrink-0 w-[6px]" data-name="↗">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6.01131">
                      <path d={svgPaths.p2c9abe00} fill="var(--fill-0, white)" id="â" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}