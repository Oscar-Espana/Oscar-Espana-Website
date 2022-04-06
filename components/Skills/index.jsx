import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skills1Ref = useRef(null);
  const skillsSectionRef = useRef(null);

  useEffect(() => {
    gsap.to(skills1Ref.current, {
      x: `-${
        skills1Ref.current.clientWidth -
        skillsSectionRef.current.clientWidth +
        100
      }`,
      duration: 5,
      ease: "back.inOut(1.7)",
      scrollTrigger: {
        start: "top bottom-=225",
        end: `bottom top+=100`,
        trigger: skillsSectionRef.current,
        pin: "#Welcome",
        pinSpacing: false,
        scrub: 2.5,
      },
    });
  }, []);

  return (
    <section
      id="skills"
      ref={skillsSectionRef}
      className="bg-gradient-to-r from-primary via-[#DC0CAE] to-[#BD4EF4] overflow-hidden"
    >
      <div
        ref={skills1Ref}
        className=" pt-20 pb-16 relative flex min-w-full w-max justify-center"
      >
        <p className="text-5xl font-bold ml-20 mr-40 text-white">CREATIVO</p>
        <p className="text-5xl font-bold mr-40 text-white">EFICIENTE</p>
        <p className="text-5xl font-bold mr-20 text-white">INNOVADOR</p>
        <p className="text-5xl font-bold ml-20 mr-40 text-white">
          TRABAJO EN EQUIPO
        </p>
        <p className="text-5xl font-bold mr-20 text-white">LIDERAZGO</p>
      </div>
    </section>
  );
};

export default Skills;
