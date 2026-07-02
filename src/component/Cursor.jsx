"use client";
import { useEffect } from "react";
import gsap from "gsap";

function Cursor() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to("#cursor", {
        autoAlpha: 1,
        x: e.clientX - 20, // Centered on pointer (40px width / 2)
        y: e.clientY - 20, // Centered on pointer (40px height / 2)
        duration: 0.8,
        ease: "power4.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div
        id="cursor"
        className="fixed top-0 left-0 h-[40px] w-[40px] bg-white rounded-full z-[1] mix-blend-difference pointer-events-none"
      />
    </>
  );
}

export default Cursor;
