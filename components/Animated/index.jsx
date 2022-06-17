import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Animated = () => {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const figureRed = useRef(null);

  // useEffect(() => {
  //circle figure to square figure animation GSAP
  // let tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: containerRef.current,
  //     start: "top top",
  //     end: "bottom top",
  //     markers: true,
  //     pin: "#Welcome",
  //     pinSpacing: false,
  //     scrub: 1,
  //   },
  // });
  // tl.fromTo(
  //   figureRed.current,
  //   {
  //     width: "13rem",
  //     height: "13rem",
  //     borderRadius: "50%",
  //     duration: 1,
  //   },
  //   {
  //     width: "100%",
  //     height: "100%",
  //     borderRadius: "100%",
  //     duration: 1,
  //   }
  // );
  // }, []);

  return (
    <section
      id="animated"
      ref={containerRef}
      className="pt-80 pb-80 bg-darkGray flex items-center justify-center"
    >
      <div ref={figureRed} className="w-52 h-52 rounded-full bg-primary"></div>
    </section>
  );
};

export default Animated;
