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
