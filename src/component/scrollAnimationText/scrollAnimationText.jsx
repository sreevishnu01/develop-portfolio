"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textArray = [
  { text: "Renowned" },
  { text: "Creative" },
  { text: "Enginner" },
];

export default function ScrollAnimationText() {
  let refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Ensure all refs are populated
    gsap.set(refs.current, { opacity: 0.2 });

    gsap.to(refs.current, {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top 0%",
        end: "bottom 60%",
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      ref={container}
      className="w-full h-full flex justify-center items-center"
    >
      <div className="w-[90%] flex flex-wrap justify-start text-[40px] font-extrabold uppercase md:hidden">
        {textArray.map((item, i) => (
          <div key={i} className="leading-[60px]">
            {item.text.split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block opacity-20"
                ref={(el) => refs.current.push(el)}
              >
                {letter}
              </span>
            ))}
          </div>
        ))}

        {/* <div className="w-full h-96 relative"></div> */}
      </div>
    </div>
  );
}
