"use client";

import { animatePageOut } from "@/utils/animation";
import { usePathname, useRouter } from "next/navigation";

const TransitionLink = ({ href, label }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handlClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button className="text-xl text-black uppercase" onClick={handlClick}>
      {label}
    </button>
  );
};

export default TransitionLink;
