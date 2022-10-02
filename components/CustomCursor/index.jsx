import React, { useEffect } from "react";
import gsap, { TweenLite } from "gsap";

const CustomCursor = () => {
  function moveCircle(e) {
    TweenLite.to("#cursor", 0.35, {
      x: e.clientX,
      y: e.clientY,
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", moveCircle);
  }, []);

  return (
    <div
      id="cursor"
      className="fixed hidden md:block bg-primary w-4 h-4 -left-4 -top-2 rounded-full z-[100]"
    ></div>
  );
};

export default CustomCursor;
