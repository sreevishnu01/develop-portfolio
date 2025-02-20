import Link from "next/link";
import React from "react";

function FooterSection() {
  return (
    <div className="h-screen px-5 md:px-[70px]">
      <div>
        <p>Contact</p>
        <div className="h-[2px] bg-black mt-5"></div>
      </div>

      <div className="h-full flex flex-col justify-between">
        <div className="w-full h-full text-center mt-8 ">
          <div>
            <p className="text-xs ">WANT TO WORK TOGETHER?</p>
            <p className="text-6xl my-9 lg:text-[10vw] font-extrabold">
              Say Hi!
            </p>
          </div>

          <div className="text-xl text-[#333333] lg:text-[5vw] h-[144px] flex justify-center items-center">
            <p>sreevishnu01@gmail.com</p>
          </div>
        </div>

        <footer className="flex flex-col md:flex-row justify-between gap-2 md:gap-10 mt-[200px] mb-20">
          <Link
            href={"https://designraver.com/"}
            className="w-fit whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inspired by designraver
          </Link>

          <div className="flex justify-end w-full gap-10 md:border border-black md:border-t-0 rounded-lg text-sm md:text-base">
            <Link
              href="https://www.linkedin.com/in/vishnu-unni/"
              className="w-fit whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/sreevishnu01"
              className="w-fit whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>

            <p className="hidden md:block">Vishnu Portfolio @2025</p>
          </div>
          <p className="block md:hidden">Vishnu Portfolio @2025</p>
        </footer>
      </div>
    </div>
  );
}

export default FooterSection;
