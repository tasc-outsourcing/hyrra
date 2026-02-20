import svgPaths from "./svg-1ynnat7y3r";
import imgLogo from "../assets/7e2cb6a493f6974234a10a9155f5a9e61358668d.png";
import imgLogo1 from "../assets/4ec63af28a6d626d15af88690afce1177f7da2aa.png";
import imgLogo2 from "../assets/22502dfc1e4e8a242285d42db1a38e6e853633fc.png";
import imgLogo3 from "../assets/ab60fb89b643e72e94769301b2a7ea53c2788495.png";
import imgLogo4 from "../assets/5353f37898f8daa86c3f3f525e94362e62de8b6a.png";
import imgLogo5 from "../assets/262ae2257b7f47685a1fd90f0f27d6372a2bca23.png";
import imgHeroImage from "../assets/27594e92b9b432843319210cddc6514b6ee87450.png";
import imgImage from "../assets/8c5a21adadebacbd69375684275fb89819b4d967.png";
import imgImage1 from "../assets/7d21c327f1e7740ce9c46cd595065dccfdcec99a.png";
import imgImage2 from "../assets/de5a74711b655d5394631256a2e65f4f4b7e3f42.png";

function Logo() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mix-blend-exclusion opacity-60 relative w-full" data-name="Logo">
      <img alt="Logoipsum" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo} />
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex flex-col h-[84px] items-start justify-center overflow-clip p-[20px] relative shrink-0 w-[154px]" data-name="Logo 1">
      <Logo />
    </div>
  );
}

function Logo3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mix-blend-exclusion opacity-60 relative w-full" data-name="Logo">
      <img alt="Logoipsum" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo1} />
    </div>
  );
}

function Logo2() {
  return (
    <div className="content-stretch flex flex-col h-[84px] items-start justify-center overflow-clip p-[20px] relative shrink-0 w-[154px]" data-name="Logo 2">
      <Logo3 />
    </div>
  );
}

function Logo5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mix-blend-exclusion opacity-60 relative w-full" data-name="Logo">
      <img alt="Logoipsum" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo2} />
    </div>
  );
}

function Logo4() {
  return (
    <div className="content-stretch flex flex-col h-[84px] items-start justify-center p-[20px] relative shrink-0 w-[154px]" data-name="Logo 3">
      <Logo5 />
    </div>
  );
}

function Logo7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mix-blend-exclusion opacity-60 relative w-full" data-name="Logo">
      <img alt="Logoipsum" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo3} />
    </div>
  );
}

function Logo6() {
  return (
    <div className="content-stretch flex flex-col h-[84px] items-start justify-center overflow-clip p-[20px] relative shrink-0 w-[154px]" data-name="Logo 4">
      <Logo7 />
    </div>
  );
}

function Logo9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mix-blend-exclusion opacity-60 relative w-full" data-name="Logo">
      <img alt="Logoipsum" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo4} />
    </div>
  );
}

function Logo8() {
  return (
    <div className="content-stretch flex flex-col h-[84px] items-start justify-center p-[20px] relative shrink-0 w-[154px]" data-name="Logo 5">
      <Logo9 />
    </div>
  );
}

function Logo11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mix-blend-exclusion opacity-60 relative w-full" data-name="Logo">
      <img alt="Logoipsum" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo5} />
    </div>
  );
}

function Logo10() {
  return (
    <div className="content-stretch flex flex-col h-[81.818px] items-start justify-center overflow-clip p-[20px] relative shrink-0 w-[150px]" data-name="Logo 6">
      <Logo11 />
    </div>
  );
}

function LogoRow() {
  return (
    <div className="content-center flex flex-wrap gap-[20px_40px] items-center justify-center relative shrink-0 w-full" data-name="Logo Row">
      <Logo1 />
      <Logo2 />
      <Logo4 />
      <Logo6 />
      <Logo8 />
      <Logo10 />
    </div>
  );
}

function LogoCloud() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center max-w-[1500px] py-[50px] relative shrink-0 w-full" data-name="Logo cloud">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        Trusted by:
      </p>
      <LogoRow />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[50px] items-start pr-[400px] relative w-full whitespace-pre-wrap">
        <h2 className="block font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#485c11] text-[12px] tracking-[-0.12px] w-[575.566px]">Benefits</h2>
        <p className="font-['Crimson_Text:Regular',sans-serif] leading-[0.9] min-w-full not-italic relative shrink-0 text-[60px] text-black tracking-[-1.8px] w-[min-content]">We’ve cracked the code.</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-[min-content]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
          Area provides real insights, without the data overload.
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Text 1">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Amplify Insights</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.
      </p>
    </div>
  );
}

function IconLockup() {
  return (
    <section aria-label="Area product benefit 1 of 4" className="flex-[1_0_0] min-h-px min-w-[265px] relative" data-name="Icon lockup 1">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[inherit] pr-[20px] py-[40px] relative w-full">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Cable icon">
          <div className="absolute inset-[10.36%_7.52%_10.37%_7.54%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.385 19.025">
              <path d={svgPaths.p33194f00} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <Text1 />
      </div>
    </section>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Text 2">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Control Your Global Presence</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.
      </p>
    </div>
  );
}

function IconLockup1() {
  return (
    <section aria-label="Area product benefit 2 of 4" className="flex-[1_0_0] min-h-px min-w-[265px] relative" data-name="Icon lockup 2">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[20px] items-start min-w-[inherit] pr-[20px] py-[40px] relative w-full">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Earth icon">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p2eae1500} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <Text2 />
      </div>
    </section>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Text 3">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Remove Language Barriers</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.
      </p>
    </div>
  );
}

function IconLockup2() {
  return (
    <section aria-label="Area product benefit 3 of 4" className="flex-[1_0_0] min-h-px min-w-[265px] relative" data-name="Icon lockup 3">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[inherit] pr-[40px] py-[40px] relative w-full">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Account icon">
          <div className="absolute inset-[8.33%_4.14%_12.5%_4.17%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0063 19">
              <path d={svgPaths.p14659500} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <Text3 />
      </div>
    </section>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Text 4">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Visualize Growth</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.
      </p>
    </div>
  );
}

function IconLockup3() {
  return (
    <section aria-label="Area product benefit 4 of 4" className="flex-[1_0_0] min-h-px min-w-[265px] relative" data-name="Icon lockup 4">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[inherit] pr-[40px] py-[40px] relative w-full">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Chart icon">
          <div className="absolute bottom-1/4 left-[4.17%] right-[4.17%] top-1/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
              <path d={svgPaths.p206794c0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <Text4 />
      </div>
    </section>
  );
}

function IconsModule() {
  return (
    <div className="content-start flex flex-wrap gap-[20px] items-start pt-[40px] relative shrink-0 w-full" data-name="Icons module">
      <IconLockup />
      <IconLockup1 />
      <IconLockup2 />
      <IconLockup3 />
    </div>
  );
}

function HeadlineAndIcons() {
  return (
    <section className="content-stretch flex flex-col gap-[50px] items-start pb-[60px] pt-[80px] relative shrink-0 w-full" data-name="Headline and icons">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
      <Text />
      <IconsModule />
    </section>
  );
}

function HeroImage() {
  return (
    <div className="h-[620px] relative rounded-[30px] shrink-0 w-full" data-name="Hero Image">
      <img alt="A image that shows a mountain range" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgHeroImage} />
    </div>
  );
}

function BenefitsSection() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1500px] pb-[120px] relative shrink-0 w-full" data-name="Benefits section">
      <HeadlineAndIcons />
      <HeroImage />
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex flex-col gap-[40px] items-start pr-[80px] relative w-full whitespace-pre-wrap">
        <p className="font-['Crimson_Text:Regular',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black tracking-[-1.8px] w-full">See the Big Picture</p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>{`Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.`}</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <section aria-label="Area value prop 1 of 4" className="relative shrink-0 w-full" data-name="List Item 1">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[30px] items-start justify-center leading-[1.4] pr-[80px] py-[20px] relative text-[15px] tracking-[-0.075px] w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#6f6f6f]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
            01
          </p>
          <p className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal min-h-px min-w-px relative text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>{`Spot Trends in Seconds: No more digging through numbers. `}</p>
        </div>
      </div>
    </section>
  );
}

function ListItem1() {
  return (
    <section aria-label="Area value prop 2 of 4" className="relative shrink-0 w-full" data-name="List Item 2">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[30px] items-start justify-center leading-[1.4] pr-[80px] py-[20px] relative text-[15px] tracking-[-0.075px] w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#6f6f6f]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
            02
          </p>
          <p className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal min-h-px min-w-px relative text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>{`Get Everyone on the Same Page: Share easy-to-understand reports with your team. `}</p>
        </div>
      </div>
    </section>
  );
}

function ListItem2() {
  return (
    <section aria-label="Area value prop 3 of 4" className="relative shrink-0 w-full" data-name="List Item 3">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[30px] items-start justify-center leading-[1.4] pr-[80px] py-[20px] relative text-[15px] tracking-[-0.075px] w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#6f6f6f]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
            03
          </p>
          <p className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal min-h-px min-w-px relative text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>
            Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.
          </p>
        </div>
      </div>
    </section>
  );
}

function ListItem3() {
  return (
    <section aria-label="Area value prop 4 of 4" className="relative shrink-0 w-full" data-name="List Item 4">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[30px] items-start justify-center leading-[1.4] pr-[80px] py-[20px] relative text-[15px] tracking-[-0.075px] w-full">
          <p className="font-['DM_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#6f6f6f]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
            04
          </p>
          <p className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal min-h-px min-w-px relative text-black whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>
            Your Global Snapshot: Get a quick, clear overview of your entire operation.
          </p>
        </div>
      </div>
    </section>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px pb-[80px] pt-[60px] relative" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <Title />
      <List />
      <a className="bg-[#dfecc6] content-stretch cursor-pointer flex flex-col items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0" data-name="Button" href="https://www.figma.com/sites">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-black text-center tracking-[-0.35px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
          Discover More
        </p>
      </a>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[711px] relative rounded-[30px] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <img alt="A render of three white cylindrical columns, against a warm creme background" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgImage} />
        <div className="absolute bg-[rgba(0,0,0,0.06)] inset-0 rounded-[30px]" />
      </div>
      <div className="flex flex-col items-end size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function FeaturesCarouselV() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[1600px] min-h-px min-w-px relative" data-name="Features carousel v1">
      <Image />
    </div>
  );
}

function FeaturesCarousel() {
  return (
    <section className="content-stretch flex gap-[20px] items-start max-w-[1500px] pb-[120px] relative shrink-0 w-full" data-name="Features carousel">
      <Text5 />
      <FeaturesCarouselV />
    </section>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="Text content">
      <h2 className="block font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#485c11] text-[12px] text-center tracking-[-0.12px] w-[min-content] whitespace-pre-wrap">Specs</h2>
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-[0.9] min-w-full not-italic relative shrink-0 text-[60px] text-black text-center tracking-[-1.8px] w-[min-content] whitespace-pre-wrap">Why Choose Area?</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#6f6f6f] text-[15px] text-center tracking-[-0.075px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>{`You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business. `}</p>
      <a className="bg-[#dfecc6] content-stretch cursor-pointer flex flex-col items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0" data-name="Button" href="https://www.figma.com/sites">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-black text-center tracking-[-0.35px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
          Discover More
        </p>
      </a>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#929292] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[240px] py-[80px] relative w-full">
          <TextContent />
        </div>
      </div>
    </div>
  );
}

function TableItem() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="table item">
      <div aria-hidden="true" className="absolute border-[#929292] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[30px] py-[40px] relative size-full">
          <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[25.714px] text-black tracking-[-2.0571px] whitespace-nowrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>
            <p className="leading-[1.2]">Area</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <section aria-label="The features that are and are not included in Area\'s offering" className="bg-white flex-[1_0_0] min-h-px min-w-[200px] relative rounded-[20px]" data-name="Column 1">
      <div className="content-stretch flex flex-col items-start min-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <TableItem />
        <div className="relative shrink-0 w-full" data-name="Table item">
          <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
              <div aria-label="Included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Check icon">
                <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2083 7.8225">
                    <path d={svgPaths.p30c6dc00} fill="var(--fill-0, #485C11)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Ultra-fast browsing</p>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Table item">
          <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
              <div aria-label="Included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Check icon">
                <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2083 7.8225">
                    <path d={svgPaths.p30c6dc00} fill="var(--fill-0, #485C11)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Advanced AI insights</p>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Table item">
          <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Check icon">
                <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2083 7.8225">
                    <path d={svgPaths.p30c6dc00} fill="var(--fill-0, #485C11)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Seamless integration</p>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Table item">
          <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
              <div aria-label="Included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Check icon">
                <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2083 7.8225">
                    <path d={svgPaths.p30c6dc00} fill="var(--fill-0, #485C11)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Advanced AI insights</p>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Table item">
          <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
              <div aria-label="Included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Check icon">
                <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2083 7.8225">
                    <path d={svgPaths.p30c6dc00} fill="var(--fill-0, #485C11)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Ultra-fast browsing</p>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Table item">
          <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
              <div aria-label="Included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Check icon">
                <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2083 7.8225">
                    <path d={svgPaths.p30c6dc00} fill="var(--fill-0, #485C11)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Full UTF-8 support</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]" />
    </section>
  );
}

function TableItem1() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="table item">
      <div aria-hidden="true" className="absolute border-[#929292] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[30px] py-[40px] relative size-full">
          <div className="flex flex-col font-['Rethink_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6f6f6f] text-[22.857px] tracking-[-1.8286px] whitespace-nowrap">
            <p className="leading-[1.2]">WebSurge</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <section aria-label="The features that are and are not included in WebSurge\'s offering" className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[200px] relative" data-name="Column 2">
      <TableItem1 />
      <div className="relative shrink-0 w-full" data-name="Table item">
        <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
            <div aria-label="Included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Check icon">
              <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2083 7.8225">
                  <path d={svgPaths.p30c6dc00} fill="var(--fill-0, #6F6F6F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Fast browsing</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Table item">
        <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
            <div aria-label="Included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Check icon">
              <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2083 7.8225">
                  <path d={svgPaths.p30c6dc00} fill="var(--fill-0, #6F6F6F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Basic AI recommendations</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Table item">
        <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
            <div aria-label="Included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Check icon">
              <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2083 7.8225">
                  <path d={svgPaths.p30c6dc00} fill="var(--fill-0, #6F6F6F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Restricts customization</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Table item">
        <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
            <div aria-label="Not included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Close icon">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
                  <path d={svgPaths.p329dba00} fill="var(--fill-0, #6F6F6F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Basic AI insights</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Table item">
        <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
            <div aria-label="Included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Check icon">
              <div className="absolute inset-[23.29%_12.5%_20.83%_14.58%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2083 7.8225">
                  <path d={svgPaths.p30c6dc00} fill="var(--fill-0, #6F6F6F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Fast browsing</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Table item">
        <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
            <div aria-label="Not included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Close icon">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
                  <path d={svgPaths.p329dba00} fill="var(--fill-0, #6F6F6F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Potential display errors</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TableItem2() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="table item">
      <div aria-hidden="true" className="absolute border-[#929292] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[30px] py-[40px] relative size-full">
          <div className="flex flex-col font-['Reddit_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6f6f6f] text-[21.654px] tracking-[-1.7323px] whitespace-nowrap">
            <p className="leading-[1.2]">HyperView</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <section aria-label="The features that are and are not included in HyperView\'s offering" className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[200px] relative" data-name="Column 3">
      <TableItem2 />
      <div className="relative shrink-0 w-full" data-name="Table item">
        <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-l-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
            <div aria-label="Not included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Close icon">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
                  <path d={svgPaths.p329dba00} fill="var(--fill-0, #6F6F6F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Moderate speeds</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Table item">
        <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-l-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
            <div aria-label="Not included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Close icon">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
                  <path d={svgPaths.p329dba00} fill="var(--fill-0, #6F6F6F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">No AI assistance</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Table item">
        <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-l-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
            <div aria-label="Not included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Close icon">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
                  <path d={svgPaths.p329dba00} fill="var(--fill-0, #6F6F6F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Steep learning curve</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Table item">
        <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-l-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
            <div aria-label="Not included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Close icon">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
                  <path d={svgPaths.p329dba00} fill="var(--fill-0, #6F6F6F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">No AI assistance</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Table item">
        <div aria-hidden="true" className="absolute border-[#e9e9e9] border-b-[0.5px] border-l-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
            <div aria-label="Not included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Close icon">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
                  <path d={svgPaths.p329dba00} fill="var(--fill-0, #6F6F6F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Moderate speeds</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Table item">
        <div aria-hidden="true" className="absolute border-[#e9e9e9] border-l-[0.5px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
            <div aria-label="Not included" className="overflow-clip relative shrink-0 size-[14px]" data-name="Close icon">
              <div className="absolute inset-[20.83%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 8.16667">
                  <path d={svgPaths.p329dba00} fill="var(--fill-0, #6F6F6F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center tracking-[-0.12px]">Partial UTF-8 support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Table() {
  return (
    <section aria-label="Table comparing and contrasting the feature offerings of Area, WebSurge, and HyperView" className="content-stretch flex items-start overflow-x-auto overflow-y-clip relative rounded-[20px] shrink-0 w-full" data-name="Table">
      <Column />
      <Column1 />
      <Column2 />
    </section>
  );
}

function SpecificationsTable() {
  return (
    <section className="content-stretch flex flex-col gap-[20px] items-start max-w-[1500px] overflow-clip pb-[120px] relative shrink-0 w-full" data-name="Specifications table">
      <Content />
      <Table />
    </section>
  );
}

function Image1() {
  return (
    <div className="aspect-[550/624] flex-[1_0_0] min-h-px min-w-px relative rounded-[30px]" data-name="Image">
      <img alt="A image of a concrete sphere, balanced between two other larger spheres" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgImage1} />
      <div className="size-full" />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[8px] items-start leading-[1.4] relative shrink-0 w-full" data-name="Name">
      <p className="font-['DM_Sans:Regular',sans-serif] relative shrink-0 text-[15px] text-black tracking-[-0.075px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        John Smith
      </p>
      <p className="font-['Roboto_Mono:Regular',sans-serif] relative shrink-0 text-[#485c11] text-[12px] tracking-[-0.12px] w-full">Head of Data</p>
    </div>
  );
}

function Quote() {
  return (
    <section aria-label="Quote from a user about the product Area" className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Quote">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[50px] items-start justify-center pl-[50px] relative size-full whitespace-pre-wrap">
          <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[40px] text-black tracking-[-1.6px] w-full">{`“I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.”`}</p>
          <Name />
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <div className="content-stretch flex gap-[20px] h-[789.382px] items-start max-w-[1500px] pb-[120px] relative shrink-0 w-full" data-name="Testimonial section">
      <Image1 />
      <Quote />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black text-center tracking-[-1.8px]">Map Your Success</p>
      <a className="bg-[#dfecc6] content-stretch cursor-pointer flex flex-col items-center justify-center px-[22px] py-[14px] relative rounded-[1000px] shrink-0" data-name="Button" href="https://www.figma.com/sites">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-black text-center tracking-[-0.35px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
          Discover More
        </p>
      </a>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Get Started</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        With our intuitive setup, you’re up and running in minutes.
      </p>
    </div>
  );
}

function Lockup() {
  return (
    <section aria-label="Step 1 of 3" className="flex-[1_0_0] min-h-px min-w-[240px] relative" data-name="Lockup 1">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[60px] items-start min-w-[inherit] pb-[20px] pr-[30px] pt-[60px] relative w-full whitespace-pre-wrap">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#929292] text-[80px] tracking-[-3.2px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
          01
        </p>
        <Frame />
      </div>
    </section>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Customize and Configure</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        Adapt Area to your specific requirements and preferences.
      </p>
    </div>
  );
}

function Lockup1() {
  return (
    <section aria-label="Step 2 of 3" className="flex-[1_0_0] min-h-px min-w-[240px] relative" data-name="Lockup 2">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[60px] items-start min-w-[inherit] pb-[20px] pr-[30px] pt-[60px] relative w-full whitespace-pre-wrap">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#929292] text-[80px] tracking-[-3.2px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
          02
        </p>
        <Frame1 />
      </div>
    </section>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Crimson_Text:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Grow Your Business</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        Make informed decisions to exceed your goals.
      </p>
    </div>
  );
}

function Lockup2() {
  return (
    <section aria-label="Step 3 of 3" className="flex-[1_0_0] min-h-px min-w-[240px] relative" data-name="Lockup 3">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[60px] items-start min-w-[inherit] pb-[20px] pr-[30px] pt-[60px] relative w-full whitespace-pre-wrap">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[#929292] text-[80px] tracking-[-3.2px] w-full" style={{ fontVariationSettings: "\'opsz\' 14" }}>
          03
        </p>
        <Frame2 />
      </div>
    </section>
  );
}

function Component3Up() {
  return (
    <div className="content-stretch flex gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="3-up">
      <Lockup />
      <Lockup1 />
      <Lockup2 />
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section className="content-stretch flex flex-col gap-[80px] items-start max-w-[1500px] pb-[120px] pt-[80px] relative shrink-0 w-full" data-name="How it works section">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <Frame3 />
      <Component3Up />
    </section>
  );
}

function Image2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Image">
      <img alt="An eye-catching landscape of green." className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      <div className="flex flex-row items-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div aria-label="Image showing a winding path going up a mountain" className="aspect-[1120/620] content-stretch flex items-start max-h-[830.357177734375px] max-w-[1500px] overflow-clip relative rounded-[30px] shrink-0 w-full" data-name="Image container">
      <Image2 />
    </div>
  );
}

function HeroImage1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[40px] relative shrink-0 w-full" data-name="Hero image">
      <ImageContainer />
    </div>
  );
}

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

function CenteredCta() {
  return (
    <section className="max-w-[1500px] relative shrink-0 w-full" data-name="Centered CTA">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t-[0.5px] inset-0 pointer-events-none" />
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center max-w-[inherit] px-[300px] py-[120px] relative w-full">
          <p className="font-['Crimson_Text:Regular',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black text-center tracking-[-1.8px] w-full whitespace-pre-wrap">Connect with us</p>
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] text-center tracking-[-0.075px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>
            Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
          </p>
          <a className="bg-[#485c11] cursor-pointer relative rounded-[1000px] shrink-0 w-full" data-name="Button linkout" href="https://www.figma.com/sites">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative w-full">
                <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-white tracking-[-0.35px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
                  Learn More
                </p>
                <div className="flex flex-row items-center self-stretch">
                  <Arrow />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Main() {
  return (
    <main className="content-stretch flex flex-col items-start relative size-full" data-name="Main" tabIndex="-1">
      <LogoCloud />
      <BenefitsSection />
      <FeaturesCarousel />
      <SpecificationsTable />
      <TestimonialSection />
      <HowItWorksSection />
      <HeroImage1 />
      <CenteredCta />
    </main>
  );
}
