"use client";
import MagneticGSAP from "@/component/animations/MagneticGSAP";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { sidebarMenuSticky, sidebarMenuStickyOut } from "@/utils/animation";

function HamburgerMenu() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    if (active === true) {
      sidebarMenuStickyOut();
    }
    if (active === false) {
      sidebarMenuSticky();
    }
  };

  return (
    <div>
      <MagneticGSAP>
        <div
          className={`${
            active && "active"
          } fixed w-[50px] h-[50px] p-[30px] bg-white rounded-full bottom-10 right-[70px] cursor-pointer flex flex-col justify-center items-center mix-blend-difference z-[5]`}
          // onClick={() => setActive((prev) => !prev)}
          onClick={handleClick}
        >
          <span id="hanburgermenu" className="h-[2px] w-[24px]"></span>
        </div>
      </MagneticGSAP>
      <>
        <div className="hidden sidenav h-screen w-1/3 fixed top-0 right-[0px] z-[3]">
          <div className="w-full h-full p-[100px] bg-black"></div>
          <svg
            // viewBox="0 0 705 1007"
            className="absolute top-0 left-[-99px] h-screen w-[100px] fill-[#292929] z-[4]"
            // preserveAspectRatio="xMidYMid slice"
          >
            <path
              id="start"
              d="M100 0 L200 0 L200 1005 L100 1005 Q-100 502.5 100 0"
            ></path>
          </svg>
        </div>
      </>
    </div>
  );
}

export default HamburgerMenu;
