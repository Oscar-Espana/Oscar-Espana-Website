import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const presentation = `Hola, mi nombre es Oscar España 👋. Soy desarrollador frontend con
experiencia en diseño y desarrollo de aplicaciones web y móviles. Me
encanta aprender nuevas tecnologías, emplear tendencias de diseño y me
enfoco en entregar un producto de calidad de acuerdo a las necesidades
del usuario`;

const Presentation = () => {
  const descriptionRef = useRef(null);

  useEffect(() => {
    const services = gsap.utils.selector(descriptionRef);

    gsap.set(services("span"), {
      opacity: 0.5,
    });

    document.fonts.ready.then(function () {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: descriptionRef.current,
          scrub: 1,
          start: "top 75%",
          end: "bottom+=75% 75%",
        },
      });

      timeline.to(
        descriptionRef.current,
        {
          opacity: 1,
          ease: "power2",
        },
        0
      );
      timeline.to(
        services("span"),
        {
          color: "white",
          opacity: 1,
          stagger: 0.1,
          ease: "power2",
        },
        0
      );
    });
  }, []);

  return (
    <section
      id="presentacion"
      className="relative bg-black pt-16 md:pt-24 pb-20 md:pb-36 text-white"
    >
      <div className="absolute z-10 rounded-full elipse1"></div>
      <div className="relative container z-20">
        <p
          ref={descriptionRef}
          className="text-[24px] md:text-[32px] font-medium -translate-y-8 opacity-0 text-[#86868b]"
        >
          {presentation.split(" ").map((item, index) => {
            return <span key={index}>{item} </span>;
          })}
        </p>
      </div>
    </section>
  );
};

export default Presentation;
