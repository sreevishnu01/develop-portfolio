import LiveClock from "./customThings/LiveClock";
import TransitionLink from "./TransitionLink";

const Navigation = () => {
  return (
    <>
      <nav className="absolute top-0 w-full px-[70px] h-[90px] flex items-center">
        <div className="w-full flex justify-between gap-5">
          <TransitionLink href="/" label="vishnu" />
          <p className="cursor-pointer text-sm font-thin uppercase">
            Current creative developer @ richylife club
          </p>
          <div className="bg-black text-white px-5 py-2 text-xs ">
            <LiveClock />
          </div>
        </div>
      </nav>

      <div className="absolute w-[50px] h-[50px] bg-black rounded-full bottom-10 right-[70px]">
        <span
          id="hanburgermenu"
          className="h-[2px] w-[24px] bg-white absolute inline-block top-1/2 left-1/2  transform -translate-x-1/2"
        ></span>
      </div>
    </>
  );
};

export default Navigation;
