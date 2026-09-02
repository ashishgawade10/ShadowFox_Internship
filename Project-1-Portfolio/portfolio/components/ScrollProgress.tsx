"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const amount =
        height > 0 ? (window.scrollY / height) * 100 : 0;

      setProgress(amount);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100]">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}