import React from "react";

const works = [
  {
    img: "/work/divine.png",
    title: "Divine",
    subtitle: "Web site",
    link: "https://dieofficial.com/",
  },
  {
    img: "/work/Imoodini.webp",
    title: "Imoodini",
    subtitle: "Web site",
    link: "https://imoodini.com/",
  },
  {
    img: "/work/thesustainablecity-yiti.webp",
    title: "The Sustainable City Yiti",
    subtitle: "Web site",
    link: "https://www.thesustainablecity-yiti.com/",
  },
  {
    img: "/work/tsc.webp",
    title: "The Sustainable City",
    subtitle: "Web site",
    link: "https://tsc-main.vercel.app/",
  },
  {
    img: "/work/Sadara capital.webp",
    title: "Sadara capital",
    subtitle: "Web site",
    link: "https://sadaracapital.com/",
  },
  {
    img: "/work/Emireum.webp",
    title: "Emireum Business",
    subtitle: "Web site",
    link: "https://www.emireumbiz.com/",
  },
  {
    img: "/work/emireumprop.webp",
    title: "Emireum Properties",
    subtitle: "Web site",
    link: "https://www.emireumproperties.com/en",
  },
  {
    img: "/work/richylife.webp",
    title: "Richy Life Club",
    subtitle: "Web site",
    link: "https://richylifeclub.com/",
  },
  {
    img: "/work/citysolar.png",
    title: "City Solar",
    subtitle: "Web site",
    link: "https://www.citysolar.ae/",
  },
  {
    img: "/work/nanis.png",
    title: "Nanis ai",
    subtitle: "Web application",
    link: "https://nanisweb.vercel.app/",
  },
];

const WorkPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-14 py-10">
      <div className="mb-8">
        {/* <div className="text-xs text-gray-400 mb-1">01.</div>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Case Studies
        </h2> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[...works].reverse().map((work, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="aspect-square w-full rounded-2xl overflow-hidden mb-3">
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-base text-black leading-tight">
                  {work.title}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {work.subtitle}
                </div>
              </div>
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
              >
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
