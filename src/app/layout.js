import { Lexend } from "next/font/google";
import "./globals.css";
import Navigation from "@/component/Navigation";
import localfont from "next/font/local";
import Cursor from "@/component/Cursor";
import FooterSection from "@/component/FooterSection";

const lexend = Lexend({ weight: ["100", "300", "400"], subsets: ["latin"] });

const monument = localfont({
  src: [
    {
      path: "../../public/fonts/PPMonumentExtended-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MonumentExtended-Ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Vishnu | Senior Full-Stack Software Engineer & Creative Developer",
  description: "Portfolio of Vishnu, a Senior Full-Stack Software Engineer and Creative Developer specializing in scalable backend architectures, high-performance web systems, and immersive frontend experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${monument.className} ${lexend.className} font-monumentUltraBold`}
      >
        <div className="hidden md:block">
          <Cursor />
        </div>
        <main className="overflow-hidden">
          <Navigation />
          {children}
          <FooterSection />
        </main>
      </body>
    </html>
  );
}
