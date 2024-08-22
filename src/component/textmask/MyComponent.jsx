"use client";
import React, { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    const hero = document.querySelector("[data-hero]");

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      hero.style.setProperty("--x", `${x}%`);
      hero.style.setProperty("--y", `${y}%`);
    });
  }, []);
  return (
    <div>
      <div class="wrapper">
        <div class="hero">
          <h1 class="hero__heading">Welcome to my website</h1>
        </div>

        <div class="hero hero--secondary" aria-hidden="true" data-hero>
          <p class="hero__heading">Welcome is dead my website</p>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
