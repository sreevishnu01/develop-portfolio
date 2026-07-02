"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Grid, List, ArrowUpRight } from "lucide-react";

// Selection of works matching Vishnu's portfolio projects
const works = [
  {
    img: "/work/divine.png",
    title: "Divine",
    subtitle: "Creative Agency Website",
    link: "https://dieofficial.com/",
    category: "website",
    tags: ["React", "Next.js", "Tailwind CSS", "GSAP"],
  },
  {
    img: "/work/Imoodini.webp",
    title: "Imoodini",
    subtitle: "Custom SaaS Landing Page",
    link: "https://imoodini.com/",
    category: "website",
    tags: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion"],
  },
  {
    img: "/work/thesustainablecity-yiti.webp",
    title: "The Sustainable City Yiti",
    subtitle: "Eco-Real Estate Platform",
    link: "https://www.thesustainablecity-yiti.com/",
    category: "website",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Maps API"],
  },
  {
    img: "/work/tsc.webp",
    title: "The Sustainable City",
    subtitle: "Urban Sustainability Platform",
    link: "https://tsc-main.vercel.app/",
    category: "website",
    tags: ["Next.js", "GSAP", "Sass", "ScrollTrigger"],
  },
  {
    img: "/work/Sadara capital.webp",
    title: "Sadara Capital",
    subtitle: "Financial Services Site",
    link: "https://sadaracapital.com/",
    category: "website",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    img: "/work/Emireum.webp",
    title: "Emireum Business",
    subtitle: "Corporate Business Portal",
    link: "https://www.emireumbiz.com/",
    category: "website",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    img: "/work/emireumprop.webp",
    title: "Emireum Properties",
    subtitle: "Real Estate Listings & Search",
    link: "https://www.emireumproperties.com/en",
    category: "website",
    tags: ["React", "Next.js", "Tailwind CSS", "Search Engine"],
  },
  {
    img: "/work/richylife.webp",
    title: "Richy Life Club",
    subtitle: "Premium Membership System & Portal",
    link: "https://richylifeclub.com/",
    category: "app",
    tags: ["Next.js", "Node.js", "Express", "PostgreSQL", "Redis", "FCM Push", "PayPal API"],
  },
  {
    img: "/work/citysolar.png",
    title: "City Solar",
    subtitle: "Renewable Energy Platform",
    link: "https://www.citysolar.ae/",
    category: "website",
    tags: ["Next.js", "Tailwind CSS", "Sass"],
  },
  {
    img: "/work/nanis.png",
    title: "Nanis AI",
    subtitle: "AI-Powered Automation App",
    link: "https://nanisweb.vercel.app/",
    category: "app",
    tags: ["Next.js", "AI Integration", "Tailwind CSS", "WebSockets"],
  },
  {
    img: "/work/lena.png",
    title: "Leena Lashes",
    subtitle: "Lashes E-commerce Website",
    link: "https://leenalashes.com/",
    category: "website",
    tags: ["shopify"],
  },
];

const WorkPage = () => {
  const [layoutMode, setLayoutMode] = useState("list"); // 'grid' | 'list'
  const [filter, setFilter] = useState("all"); // 'all' | 'website' | 'app'
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const previewRef = useRef(null);
  const containerRef = useRef(null);

  // Filter projects (reversed order matching the original)
  const filteredWorks = [...works]
    .reverse()
    .filter((work) => filter === "all" || work.category === filter);

  // Quick cursor tracking for list view image preview
  useEffect(() => {
    if (layoutMode !== "list") return;

    const preview = previewRef.current;
    if (!preview) return;

    const xTo = gsap.quickTo(preview, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(preview, "y", { duration: 0.4, ease: "power3.out" });

    const handleMouseMove = (e) => {
      xTo(e.clientX + 30);
      yTo(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [layoutMode]);

  // Handle entry animation for the projects container
  useEffect(() => {
    gsap.fromTo(
      ".project-card, .project-row",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" }
    );
  }, [filter, layoutMode]);

  const handleListMouseEnter = (idx) => {
    setHoveredIdx(idx);
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleListMouseLeave = () => {
    setHoveredIdx(null);
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power3.in",
    });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#121212] text-white pt-32 pb-24 px-5 md:px-[70px] select-none">

      {/* Floating Preview Container for List View */}
      {layoutMode === "list" && (
        <div
          ref={previewRef}
          className="hidden md:block fixed top-0 left-0 w-[350px] h-[350px] pointer-events-none z-50 overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] opacity-0 transform scale-75"
          style={{ transformOrigin: "center center" }}
        >
          {hoveredIdx !== null && (
            <div className="relative w-full h-full">
              <Image
                src={filteredWorks[hoveredIdx]?.img}
                alt="preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          )}
        </div>
      )}

      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <span className="text-xs uppercase tracking-widest font-mono text-gray-500">Selected Works</span>
            <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs font-mono">{filteredWorks.length} Projects</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
            Showcase
          </h1>
          <p className="max-w-xl text-sm md:text-base font-light text-gray-400 leading-relaxed uppercase">
            A curated portfolio of high-performing web applications, interactive sites, and custom software systems designed to solve real business challenges.
          </p>
        </div>

        {/* Controls: Filter and Layout View Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Filters */}
          <div className="flex bg-neutral-900 border border-white/5 p-1 rounded-full text-xs font-mono">
            {["all", "website", "app"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full uppercase transition duration-300 ${filter === cat
                  ? "bg-white text-black font-semibold shadow"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                {cat === "all" ? "All" : cat === "website" ? "Websites" : "Web Apps"}
              </button>
            ))}
          </div>

          {/* Layout Toggle */}
          <div className="flex bg-neutral-900 border border-white/5 p-1 rounded-full text-xs font-mono">
            <button
              onClick={() => setLayoutMode("grid")}
              className={`p-2 rounded-full transition duration-300 ${layoutMode === "grid"
                ? "bg-white text-black shadow"
                : "text-gray-400 hover:text-white"
                }`}
              title="Grid View"
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setLayoutMode("list")}
              className={`p-2 rounded-full transition duration-300 ${layoutMode === "list"
                ? "bg-white text-black shadow"
                : "text-gray-400 hover:text-white"
                }`}
              title="List View"
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Works Grid or List */}
      <div className="w-full max-w-7xl mx-auto">
        {layoutMode === "grid" ? (
          /* Grid View Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {filteredWorks.map((work, idx) => (
              <div
                key={idx}
                className="project-card group flex flex-col cursor-pointer"
              >
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[4/3] w-full rounded-3xl overflow-hidden mb-6 bg-neutral-900 border border-white/5"
                >
                  <Image
                    src={work.img}
                    alt={work.title}
                    fill
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Dark Vignette & Hover Glassmorphic Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

                  {/* Interactive Button Float */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <ArrowUpRight size={20} />
                  </div>
                </a>

                {/* Card Details */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-gray-500 uppercase">{work.subtitle}</span>
                    </div>
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-2xl font-bold hover:text-gray-300 transition duration-300 uppercase leading-none"
                    >
                      {work.title}
                    </a>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {work.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-white/5 border border-white/10 text-gray-400 px-3 py-1 rounded-full text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View Layout */
          <div className="flex flex-col border-t border-white/10 divide-y divide-white/10">
            {filteredWorks.map((work, idx) => (
              <div
                key={idx}
                className="project-row group relative py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer transition-colors duration-300"
                onMouseEnter={() => handleListMouseEnter(idx)}
                onMouseLeave={handleListMouseLeave}
              >
                {/* Background Hover Highlight */}
                <div className="absolute inset-0 -mx-5 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>

                {/* Title & Subtitle */}
                <div className="relative flex items-baseline gap-6 md:w-1/2">
                  <span className="text-xs font-mono text-gray-600">
                    {String(filteredWorks.length - idx).padStart(2, "0")}.
                  </span>
                  <div>
                    <h2 className="text-3xl sm:text-5xl font-bold uppercase transition-all duration-300 group-hover:pl-4">
                      {work.title}
                    </h2>
                    <span className="text-xs font-mono text-gray-500 uppercase mt-2 block md:hidden">
                      {work.subtitle}
                    </span>
                  </div>
                </div>

                {/* Tags Section */}
                <div className="relative flex flex-wrap gap-2 md:w-1/3">
                  {work.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-white/5 border border-white/10 text-gray-400 px-2 py-0.5 rounded text-[10px] font-mono uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtitle & Launch Button */}
                <div className="relative flex items-center justify-between md:justify-end gap-6 md:w-1/6">
                  <span className="text-xs font-mono text-gray-500 uppercase hidden md:block">
                    {work.subtitle}
                  </span>
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 animate-none"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkPage;
