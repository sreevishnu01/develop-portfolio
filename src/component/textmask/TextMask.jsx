"use client";
import React, { useEffect } from "react";
import style from "./page.module.scss";
import useMousePosition from "@/utils/useMousePosition";
import gsap from "gsap";

function TextMask() {
  //   const { x, y } = useMousePosition();

  useEffect(() => {
    const content = document.getElementById("content");
    let linkAnimated = false;

    let xTo = gsap.quickTo(".hidden-content", "--x", {
        duration: 0.4,
        ease: "power4.out",
      }),
      yTo = gsap.quickTo(".hidden-content", "--y", {
        duration: 0.4,
        ease: "power4.out",
      });

    let tl = gsap.timeline({ paused: true });
    tl.fromTo(
      ".hidden-content",
      { "--size": 15 }, // Initial value
      { "--size": 150, duration: 0.75, ease: "back.out(1.7)" } // Target value
    );

    let hoveringContent = gsap.utils.toArray("p", content);

    hoveringContent.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        tl.restart();
      });
      el.addEventListener("mouseleave", () => {
        tl.reverse();
      });
    });

    /***************************************
        Add Mask on First Mouse Movement
    ***************************************/
    window.addEventListener("mousemove", onFirstMove);

    function onFirstMove(e) {
      window.removeEventListener("mousemove", onFirstMove);
      gsap.set(".hidden-content", {
        autoAlpha: 1,
        "--x": e.pageX,
        "--y": e.pageY,
      });

      window.addEventListener("mousemove", (e) => {
        if (!linkAnimated) {
          yTo(e.pageY + 17);
          xTo(e.pageX + 15);
        }
      });
    }
    /***************************************
          Only for the preview image
    ***************************************/
    // gsap.set(".mask", {
    //   autoAlpha: 1,
    //   "--x": window.innerWidth / 3,
    //   "--y": window.innerHeight / 2,
    // });
    // tl.progress(0.2);
  }, []);

  return (
    <>
      <div className="h-screen">
        <div className="content w-full h-full flex justify-center items-center text-6xl">
          <p id="n-hover-cursor-text2" className="p-10 w-[1000px]">
            Same text is not shown here it shows difrent text other text and we
            can do it better
          </p>
        </div>

        <div className="hidden-content w-full h-full flex justify-center items-center text-6xl absolute top-0 text-white">
          <p id="n-hover-cursor-text" className="p-10 w-[1000px]">
            A text area I going to text with some aniamtion of text visbble when
            curesier is on
          </p>
        </div>
      </div>
    </>
  );
}

export default TextMask;
