"use client";

import { animatePageOut } from "@/utils/animation";
import { usePathname, useRouter } from "next/navigation";

const TransitionLink = ({ href, label, click }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handlClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
    if (click) {
      click();
    }
  };

  return (
    <button className="uppercase" onClick={handlClick}>
      {label}
    </button>
  );
};

export default TransitionLink;
