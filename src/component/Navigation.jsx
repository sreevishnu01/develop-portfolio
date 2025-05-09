import LiveClock from "./customThings/LiveClock";
import TransitionLink from "./TransitionLink";
import HamburgerMenu from "./Ui/btn/HamburgerMenu";

const Navigation = () => {
  return (
    <>
      <nav className="absolute top-0 w-full px-5 md:px-[70px] h-[90px] flex items-center">
        <div className="w-full flex justify-between gap-5">
          <TransitionLink href="/" label="vishnu" />
          <p className="cursor-pointer text-sm font-thin uppercase hidden md:block">
            Current creative developer @ richy life club
          </p>
          <div className="bg-black text-white px-5 py-2 text-xs ">
            <LiveClock />
          </div>
        </div>
      </nav>

      <HamburgerMenu />
    </>
  );
};

export default Navigation;
