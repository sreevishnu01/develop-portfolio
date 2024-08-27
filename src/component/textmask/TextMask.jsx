"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

function TextMask() {
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
      { "--size": 0 }, // Initial value
      { "--size": 150, duration: 0.4, ease: "back.out(1.7)" } // Target value
    );

    let hoveringContent = gsap.utils.toArray(".hiden-text", content);

    hoveringContent.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        tl.restart();
        gsap.to("#cursor", { zIndex: -10 });
      });
      el.addEventListener("mouseleave", () => {
        tl.reverse();
        gsap.to("#cursor", { zIndex: 10, duration: 1 });
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
  }, []);

  return (
    <div className="h-full z-20">
      <div className="content w-full h-full flex justify-center items-center text-[90px]">
        <div className="leading-[90px] hiden-text w-[800px] overflow-visible py-5">
          <div>
            <p id="n-hover-cursor-text2" className="text-sm w-fit uppercase ">
              <span className="block pl-40">vishnu</span>
            </p>
          </div>
          <div>
            <p id="n-hover-cursor-text2" className="w-fit uppercase ">
              <span className="block pl-20">Multi-</span>
            </p>
          </div>
          <div>
            <p id="n-hover-cursor-text2" className="w-fit uppercase">
              <span className="block">Disciplied</span>
            </p>
          </div>
          <div>
            <p
              id="n-hover-cursor-text2"
              className="w-fit uppercase flex items-center gap-9"
            >
              <span className="pl-20">developer</span>
              <span className="text-sm overflow-visible whitespace-nowrap hidden md:block">
                Good design ishonest
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden-content w-full h-full flex justify-center items-center text-[90px] font-black absolute top-0 text-white">
        <div className="leading-[90px] hiden-text w-[800px] overflow-visible">
          <div>
            <p id="n-hover-cursor-text2" className="text-sm w-fit uppercase ">
              <span className="block pl-40">vishnu</span>
            </p>
          </div>
          <div>
            <p id="n-hover-cursor-text2" className="uppercase ">
              <span className="block pl-20">talented</span>
            </p>
          </div>
          <div>
            <p id="n-hover-cursor-text2" className="uppercase">
              <span className="block">innovative</span>
            </p>
          </div>
          <div>
            <p
              id="n-hover-cursor-text2"
              className="uppercase flex items-center gap-9"
            >
              <span className="pl-20">developer</span>
              <span className="text-sm overflow-visible whitespace-nowrap hidden md:block">
                if the pay ishonest
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextMask;
