import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ItemSkill from "./ItemSkill";
import { useWindowResize } from "../../hooks/useWindowsResize";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const size = useWindowResize();

  const getClientWidth = (index) => {
    const skillsAux = document.querySelectorAll("#skills .boxSkill");
    const widthAux = skillsAux[index].clientWidth;
    return widthAux;
  };

  useEffect(() => {
    const skills = document.querySelectorAll("#skills .boxSkill");

    const getTotalWidth = () => {
      const boxWidth = skills[0].clientWidth;
      const totalElements = skills.length;
      const totalWidth = boxWidth * totalElements;
      return totalWidth;
    };
    var mod = gsap.utils.wrap(0, getTotalWidth());

    function marquee(which, time) {
      gsap.set(which, {
        x: function (i) {
          return i * getClientWidth(i);
        },
      });
      var action = gsap.timeline().to(which, {
        x: () => {
          return `-=${getTotalWidth()}`;
        },
        modifiers: {
          x: (x) => {
            return mod(parseFloat(x)) + "px";
          },
        },
        duration: time,
        ease: "none",
        repeat: -1,
      });
      return action;
    }

    gsap.timeline().add(marquee(skills, 20), 1);
  }, [size.width]);
  return (
    <section id="skills" className="animated-gradient overflow-hidden">
      <div className="relative w-[150%] h-36 md:h-40 lg:h-44 -left-[200px] lg:-left-[500px] flex items-center ">
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
