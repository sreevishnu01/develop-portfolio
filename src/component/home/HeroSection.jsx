import React from "react";
import TextMask from "../textmask/TextMask";
import StickyRounds from "../animations/StickyRounds";

function HeroSection() {
  return (
    <div className="h-screen relative">
      <TextMask />
      <StickyRounds />
    </div>
  );
}

export default HeroSection;
