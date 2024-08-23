"use client";
import { useEffect } from "react";
import gsap from "gsap";

function Curson() {
  useEffect(() => {
    function onFirstMove(e) {
      gsap.to("#cursor", {
        autoAlpha: 1,
        x: e.clientX - 50 / 2 + 30,
        y: e.clientY - 50 / 2 + 30,
        duration: 1,
        delay: 0,
        ease: "power4.out",
      });
    }
    window.addEventListener("mousemove", onFirstMove);
    return () => {
      window.removeEventListener("mousemove", onFirstMove);
    };
  }, []);
  return (
    <>
      <div
        id="cursor"
        className="absolute top-0 left-0 h-[40px] w-[40px] bg-white rounded-full z-[1] mix-blend-difference"
      />
    </>
  );
}

export default Curson;
