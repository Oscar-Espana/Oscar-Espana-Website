import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  return (
    <section id="skills" className="animated-gradient overflow-hidden">
      <div className=" py-12 md:py-16 relative flex min-w-full w-max justify-center">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold ml-8 mr-12 md:ml-20 md:mr-40 text-white">
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
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold mr-8 md:mr-20 text-white">
          LIDERAZGO
        </p>
      </div>
    </section>
  );
};

export default Skills;
