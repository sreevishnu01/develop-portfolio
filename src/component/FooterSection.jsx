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
        <p className="text-6xl text-[#333333]">hello@yourdomain.com</p>
      </div>

      <footer className="flex justify-between gap-10 mt-[200px] mb-10">
        <p className="w-fit whitespace-nowrap">design by me hsgdyuvuy</p>
        <div className="flex justify-end w-full gap-10 border border-black border-t-0 rounded-lg">
          <p>linkdin</p>
          <p>linkdin</p>
          <p>linkdin</p>
          <p>vishnu@2024</p>
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
