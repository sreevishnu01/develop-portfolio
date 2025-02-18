"use client";
import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  useEffect(() => {
    gsap.utils.toArray("section").forEach((section, index) => {
      const w = section.querySelector(".wrapper");
      const [x, xEnd] =
        index % 2
          ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];

      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            // invalidateOnRefresh: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="overflow-hidden flex flex-col gap-[2vw] bg-black py-[2vw]">
      <section className="relative w-full bg-black">
        <div className="wrapper flex space-x-4">
          <Image src="/images/1.jpg" width={800} height={600} alt="img" />
          <Image src="/images/2.jpg" width={800} height={600} alt="img" />
          <Image src="/images/3.jpg" width={800} height={600} alt="img" />
          <Image src="/images/1.jpg" width={800} height={600} alt="img" />
        </div>
      </section>

      <section className="relative w-full bg-black">
        <div className="wrapper flex space-x-4">
          <Image src="/images/4.jpg" width={800} height={600} alt="img" />
          <Image src="/images/5.jpg" width={800} height={600} alt="img" />
          <Image src="/images/6.jpg" width={800} height={600} alt="img" />
          <Image src="/images/4.jpg" width={800} height={600} alt="img" />
        </div>
      </section>

      <section className="relative w-full bg-black">
        <div className="wrapper flex space-x-4">
          <Image src="/images/7.jpg" width={800} height={600} alt="img" />
          <Image src="/images/8.jpg" width={800} height={600} alt="img" />
          <Image src="/images/9.jpg" width={800} height={600} alt="img" />
          <Image src="/images/7.jpg" width={800} height={600} alt="img" />
        </div>
      </section>
    </div>
  );
}
