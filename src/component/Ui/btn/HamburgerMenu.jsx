"use client";
import MagneticGSAP from "@/component/animations/MagneticGSAP";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { sidebarMenuSticky, sidebarMenuStickyOut } from "@/utils/animation";
import { navData } from "@/utils/navigationData";
import { usePathname } from "next/navigation";

function HamburgerMenu() {
  const [active, setActive] = useState(false);

  const currentPath = usePathname();

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
          } fixed w-[20px] h-[20px] md:w-[50px] md:h-[50px] p-[25px] md:p-[30px] bg-white rounded-full bottom-10 right-5 md:right-[70px] cursor-pointer flex flex-col justify-center items-center mix-blend-difference z-[5]`}
          // onClick={() => setActive((prev) => !prev)}
          onClick={handleClick}
        >
          <span id="hanburgermenu" className="h-[2px] w-[24px]"></span>
        </div>
      </MagneticGSAP>
      <>
        <div className="hidden sidenav h-screen w-full md:w-1/3 fixed top-0 right-[0px] z-[3]">
          <div className="w-full h-full p-[100px] bg-black text-white flex flex-col gap-3 justify-between">
            <div class="mt-20 flex flex-col gap-3 text-[56px] font-extralight">
              <div class="w-fit mb-10 text-xs text-[#999] border-[#999] border-b">
                <p>Navigation</p>
              </div>
              {navData.map((e, index) => (
                <div
                  class="flex relative items-center"
                  key={"navigation" + index}
                >
                  <div
                    className={`${
                      currentPath === e.path && "h-3"
                    } w-3  bg-white rounded-full absolute left-[-30px]`}
                  ></div>
                  <p className="undeline-hover">
                    {e.title}
                    {/* <span class="bg-white block text-primary relative left-0 w-full h-[2px] mt-[0.3px] lineLink"></span> */}
                  </p>
                </div>
              ))}
            </div>

            {/* footer */}
            <div class="md:block hidden">
              <div class="w-fit mb-10 text-xs text-[#999] border-[#999] border-b">
                <p>Get in touch</p>
              </div>

              <div class="flex items-center gap-[30px] text-base">
                <div>
                  <a
                    target="_blank"
                    href="https://twitter.com/AkogunOyindamo3"
                    className="undeline-hover"
                  >
                    Twitter
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://github.com/sreevishnu01"
                    className="undeline-hover"
                  >
                    Github
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="www.linkedin.com/in/vishnu-unni"
                    className="undeline-hover"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
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
