import React from "react";
import TextMask from "../textmask/TextMask";
import StickyRounds from "../animations/StickyRounds";
import ScrollAnimationText from "../scrollAnimationText/scrollAnimationText";

function HeroSection() {
  return (
    <div className="h-screen relative">
      <div className="absolute top-[30%] md:top-1/3 px-[20px] md:px-[70px] font-thin text-sm">
        <span className="hidden md:block">Hover </span>
        <span className="block md:hidden">Scroll</span>
      </div>
      <TextMask />
      <ScrollAnimationText />
      <StickyRounds />
    </div>
  );
}

export default HeroSection;
