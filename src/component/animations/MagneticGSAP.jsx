"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticGSAP({ children, move }) {
  const magnetic = useRef(null);

  useEffect(() => {
    const node = magnetic.current;
    const xTo = gsap.quickTo(node, "x", {
      duration: move ? 0.5 : 1, // Faster duration when 'move' is true
      ease: "elastic.out(1, 0.5)", // Adjusted for a more spring-like effect
    });

    const yTo = gsap.quickTo(node, "y", {
      duration: move ? 0.5 : 1, // Faster duration when 'move' is true
      ease: "elastic.out(1, 0.5)", // Adjusted for a more spring-like effect
    });

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = node.getBoundingClientRect();

      // Define the multiplier for speed and distance when move is true
      const multiplier = move ? 1.5 : 1; // Increase this value for more speed and distance

      let x = (clientX - (left + width / 2)) * multiplier;
      let y = (clientY - (top + height / 2)) * multiplier;

      xTo(x);
      yTo(y);
    };

    const mouseLeave = (e) => {
      gsap.to(node, {
        x: 0,
        y: 0,
        duration: 1, // Duration of the animation
        ease: "elastic.out(1, 0.5)", // Spring-like easing function
      });

      // Alternatively, if you want to keep using quickTo:
      xTo(0);
      yTo(0);
    };

    node.addEventListener("mousemove", mouseMove);
    node.addEventListener("mouseleave", mouseLeave);

    return () => {
      node.removeEventListener("mousemove", mouseMove);
      node.removeEventListener("mouseleave", mouseLeave);
    };
  }, [move]);

  return React.cloneElement(children, { ref: magnetic });
}
