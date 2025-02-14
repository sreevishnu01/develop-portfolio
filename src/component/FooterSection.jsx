import Link from "next/link";
import React from "react";

function FooterSection() {
  return (
    <div className="px-5 md:px-[70px]">
      <div>
        <p>Contact</p>
        <div className="h-[2px] bg-black mt-5"></div>
      </div>

      <div className="w-full text-center mt-8 lg:mt-[236px]">
        <p className="text-xs ">WANT TO WORK TOGETHER?</p>
        <p className="text-6xl my-9">Say Hi!</p>
        <p className="text-6xl text-[#333333]">sreevishnu01@gmail.com</p>
      </div>

      <footer className="flex justify-between gap-10 mt-[200px] mb-10">
        <Link
          href={"https://designraver.com/"}
          className="w-fit whitespace-nowrap"
          target="_blank"
          rel="noopener noreferrer"
        >
          design by designraver
        </Link>

        <div className="flex justify-end w-full gap-10 border border-black border-t-0 rounded-lg">
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

          <p>Vishnu Portfolio @2025</p>
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
