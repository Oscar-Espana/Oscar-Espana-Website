import React from "react";
import { skills } from "../../constants/skill";
import Skill from "./Skill";

const Technologies = () => {
  return (
    <section className="bg-black py-24 md:py-28 lg:py-36">
      <div className="container">
        <h2 className="text-white mb-16 md:mb-28">Mis tecnologías</h2>
        <div className="columns-2 md:columns-3 lg:columns-4 space-y-10">
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill.title} image={skill.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
