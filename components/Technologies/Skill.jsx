import React from "react";
import Image from "next/image";

const Skill = ({ image, skill }) => {
  return (
    <div className="flex gap-3 justify-center sm:justify-start items-center">
      <Image width={48} height={48} src={image} alt={skill} />
      <p className="hidden sm:block text-xl text-white font-medium">{skill}</p>
    </div>
  );
};

export default Skill;
