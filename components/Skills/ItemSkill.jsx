import React from "react";

const ItemSkill = ({ skill }) => {
  return (
    <p className="boxSkill absolute max-w-[420px] text-4xl lg:text-5xl font-bold text-white text-center pr-36 md:pr-40">
      {skill}
    </p>
  );
};

export default ItemSkill;
