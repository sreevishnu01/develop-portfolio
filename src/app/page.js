import Curson from "@/component/curson";
import HeroSection from "@/component/home/HeroSection";
import Advanced from "@/component/textmask/Advanced";
import MyComponent from "@/component/textmask/MyComponent";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="hidden md:block">
        <Curson />
      </div>
      <HeroSection />
      {/* <MyComponent /> */}
      {/* <Advanced /> */}
    </div>
  );
}
