import React from "react";
import TextMask from "../textmask/TextMask";
import StickyRounds from "../animations/StickyRounds";

function HeroSection() {
  return (
    <div className="h-screen relative">
      <TextMask />
      <div className="absolute top-1/3 px-[70px] font-thin text-sm">
        <span>Hover </span>
      </div>
      <StickyRounds />
    </div>
  );
}

export default HeroSection;
