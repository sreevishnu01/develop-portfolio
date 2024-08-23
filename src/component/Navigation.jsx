import TransitionLink from "./TransitionLink";

const Navigation = () => {
  return (
    <nav className="w-full px-[70px] h-[90px] flex items-center">
      <div className="flex gap-5">
        <TransitionLink href="/" label="vishnu" />
      </div>
    </nav>
  );
};

export default Navigation;
