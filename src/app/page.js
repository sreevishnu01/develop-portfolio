"use client";
import About from "@/component/home/About";
import HeroSection from "@/component/home/HeroSection";
import HorizontalScroll from "@/component/home/HorizontalScroll";
import Parallex from "@/component/home/Parallex";
import Work from "@/component/home/Work";
import ScrollAnimationText from "@/component/scrollAnimationText/scrollAnimationText";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const textArray = [
  { text: "WHAT" },
  { text: "I" },
  { text: "CAN" },
  { text: "DO" },
  { text: "FOR" },
  { text: "YOU" },
];

const data = [
  {
    title: "Frontend Developer",
    desc: "Specializing in creating responsive, interactive user interfaces using React, Next.js, and modern JavaScript frameworks",
  },
  {
    title: "Backend Developer",
    desc: "Building robust server-side applications, RESTful APIs, and database architectures",
  },
  {
    title: "Full Stack Developer",
    desc: "End-to-end development combining frontend and backend expertise for complete web solutions",
  },
  {
    title: "UI/UX Engineer",
    desc: "Crafting intuitive user experiences with clean, modern designs and smooth interactions and also i can design a website",
  },
];

export default function Home() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="overflow-hidden">
      <HeroSection />

      <Parallex />

      <About />

      <div className="min-h-screen px-4 sm:px-8 md:px-[70px] py-8 md:p-14 bg-[#222222]">
        <div className="w-full md:w-[950px] text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase">
          <h3 className="leading-tight md:leading-[7rem] text-[#d6d6d6]">
            What i can <br /> Do For you{" "}
          </h3>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 p-4 sm:p-8 md:p-14">
          {data.map((e, index) => (
            <div
              key={index}
              className="h-fit w-full p-4 flex flex-col gap-2 text-white bg-[#444] rounded-md"
            >
              <h3 className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-xl sm:text-2xl md:text-3xl">
                  0{index + 1}.
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl">
                  {e.title}
                </span>
              </h3>

              <p className="text-xs sm:text-sm">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// bg-[#222222]
