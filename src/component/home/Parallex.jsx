"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Parallex() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    // requestAnimationFrame(raf);
    resize();

    gsap.utils.toArray("section").forEach((section, index) => {
      const w = section.querySelector(".wrapper");
      const [y, yEnd] =
        index % 2
          ? ["100%", (w.scrollHeight - section.offsetHeight) * -1]
          : [w.scrollHeight * -1, 0];

      const speed = [2, 3.3, 1.25, 3][index]; // Matching the y transforms in Framer Motion

      //   const scrubSpeed = index === 0 ? 1 : index === 1 ? 2 : 0.5; // Change values as needed

      gsap.fromTo(
        w,
        { y },
        {
          //   y: yEnd,
          y: () => dimension.height * speed,
          ease: "none",
          scrollTrigger: {
            trigger: gallery.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            // invalidateOnRefresh: true,
          },
        }
      );
    });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [dimension.height]);

  return (
    <main className="overflow-hidden">
      <div className="h-[175vh] flex gap-[2vw] bg-black" ref={gallery}>
        <section className="relative w-full h-screen bg-black">
          <div className="wrapper space-y-4 flex flex-col gap-[2vw] top-[55%]">
            <Image src="/images/1.jpg" width={800} height={600} alt="img" />
            <Image src="/images/2.jpg" width={800} height={600} alt="img" />
            <Image src="/images/3.jpg" width={800} height={600} alt="img" />
          </div>
        </section>
        <section className="relative w-full h-screen">
          <div className="wrapper space-y-4 flex flex-col gap-[2vw] top-[-125%]">
            <Image src="/images/1.jpg" width={800} height={600} alt="img" />
            <Image src="/images/2.jpg" width={800} height={600} alt="img" />
            <Image src="/images/3.jpg" width={800} height={600} alt="img" />
          </div>
        </section>
        <section className="relative w-full h-screen">
          <div className="wrapper space-y-4 flex flex-col gap-[2vw] top-[55%]">
            <Image src="/images/1.jpg" width={800} height={600} alt="img" />
            <Image src="/images/2.jpg" width={800} height={600} alt="img" />
            <Image src="/images/3.jpg" width={800} height={600} alt="img" />
          </div>
        </section>
        <section className="relative w-full h-screen">
          <div className="wrapper space-y-4 top-[55%]">
            <Image src="/images/1.jpg" width={800} height={600} alt="img" />
            <Image src="/images/2.jpg" width={800} height={600} alt="img" />
            <Image src="/images/3.jpg" width={800} height={600} alt="img" />
          </div>
        </section>
      </div>
    </main>
  );
}
