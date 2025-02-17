import HeroSection from "@/component/home/HeroSection";
import Work from "@/component/home/Work";

export default function Home() {
  // useEffect(() => {
  //   // Initialize Lenis for smooth scrolling
  //   const lenis = new Lenis({
  //     smooth: true,
  //     lerp: 0.1,
  //   });

  //   const raf = (time) => {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   };
  //   requestAnimationFrame(raf);
  // }, []);
  return (
    <div>
      <HeroSection />

      <Work />
    </div>
  );
}
