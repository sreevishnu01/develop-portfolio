import TransitionLink from "./TransitionLink";

const Navigation = () => {
  return (
    <nav className="w-full flex flex-row place-items-center justify-between">
      <div className="flex gap-5">
        <TransitionLink href="/" label="home" />
        <TransitionLink href="/work" label="work" />
        <TransitionLink href="/about" label="about" />
      </div>
    </nav>
  );
};

export default Navigation;
