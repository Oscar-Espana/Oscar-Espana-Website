import Image from "next/image";
import React from "react";

const Skill = ({ image, skill }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-3 ">
      <Image width={48} height={48} src={image} alt={skill} layout="fixed" />
      <p className="text-xl text-white font-medium">{skill}</p>
    </div>
  );
};

export default Skill;
