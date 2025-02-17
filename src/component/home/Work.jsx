"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

export default function Home() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const columns = gsap.utils.toArray(`.column`);
    columns.forEach((col, i) => {
      const speed = [2, 3.3, 1.25, 3][i]; // Matching the y transforms in Framer Motion
      gsap.fromTo(
        col,
        { y: 0 },
        {
          y: () => dimension.height * speed,
          ease: "none",
          scrollTrigger: {
            trigger: gallery.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    });
  }, [dimension.height]);

  return (
    <div className="overflow-hidden">
      <div className="h-screen"></div>
      <div
        ref={gallery}
        className="relative h-[175vh] overflow-hidden bg-neutral-800 flex gap-[2vw] box-border "
      >
        <Column images={[images[0], images[1], images[2]]} index={0} />
        <Column images={[images[3], images[4], images[5]]} index={1} />
        <Column images={[images[6], images[7], images[8]]} index={2} />
        <Column images={[images[9], images[10], images[11]]} index={3} />
      </div>
      <div className="h-screen"></div>
    </div>
  );
}

const Column = ({ images, index }) => {
  return (
    <div
      className={`relative h-full w-[25%] min-w-[250px] flex flex-col gap-[2vw] column ${
        index === 0
          ? "-top-[45%]"
          : index === 1
          ? "-top-[95%]"
          : index === 2
          ? "-top-[45%]"
          : index === 3
          ? "-top-[75%]"
          : ""
      }`}
    >
      {images.map((src, i) => {
        return (
          <div
            key={i}
            className={`relative w-full h-full rounded-[1vw] overflow-hidden `}
          >
            <Image
              src={`/images/${src}`}
              alt="image"
              fill
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};
