import LiveClock from "./customThings/LiveClock";
import TransitionLink from "./TransitionLink";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
