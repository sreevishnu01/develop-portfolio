import React from "react";
import TextMask from "../textmask/TextMask";
import StickyRounds from "../animations/StickyRounds";
import ScrollAnimationText from "../scrollAnimationText/scrollAnimationText";
import { MoveRight, MoveDown } from "lucide-react";

function HeroSection() {
  const textArray = [
    { text: "Renowned" },
    { text: "Creative" },
    { text: "Enginner" },
  ];
  return (
    <div className="h-screen relative">
      <div className="absolute top-[30%] md:top-1/3 px-[20px] md:px-[70px] font-thin text-sm">
        <span className="hidden md:flex justify-center items-center">
          Hover
          <MoveRight />
        </span>

        <span className="flex md:hidden justify-center items-center">
          <MoveDown />
          Scroll
        </span>
      </div>
      <TextMask />
      <div className="block md:hidden h-screen">
        <ScrollAnimationText textArray={textArray} animateData="top" />
      </div>
      <StickyRounds />
    </div>
  );
}

export default HeroSection;
