import Curson from "@/component/curson";
import Advanced from "@/component/textmask/Advanced";
import MyComponent from "@/component/textmask/MyComponent";
import TextMask from "@/component/textmask/TextMask";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Curson />
      <TextMask />
      {/* <MyComponent /> */}
      {/* <Advanced /> */}
    </div>
  );
}
