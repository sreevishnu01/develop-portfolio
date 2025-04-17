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
    <div>
      <div className="h-screen  p-14 flex items-center">
        <div className="w-[950px] md:text-8xl md:leading-[90px] font-extrabold uppercase">
          <h3>about</h3>
        </div>

        <section className="max-w-[774px] leading-7 flex flex-col gap-4 mt-14 text-sm font-normal uppercase">
          <h2>Ahoy!</h2>

          <p>
            I&apos;m Vishnu, a software developer and full-stack engineer
            passionate about building seamless digital experiences.
          </p>
          <p>
            My expertise spans both front-end and back-end development, allowing
            me to craft web applications that are not only visually appealing
            but also scalable and high-performing. Whether it&apos;s designing
            sleek user interfaces or optimizing backend logic, I thrive on
            solving complex challenges with clean, efficient code.
          </p>
          <p>
            As a self-taught programmer, coding has never been &quot;just a
            job&quot; for me—it&apos;s a continuous journey of learning and
            growth. What started with a simple &quot;Hello World&quot; has
            evolved into a deep passion for developing high-quality applications
            that make an impact.
          </p>
          <p>
            With over 5 years of experience, I specialize in modern web
            technologies, system architecture, and building robust full-stack
            solutions. I enjoy working across the stack, from crafting dynamic
            front-end interfaces to designing scalable back-end systems.
          </p>
          <p>
            When I’m not coding, you’ll find me exploring new tech trends,
            working on side projects, or diving into the endless depths of
            cyberspace.
          </p>
        </section>
      </div>

      <div className="h-screen px-5 md:px-[70px] p-14 bg-black">
        <div className="w-full h-full flex flex-col gap-0 justify-center items-center">
          {data.map((e, index) => (
            <div key={index}>
              <h3 className="text-center space-y-4 text-gray-300 font-extrabold text-5xl leading-tight tracking-tight uppercase">
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
