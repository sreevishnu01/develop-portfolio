import About from "@/component/home/About";

const AboutPage = () => {
  const data = [
    {
      title: "Frontend Developer",
      desc: "Specializing in creating responsive, interactive user interfaces using React, Next.js, and modern JavaScript frameworks",
    },
    {
      title: "Backend Developer",
      desc: "Building robust server-side applications, RESTful APIs, and database architectures",
    },
    {
      title: "Full Stack Developer",
      desc: "End-to-end development combining frontend and backend expertise for complete web solutions",
    },
    {
      title: "UI/UX Engineer",
      desc: "Crafting intuitive user experiences with clean, modern designs and smooth interactions",
    },
  ];
  return (
    <div className="mt-20 md:mt-0">
      <About />

      <div className="min-h-screen px-4 sm:px-8 md:px-[70px] py-8 md:p-14 bg-black">
        <div className="w-full h-full flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-center">
          {data.map((e, index) => (
            <div key={index} className="w-full">
              <h3 className="text-center text-gray-300 font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight uppercase">
                {e.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
