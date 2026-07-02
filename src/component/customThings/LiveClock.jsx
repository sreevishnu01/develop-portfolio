"use client";
import React, { useState, useEffect } from "react";

function LiveClock() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(null);

  useEffect(() => {
    setMounted(true);
    setTime(new Date());

    const tick = () => {
      setTime(new Date());
    };

    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted || !time) {
    return (
      <div className="flex justify-between">
        <span>--:-- --</span>
      </div>
    );
  }

  // Custom time formatting
  const hours = time.getHours() % 12 || 12;
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const ampm = time.getHours() >= 12 ? "PM" : "AM";

  const formattedTime = `${hours}:${minutes} ${ampm} `;

  return (
    <>
      <div className="flex justify-between">
        <span>{formattedTime}</span>
      </div>
    </>
  );
}

export default LiveClock;
