import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ItemSkill from "./ItemSkill";
import { useWindowResize } from "../../hooks/useWindowsResize";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const size = useWindowResize();

  useEffect(() => {
    let totalWidth = 0;
    const words = gsap.utils.toArray("#skills .boxSkill");
    words.map((val, key, arr) => {
      if (key === 0) {
        totalWidth = words[arr.length - 1].clientWidth;
      } else if (val.previousElementSibling) {
        let width = val.previousElementSibling.clientWidth;
        totalWidth = totalWidth + width;
      }
      gsap.set(val, {
        x: totalWidth,
      });
    });

    const tl = gsap.timeline();
    tl.to("#skills .boxSkill", {
      duration: 25,
      ease: "none",
      x: `+=${totalWidth}`,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
      repeat: -1,
    });
  }, []);
  return (
    <section id="skills" className="animated-gradient overflow-hidden">
      <div className="relative -left-[350px] h-44 lg:h-48 flex items-center">
        <ItemSkill skill="CREATIVO" />
        <ItemSkill skill="EFICIENTE" />
        <ItemSkill skill="TRABAJO EN EQUIPO" />
        <ItemSkill skill="INNOVADOR" />
        <ItemSkill skill="LIDERAZGO" />
      </div>
    </section>
  );
};

export default Skills;
