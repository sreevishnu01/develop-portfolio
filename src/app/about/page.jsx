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

  const experiences = [
    {
      location: "Dubai",
      date: "Apr, 2024 – Current",
      title: "Senior Software Developer, Richy Life Club",
      desc: "At Richy Life Club, I lead the backend development and system architecture for our core member-focused application. My responsibilities include designing and implementing scalable REST APIs, integrating third-party services such as PayPal, FCM, and secure authentication systems including OTP and device-based login tracking.I've implemented real-time logging and monitoring to track user activity and system behavior across environments, helping us quickly identify and resolve issues. I also worked on caching strategies using Redis, load and stress testing with tools like Locust and k6, and optimizing backend performance for high traffic.Key features I've built include a flexible referral system, a room booking engine with availability logic, and a notification utility that handles both email and FCM push messages. I collaborate closely with our development team to ensure code quality, mentor junior developers, and maintain a high standard of security, performance, and scalability across our services.Additionally, I contribute to DevOps and CI/CD improvements, ensuring smooth deployment pipelines and system reliability as our platform grows.",
      link: "#",
      linkLabel: "Visit Link",
    },
    {
      location: "Dubai",
      date: "Apr, 2024 – Current",
      title: "Senior Software Developer, Richy Life Club",
      desc: "At Richy Life Club, I lead the backend development and system architecture for our core member-focused application. My responsibilities include designing and implementing scalable REST APIs, integrating third-party services such as PayPal, FCM, and secure authentication systems including OTP and device-based login tracking.I've implemented real-time logging and monitoring to track user activity and system behavior across environments, helping us quickly identify and resolve issues. I also worked on caching strategies using Redis, load and stress testing with tools like Locust and k6, and optimizing backend performance for high traffic.Key features I've built include a flexible referral system, a room booking engine with availability logic, and a notification utility that handles both email and FCM push messages. I collaborate closely with our development team to ensure code quality, mentor junior developers, and maintain a high standard of security, performance, and scalability across our services.Additionally, I contribute to DevOps and CI/CD improvements, ensuring smooth deployment pipelines and system reliability as our platform grows.",
      link: "#",
      linkLabel: "Visit Link",
    },
    // Add more experience objects here as needed
  ];
  return (
    <div className="mt-20 md:mt-0">
      <About />

      <div className="max-w-[1440px] mx-auto p-4 sm:p-6 md:p-14">
        <h1 className="text-4xl sm:text-5xl md:text-[69px] font-extrabold uppercase leading-none mb-6 sm:mb-10 text-left">
          My Experience
        </h1>

        <div className="flex flex-col gap-6 sm:gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6 sm:pb-8"
            >
              <div className="flex-1 w-full">
                <div className="text-xs sm:text-sm mb-1 sm:mb-2">
                  {exp.location} | {exp.date}
                </div>
                <div className="text-lg sm:text-xl mb-1 sm:mb-2 font-normal">
                  {exp.title}
                </div>
                <div className="text-xs font-thin sm:text-sm leading-relaxed pr-0 md:pr-4">
                  {exp.desc}
                </div>
              </div>
              <a
                href={exp.link}
                className="w-full md:w-auto mt-3 md:mt-0 border border-black rounded-full px-6 py-2 text-xs sm:text-sm font-medium hover:bg-black hover:text-white transition text-center"
              >
                {exp.linkLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
