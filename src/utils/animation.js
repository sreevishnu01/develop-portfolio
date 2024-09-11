import gsap from "gsap";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFoure = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFoure) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFoure], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFoure], {
      yPercent: 100,
      stagger: 0.2,
    });
  }
};

export const animatePageOut = (href, router) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFoure = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFoure) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFoure], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFoure], {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};

export const sidebarMenuSticky = () => {
  let tl = gsap.timeline({ paused: true });

  // Sidebar slide-in animation
  tl.set(".sidenav", {
    xPercent: 100,
  }).to(
    ".sidenav",
    {
      xPercent: 0,
      duration: 1,
      ease: "sine.in",
    },
    0
  ); // This '0' ensures this animation starts at the same time as the next one

  // Path morphing animation
  tl.to(
    "#start",
    {
      attr: {
        d: "M100 0 L200 0 L200 1005 L100 1005 Q-100 502.5 100 0",
        d: "M100 0 L200 0 L200 1005 L100 1005 Q100 502.5 100 0",
      },
      duration: 1,
      ease: "sine.in",
    },
    0
  ); // '0' here ensures this starts simultaneously with the sidebar animation

  tl.restart();
};

export const sidebarMenuStickyOut = () => {
  let tl = gsap.timeline({ paused: true });

  tl.set(".sidenav", {
    xPercent: 0,
  }).to(
    ".sidenav",
    {
      xPercent: 100,
      duration: 1,
      ease: "sine.in",
    },
    0
  );

  tl.to(
    "#start",
    {
      attr: {
        d: "M100 0 L200 0 L200 1005 L100 1005 Q100 502.5 100 0",
        d: "M100 0 L200 0 L200 1005 L100 1005 Q-100 502.5 100 0",
      },
      // opacity: 0,
      duration: 1,
      ease: "sine.in",
    },
    0
  );

  tl.restart();
  // tl.reversed();
};
