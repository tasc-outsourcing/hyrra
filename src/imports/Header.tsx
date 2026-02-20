import imgInnerScreen from "figma:asset/2b19803f6c5e3c26b39f607fe129d1919300df81.png";

function InnerScreen() {
  return (
    <div className="-translate-x-1/2 absolute h-[607.439px] left-1/2 rounded-[16px] top-[16.5px] w-[869.742px]" data-name="Inner screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="Data points on top of landscape" className="absolute left-0 max-w-none size-full top-0" src={imgInnerScreen} />
      </div>
    </div>
  );
}

function Ipad() {
  return (
    <div aria-label="Visual chart illustrating a 78% increase in efficiency across 33 regions between 2021 and 2024, with clear upward trends year over year" className="-translate-x-1/2 -translate-y-1/2 absolute bg-black border-[rgba(255,255,255,0.5)] border-l-2 border-r-2 border-solid border-t-2 h-[644px] left-[calc(50%+0.5px)] overflow-clip rounded-[24px] shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.1)] top-1/2 w-[907px]" data-name="Ipad">
      <InnerScreen />
    </div>
  );
}

export default function Header() {
  return (
    <header className="content-stretch flex flex-col gap-[240px] items-start relative size-full" data-name="Header">
      <h1 className="block font-['Crimson_Text:Regular',sans-serif] leading-[0.9] not-italic relative shrink-0 text-[160px] text-black text-center tracking-[-6.8px] w-full whitespace-pre-wrap">Browse everything.</h1>
      <div className="bg-[#8e9c78] h-[362px] relative rounded-[30px] shrink-0 w-full" data-name="Hero image">
        <Ipad />
      </div>
    </header>
  );
}