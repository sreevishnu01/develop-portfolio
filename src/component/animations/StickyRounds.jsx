import React from "react";
import MagneticGSAP from "./MagneticGSAP";
import Image from "next/image";

function StickyRounds() {
  return (
    <div>
      <MagneticGSAP>
        <div className="absolute w-[230px] h-[230px] bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-10">
          <div className="w-[95px] h-[95px] border-2 border-black rounded-full flex justify-center items-center">
            <Image
              src={"/hero-pointer-down.afdacced.svg"}
              width={50}
              height={50}
            />
          </div>
          <MagneticGSAP>
            <div className="absolute w-[230px] h-[230px] bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-10">
              <div className="w-[95px] h-[95px] border-2 border-black rounded-full flex justify-center items-center"></div>
            </div>
          </MagneticGSAP>
        </div>
      </MagneticGSAP>
    </div>
  );
}

export default StickyRounds;
