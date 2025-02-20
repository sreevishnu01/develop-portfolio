"use client";
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

      {/* <div className="h-screen px-5 md:px-[70px] p-14">
        <div className="w-[950px] md:text-8xl md:leading-[90px] font-extrabold uppercase ">
          <ScrollAnimationText textArray={textArray} animateData="end" />
        </div>

        <section className="max-w-[774px] leading-6 flex flex-col gap-4 text-black text-lg font-[lexend] mt-28">
          <h2>Ahoy!</h2>

          <p>
            I&apos;m Vishnu, a software developer and full-stack engineer passionate
            about building seamless digital experiences.
          </p>
          <p>
            My expertise spans both front-end and back-end development, allowing
            me to craft web applications that are not only visually appealing
            but also scalable and high-performing. Whether it&apos;s designing sleek
            user interfaces or optimizing backend logic, I thrive on solving
            complex challenges with clean, efficient code.
          </p>
          <p>
            As a self-taught programmer, coding has never been "just a job" for
            me—it&apos;s a continuous journey of learning and growth. What started
            with a simple "Hello World" has evolved into a deep passion for
            developing high-quality applications that make an impact.
          </p>
          <p>
            With over 5 years of experience, I specialize in modern web
            technologies, system architecture, and building robust full-stack
            solutions. I enjoy working across the stack, from crafting dynamic
            front-end interfaces to designing scalable back-end systems.
          </p>
          <p>
            When I’m not coding, you’ll find me exploring new tech trends,
            working on side projects, or diving into the endless depths of
            cyberspace.
          </p>
        </section>
      </div> */}

      <div className="h-screen bg-[#111111] p-14">
        <div className="w-[950px] md:text-8xl md:leading-[90px] font-extrabold uppercase text-[#d6d6d6]">
          <h3>What I can</h3>
          <h3>Do For You</h3>
        </div>

        <section className="max-w-[774px] leading-6 flex flex-col gap-4 text-white text-lg font-[lexend] mt-14">
          <h2>Ahoy!</h2>

          <p>
            I&apos;m Vishnu, a software developer and full-stack engineer
            passionate about building seamless digital experiences.
          </p>
          <p>
            My expertise spans both front-end and back-end development, allowing
            me to craft web applications that are not only visually appealing
            but also scalable and high-performing. Whether it&apos;s designing
            sleek user interfaces or optimizing backend logic, I thrive on
            solving complex challenges with clean, efficient code.
          </p>
          <p>
            As a self-taught programmer, coding has never been &quot;just a
            job&quot; for me—it&apos;s a continuous journey of learning and
            growth. What started with a simple &quot;Hello World&quot; has
            evolved into a deep passion for developing high-quality applications
            that make an impact.
          </p>
          <p>
            With over 5 years of experience, I specialize in modern web
            technologies, system architecture, and building robust full-stack
            solutions. I enjoy working across the stack, from crafting dynamic
            front-end interfaces to designing scalable back-end systems.
          </p>
          <p>
            When I’m not coding, you’ll find me exploring new tech trends,
            working on side projects, or diving into the endless depths of
            cyberspace.
          </p>
        </section>
      </div>
    </div>
  );
}
// bg-[#222222]
