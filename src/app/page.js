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
    img: "/el/front.png",
  },
  {
    title: "Backend Developer",
    desc: "Building robust server-side applications, RESTful APIs, and database architectures",
    img: "/el/server.png",
  },
  {
    title: "Full Stack Developer",
    desc: "End-to-end development combining frontend and backend expertise for complete web solutions",
    img: "/images/fullstack.jpg",
  },
  {
    title: "DevOps Engineer",
    desc: "Managing deployment pipelines, containerization with Docker, and cloud infrastructure on AWS and other platforms",
    img: "/images/devops.jpg",
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
        {/* Section Title */}
        <div className="w-full md:w-[950px] text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase mb-10">
          <h3 className="leading-tight md:leading-[7rem] text-[#d6d6d6]">
            What i can <br /> Do For you
          </h3>
        </div>

        {/* Services List */}
        <div className="w-full mx-auto divide-y divide-gray-400/40">
          {data.map((e, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center py-8 gap-4"
            >
              {/* Number */}
              <div className="w-12 text-lg font-mono text-gray-400 mb-2 md:mb-0">
                {String(index + 1).padStart(2, "0")}.
              </div>
              {/* Title */}
              <div className="flex-1 text-2xl sm:text-3xl font-bold text-white mb-2 md:mb-0">
                {e.title.split(" / ").map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
              {/* Description */}
              <div className="md:w-1/2 text-sm text-gray-300 font-light">
                {e.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// bg-[#222222]
