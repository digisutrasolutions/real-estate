"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 left-6 z-50
        h-12 w-12 rounded-full
        border border-[#f8b57f]/55 bg-gradient-to-b from-[#f66b05] to-[#d95a04] text-white
        flex items-center justify-center
        shadow-[0_10px_24px_rgba(100,48,14,0.3)] hover:from-[#e76304] hover:to-[#c95104]
        transition-all duration-300
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
      `}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
