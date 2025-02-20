"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

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

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    // const lenis = new Lenis();

    // const raf = (time) => {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    // requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  console.log(dimension.width);

  return (
    <div className="overflow-hidden">
      {/* <div className="h-screen"></div> */}
      <div
        ref={gallery}
        className="relative h-[175vh] overflow-hidden bg-neutral-800 flex gap-[2vw] box-border "
      >
        <Column images={[images[0], images[1], images[2]]} index={0} y={y} />
        <Column images={[images[3], images[4], images[5]]} index={1} y={y2} />

        {dimension.width >= 600 && (
          <>
            <Column
              images={[images[6], images[7], images[8]]}
              index={2}
              y={y3}
            />
            <Column
              images={[images[9], images[10], images[11]]}
              index={3}
              y={y4}
            />
          </>
        )}
      </div>
    </div>
  );
}

const Column = ({ images, index, y }) => {
  return (
    <motion.div
      className={`relative h-full w-1/2 md:w-[25%] flex flex-col gap-[2vw] column ${
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
      style={{ y }}
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
    </motion.div>
  );
};
