import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useWindowResize } from "../../hooks/useWindowsResize";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const { width, height } = useWindowResize();

  const skillsSectionRef = useRef(null);
  const skillsRef = useRef(null);
  const welcomeRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [width, height]);

  useEffect(() => {
    console.log("response---");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsSectionRef.current,
        pin: true,
        pinSpacing: false,
        scrub: 1.5,
        start: "top top",
        end: () => "+=100%",
        anticipatePin: 1,
        markers: true,
      },
    });
    tl.to(skillsRef.current, {
      x: () => {
        const skillWidth = skillsRef.current.clientWidth;
        const sectionWidth = skillsSectionRef.current.clientWidth;
        const response = skillWidth * 1.05 - sectionWidth;
        return -response;
      },
      ease: "back.inOut(1.7)",
    });
    tl.scrollTrigger.refresh();
  }, [width]);

  useEffect(() => {
    const tlWelcome = gsap.timeline({
      scrollTrigger: {
        trigger: welcomeRef.current,
        pin: true,
        pinSpacing: false,
        scrub: 1.5,
        start: () => `top +=${skillsSectionRef.current.clientHeight}`,
        end: () => "+=100%",
        anticipatePin: 1,
      },
    });

    tlWelcome.to(welcomeRef.current, {
      backgroundColor: "blue",
    });
    tlWelcome.scrollTrigger.refresh();
  }, []);

  return (
    <>
      <section
        id="skills"
        ref={skillsSectionRef}
        className="bg-gradient-to-r from-primary via-[#DC0CAE] to-[#BD4EF4] overflow-hidden"
      >
        <div
          ref={skillsRef}
          className=" py-12 md:py-16 relative flex min-w-full w-max justify-center"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold ml-4 mr-12 md:ml-20 md:mr-40 text-white">
            CREATIVO
          </p>
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold mr-12 md:mr-40 text-white">
            EFICIENTE
          </p>
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold mr-12 md:mr-40 text-white">
            INNOVADOR
          </p>
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold mr-12 md:mr-40 text-white">
            TRABAJO EN EQUIPO
          </p>
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold mr-4 md:mr-20 text-white">
            LIDERAZGO
          </p>
        </div>
      </section>
      <section
        ref={welcomeRef}
        id="welcome"
        className="h-96 w-full bg-black text-white flex justify-center items-center"
      >
        <h2 className="text-4xl">Welcome</h2>
      </section>
    </>
  );
};

export default Skills;
