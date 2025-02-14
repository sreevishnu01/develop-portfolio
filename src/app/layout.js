import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/component/Navigation";
import localfont from "next/font/local";
import Curson from "@/component/Curson";
import FooterSection from "@/component/FooterSection";

const inter = Inter({ subsets: ["latin"] });

const mounment = localfont({
  src: "../../public/fonts/PPMonumentExtended-Regular.otf",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mounment.className}>
        <div className="hidden md:block">
          <Curson />
        </div>
        <main>
          <Navigation />
          {children}
          <FooterSection />
        </main>
      </body>
    </html>
  );
}
