"use client";
import MagneticGSAP from "@/component/animations/MagneticGSAP";
import React, { useState } from "react";

function HamburgerMenu() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <MagneticGSAP>
        <div
          className={`${
            active && "active"
          } fixed w-[50px] h-[50px] p-[30px] z-10 bg-black rounded-full bottom-10 right-[70px] cursor-pointer flex flex-col justify-center items-center`}
          onClick={() => setActive((prev) => !prev)}
        >
          <span id="hanburgermenu" className="h-[2px] w-[24px]"></span>
        </div>
      </MagneticGSAP>
    </div>
  );
}

export default HamburgerMenu;
