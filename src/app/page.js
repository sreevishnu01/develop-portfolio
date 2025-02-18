"use client";
import HeroSection from "@/component/home/HeroSection";
import HorizontalScroll from "@/component/home/HorizontalScroll";
import Parallex from "@/component/home/Parallex";
import Work from "@/component/home/Work";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

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
    <div>
      <HeroSection />

      <HorizontalScroll />

      {/* <Parallex /> */}
      <div className="h-screen"></div>

      {/* <Work /> */}
    </div>
  );
}
