import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen p-4 sm:p-8 md:p-14 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
      {/* Left Column */}
      <div className="flex flex-col items-start w-full md:w-[437px]">
        {/* Small Intro Box */}
        <div className="text-[10px] p-2 mb-4 rounded w-[300px]">
          I'm a software developer and full-stack engineer passionate about
          building seamless digital experiences.
        </div>
        {/* Large ABOUT Heading */}
        <h1 className="text-[69px] font-extrabold uppercase leading-none mb-4">
          About
        </h1>
        {/* Image */}
        <div className="w-full flex justify-start">
          <Image
            src="/about/me.jpg"
            alt="about"
            width={200}
            height={200}
            className="rounded"
          />
        </div>
      </div>

      {/* Right Column */}
      <section className="w-full md:max-w-[950px] flex flex-col justify-center gap-4 text-xs sm:text-sm font-normal uppercase">
        <h2 className="text-lg sm:text-xl">Ahoy!</h2>
        <p>
          I&apos;m Vishnu, a software developer and full-stack engineer
          passionate about building seamless digital experiences.
        </p>
        <p>
          My expertise spans both front-end and back-end development, allowing
          me to craft web applications that are not only visually appealing but
          also scalable and high-performing. Whether it&apos;s designing sleek
          user interfaces or optimizing backend logic, I thrive on solving
          complex challenges with clean, efficient code.
        </p>
        <p>
          As a self-taught programmer, coding has never been &quot;just a
          job&quot; for me—it&apos;s a continuous journey of learning and
          growth. What started with a simple &quot;Hello World&quot; has evolved
          into a deep passion for developing high-quality applications that make
          an impact.
        </p>
        <p>
          With over 5 years of experience, I specialize in modern web
          technologies, system architecture, and building robust full-stack
          solutions. I enjoy working across the stack, from crafting dynamic
          front-end interfaces to designing scalable back-end systems.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll find me exploring new tech
          trends, working on side projects, or diving into the endless depths of
          cyberspace.
        </p>
      </section>
    </div>
  );
}

export default About;
